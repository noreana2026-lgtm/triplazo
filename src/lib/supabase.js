import { createClient } from '@supabase/supabase-js';

// URL y clave pública: son públicas por diseño; la seguridad va por RLS y funciones.
export const SUPABASE_URL = 'https://gegsauzfwvfhzsemtszn.supabase.co';
const SUPABASE_KEY = 'sb_publishable_buJTOsgFc-y3hKYnqgxWkg_oO8qiuvr';

export const sb = createClient(SUPABASE_URL, SUPABASE_KEY, {
  auth: { persistSession: true, detectSessionInUrl: true, flowType: 'pkce' },
  realtime: { params: { eventsPerSecond: 20 } },
});

const ALPHA = 'ABCDEFGHJKLMNPQRSTUVWXYZ';
const code4 = () => Array.from({ length: 4 }, () => ALPHA[Math.floor(Math.random() * ALPHA.length)]).join('');

export async function createRoom(hostId, state) {
  for (let i = 0; i < 6; i++) {
    const code = code4();
    const { data, error } = await sb.rpc('triplazo_create_room', { p_code: code, p_host: hostId, p_state: state });
    if (error) throw error;
    if (data) return code;
  }
  throw new Error('No se pudo crear la sala');
}

export async function getRoom(code) {
  const { data, error } = await sb.from('triplazo_rooms').select('code,version,state').eq('code', code.toUpperCase()).maybeSingle();
  if (error) throw error;
  return data;
}

export async function updateRoom(code, version, state) {
  const { data, error } = await sb.rpc('triplazo_update_room', { p_code: code, p_version: version, p_state: state });
  if (error) throw error;
  return data;
}

export function subscribeRoom(code, cb) {
  const ch = sb
    .channel('triplazo-' + code)
    .on('postgres_changes', { event: 'UPDATE', schema: 'public', table: 'triplazo_rooms', filter: `code=eq.${code}` }, (p) => cb(p.new))
    .subscribe();
  return () => { sb.removeChannel(ch); };
}

export async function signInGoogle() {
  const redirectTo = window.location.origin + window.location.pathname + window.location.search;
  return sb.auth.signInWithOAuth({ provider: 'google', options: { redirectTo } });
}
export const signOut = () => sb.auth.signOut();

export async function ensureProfile(user) {
  const name = user.user_metadata?.full_name || user.user_metadata?.name || user.email?.split('@')[0] || 'Jugador';
  const avatar = user.user_metadata?.avatar_url || null;
  const { data } = await sb.from('triplazo_profiles').select('*').eq('id', user.id).maybeSingle();
  if (data) return data;
  const row = { id: user.id, name, avatar_url: avatar };
  await sb.from('triplazo_profiles').insert(row);
  return { ...row, games: 0, wins: 0 };
}

export async function recordResult(win) {
  try { await sb.rpc('triplazo_record_result', { p_win: win }); } catch { /* best effort */ }
}
