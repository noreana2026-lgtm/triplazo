// Banco verificado. La primera opción es siempre la correcta.
const Q = [
{
"id": 0,
"c": "nba",
"d": 1,
"q": "¿Contra qué equipo anotó Kobe Bryant sus 81 puntos en enero de 2006?",
"o": [
"Toronto Raptors",
"Phoenix Suns",
"Sacramento Kings",
"Dallas Mavericks"
],
"e": "Fue el 22 de enero de 2006: los Lakers ganaron 122-104. Es la segunda mayor anotación de la historia tras los 100 de Wilt."
},
{
"id": 1,
"c": "nba",
"d": 1,
"q": "¿Qué jugador sirvió de modelo para la silueta del logo de la NBA?",
"o": [
"Jerry West",
"Elgin Baylor",
"Oscar Robertson",
"Bob Cousy"
],
"e": "El diseñador Alan Siegel se basó en 1969 en una foto de West, a quien Chick Hearn apodó 'Mr. Clutch'."
},
{
"id": 2,
"c": "nba",
"d": 1,
"q": "¿Qué película inspiró en 1994 el nombre de los Toronto Raptors?",
"o": [
"Parque Jurásico",
"Godzilla",
"King Kong",
"En busca del valle encantado"
],
"e": "El nombre salió de un concurso popular; entre los finalistas también estaban Beavers, Dragons, Hogs o T-Rex."
},
{
"id": 3,
"c": "nba",
"d": 1,
"q": "¿Qué franquicia se convirtió en los Oklahoma City Thunder en 2008?",
"o": [
"Seattle SuperSonics",
"Vancouver Grizzlies",
"New Orleans Hornets",
"Charlotte Bobcats"
],
"e": "El grupo de Clay Bennett, que había comprado el equipo a Howard Schultz (Starbucks), lo trasladó en julio de 2008."
},
{
"id": 4,
"c": "nba",
"d": 2,
"q": "¿Qué porcentaje de tiros libres firmó José Calderón en 2008-09, récord NBA de una temporada?",
"o": [
"98,1 %",
"95,8 %",
"96,7 %",
"99,3 %"
],
"e": "Metió 151 de 154 con Toronto. Solo falló tres tiros libres en toda la temporada."
},
{
"id": 5,
"c": "nba",
"d": 2,
"q": "¿En qué ciudad nacieron los Jazz antes de mudarse a Utah en 1979?",
"o": [
"Nueva Orleans",
"Kansas City",
"Memphis",
"Chicago"
],
"e": "Mantuvieron el nombre en Salt Lake City porque no hubo tiempo de aprobar un cambio antes de la temporada 1979-80."
},
{
"id": 6,
"c": "nba",
"d": 2,
"q": "¿Quién fue el primer europeo en ganar el premio Rookie del Año de la NBA?",
"o": [
"Pau Gasol",
"Dirk Nowitzki",
"Drazen Petrovic",
"Toni Kukoc"
],
"e": "Pau lo ganó en 2001-02 con los Memphis Grizzlies, tras ser elegido n.º 3 del draft por Atlanta y traspasado."
},
{
"id": 7,
"c": "nba",
"d": 2,
"q": "En 'Aterriza como puedas' (1980), Kareem Abdul-Jabbar interpreta a un copiloto llamado...",
"o": [
"Roger Murdock",
"Ted Striker",
"Steve McCroskey",
"Clarence Oveur"
],
"e": "El chiste es que todos le confunden con Kareem y él lo niega... hasta que un niño le critica en defensa."
},
{
"id": 8,
"c": "nba",
"d": 2,
"q": "En la película 'Garra' (Hustle, 2022), ¿cómo se llama el personaje de Juancho Hernangómez?",
"o": [
"Bo Cruz",
"Kermit Wilts",
"Stanley Sugerman",
"Diego Ruiz"
],
"e": "Sugerman, el ojeador que interpreta Adam Sandler, lo descubre en un partido callejero en España."
},
{
"id": 9,
"c": "nba",
"d": 2,
"q": "¿Quién fue el primer entrenador principal negro de la NBA, en 1966?",
"o": [
"Bill Russell",
"Lenny Wilkens",
"Al Attles",
"K.C. Jones"
],
"e": "Russell fue jugador-entrenador de los Celtics y aún ganó dos anillos más en ese doble papel."
},
{
"id": 10,
"c": "nba",
"d": 3,
"q": "¿Quién logró el primer cuádruple-doble oficial de la NBA, en 1974?",
"o": [
"Nate Thurmond",
"Wilt Chamberlain",
"Kareem Abdul-Jabbar",
"Bill Walton"
],
"e": "En su debut con los Bulls: 22 puntos, 14 rebotes, 13 asistencias y 12 tapones ante Atlanta. Los tapones se contaban desde ese año."
},
{
"id": 11,
"c": "nba",
"d": 3,
"q": "¿Quién fue el primer n.º 1 del draft de la NBA nacido fuera de EE. UU.?",
"o": [
"Mychal Thompson",
"Hakeem Olajuwon",
"Patrick Ewing",
"Yao Ming"
],
"e": "El bahameño fue elegido por Portland en 1978. Es el padre de Klay Thompson."
},
{
"id": 12,
"c": "nba",
"d": 3,
"q": "¿Qué equipo eligió realmente a Dirk Nowitzki en el draft de 1998?",
"o": [
"Milwaukee Bucks",
"Phoenix Suns",
"Boston Celtics",
"Toronto Raptors"
],
"e": "Los Bucks lo tomaron con el n.º 9 y lo cambiaron a Dallas por Robert Traylor. Ese mismo día Dallas consiguió a Steve Nash."
},
{
"id": 13,
"c": "nba",
"d": 3,
"q": "¿Qué equipo drafteó a Fernando Martín en 1985, antes de que jugara en Portland?",
"o": [
"New Jersey Nets",
"Boston Celtics",
"Seattle SuperSonics",
"Atlanta Hawks"
],
"e": "Lo eligieron en el puesto 38, pero se quedó un año más en el Madrid. Debutó con los Blazers en 1986-87: primer español en la NBA."
},
{
"id": 14,
"c": "nba",
"d": 3,
"q": "¿Quién tiene el récord de asistencias en un partido de la NBA, con 30 en 1990?",
"o": [
"Scott Skiles",
"John Stockton",
"Magic Johnson",
"Kevin Porter"
],
"e": "Skiles las repartió con Orlando ante Denver (155-116), superando las 29 de Kevin Porter."
},
{
"id": 15,
"c": "nba",
"d": 3,
"q": "¿Qué jugador se retiró con más tapones (2.086) que puntos (1.599) en la NBA?",
"o": [
"Manute Bol",
"Mark Eaton",
"Shawn Bradley",
"Gheorghe Muresan"
],
"e": "Es el único caso de la historia. El sudanés medía unos 2,31 m y fue elegido por los Bullets en 1985."
},
{
"id": 16,
"c": "nba",
"d": 3,
"q": "¿Qué músico apodó 'Chocolate Thunder' a Darryl Dawkins?",
"o": [
"Stevie Wonder",
"James Brown",
"Marvin Gaye",
"Ray Charles"
],
"e": "Dawkins rompió dos tableros en 1979 y bautizaba sus mates con nombres como 'The Go-Rilla' o 'Rim Wrecker'."
},
{
"id": 17,
"c": "nba",
"d": 4,
"q": "El primer partido de la historia de la BAA (hoy NBA), en 1946, enfrentó a los Knicks con...",
"o": [
"Toronto Huskies",
"Boston Celtics",
"Chicago Stags",
"Providence Steamrollers"
],
"e": "Se jugó el 1 de noviembre de 1946 en el Maple Leaf Gardens de Toronto. Ganaron los Knicks 68-66."
},
{
"id": 18,
"c": "nba",
"d": 4,
"q": "¿Qué propietario impulsó el reloj de posesión de 24 segundos en 1954?",
"o": [
"Danny Biasone",
"Red Auerbach",
"Ned Irish",
"Eddie Gottlieb"
],
"e": "El dueño de los Syracuse Nationals (hoy 76ers) lo ideó con su director general Leo Ferris para acabar con los partidos congelados."
},
{
"id": 19,
"c": "nba",
"d": 4,
"q": "¿Cuál es el marcador del partido con menos puntos de la historia de la NBA (1950)?",
"o": [
"19-18",
"24-22",
"31-29",
"15-14"
],
"e": "Los Fort Wayne Pistons ganaron a los Minneapolis Lakers el 22-11-1950. Aquella pesadilla aceleró la llegada del reloj de posesión."
},
{
"id": 20,
"c": "nba",
"d": 4,
"q": "¿Quién fue el primer jugador no blanco de la BAA/NBA, con los Knicks en 1947?",
"o": [
"Wataru Misaka",
"Earl Lloyd",
"Chuck Cooper",
"Nat Clifton"
],
"e": "De origen japonés, solo jugó tres partidos. Lloyd, Cooper y Clifton fueron los primeros jugadores negros, en 1950."
},
{
"id": 21,
"c": "nba",
"d": 4,
"q": "¿De qué equipo de la NBL procede la franquicia que en 1947 se convirtió en los Lakers?",
"o": [
"Detroit Gems",
"Detroit Falcons",
"Toledo Jeeps",
"Chicago Gears"
],
"e": "Los Gems ganaron 4 de 44 partidos y se vendieron por 15.000 dólares. En Minneapolis tomaron el nombre por la 'tierra de los 10.000 lagos'."
},
{
"id": 22,
"c": "basket",
"d": 1,
"q": "¿A qué selección ganó España la final del Mundial de 2019?",
"o": [
"Argentina",
"Francia",
"Serbia",
"Estados Unidos"
],
"e": "España ganó 95-75 en Pekín y Ricky Rubio fue elegido MVP del torneo."
},
{
"id": 23,
"c": "basket",
"d": 1,
"q": "¿En qué año ganó España su primer Eurobasket masculino?",
"o": [
"2009",
"2003",
"1999",
"1983"
],
"e": "Fue en Polonia, con final en Katowice ante Serbia (85-63). Antes había acumulado varias platas, como en 1983, 1999 y 2003."
},
{
"id": 24,
"c": "basket",
"d": 1,
"q": "¿Quién fue el MVP de la Final Four de 2018 que dio al Real Madrid su Décima?",
"o": [
"Luka Dončić",
"Sergio Llull",
"Walter Tavares",
"Facundo Campazzo"
],
"e": "El Madrid ganó a Fenerbahçe en Belgrado. Dončić tenía 19 años y semanas después fue n.º 3 del draft."
},
{
"id": 25,
"c": "basket",
"d": 1,
"q": "En baloncesto 3x3, ¿cuántos puntos hacen falta para ganar el partido antes del final?",
"o": [
"21",
"11",
"15",
"25"
],
"e": "Si nadie llega a 21 en los 10 minutos, gana quien vaya por delante. Las canastas valen 1 punto y las de fuera del arco, 2."
},
{
"id": 26,
"c": "basket",
"d": 2,
"q": "¿A qué selección ganó España la final del Mundial de 2006 en Saitama?",
"o": [
"Grecia",
"Argentina",
"Estados Unidos",
"Lituania"
],
"e": "Ganó 70-47. Pau Gasol fue MVP del torneo pese a perderse la final por la lesión que sufrió en semifinales."
},
{
"id": 27,
"c": "basket",
"d": 2,
"q": "¿Con qué edad debutó Ricky Rubio en la ACB, récord de precocidad de la liga?",
"o": [
"14 años",
"16 años",
"15 años y medio",
"13 años"
],
"e": "Debutó con el Joventut en octubre de 2005, con 14 años y 11 meses. En Pekín 2008 jugó la final olímpica con 17."
},
{
"id": 28,
"c": "basket",
"d": 2,
"q": "¿A quién entregó Epi la antorcha olímpica en la ceremonia inaugural de Barcelona 92?",
"o": [
"Antonio Rebollo",
"Fermín Cacho",
"Miguel Induráin",
"Arantxa Sánchez Vicario"
],
"e": "Epi fue el último relevista y Rebollo, arquero paralímpico, encendió el pebetero con una flecha."
},
{
"id": 29,
"c": "basket",
"d": 2,
"q": "¿Quién fue el único jugador universitario del Dream Team de 1992?",
"o": [
"Christian Laettner",
"Shaquille O'Neal",
"Grant Hill",
"Bobby Hurley"
],
"e": "Ese mismo año Laettner metió 'The Shot', la canasta en la prórroga con la que Duke eliminó a Kentucky."
},
{
"id": 30,
"c": "basket",
"d": 2,
"q": "¿Quién hizo el primer mate de la historia de la WNBA, en 2002?",
"o": [
"Lisa Leslie",
"Sheryl Swoopes",
"Lauren Jackson",
"Cynthia Cooper"
],
"e": "Lo hizo con Los Angeles Sparks el 30 de julio de 2002. Leslie ganó además cuatro oros olímpicos."
},
{
"id": 31,
"c": "basket",
"d": 2,
"q": "¿Cómo se llamaba la Copa del Rey de baloncesto durante el franquismo?",
"o": [
"Copa del Generalísimo",
"Copa del Caudillo",
"Copa de la Victoria",
"Copa Nacional"
],
"e": "Nació en 1933 como Copa de España y en 1977 pasó a llamarse Copa del Rey."
},
{
"id": 32,
"c": "basket",
"d": 3,
"q": "En la primera final de la Liga ACB (1983-84), un equipo no se presentó al tercer partido. ¿Cuál?",
"o": [
"FC Barcelona",
"Real Madrid",
"Joventut",
"CAI Zaragoza"
],
"e": "El Barça protestó por una sanción tras una pelea en el segundo partido y el título fue para el Real Madrid."
},
{
"id": 33,
"c": "basket",
"d": 3,
"q": "¿Quién metió el triple decisivo del Joventut en la final de la Euroliga de 1994?",
"o": [
"Corny Thompson",
"Jordi Villacampa",
"Rafa Jofresa",
"Tomás Jofresa"
],
"e": "La Penya ganó 59-57 a Olympiacos en Tel Aviv, con un joven Željko Obradović en el banquillo."
},
{
"id": 34,
"c": "basket",
"d": 3,
"q": "¿A qué rival ganó el Barça la final de 2003, su primera Euroliga?",
"o": [
"Benetton Treviso",
"Maccabi Tel Aviv",
"CSKA Moscú",
"Montepaschi Siena"
],
"e": "Fue 76-65 en el Palau Sant Jordi, en casa. Dejan Bodiroga fue el MVP de la Final Four."
},
{
"id": 35,
"c": "basket",
"d": 3,
"q": "¿Cuántos puntos anotó Drazen Petrovic al Snaidero Caserta en la final de la Recopa de 1989?",
"o": [
"62",
"48",
"55",
"71"
],
"e": "Con el Real Madrid, el 14 de marzo de 1989. El 'Mozart del baloncesto' dio así la Recopa a los blancos."
},
{
"id": 36,
"c": "basket",
"d": 3,
"q": "¿Qué país ganó el primer oro olímpico masculino de 3x3, en Tokio 2020?",
"o": [
"Letonia",
"Serbia",
"Estados Unidos",
"Países Bajos"
],
"e": "Letonia ganó la final al equipo del Comité Olímpico Ruso en el Aomi Urban Sports Park."
},
{
"id": 37,
"c": "basket",
"d": 3,
"q": "El primer partido de la historia de la WNBA (1997) lo jugaron Los Angeles Sparks y...",
"o": [
"New York Liberty",
"Houston Comets",
"Phoenix Mercury",
"Utah Starzz"
],
"e": "Ganó New York 67-57 el 21 de junio de 1997 en el Great Western Forum de Inglewood."
},
{
"id": 38,
"c": "basket",
"d": 3,
"q": "¿Cuántos anillos de la WNBA ganó Amaya Valdemoro con las Houston Comets?",
"o": [
"3",
"1",
"2",
"4"
],
"e": "Ganó los de 1998, 1999 y 2000. Las Comets se llevaron las cuatro primeras ligas de la WNBA (1997-2000)."
},
{
"id": 39,
"c": "basket",
"d": 4,
"q": "¿En qué ciudad logró España su primera medalla en un Eurobasket, una plata en 1935?",
"o": [
"Ginebra",
"Riga",
"Kaunas",
"Praga"
],
"e": "Fue el primer Eurobasket de la historia y lo ganó Letonia. España no volvería al podio hasta 1973."
},
{
"id": 40,
"c": "basket",
"d": 4,
"q": "La final olímpica de 1936 se jugó al aire libre bajo la lluvia. ¿Cómo quedó el EE. UU.-Canadá?",
"o": [
"19-8",
"45-38",
"32-30",
"27-21"
],
"e": "Se jugó en pistas de tenis de tierra convertidas en barro, donde era casi imposible botar el balón."
},
{
"id": 41,
"c": "basket",
"d": 4,
"q": "¿Quién tiene el récord de puntos en un partido de Liga española, con 65 en 1976?",
"o": [
"Walter Szczerbiak",
"Wayne Brabender",
"Epi",
"Clifford Luyk"
],
"e": "Los anotó con el Real Madrid ante el Breogán (140-48), sin línea de tres. En la era ACB, el récord es de Epi con 54."
},
{
"id": 42,
"c": "basket",
"d": 4,
"q": "¿Cuántas Copas de Europa ganó Pedro Ferrándiz como entrenador del Real Madrid?",
"o": [
"4",
"2",
"6",
"8"
],
"e": "Las de 1965, 1967, 1968 y 1974. Está en el Hall of Fame de Springfield desde 2007."
},
{
"id": 43,
"c": "basket",
"d": 4,
"q": "¿Qué promedio anotador firmó Pete Maravich en su carrera universitaria en LSU?",
"o": [
"44,2 puntos",
"38,1 puntos",
"35,8 puntos",
"40,5 puntos"
],
"e": "Sumó 3.667 puntos en 83 partidos y sin línea de tres. Su récord de puntos totales duró hasta que lo superó Caitlin Clark en 2024."
},
{
"id": 44,
"c": "otros",
"d": 1,
"q": "¿Con quién ganó Rafa Nadal el oro olímpico de dobles en Río 2016?",
"o": [
"Marc López",
"Feliciano López",
"David Ferrer",
"Pablo Carreño"
],
"e": "Ganaron la final a los rumanos Mergea y Tecău. Nadal ya tenía el oro individual de Pekín 2008."
},
{
"id": 45,
"c": "otros",
"d": 1,
"q": "¿Quién ganó la primera Super Bowl, en enero de 1967?",
"o": [
"Green Bay Packers",
"Kansas City Chiefs",
"New York Jets",
"Dallas Cowboys"
],
"e": "Ganaron 35-10 a los Chiefs en el Coliseum de Los Ángeles. Entonces se llamaba 'AFL-NFL World Championship Game'."
},
{
"id": 46,
"c": "otros",
"d": 1,
"q": "¿Por qué decía Ángel Nieto que tenía '12+1' títulos mundiales?",
"o": [
"Por superstición",
"Por un título anulado",
"Por un título compartido",
"Por un empate a puntos"
],
"e": "Ganó 13 (seis en 50cc y siete en 125cc), pero le daba mal fario el número 13."
},
{
"id": 47,
"c": "otros",
"d": 1,
"q": "¿Qué mostró el marcador cuando Nadia Comăneci logró el primer 10 olímpico, en 1976?",
"o": [
"1.00",
"10.0",
"9.99",
"0.00"
],
"e": "Omega no había preparado el marcador para un 10 porque nadie creía posible un ejercicio perfecto."
},
{
"id": 48,
"c": "otros",
"d": 2,
"q": "¿Por qué es amarillo el maillot de líder del Tour de Francia?",
"o": [
"Por el papel del diario L'Auto",
"Por la bandera de Normandía",
"Por un patrocinador",
"Por el sol de julio"
],
"e": "L'Auto, organizador de la carrera, se imprimía en papel amarillo. El maillot se estrenó en 1919 con Eugène Christophe."
},
{
"id": 49,
"c": "otros",
"d": 2,
"q": "¿En qué Juegos ganó Dick Fosbury el oro con su salto de altura de espaldas?",
"o": [
"México 1968",
"Tokio 1964",
"Múnich 1972",
"Roma 1960"
],
"e": "Su técnica, el 'Fosbury flop', parecía una locura y hoy la usan prácticamente todos los saltadores."
},
{
"id": 50,
"c": "otros",
"d": 2,
"q": "¿A quién venció Conchita Martínez en la final de Wimbledon de 1994?",
"o": [
"Martina Navratilova",
"Steffi Graf",
"Monica Seles",
"Gabriela Sabatini"
],
"e": "Fue la primera española en ganar Wimbledon, ante una Navratilova que ya tenía nueve títulos allí."
},
{
"id": 51,
"c": "otros",
"d": 2,
"q": "¿En qué prueba ganó Fermín Cacho el oro olímpico en Barcelona 92?",
"o": [
"1.500 m",
"800 m",
"5.000 m",
"3.000 m obstáculos"
],
"e": "Cerró con una última vuelta de 50,6 s. En Atlanta 96 fue plata tras saltar por encima de El Guerrouj caído."
},
{
"id": 52,
"c": "otros",
"d": 2,
"q": "¿En qué Gran Premio logró Fernando Alonso su primera victoria en F1, en 2003?",
"o": [
"Hungría",
"Malasia",
"España",
"Mónaco"
],
"e": "Con Renault, y batió el récord de ganador más joven de Bruce McLaren. Había debutado en 2001 con Minardi."
},
{
"id": 53,
"c": "otros",
"d": 2,
"q": "¿Qué selección ganó el primer Mundial de rugby, en 1987?",
"o": [
"Nueva Zelanda",
"Australia",
"Francia",
"Inglaterra"
],
"e": "Los All Blacks ganaron 29-9 a Francia en Eden Park (Auckland). El trofeo homenajea a William Webb Ellis."
},
{
"id": 54,
"c": "otros",
"d": 3,
"q": "¿Dónde se disputó la primera carrera del Mundial de Fórmula 1, en 1950?",
"o": [
"Silverstone",
"Mónaco",
"Monza",
"Spa-Francorchamps"
],
"e": "La ganó Nino Farina con Alfa Romeo el 13 de mayo de 1950. Ese año la Indy 500 también puntuaba para el Mundial."
},
{
"id": 55,
"c": "otros",
"d": 3,
"q": "¿Cómo terminó el quinto set del Isner-Mahut de Wimbledon 2010?",
"o": [
"70-68",
"50-48",
"42-40",
"66-64"
],
"e": "El partido duró 11 horas y 5 minutos repartidas en tres días, del 22 al 24 de junio."
},
{
"id": 56,
"c": "otros",
"d": 3,
"q": "¿En qué asalto noqueó Muhammad Ali a George Foreman en Kinshasa (1974)?",
"o": [
"8.º",
"5.º",
"12.º",
"3.º"
],
"e": "En el 'Rumble in the Jungle' Ali usó el 'rope-a-dope': aguantar en las cuerdas hasta agotar a Foreman."
},
{
"id": 57,
"c": "otros",
"d": 3,
"q": "Márquez fue campeón de MotoGP como novato en 2013. ¿Quién lo había logrado antes, en 1978?",
"o": [
"Kenny Roberts",
"Freddie Spencer",
"Wayne Rainey",
"Barry Sheene"
],
"e": "Márquez fue además el campeón más joven de la categoría reina: 20 años y 266 días."
},
{
"id": 58,
"c": "otros",
"d": 3,
"q": "¿Quién batió en 1991 el récord de salto de longitud de Bob Beamon (8,90 m)?",
"o": [
"Mike Powell",
"Carl Lewis",
"Iván Pedroso",
"Larry Myricks"
],
"e": "Powell saltó 8,95 m en el Mundial de Tokio. El salto de Beamon en México 68 había durado casi 23 años."
},
{
"id": 59,
"c": "otros",
"d": 3,
"q": "¿Quién fue el primer golfista europeo en ganar el Masters de Augusta?",
"o": [
"Severiano Ballesteros",
"Nick Faldo",
"Bernhard Langer",
"José María Olazábal"
],
"e": "Seve lo ganó en 1980 y repitió en 1983. Su primer grande fue el Open Británico de 1979, con 22 años."
},
{
"id": 60,
"c": "otros",
"d": 3,
"q": "¿Por el positivo de qué compañero perdió Usain Bolt el oro del 4x100 de Pekín 2008?",
"o": [
"Nesta Carter",
"Asafa Powell",
"Michael Frater",
"Richard Thompson"
],
"e": "En 2017 se anuló el oro jamaicano: Carter dio positivo por metilhexanamina en un reanálisis. Bolt nunca dio positivo."
},
{
"id": 61,
"c": "otros",
"d": 4,
"q": "¿En qué modalidad ganó Pierre de Coubertin un oro olímpico en 1912?",
"o": [
"Literatura",
"Escultura",
"Tiro",
"Esgrima"
],
"e": "Ganó con el poema 'Oda al deporte', firmado con los seudónimos Georges Hohrod y M. Eschbach."
},
{
"id": 62,
"c": "otros",
"d": 4,
"q": "¿En qué velódromo batió Miguel Induráin el récord de la hora en 1994?",
"o": [
"Burdeos",
"México D. F.",
"Manchester",
"Valencia"
],
"e": "Recorrió 53,040 km en el Velódromo du Lac. Rominger lo superó dos meses después en la misma pista."
},
{
"id": 63,
"c": "otros",
"d": 4,
"q": "¿En qué ciudad fue secuestrado Juan Manuel Fangio en 1958?",
"o": [
"La Habana",
"Caracas",
"Buenos Aires",
"Bogotá"
],
"e": "Lo secuestró el Movimiento 26 de Julio de Castro antes de un Gran Premio y lo liberó 29 horas después."
},
{
"id": 64,
"c": "otros",
"d": 4,
"q": "¿A quién ganaron los Dolphins la Super Bowl VII para cerrar su temporada perfecta de 1972?",
"o": [
"Washington",
"Minnesota Vikings",
"Dallas Cowboys",
"Oakland Raiders"
],
"e": "Ganaron 14-7 y acabaron 17-0. Los Patriots de 2007 llegaron 18-0 a la Super Bowl, pero la perdieron."
},
{
"id": 65,
"c": "otros",
"d": 4,
"q": "¿Junto a qué monumento acabó el maratón de Roma 1960 que Abebe Bikila ganó descalzo?",
"o": [
"Arco de Constantino",
"Fontana di Trevi",
"Panteón",
"Castillo Sant'Angelo"
],
"e": "Fue el primer oro olímpico de Etiopía. En Tokio 64 repitió, ya con zapatillas: primer bicampeón olímpico de maratón."
},
{
"id": 66,
"c": "futbol",
"d": 1,
"q": "¿Qué encontró el perro Pickles en un jardín de Londres en marzo de 1966?",
"o": [
"La Copa Jules Rimet robada",
"El balón de la final del 66",
"La Bota de Oro de Eusébio",
"El silbato del árbitro"
],
"e": "La Copa del Mundo había sido robada de una exposición en Londres; Pickles, un collie, la halló envuelta en papel de periódico."
},
{
"id": 67,
"c": "futbol",
"d": 1,
"q": "¿Qué inspiró al árbitro Ken Aston para inventar las tarjetas amarilla y roja?",
"o": [
"Un semáforo",
"Una baraja de cartas",
"Las banderas de playa",
"Un paso a nivel"
],
"e": "Se le ocurrió parado en un semáforo de Kensington tras el Mundial 66. Las tarjetas se estrenaron en México 1970."
},
{
"id": 68,
"c": "futbol",
"d": 1,
"q": "¿En qué minuto marcó Iniesta el gol que dio a España el Mundial de 2010?",
"o": [
"116",
"90",
"105",
"119"
],
"e": "Llegó en la prórroga, en el Soccer City de Johannesburgo, cuando ya se intuían los penaltis."
},
{
"id": 69,
"c": "futbol",
"d": 1,
"q": "¿Contra qué selección lanzó Panenka su mítico penalti 'a lo Panenka' en la final de la Euro 1976?",
"o": [
"Alemania Federal",
"Países Bajos",
"Unión Soviética",
"Italia"
],
"e": "Fue el quinto penalti de la tanda en Belgrado: Sepp Maier se tiró a un lado y el balón entró suave por el centro."
},
{
"id": 70,
"c": "futbol",
"d": 2,
"q": "¿De qué selección era Plácido Galindo, primer expulsado de la historia de los Mundiales (1930)?",
"o": [
"Perú",
"Rumanía",
"Chile",
"Bolivia"
],
"e": "Era el capitán peruano y lo echaron ante Rumanía. Como no existían tarjetas, el árbitro se lo indicó de palabra."
},
{
"id": 71,
"c": "futbol",
"d": 2,
"q": "¿Contra qué selección marcó Hakan Şükür su célebre gol a los 11 segundos en el Mundial 2002?",
"o": [
"Corea del Sur",
"Japón",
"Brasil",
"Senegal"
],
"e": "Fue en el partido por el tercer puesto, con Corea del Sur como anfitriona. Turquía acabó ganando 3-2."
},
{
"id": 72,
"c": "futbol",
"d": 2,
"q": "¿Cuántos penaltis le paró Helmut Duckadam al Barça en la final de la Copa de Europa de 1986?",
"o": [
"4",
"2",
"3",
"5"
],
"e": "El Steaua ganó en el Sánchez Pizjuán y el Barça no metió ni uno en la tanda. A Duckadam le llamaron 'el héroe de Sevilla'."
},
{
"id": 73,
"c": "futbol",
"d": 2,
"q": "¿De qué color vestía la Juventus en sus inicios, antes de las rayas blanquinegras?",
"o": [
"Rosa",
"Verde",
"Azul celeste",
"Granate"
],
"e": "Las camisetas rosas destiñeron y un inglés le consiguió a la Juve unas del Notts County, que son el origen del bianconero."
},
{
"id": 74,
"c": "futbol",
"d": 2,
"q": "¿Cuántos goles marcó Puskás en la final de la Copa de Europa de 1960 ante el Eintracht?",
"o": [
"4",
"3",
"2",
"5"
],
"e": "El Madrid ganó 7-3 en Hampden Park ante más de 127.000 personas. Di Stéfano marcó los otros tres."
},
{
"id": 75,
"c": "futbol",
"d": 2,
"q": "¿En qué estadio marcó Zarra su célebre gol a Inglaterra en el Mundial de 1950?",
"o": [
"Maracanã",
"Pacaembú",
"Centenario",
"Mineirão"
],
"e": "En Suecia le anunciaron como 'la mejor cabeza de Europa después de Churchill'."
},
{
"id": 76,
"c": "futbol",
"d": 3,
"q": "¿Quién marcó el primer gol de la fase de grupos de la historia de la Champions League (1992)?",
"o": [
"Daniel Amokachi",
"Jean-Pierre Papin",
"Alen Bokšić",
"Marco van Basten"
],
"e": "El nigeriano dio la victoria al Brujas por 1-0 ante el CSKA de Moscú en el primer partido de la fase de grupos."
},
{
"id": 77,
"c": "futbol",
"d": 3,
"q": "¿Quién fue el primer jugador expulsado en una final de un Mundial?",
"o": [
"Pedro Monzón",
"Zinedine Zidane",
"John Heitinga",
"Marcel Desailly"
],
"e": "El argentino vio la roja en la final de Italia 90 ante Alemania Federal por una entrada a Klinsmann."
},
{
"id": 78,
"c": "futbol",
"d": 3,
"q": "¿Quién marcó en propia meta el gol de oro que dio la Copa de la UEFA 2001 al Liverpool ante el Alavés?",
"o": [
"Delfí Geli",
"Javi Moreno",
"Jordi Cruyff",
"Antonio Karmona"
],
"e": "La final de Dortmund acabó 5-4 en el minuto 115, con un cabezazo desafortunado tras una falta de McAllister."
},
{
"id": 79,
"c": "futbol",
"d": 3,
"q": "¿A qué club quería irse Jean-Marc Bosman cuando el RFC Lieja bloqueó su traspaso?",
"o": [
"Dunkerque",
"Lille",
"Standard de Lieja",
"Metz"
],
"e": "Su pleito acabó en la sentencia Bosman (15 de diciembre de 1995), que cambió para siempre el mercado de fichajes."
},
{
"id": 80,
"c": "futbol",
"d": 3,
"q": "¿En qué ciudad fue secuestrado Alfredo Di Stéfano durante una gira del Real Madrid en 1963?",
"o": [
"Caracas",
"Bogotá",
"Buenos Aires",
"Lima"
],
"e": "Lo raptó la guerrilla venezolana FALN en su hotel y lo liberaron ileso tres días después."
},
{
"id": 81,
"c": "futbol",
"d": 3,
"q": "¿De qué club inglés eran las camisetas rojiblancas que el Atlético trajo de Inglaterra en 1909?",
"o": [
"Southampton",
"Sunderland",
"Stoke City",
"Arsenal"
],
"e": "Juan Elorduy iba a por camisetas del Blackburn, no las encontró y compró cincuenta del Southampton."
},
{
"id": 82,
"c": "futbol",
"d": 3,
"q": "¿Cuál era el nombre real de 'Pichichi', el goleador que da nombre al trofeo?",
"o": [
"Rafael Moreno",
"Telmo Zarra",
"José María Belauste",
"Agustín Gaínza"
],
"e": "Delantero del Athletic Club, murió joven en 1922. El trofeo de Marca se entregó por primera vez en la 1952-53."
},
{
"id": 83,
"c": "futbol",
"d": 4,
"q": "¿Contra qué equipo marcó Pitus Prat el primer gol de la historia de la Liga, en 1929?",
"o": [
"Real Unión",
"Arenas de Getxo",
"Europa",
"Racing de Santander"
],
"e": "Lo marcó para el Espanyol en Sarrià en el minuto 5, el 10 de febrero de 1929. El partido acabó 3-2."
},
{
"id": 84,
"c": "futbol",
"d": 4,
"q": "¿Contra qué equipo se inauguró el Nuevo Chamartín (hoy Bernabéu) en diciembre de 1947?",
"o": [
"Os Belenenses",
"Benfica",
"Sporting de Portugal",
"Oporto"
],
"e": "El Madrid ganó 3-1 y el primer gol del estadio fue de Sabino Barinaga."
},
{
"id": 85,
"c": "futbol",
"d": 4,
"q": "¿Quién vio la tarjeta roja más rápida de la historia de los Mundiales, en México 86?",
"o": [
"José Batista",
"Rigobert Song",
"Paolo Montero",
"Ariel Ortega"
],
"e": "El uruguayo fue expulsado en el primer minuto ante Escocia por una entrada a Gordon Strachan."
},
{
"id": 86,
"c": "futbol",
"d": 4,
"q": "¿Cuántas tarjetas amarillas mostró Howard Webb en la final del Mundial 2010?",
"o": [
"14",
"9",
"11",
"17"
],
"e": "Nueve fueron para Países Bajos y cinco para España. Heitinga acabó expulsado por doble amarilla."
},
{
"id": 87,
"c": "futbol",
"d": 4,
"q": "¿Por qué se llama 'gol olímpico' al gol marcado directamente de córner?",
"o": [
"Se marcó al campeón olímpico",
"Se marcó en unos Juegos",
"Lo marcó un atleta olímpico",
"Nació en un estadio olímpico"
],
"e": "En 1924 el argentino Cesáreo Onzari se lo marcó así a Uruguay, recién coronado campeón olímpico en París."
},
{
"id": 88,
"c": "esp",
"d": 1,
"q": "¿Qué raza de perro inspiró a Cobi, la mascota de Barcelona 92?",
"o": [
"Pastor catalán",
"Pastor vasco",
"Mastín español",
"Perdiguero de Burgos"
],
"e": "Lo diseñó Javier Mariscal y se presentó en 1988. Al principio tuvo muchos críticos y acabó siendo un icono."
},
{
"id": 89,
"c": "esp",
"d": 1,
"q": "¿Por qué Ángel Nieto decía que había ganado '12+1' títulos mundiales?",
"o": [
"Le daba mala suerte el 13",
"Le anularon uno",
"Uno fue compartido",
"Uno fue por equipos"
],
"e": "Ganó 13 títulos (6 en 50 cc y 7 en 125 cc), pero por superstición nunca decía el número y firmaba autógrafos con '12+1'."
},
{
"id": 90,
"c": "esp",
"d": 1,
"q": "¿Cómo encendió Antonio Rebollo el pebetero olímpico de Barcelona 92?",
"o": [
"Con una flecha en llamas",
"Con una antorcha en tirolina",
"Con un cohete",
"Subiendo una escalera"
],
"e": "Rebollo era un arquero paralímpico madrileño con tres medallas en los Juegos Paralímpicos."
},
{
"id": 91,
"c": "esp",
"d": 2,
"q": "¿En qué año ganó Manolo Santana el torneo de Wimbledon?",
"o": [
"1966",
"1961",
"1970",
"1964"
],
"e": "Fue el primer español en ganar Wimbledon; en la final venció al estadounidense Dennis Ralston."
},
{
"id": 92,
"c": "esp",
"d": 2,
"q": "¿Qué apodo tenía Federico Martín Bahamontes, primer español en ganar el Tour (1959)?",
"o": [
"El Águila de Toledo",
"El Halcón de Ávila",
"El Tarangu",
"El Chava"
],
"e": "Cuenta la leyenda que se paró a comer un helado en una cima del Tour de 1954; en realidad esperaba que le cambiasen una rueda."
},
{
"id": 93,
"c": "esp",
"d": 2,
"q": "¿A quién ganó Arantxa Sánchez Vicario en la final de Roland Garros de 1989?",
"o": [
"Steffi Graf",
"Monica Seles",
"Martina Navratilova",
"Gabriela Sabatini"
],
"e": "Tenía solo 17 años y Graf era la número uno. La prensa la bautizó como 'el abejorro de Barcelona'."
},
{
"id": 94,
"c": "esp",
"d": 2,
"q": "¿En qué equipo de la NBA debutó Fernando Martín, el primer español en jugar en esa liga?",
"o": [
"Portland Trail Blazers",
"Boston Celtics",
"Los Angeles Lakers",
"Houston Rockets"
],
"e": "Jugó 24 partidos en la temporada 1986-87. El Real Madrid retiró después su dorsal 10."
},
{
"id": 95,
"c": "esp",
"d": 2,
"q": "¿A qué selección ganó España la final del fútbol olímpico de Barcelona 92?",
"o": [
"Polonia",
"Ghana",
"Italia",
"Suecia"
],
"e": "España ganó 3-2 en el Camp Nou; Kiko marcó dos goles en los últimos minutos."
},
{
"id": 96,
"c": "esp",
"d": 2,
"q": "¿En qué Juegos de Invierno ganó Paquito Fernández Ochoa el oro en eslalon?",
"o": [
"Sapporo 1972",
"Grenoble 1968",
"Innsbruck 1976",
"Lake Placid 1980"
],
"e": "Fue el primer oro olímpico de invierno de España. Su hermana Blanca sería bronce en Albertville 92."
},
{
"id": 97,
"c": "esp",
"d": 3,
"q": "¿Quién fue la primera mujer española en ganar una medalla olímpica?",
"o": [
"Blanca Fernández Ochoa",
"Arantxa Sánchez Vicario",
"Miriam Blasco",
"Theresa Zabell"
],
"e": "Fue bronce en eslalon en Albertville, en febrero de 1992, meses antes de que llegaran las medallas de Barcelona 92."
},
{
"id": 98,
"c": "esp",
"d": 3,
"q": "¿En qué prueba ganó el oro el ciclista José Manuel Moreno en Barcelona 92?",
"o": [
"Kilómetro contrarreloj",
"Persecución individual",
"Velocidad individual",
"Carrera por puntos"
],
"e": "El gaditano logró uno de los 13 oros que consiguió España en aquellos Juegos, su mejor cosecha histórica."
},
{
"id": 99,
"c": "esp",
"d": 3,
"q": "¿De qué localidad soriana es Fermín Cacho, oro en 1.500 m en Barcelona 92?",
"o": [
"Ágreda",
"El Burgo de Osma",
"Almazán",
"San Leonardo de Yagüe"
],
"e": "Ganó el 8 de agosto de 1992 en Montjuïc y cuatro años después fue plata en Atlanta."
},
{
"id": 100,
"c": "esp",
"d": 3,
"q": "¿Quién fue el primer español en ganar el Dakar en la categoría de motos (2004)?",
"o": [
"Nani Roma",
"Marc Coma",
"Jordi Arcarons",
"Isidre Esteve"
],
"e": "Lo logró con KTM. Diez años después, en 2014, también ganó el Dakar en coches."
},
{
"id": 101,
"c": "esp",
"d": 3,
"q": "¿Qué baloncestista fue el último relevista de la antorcha olímpica de Barcelona 92?",
"o": [
"Epi",
"Jordi Villacampa",
"Juan Antonio Corbalán",
"Nacho Solozábal"
],
"e": "Juan Antonio San Epifanio jugó toda su carrera, unos 19 años, en el FC Barcelona."
},
{
"id": 102,
"c": "esp",
"d": 3,
"q": "¿Contra qué selección ganó España su primer Mundial de balonmano, en Túnez 2005?",
"o": [
"Croacia",
"Dinamarca",
"Alemania",
"Francia"
],
"e": "La final acabó 40-34. El segundo título llegó en 2013, en casa y ante Dinamarca."
},
{
"id": 103,
"c": "esp",
"d": 3,
"q": "¿En cuántos Juegos Olímpicos participó el waterpolista Manel Estiarte?",
"o": [
"6",
"4",
"5",
"7"
],
"e": "Desde Moscú 1980 hasta Sídney 2000. Fue plata en Barcelona 92 y oro en Atlanta 96."
},
{
"id": 104,
"c": "esp",
"d": 4,
"q": "¿Contra qué equipo ganó el Real Madrid su primera Copa de Europa de baloncesto, en 1964?",
"o": [
"Spartak Brno",
"CSKA Moscú",
"Ignis Varese",
"Olimpia Milán"
],
"e": "Perdió la ida 110-99 en Brno y remontó en Madrid con un 84-64."
},
{
"id": 105,
"c": "esp",
"d": 4,
"q": "¿En qué campo ganó Seve Ballesteros su primer major, el Open Británico de 1979?",
"o": [
"Royal Lytham & St Annes",
"St Andrews",
"Muirfield",
"Carnoustie"
],
"e": "El cántabro de Pedreña fue entonces el ganador más joven del Open. Luego ganó el Masters en 1980 y 1983."
},
{
"id": 106,
"c": "esp",
"d": 4,
"q": "¿En qué ciudad de EE. UU. nació Clifford Luyk, mito nacionalizado del Real Madrid?",
"o": [
"Syracuse",
"Boston",
"Chicago",
"Filadelfia"
],
"e": "Jugó 16 temporadas en el Madrid (1962-1978) y ganó más de 30 títulos. Luego también lo entrenó."
},
{
"id": 107,
"c": "esp",
"d": 4,
"q": "¿En qué carrera murió el aristócrata y piloto Alfonso de Portago en 1957?",
"o": [
"Mille Miglia",
"24 Horas de Le Mans",
"Targa Florio",
"GP de Mónaco"
],
"e": "Pilotó para Ferrari en F1 y fue cuarto en bobsleigh a dos en los Juegos de Cortina 1956."
},
{
"id": 108,
"c": "esp",
"d": 4,
"q": "¿En qué ciudad japonesa ganó España el Mundial de baloncesto de 2006?",
"o": [
"Saitama",
"Tokio",
"Osaka",
"Hiroshima"
],
"e": "La final ante Grecia se jugó en el Saitama Super Arena. Fue el primer gran título mundial del baloncesto español."
},
{
"id": 109,
"c": "sneakers",
"d": 1,
"q": "¿Cuánto cobró Carolyn Davidson por diseñar el Swoosh de Nike en 1971?",
"o": [
"35 dólares",
"350 dólares",
"3.500 dólares",
"35.000 dólares"
],
"e": "En 1983 Phil Knight compensó a la estudiante con un anillo de oro con el Swoosh y 500 acciones de Nike."
},
{
"id": 110,
"c": "sneakers",
"d": 1,
"q": "¿Qué película lucía unas Nike que se ataban solas, que la marca hizo realidad en 2016?",
"o": [
"Regreso al futuro II",
"Space Jam",
"Blade Runner",
"Desafío total"
],
"e": "Las Nike Mag de Marty McFly eran de una película ambientada en 2015. La versión con autoatado se vendió en 2016."
},
{
"id": 111,
"c": "sneakers",
"d": 1,
"q": "¿Qué aparato de cocina usó Bill Bowerman para crear una suela para correr?",
"o": [
"Una gofrera",
"Una tostadora",
"Una plancha de ropa",
"Una sandwichera"
],
"e": "Echó caucho en la gofrera de su mujer en 1971. De ahí salieron la Moon Shoe y la Waffle Trainer."
},
{
"id": 112,
"c": "sneakers",
"d": 1,
"q": "¿De qué marca eran las zapatillas amarillas de Uma Thurman en 'Kill Bill'?",
"o": [
"Onitsuka Tiger",
"Nike",
"Puma",
"Vans"
],
"e": "Eran unas Tai-Chi a juego con el mono amarillo y dispararon la popularidad de la marca japonesa en 2003."
},
{
"id": 113,
"c": "sneakers",
"d": 2,
"q": "¿Cómo se llamaba la empresa de Phil Knight y Bill Bowerman antes de ser Nike?",
"o": [
"Blue Ribbon Sports",
"Oregon Running Co.",
"Tiger Sports USA",
"Bowerman Athletics"
],
"e": "Se fundó en 1964 y pasó a ser Nike en 1971. El nombre Nike se lo sugirió el empleado Jeff Johnson."
},
{
"id": 114,
"c": "sneakers",
"d": 2,
"q": "¿De qué frase latina sale el nombre de la marca ASICS?",
"o": [
"Anima sana in corpore sano",
"Citius, altius, fortius",
"Mens sana in corpore sano",
"Alea iacta est"
],
"e": "Nació en 1977 al fusionarse Onitsuka Tiger con GTO y Jelenk, en Kobe (Japón)."
},
{
"id": 115,
"c": "sneakers",
"d": 2,
"q": "¿Qué edificio inspiró a Tinker Hatfield para la ventana de aire de la Air Max 1?",
"o": [
"Centro Pompidou",
"Torre Eiffel",
"Museo Guggenheim",
"Museo del Louvre"
],
"e": "El museo parisino muestra por fuera tuberías y escaleras; Hatfield quiso enseñar igual la cámara de aire (1987)."
},
{
"id": 116,
"c": "sneakers",
"d": 2,
"q": "¿Qué grupo dedicó en 1986 la canción 'My Adidas' a las Superstar?",
"o": [
"Run-DMC",
"Beastie Boys",
"Public Enemy",
"N.W.A."
],
"e": "La Superstar nació en 1969 para baloncesto y es conocida como 'shell toe' por su puntera de goma."
},
{
"id": 117,
"c": "sneakers",
"d": 2,
"q": "¿Qué modelo de Air Jordan estrenó el logo del Jumpman?",
"o": [
"Air Jordan III",
"Air Jordan I",
"Air Jordan II",
"Air Jordan V"
],
"e": "Tras ella, Tinker Hatfield firmó todas las Air Jordan de la III a la XV."
},
{
"id": 118,
"c": "sneakers",
"d": 2,
"q": "¿Para qué marca se ató Pelé las botas ante las cámaras en el Mundial de 1970?",
"o": [
"Puma",
"Adidas",
"Umbro",
"Le Coq Sportif"
],
"e": "Lo hizo antes del Brasil-Perú, rompiendo el 'pacto Pelé' entre Puma y Adidas de no ficharle."
},
{
"id": 119,
"c": "sneakers",
"d": 3,
"q": "¿A qué marca finlandesa compró Adidas las tres rayas?",
"o": [
"Karhu",
"Tunturi",
"Suunto",
"Nokian"
],
"e": "Según la historia, en 1952 las pagó con el equivalente a unos 1.600 euros y dos botellas de whisky."
},
{
"id": 120,
"c": "sneakers",
"d": 3,
"q": "¿Qué nombre registró Rudolf Dassler en enero de 1948, antes de llamar Puma a su marca?",
"o": [
"Ruda",
"Rudas",
"Daspu",
"Raddas"
],
"e": "Era la abreviatura de Rudolf Dassler. Meses después, en octubre de 1948, registró la marca Puma."
},
{
"id": 121,
"c": "sneakers",
"d": 3,
"q": "¿Qué es un 'rhebok', la palabra en la que se inspiró el nombre de Reebok?",
"o": [
"Un antílope africano",
"Un ave sudafricana",
"Un zapato tradicional bóer",
"Un río de Namibia"
],
"e": "Joe Foster encontró la palabra en un diccionario que ganó de niño en una carrera. Reebok nació en Bolton en 1958."
},
{
"id": 122,
"c": "sneakers",
"d": 3,
"q": "¿Con el nombre de qué tenista francés se vendían originalmente las Adidas Stan Smith?",
"o": [
"Robert Haillet",
"Yannick Noah",
"Henri Leconte",
"Guy Forget"
],
"e": "La zapatilla de 1965 llevaba el nombre de Haillet y después pasó a llamarse como el estadounidense Stan Smith."
},
{
"id": 123,
"c": "sneakers",
"d": 3,
"q": "¿Qué coche de Michael Jordan inspiró la Air Jordan XIV?",
"o": [
"Ferrari 550",
"Porsche 911",
"Lamborghini Diablo",
"Chevrolet Corvette"
],
"e": "La diseñaron Tinker Hatfield y Mark Smith a partir del Ferrari 550 M que tenía Jordan."
},
{
"id": 124,
"c": "sneakers",
"d": 3,
"q": "¿Qué cargo tenía Chuck Taylor en Converse cuando su firma llegó a las All Star?",
"o": [
"Vendedor y embajador",
"Diseñador jefe",
"Dueño de la empresa",
"Director de fábrica"
],
"e": "Entró en 1922 quejándose de dolor de pies y recorrió EE. UU. promocionándolas. Su firma se añadió en 1932."
},
{
"id": 125,
"c": "sneakers",
"d": 3,
"q": "¿Cuál fue la primera zapatilla de Nike con cámara de aire, en 1978?",
"o": [
"Nike Tailwind",
"Air Force 1",
"Air Max 1",
"Nike Cortez"
],
"e": "El aire fue idea de Frank Rudy, un ingeniero aeroespacial. La Tailwind se estrenó en el maratón de Honolulu."
},
{
"id": 126,
"c": "sneakers",
"d": 4,
"q": "¿Qué nombre descartó Nike para la Cortez por miedo a una demanda de Adidas?",
"o": [
"Aztec",
"Inca",
"Maya",
"Tolteca"
],
"e": "Primero se llamó 'Mexico', luego se pensó en 'Aztec', pero Adidas tenía la Azteca Gold. Acabó siendo Cortez (1972)."
},
{
"id": 127,
"c": "sneakers",
"d": 4,
"q": "¿Qué modelo de Puma se modificó para crear la Clyde de Walt Frazier en 1973?",
"o": [
"Puma Suede",
"Puma Basket",
"Puma King",
"Puma Roma"
],
"e": "Frazier no quiso la Basket por pesada. Se dice que llegó a usar 390 colores distintos de la Clyde."
},
{
"id": 128,
"c": "sneakers",
"d": 4,
"q": "¿En qué país se fabricaron originalmente las Air Jordan II?",
"o": [
"Italia",
"Japón",
"Corea del Sur",
"Taiwán"
],
"e": "Se fabricó en Italia buscando un aire de lujo, algo excepcional en una zapatilla de baloncesto."
},
{
"id": 129,
"c": "sneakers",
"d": 4,
"q": "¿Quién diseñó las Nike Air Force 1 en 1982?",
"o": [
"Bruce Kilgore",
"Tinker Hatfield",
"Peter Moore",
"Eric Avar"
],
"e": "Fue la primera zapatilla de baloncesto con Nike Air. En Harlem se hizo tan popular que la apodaron 'Uptowns'."
},
{
"id": 130,
"c": "sneakers",
"d": 4,
"q": "¿De quién eran las últimas palabras que inspiraron el lema 'Just Do It' en 1988?",
"o": [
"Gary Gilmore",
"Steve Prefontaine",
"John Lennon",
"James Dean"
],
"e": "Dan Wieden lo adaptó del 'Let's do it' que dijo Gilmore antes de ser ejecutado."
},
{
"id": 131,
"c": "influ",
"d": 1,
"q": "¿Cuál es el nombre real de El Rubius?",
"o": [
"Rubén Doblas Gundersen",
"Rubén Díaz Gundersen",
"Raúl Doblas Martínez",
"Rubén Doblas Ibáñez"
],
"e": "Nació en Mijas (Málaga) en 1990 y fue el primer canal español en llegar a los 10 millones de suscriptores, en 2015."
},
{
"id": 132,
"c": "influ",
"d": 1,
"q": "¿Qué equipo de la Kings League preside Ibai Llanos?",
"o": [
"Porcinos FC",
"Saiyans FC",
"El Barrio",
"Jijantes FC"
],
"e": "Porcinos también ganó la primera Kings World Cup en 2024, en Monterrey (México), al vencer 5-3 a G3X."
},
{
"id": 133,
"c": "influ",
"d": 1,
"q": "¿En qué estadio se celebró La Velada del Año IV (2024)?",
"o": [
"Santiago Bernabéu",
"Metropolitano",
"Camp Nou",
"La Cartuja"
],
"e": "La edición del 13 de julio de 2024 superó los 3,8 millones de espectadores simultáneos en Twitch, récord Guinness entonces."
},
{
"id": 134,
"c": "influ",
"d": 1,
"q": "¿Cómo se llama de verdad MrBeast?",
"o": [
"Jimmy Donaldson",
"Jimmy Fallon",
"James Charles",
"Jake Donovan"
],
"e": "James Stephen Donaldson nació en Wichita (Kansas) y en junio de 2024 superó a T-Series como canal con más suscriptores."
},
{
"id": 135,
"c": "influ",
"d": 2,
"q": "¿En qué estadio se jugó la Final Four de la primera Kings League (marzo 2023)?",
"o": [
"Camp Nou",
"Santiago Bernabéu",
"Metropolitano",
"Cornellà-El Prat"
],
"e": "Más de 92.000 personas llenaron el estadio del Barça el 26 de marzo de 2023 para ver una liga nacida en Twitch."
},
{
"id": 136,
"c": "influ",
"d": 2,
"q": "¿Qué equipo ganó la primera Kings League (Winter Split 2023)?",
"o": [
"El Barrio",
"Aniquiladores",
"Porcinos FC",
"Saiyans FC"
],
"e": "El Barrio, de Adri Contreras, ganó 3-0 a Aniquiladores en la final, y era el único equipo sin patrocinador."
},
{
"id": 137,
"c": "influ",
"d": 2,
"q": "En enero de 2021, TheGrefg batió el récord de espectadores de Twitch presentando...",
"o": [
"Su skin de Fortnite",
"Su libro",
"Su equipo de eSports",
"Una canción"
],
"e": "Guinness certificó 2.468.668 espectadores simultáneos el 11 de enero de 2021, por la skin de la Serie Ídolos."
},
{
"id": 138,
"c": "influ",
"d": 2,
"q": "¿Cómo se llama la saga de libros que escribieron juntos Vegetta777 y Willyrex?",
"o": [
"Wigetta",
"Karmaland",
"Virtual Hero",
"Los Compas"
],
"e": "La saga arrancó en 2015 con sus mascotas Vakypandy y Trotuman, y en 2022 ya sumaba 18 libros."
},
{
"id": 139,
"c": "influ",
"d": 2,
"q": "¿Cómo terminó el primer combate entre KSI y Logan Paul (Manchester, 2018)?",
"o": [
"Empate",
"Ganó KSI por KO",
"Ganó Logan Paul",
"Descalificación"
],
"e": "Fue un empate por decisión mayoritaria. En la revancha de 2019 en Los Ángeles ganó KSI por decisión dividida."
},
{
"id": 140,
"c": "influ",
"d": 2,
"q": "¿Con qué futbolista cofundó Ibai el club de eSports KOI en 2021?",
"o": [
"Gerard Piqué",
"Sergio Agüero",
"Iker Casillas",
"Neymar"
],
"e": "KOI nació en diciembre de 2021 en Barcelona; luego se fusionó con Rogue y en 2024 la compró OverActive Media."
},
{
"id": 141,
"c": "influ",
"d": 3,
"q": "¿A quién ganó TheGrefg en el combate estelar de La Velada del Año V (2025)?",
"o": [
"Westcol",
"Viruzz",
"Perxitaa",
"Andoni Fitness"
],
"e": "Ganó por KO técnico en La Cartuja (Sevilla), en una edición con más de 9 millones de espectadores en Twitch."
},
{
"id": 142,
"c": "influ",
"d": 3,
"q": "¿Quién noqueó a Germán Garmendia en La Velada del Año III (2023)?",
"o": [
"Coscu",
"Luzu",
"Ampeter",
"Shelao"
],
"e": "Fue el último combate de la noche en el Metropolitano; Coscu remontó y ganó por KO al youtuber chileno."
},
{
"id": 143,
"c": "influ",
"d": 3,
"q": "¿A qué se dedicaba Ibai antes de hacerse streamer a tiempo completo?",
"o": [
"Narrador de League of Legends",
"Periodista de fútbol",
"Jugador pro de FIFA",
"Locutor de radio musical"
],
"e": "Empezó a narrar LoL con 19 años y en 2015 entró en la LVP; ganó el Trasgo de Oro a mejor caster cuatro años seguidos."
},
{
"id": 144,
"c": "influ",
"d": 3,
"q": "¿Qué país ganó el primer Mundial de Globos de Ibai y Piqué (2021)?",
"o": [
"Perú",
"Alemania",
"España",
"México"
],
"e": "Francesco de la Cruz ganó la final al alemán Jan Spiess; hasta el Comité Olímpico peruano celebró el título."
},
{
"id": 145,
"c": "influ",
"d": 3,
"q": "¿Cómo se llaman los maratones de subs de Kai Cenat con los que batió récords en Twitch?",
"o": [
"Mafiathon",
"Subathon Royale",
"Kaithon",
"AMP Week"
],
"e": "En el Mafiathon 2 (noviembre de 2024) acabó con 728.535 suscriptores, casi el doble del récord anterior."
},
{
"id": 146,
"c": "influ",
"d": 3,
"q": "¿En qué videojuego de Ubisoft es El Rubius un personaje jugable?",
"o": [
"Watch Dogs: Legion",
"Assassin's Creed Valhalla",
"Far Cry 6",
"Just Dance 2021"
],
"e": "Salió en 2020 y Ubisoft lo presentó como la primera vez que un creador de contenido era personaje jugable así."
},
{
"id": 147,
"c": "influ",
"d": 3,
"q": "¿Qué streamer tuvo la primera skin de la Serie Ídolos de Fortnite (2020)?",
"o": [
"Ninja",
"TheGrefg",
"Lachlan",
"Loserfruit"
],
"e": "Richard Tyler Blevins inauguró la Serie Ídolos en enero de 2020; un año después llegó la de TheGrefg."
},
{
"id": 148,
"c": "influ",
"d": 4,
"q": "¿En qué minuto se lanza el dado que cambia el número de jugadores en la Kings League?",
"o": [
"18",
"10",
"20",
"15"
],
"e": "El dado decide si se juega 1 contra 1, 2 contra 2… hasta 5 contra 5, y se reanuda con saque al estilo waterpolo."
},
{
"id": 149,
"c": "influ",
"d": 4,
"q": "En la primera Velada del Año (2021), ¿quién derrotó a Viruzz?",
"o": [
"Mister Jägger",
"Torete",
"Reven",
"ElMillor"
],
"e": "Aquella Velada tuvo solo tres combates y se celebró en Barcelona a puerta cerrada por la pandemia."
},
{
"id": 150,
"c": "influ",
"d": 4,
"q": "¿Quién ganó el formato 'Rey de la Pista' de La Velada del Año IV?",
"o": [
"Karchez",
"Pelicanger",
"Roberto Cein",
"Plex"
],
"e": "Rondas de 60 segundos en las que el ganador se quedaba en el ring; Karchez acabó con 60 puntos."
},
{
"id": 151,
"c": "influ",
"d": 4,
"q": "¿Cuál es el nombre real de KSI?",
"o": [
"Olajide Olatunji",
"Simon Minter",
"Joshua Bradley",
"Ethan Payne"
],
"e": "Los otros tres son Miniminter, Zerkaa y Behzinga, sus compañeros de los Sidemen."
},
{
"id": 152,
"c": "influ",
"d": 4,
"q": "¿Cómo se llamaba el primer canal de YouTube de Germán Garmendia?",
"o": [
"HolaSoyGerman",
"JuegaGerman",
"GermanTV",
"SoyGermanOficial"
],
"e": "El chileno subió su primer vídeo en 2011; en 2024 JuegaGerman fue el primer canal hispano en pasar de 50 millones."
},
{
"id": 153,
"c": "memes",
"d": 1,
"q": "¿Qué canción es la protagonista del famoso 'Rickroll'?",
"o": [
"Never Gonna Give You Up",
"Take On Me",
"Together Forever",
"Don't You Want Me"
],
"e": "Empezó en 4chan en 2007: un enlace al 'tráiler' de GTA IV llevaba en realidad al vídeo de Rick Astley de 1987."
},
{
"id": 154,
"c": "memes",
"d": 1,
"q": "¿De qué raza era Kabosu, la perra del meme Doge?",
"o": [
"Shiba Inu",
"Akita Inu",
"Corgi",
"Husky siberiano"
],
"e": "Su dueña, la japonesa Atsuko Sato, publicó la foto en 2010; el meme inspiró la criptomoneda Dogecoin en 2013."
},
{
"id": 155,
"c": "memes",
"d": 1,
"q": "¿De qué país son los portadores del ataúd del meme 'Coffin Dance'?",
"o": [
"Ghana",
"Nigeria",
"Sudáfrica",
"Kenia"
],
"e": "El grupo de Benjamin Aidoo se hizo viral en 2020 al combinarse con el tema 'Astronomia' de Tony Igy y Vicetone."
},
{
"id": 156,
"c": "memes",
"d": 1,
"q": "¿Cuántos segundos podían durar como máximo los vídeos de Vine?",
"o": [
"6",
"10",
"15",
"3"
],
"e": "Twitter compró Vine en 2012 antes incluso de su lanzamiento y la cerró en enero de 2017."
},
{
"id": 157,
"c": "memes",
"d": 2,
"q": "¿Qué vídeo fue el primero de YouTube en superar los 1.000 millones de visitas (2012)?",
"o": [
"Gangnam Style",
"Baby",
"Despacito",
"Charlie Bit My Finger"
],
"e": "PSY lo logró el 21 de diciembre de 2012; en 2014 incluso desbordó el contador de visitas de YouTube."
},
{
"id": 158,
"c": "memes",
"d": 2,
"q": "¿Con qué programa se dibujó originalmente la Trollface (2008)?",
"o": [
"Microsoft Paint",
"Photoshop",
"GIMP",
"Flash"
],
"e": "Carlos Ramírez la dibujó con 18 años; tras registrarla ha ingresado más de 100.000 dólares en licencias."
},
{
"id": 159,
"c": "memes",
"d": 2,
"q": "¿Quién acuñó la palabra 'meme' en 1976?",
"o": [
"Richard Dawkins",
"Carl Sagan",
"Marshall McLuhan",
"Stephen Hawking"
],
"e": "Apareció en 'El gen egoísta' y viene del griego 'mímema', 'cosa imitada'."
},
{
"id": 160,
"c": "memes",
"d": 2,
"q": "La campaña viral 'Amo a Laura' (2006) era en realidad publicidad de...",
"o": [
"MTV España",
"Cuatro",
"Los 40",
"Coca-Cola"
],
"e": "El grupo Los Happiness era ficticio: la agencia Tiempo BBDO montó hasta una falsa campaña para boicotear la cadena."
},
{
"id": 161,
"c": "memes",
"d": 2,
"q": "¿En qué videojuego nació el meme de 'Leeroy Jenkins'?",
"o": [
"World of Warcraft",
"Counter-Strike",
"Halo 2",
"Diablo II"
],
"e": "El vídeo de 2005 muestra a un jugador lanzándose solo a una sala de dragones y arruinando el plan de su grupo."
},
{
"id": 162,
"c": "memes",
"d": 2,
"q": "¿Con qué app se fusionó TikTok en agosto de 2018?",
"o": [
"Musical.ly",
"Vine",
"Dubsmash",
"Snapchat"
],
"e": "ByteDance ya había lanzado Douyin en China en 2016; al unirse con Musical.ly migró todas sus cuentas a TikTok."
},
{
"id": 163,
"c": "memes",
"d": 3,
"q": "¿En qué ciudad se hizo la foto del meme del 'novio distraído'?",
"o": [
"Girona",
"Barcelona",
"Milán",
"Valencia"
],
"e": "La tomó en 2015 el fotógrafo barcelonés Antonio Guillem como foto de stock para Shutterstock."
},
{
"id": 164,
"c": "memes",
"d": 3,
"q": "¿Cómo se llamaba Instagram antes de centrarse en las fotos?",
"o": [
"Burbn",
"Snapr",
"Pixtr",
"Kodiak"
],
"e": "Burbn era una app de check-in; Kevin Systrom y Mike Krieger la reconvirtieron y la lanzaron en octubre de 2010."
},
{
"id": 165,
"c": "memes",
"d": 3,
"q": "¿En qué foro español nació el meme 'Ola k ase' (2012)?",
"o": [
"ForoCoches",
"Menéame",
"Taringa",
"Cuánto Cabrón"
],
"e": "El post original combinaba fotos de una llama y dos perros con la frase; luego saltó a Twitter y Facebook."
},
{
"id": 166,
"c": "memes",
"d": 3,
"q": "¿En qué programa contó El Risitas su historia de las paellas?",
"o": [
"Ratones Coloraos",
"Crónicas Marcianas",
"El Hormiguero",
"Sé lo que hicisteis"
],
"e": "Lo presentaba Jesús Quintero en Canal Sur; Juan Joya contaba cómo la marea se llevó las paelleras de la playa."
},
{
"id": 167,
"c": "memes",
"d": 3,
"q": "¿Quién propuso el primer emoticono :-) en 1982?",
"o": [
"Scott Fahlman",
"Tim Berners-Lee",
"Ray Tomlinson",
"Steve Wozniak"
],
"e": "Lo publicó en el tablón electrónico de la Universidad Carnegie Mellon el 19 de septiembre de 1982."
},
{
"id": 168,
"c": "memes",
"d": 3,
"q": "¿De qué reality sale la mujer que grita en el meme 'mujer gritando a un gato'?",
"o": [
"Real Housewives",
"Las Kardashian",
"Jersey Shore",
"Gran Hermano VIP"
],
"e": "Es Taylor Armstrong en un episodio de 2011; el gato es Smudge, de Ottawa, cuya foto se subió a Tumblr en 2018."
},
{
"id": 169,
"c": "memes",
"d": 3,
"q": "¿Cuántos bitcoins pagó Laszlo Hanyecz por dos pizzas en 2010?",
"o": [
"10.000",
"1.000",
"100",
"50.000"
],
"e": "Fue el 22 de mayo de 2010 y es la primera compra famosa con bitcoin; cada 22 de mayo se celebra el Bitcoin Pizza Day."
},
{
"id": 170,
"c": "memes",
"d": 4,
"q": "¿De quién es la cara del emote 'Kappa' de Twitch?",
"o": [
"Un empleado de Justin.tv",
"El fundador de Twitch",
"Un actor de doblaje",
"Un streamer coreano"
],
"e": "Es Josh DeSeno, que en 2009 programaba el chat y metió como emote su propia foto de empleado en blanco y negro."
},
{
"id": 171,
"c": "memes",
"d": 4,
"q": "¿Cómo llamó su creador al gato que luego se conoció como Nyan Cat?",
"o": [
"Pop Tart Cat",
"Rainbow Cat",
"Space Kitty",
"Pixel Cat"
],
"e": "Christopher Torres lo publicó en 2011; en 2021 vendió el GIF original como NFT por 300 ether (unos 587.000 $)."
},
{
"id": 172,
"c": "memes",
"d": 4,
"q": "¿Cuántos emojis tenía el primer set de Shigetaka Kurita para NTT DoCoMo (1999)?",
"o": [
"176",
"64",
"250",
"99"
],
"e": "Aquel set original de 176 emojis forma parte de la colección del MoMA de Nueva York desde 2016."
},
{
"id": 173,
"c": "memes",
"d": 4,
"q": "¿Qué canción de Timbaland suena mezclada en el tema de Skibidi Toilet?",
"o": [
"Give It to Me",
"The Way I Are",
"Apologize",
"Promiscuous"
],
"e": "Es un mashup con 'Dom Dom Yes Yes' de Biser King; la serie de Alexey Gerasimov arrancó en febrero de 2023."
},
{
"id": 174,
"c": "memes",
"d": 4,
"q": "¿En qué webcomic apareció el perro del meme 'This is fine'?",
"o": [
"Gunshow",
"XKCD",
"Cyanide & Happiness",
"The Oatmeal"
],
"e": "KC Green publicó en 2013 la tira 'On Fire', donde un perro toma café tranquilo en una habitación en llamas."
},
{
"id": 175,
"c": "gaming",
"d": 1,
"q": "¿En qué ciudad ficticia, inspirada en Los Ángeles, transcurre GTA V?",
"o": [
"Los Santos",
"Liberty City",
"Vice City",
"San Fierro"
],
"e": "GTA V pasó de 1.000 millones de dólares en ventas en solo tres días, algo que ningún producto de ocio había logrado."
},
{
"id": 176,
"c": "gaming",
"d": 1,
"q": "¿Qué futbolista fue portada de EA Sports FC 24, el primero tras dejar el nombre FIFA?",
"o": [
"Erling Haaland",
"Kylian Mbappé",
"Lionel Messi",
"Jude Bellingham"
],
"e": "Salió en septiembre de 2023 y fue el primero en mezclar jugadoras y jugadores en Ultimate Team."
},
{
"id": 177,
"c": "gaming",
"d": 1,
"q": "¿Qué estudio desarrolla League of Legends?",
"o": [
"Riot Games",
"Blizzard",
"Valve",
"Epic Games"
],
"e": "Brandon Beck y Marc Merrill fundaron Riot en 2006 inspirados por DotA; LoL salió el 27 de octubre de 2009."
},
{
"id": 178,
"c": "gaming",
"d": 1,
"q": "¿Qué rapero dio un concierto en Fortnite en abril de 2020 ante unos 12 millones de jugadores?",
"o": [
"Travis Scott",
"Drake",
"Kanye West",
"Post Malone"
],
"e": "El evento se llamó 'Astronomical'; un año antes, el DJ Marshmello ya había reunido a millones dentro del juego."
},
{
"id": 179,
"c": "gaming",
"d": 2,
"q": "¿Cómo se llamaba Mario en su primera aparición, en Donkey Kong (1981)?",
"o": [
"Jumpman",
"Mr. Video",
"Plumberman",
"Super Boy"
],
"e": "Shigeru Miyamoto lo creó para el arcade de Donkey Kong, donde rescataba a una chica llamada Lady, luego Pauline."
},
{
"id": 180,
"c": "gaming",
"d": 2,
"q": "¿Qué intentaba crear Notch cuando, por un error, nació el Creeper?",
"o": [
"Un cerdo",
"Una araña",
"Un zombi",
"Una vaca"
],
"e": "Confundió alto y largo en el modelo: salió una criatura alta con cuatro patitas. 'Los Creepers fueron un error', admitió."
},
{
"id": 181,
"c": "gaming",
"d": 2,
"q": "¿Qué vendía Nintendo cuando se fundó en 1889?",
"o": [
"Cartas hanafuda",
"Juguetes de madera",
"Relojes",
"Máquinas recreativas"
],
"e": "Fusajiro Yamauchi la fundó en Kioto como Nintendo Koppai para fabricar naipes japoneses de flores."
},
{
"id": 182,
"c": "gaming",
"d": 2,
"q": "¿Cómo se llamaba Pac-Man originalmente en Japón?",
"o": [
"Puck Man",
"Paku Paku",
"Pizza Man",
"Munch Man"
],
"e": "Viene de 'paku paku', la onomatopeya japonesa de comer; Toru Iwatani lo creó para Namco en 1980."
},
{
"id": 183,
"c": "gaming",
"d": 2,
"q": "¿De qué juego empezó siendo un mod Counter-Strike?",
"o": [
"Half-Life",
"Quake",
"Doom",
"Unreal Tournament"
],
"e": "Lo crearon Minh Le y Jess Cliffe en 1999; Valve lo lanzó como producto comercial en noviembre de 2000."
},
{
"id": 184,
"c": "gaming",
"d": 2,
"q": "¿Con qué nombre se conocía Pro Evolution Soccer en Japón?",
"o": [
"Winning Eleven",
"Perfect Striker",
"J-League Soccer",
"Goal Storm"
],
"e": "Por falta de licencias, en PES 4 el Manchester United aparecía como 'Man Red'. En 2021 la saga pasó a ser eFootball."
},
{
"id": 185,
"c": "gaming",
"d": 3,
"q": "¿Qué equipo ganó el primer Mundial de League of Legends (2011)?",
"o": [
"Fnatic",
"SK Telecom T1",
"Taipei Assassins",
"Against All Authority"
],
"e": "Se jugó en la DreamHack de Jönköping (Suecia); Fnatic ganó 2-1 a Against All Authority en la final."
},
{
"id": 186,
"c": "gaming",
"d": 3,
"q": "¿Con qué campeón hizo xPeke su mítico backdoor ante SK Gaming en 2013?",
"o": [
"Kassadin",
"Katarina",
"Zed",
"Twisted Fate"
],
"e": "Fue en la IEM de Katowice: el murciano destruyó el nexo él solo con Fnatic, una de las jugadas más famosas de LoL."
},
{
"id": 187,
"c": "gaming",
"d": 3,
"q": "¿Qué secuencia del Código Konami debutó en el Gradius de NES (1986)?",
"o": [
"↑↑↓↓←→←→BA",
"↑↓↑↓←←→→AB",
"←→←→↑↑↓↓BA",
"↑↑↓↓→←→←AB"
],
"e": "Kazuhisa Hashimoto lo programó para hacer pruebas, porque el juego le parecía demasiado difícil."
},
{
"id": 188,
"c": "gaming",
"d": 3,
"q": "¿En honor de quién se llama Zelda la princesa de la saga?",
"o": [
"Zelda Fitzgerald",
"Zelda Rubinstein",
"Zelda Williams",
"Zelda Kaplan"
],
"e": "Miyamoto la llamó así por la escritora y pintora estadounidense, mujer de F. Scott Fitzgerald."
},
{
"id": 189,
"c": "gaming",
"d": 3,
"q": "¿En qué ordenador soviético se programó el primer Tetris?",
"o": [
"Elektronika 60",
"ZX Spectrum",
"Commodore 64",
"Amstrad CPC"
],
"e": "Alexéi Pázhitnov lo programó en Pascal a mediados de los 80 en el centro de cálculo de la Academia de Ciencias."
},
{
"id": 190,
"c": "gaming",
"d": 3,
"q": "¿Cuál fue el primer FIFA de la historia (1993)?",
"o": [
"FIFA International Soccer",
"FIFA Soccer 94",
"FIFA Road to World Cup",
"FIFA: Futbol Mundial"
],
"e": "Salió en diciembre de 1993 para Mega Drive. Ultimate Team llegaría mucho después, en FIFA 09, como contenido descargable."
},
{
"id": 191,
"c": "gaming",
"d": 3,
"q": "¿En qué juego de salón, además de la película 'La cosa', se inspiró Among Us?",
"o": [
"Mafia",
"Cluedo",
"Jungle Speed",
"Dixit"
],
"e": "Salió en 2018, pero explotó en 2020, cuando llegó a 3,8 millones de jugadores simultáneos."
},
{
"id": 192,
"c": "gaming",
"d": 4,
"q": "¿Quién ganó el primer Major de Counter-Strike 2 (Copenhague, 2024)?",
"o": [
"Natus Vincere",
"FaZe Clan",
"Team Vitality",
"G2 Esports"
],
"e": "NAVI ganó a FaZe en la final; el último Major de CS:GO, en París 2023, lo había ganado Vitality."
},
{
"id": 193,
"c": "gaming",
"d": 4,
"q": "¿Qué dos narradores ponían voz a PES 2008 en España?",
"o": [
"Rivero y Maldini",
"Lama y Paco González",
"C. Martínez y Á. Benito",
"J. J. Santos y Robinson"
],
"e": "Rivero cumplía su quinto año seguido en la saga y Julio Maldonado 'Maldini' llegó ese año como comentarista."
},
{
"id": 194,
"c": "gaming",
"d": 4,
"q": "El juego de Psyonix que precedió a Rocket League (2008) se llamaba 'Supersonic Acrobatic Rocket-Powered...'",
"o": [
"Battle-Cars",
"Soccer-Cars",
"Racing-Cars",
"Car-Ball"
],
"e": "Salió para PS3 en 2008. Rocket League se hizo gratuito en 2020, después de que Epic Games comprara Psyonix."
},
{
"id": 195,
"c": "gaming",
"d": 4,
"q": "¿Quién fue la primera portada de un NBA 2K (1999, Dreamcast)?",
"o": [
"Allen Iverson",
"Michael Jordan",
"Shaquille O'Neal",
"Kobe Bryant"
],
"e": "El primer NBA 2K, de Visual Concepts, salió en noviembre de 1999 para Dreamcast, la última consola de Sega."
},
{
"id": 196,
"c": "gaming",
"d": 4,
"q": "¿Qué equipo ganó la primera edición de Valorant Champions (Berlín, 2021)?",
"o": [
"Acend",
"Gambit Esports",
"Sentinels",
"LOUD"
],
"e": "Acend ganó 3-2 a Gambit en el Verti Music Hall; LOUD se llevó la siguiente edición, en Estambul en 2022."
},
{
"id": 197,
"c": "geo",
"d": 1,
"q": "¿Qué país rodea por completo a Gambia, salvo su costa atlántica?",
"o": [
"Senegal",
"Guinea",
"Mali",
"Mauritania"
],
"e": "Gambia es el país más pequeño de África continental: una franja estrecha a ambos lados del río que le da nombre."
},
{
"id": 198,
"c": "geo",
"d": 1,
"q": "Según su Constitución, ¿cuál es la capital de Bolivia, aunque el Gobierno tenga su sede en La Paz?",
"o": [
"Sucre",
"Cochabamba",
"Santa Cruz",
"Potosí"
],
"e": "Sucre alberga el Tribunal Supremo; el Ejecutivo y el Parlamento están en La Paz."
},
{
"id": 199,
"c": "geo",
"d": 1,
"q": "¿Qué país tiene la única bandera nacional que no es rectangular?",
"o": [
"Nepal",
"Bután",
"Suiza",
"Sri Lanka"
],
"e": "La bandera de Nepal tiene forma de pentágono: dos triángulos superpuestos. Suiza y el Vaticano la tienen cuadrada."
},
{
"id": 200,
"c": "geo",
"d": 1,
"q": "¿Cuál es el lago más profundo del mundo, con más de 1.600 metros?",
"o": [
"Baikal",
"Tanganica",
"Titicaca",
"Superior"
],
"e": "El Baikal, en Siberia, alcanza 1.642 m y guarda en torno a una quinta parte del agua dulce no helada del planeta."
},
{
"id": 201,
"c": "geo",
"d": 2,
"q": "¿A quién debe su nombre el Mulhacén, techo de la península ibérica?",
"o": [
"A un rey nazarí de Granada",
"A un general romano",
"A un geógrafo árabe",
"A un califa de Córdoba"
],
"e": "Viene de Muley Hacén, penúltimo rey nazarí. Según la leyenda, fue enterrado en su cumbre."
},
{
"id": 202,
"c": "geo",
"d": 2,
"q": "Brasil hace frontera con todos los países de Sudamérica excepto dos. ¿Cuáles?",
"o": [
"Chile y Ecuador",
"Chile y Uruguay",
"Ecuador y Paraguay",
"Perú y Chile"
],
"e": "Pese a ocupar casi media Sudamérica, Brasil no toca ni a Chile ni a Ecuador."
},
{
"id": 203,
"c": "geo",
"d": 2,
"q": "¿Cuál es el país sin salida al mar más extenso del mundo?",
"o": [
"Kazajistán",
"Mongolia",
"Chad",
"Bolivia"
],
"e": "Kazajistán supera los 2,7 millones de km². Baña el Caspio, pero ese es un mar cerrado sin salida al océano."
},
{
"id": 204,
"c": "geo",
"d": 2,
"q": "¿Qué municipio español es un enclave completamente rodeado por Francia?",
"o": [
"Llívia",
"Puigcerdà",
"Bossòst",
"Isaba"
],
"e": "El Tratado de los Pirineos (1659) cedía a Francia las «villas», pero Llívia tenía rango de ciudad y siguió siendo española."
},
{
"id": 205,
"c": "geo",
"d": 2,
"q": "¿Qué provincia española tiene más municipios, con 371?",
"o": [
"Burgos",
"Salamanca",
"Guadalajara",
"Soria"
],
"e": "Burgos encabeza la lista; muchos de sus municipios tienen apenas unas decenas de habitantes."
},
{
"id": 206,
"c": "geo",
"d": 2,
"q": "¿Qué país usa más husos horarios, contando sus territorios de ultramar?",
"o": [
"Francia",
"Rusia",
"Estados Unidos",
"Reino Unido"
],
"e": "Francia usa 12 husos (13 con su reclamación antártica) gracias a territorios desde la Polinesia hasta Reunión."
},
{
"id": 207,
"c": "geo",
"d": 3,
"q": "¿Qué ciudad dejó de ser la capital de Myanmar en 2005, al trasladarse el gobierno a Naipyidó?",
"o": [
"Rangún",
"Mandalay",
"Bagan",
"Mawlamyine"
],
"e": "Naipyidó se construyó casi desde cero en el interior del país y se convirtió en capital administrativa en noviembre de 2005."
},
{
"id": 208,
"c": "geo",
"d": 3,
"q": "El Condado de Treviño pertenece a Burgos, pero ¿qué provincia lo rodea por completo?",
"o": [
"Álava",
"La Rioja",
"Navarra",
"Cantabria"
],
"e": "Treviño es un enclave castellano y leonés dentro del País Vasco, a pocos kilómetros de Vitoria."
},
{
"id": 209,
"c": "geo",
"d": 3,
"q": "¿Cuánto mide la frontera terrestre entre el Peñón de Vélez de la Gomera y Marruecos?",
"o": [
"85 metros",
"850 metros",
"8,5 kilómetros",
"25 metros"
],
"e": "Es el tramo de frontera terrestre más corto del mundo. Se creó en 1930, cuando una tormenta unió el islote a la costa con arena."
},
{
"id": 210,
"c": "geo",
"d": 3,
"q": "Las islas Diómedes (Rusia y EE. UU.) están a unos 4 km. ¿Cuántas horas de diferencia horaria tienen?",
"o": [
"21 horas",
"12 horas",
"3 horas",
"24 horas"
],
"e": "Entre ellas pasa la línea internacional de cambio de fecha. Por eso las apodan «isla del mañana» e «isla del ayer»."
},
{
"id": 211,
"c": "geo",
"d": 3,
"q": "¿Qué isla del Bidasoa pasa de administración española a francesa cada seis meses?",
"o": [
"Isla de los Faisanes",
"Isla de Santa Clara",
"Isla de Mouro",
"Isla de Izaro"
],
"e": "Es un condominio hispanofrancés: España la administra de febrero a julio y Francia de agosto a enero."
},
{
"id": 212,
"c": "geo",
"d": 3,
"q": "¿Qué país lleva un fusil AK-47 en su bandera nacional?",
"o": [
"Mozambique",
"Angola",
"Zimbabue",
"Eritrea"
],
"e": "El fusil, con la bayoneta calada, aparece cruzado con una azada y un libro. Es la única bandera nacional con un arma de fuego moderna."
},
{
"id": 213,
"c": "geo",
"d": 3,
"q": "Por el abultamiento del ecuador, ¿qué cima es el punto de la superficie más alejado del centro de la Tierra?",
"o": [
"Chimborazo",
"Everest",
"Aconcagua",
"Kilimanjaro"
],
"e": "La cumbre de este volcán ecuatoriano está unos 2 km más lejos del centro de la Tierra que la del Everest."
},
{
"id": 214,
"c": "geo",
"d": 4,
"q": "Solo dos países están doblemente rodeados de tierra. Uno es Liechtenstein. ¿Cuál es el otro?",
"o": [
"Uzbekistán",
"Turkmenistán",
"Kirguistán",
"Afganistán"
],
"e": "Doblemente sin litoral significa que todos sus vecinos tampoco tienen salida al mar: para llegar a la costa hay que cruzar dos fronteras."
},
{
"id": 215,
"c": "geo",
"d": 4,
"q": "¿Qué territorio entre Egipto y Sudán no reclama ninguno de los dos países?",
"o": [
"Bir Tawil",
"Triángulo de Hala'ib",
"Ogadén",
"Abyei"
],
"e": "Por dos fronteras trazadas en 1899 y 1902, ambos reclaman el vecino Hala'ib y renuncian a Bir Tawil."
},
{
"id": 216,
"c": "geo",
"d": 4,
"q": "¿Qué país independiente está entero por encima de los 1.000 m, con su punto más bajo a 1.400 m?",
"o": [
"Lesoto",
"Bután",
"Andorra",
"Nepal"
],
"e": "Lesoto, enclavado en Sudáfrica, tiene el punto más bajo más alto de cualquier país del mundo."
},
{
"id": 217,
"c": "geo",
"d": 4,
"q": "¿De qué comunidad autónoma es enclave el Rincón de Ademuz, situado entre Cuenca y Teruel?",
"o": [
"Comunitat Valenciana",
"Aragón",
"Castilla-La Mancha",
"Región de Murcia"
],
"e": "Esta comarca valenciana queda separada del resto de la provincia de Valencia por municipios de Cuenca y de Teruel."
},
{
"id": 218,
"c": "geo",
"d": 4,
"q": "¿Qué municipio tiene la capital municipal más alta de España, a unos 1.695 m?",
"o": [
"Valdelinares",
"Trevélez",
"Griegos",
"Navarredonda de Gredos"
],
"e": "Este pueblo turolense supera a Trevélez, famoso por presumir de altura. Pradollano está más alto, pero no es capital municipal."
},
{
"id": 219,
"c": "cine",
"d": 1,
"q": "¿Por qué película ganó Javier Bardem el Óscar al mejor actor de reparto?",
"o": [
"No es país para viejos",
"Biutiful",
"Skyfall",
"Antes que anochezca"
],
"e": "Interpretaba al asesino Anton Chigurh, famoso por su pistola de aire comprimido y su peinado. Fue en la gala de 2008."
},
{
"id": 220,
"c": "cine",
"d": 1,
"q": "¿Con qué canción ganó Massiel Eurovisión en 1968?",
"o": [
"La, la, la",
"Vivo cantando",
"Eres tú",
"Bailemos un vals"
],
"e": "España ganó por un solo punto a «Congratulations» de Cliff Richard, en el Royal Albert Hall de Londres."
},
{
"id": 221,
"c": "cine",
"d": 1,
"q": "¿Para qué película escribió Survivor «Eye of the Tiger»?",
"o": [
"Rocky III",
"Rocky IV",
"Karate Kid",
"Top Gun"
],
"e": "Stallone encargó la canción porque Queen no le dejó usar «Another One Bites the Dust»."
},
{
"id": 222,
"c": "cine",
"d": 1,
"q": "¿Qué dúo sevillano grabó la «Macarena», que estuvo 14 semanas número uno en EE. UU. en 1996?",
"o": [
"Los del Río",
"Los Chunguitos",
"Azúcar Moreno",
"Estopa"
],
"e": "La que llegó al número uno del Billboard Hot 100 fue la remezcla de los Bayside Boys. Fue la canción del año 1996 en EE. UU."
},
{
"id": 223,
"c": "cine",
"d": 2,
"q": "La palabra «paparazzi» viene del apellido de un fotógrafo de ficción. ¿En qué película aparecía?",
"o": [
"La dolce vita",
"Roma, ciudad abierta",
"Ocho y medio",
"Vacaciones en Roma"
],
"e": "El fotógrafo Paparazzo, de la película de Fellini de 1960, acabó dando nombre a todo el gremio."
},
{
"id": 224,
"c": "cine",
"d": 2,
"q": "¿Qué película de terror usó el arranque de «Tubular Bells», de Mike Oldfield?",
"o": [
"El exorcista",
"La profecía",
"Halloween",
"El resplandor"
],
"e": "Fue además el primer disco que publicó Virgin Records, en mayo de 1973."
},
{
"id": 225,
"c": "cine",
"d": 2,
"q": "¿En qué provincia se construyó el cementerio de Sad Hill de «El bueno, el feo y el malo»?",
"o": [
"Burgos",
"Almería",
"Granada",
"Soria"
],
"e": "Está junto a Santo Domingo de Silos y lo levantaron soldados españoles. Unos fans lo restauraron décadas después."
},
{
"id": 226,
"c": "cine",
"d": 2,
"q": "¿Qué película tiene el récord de premios Goya, con 14?",
"o": [
"Mar adentro",
"Ay, Carmela!",
"El laberinto del fauno",
"Los otros"
],
"e": "La película de Amenábar sobre Ramón Sampedro también ganó el Óscar a la mejor película de habla no inglesa."
},
{
"id": 227,
"c": "cine",
"d": 2,
"q": "¿Dónde tocaron los Beatles en Madrid, en julio de 1965?",
"o": [
"Plaza de toros de Las Ventas",
"Estadio Santiago Bernabéu",
"Palacio de los Deportes",
"Estadio Vicente Calderón"
],
"e": "Tocaron el 2 de julio en Las Ventas y al día siguiente en La Monumental de Barcelona. No volvieron a España."
},
{
"id": 228,
"c": "cine",
"d": 2,
"q": "¿Qué videoclip fue el primero que emitió MTV, el 1 de agosto de 1981?",
"o": [
"Video Killed the Radio Star",
"Thriller",
"Money for Nothing",
"Don't You Want Me"
],
"e": "El tema de The Buggles sonó a las 12:01 de la madrugada. Su título encajaba a la perfección con el estreno."
},
{
"id": 229,
"c": "cine",
"d": 3,
"q": "Cuando «Al otro lado del río» de Drexler ganó el Óscar, ¿quiénes la cantaron en la gala?",
"o": [
"Antonio Banderas y Santana",
"Jorge Drexler y Shakira",
"Juanes y Alejandro Sanz",
"Enrique Iglesias y Santana"
],
"e": "La Academia no dejó cantar a Drexler, que al recoger el premio respondió cantando unos versos. Fue la primera canción en español en ganar."
},
{
"id": 230,
"c": "cine",
"d": 3,
"q": "El estribillo del «Aserejé» de Las Ketchup imita fonéticamente a un clásico del hip hop. ¿Cuál?",
"o": [
"Rapper's Delight",
"The Message",
"Walk This Way",
"Planet Rock"
],
"e": "La palabra no significa nada: es la versión chapurreada del tema de The Sugarhill Gang que canta el personaje de la letra."
},
{
"id": 231,
"c": "cine",
"d": 3,
"q": "¿Para qué instrumento compuso Isaac Albéniz «Asturias (Leyenda)», hoy famosa en guitarra?",
"o": [
"Piano",
"Guitarra",
"Violín",
"Arpa"
],
"e": "Era una pieza para piano. Las transcripciones para guitarra la convirtieron en un clásico del repertorio guitarrístico."
},
{
"id": 232,
"c": "cine",
"d": 3,
"q": "¿Qué película ganó el Goya a la mejor película en la primera edición de los premios, en 1987?",
"o": [
"El viaje a ninguna parte",
"El bosque animado",
"La vaquilla",
"Los santos inocentes"
],
"e": "La dirigió Fernando Fernán Gómez y cuenta la vida de una compañía de cómicos ambulantes en la España de posguerra."
},
{
"id": 233,
"c": "cine",
"d": 3,
"q": "¿Cuál fue la primera película española en ganar el Óscar a la mejor película extranjera?",
"o": [
"Volver a empezar",
"Belle Époque",
"Bienvenido, Mister Marshall",
"Los santos inocentes"
],
"e": "La ganó José Luis Garci en 1983. Después la siguieron Belle Époque, Todo sobre mi madre y Mar adentro."
},
{
"id": 234,
"c": "cine",
"d": 3,
"q": "¿Quién iba a cantar «La, la, la» en Eurovisión 1968 antes de que lo sustituyera Massiel?",
"o": [
"Joan Manuel Serrat",
"Raphael",
"Julio Iglesias",
"Karina"
],
"e": "Serrat quería cantarla en catalán y lo apartaron. Massiel, que estaba de gira por México, volvió a toda prisa."
},
{
"id": 235,
"c": "cine",
"d": 4,
"q": "El famoso «grito Wilhelm» debe su nombre a un soldado de una película. ¿Cuál?",
"o": [
"The Charge at Feather River",
"Distant Drums",
"Río Bravo",
"Fort Apache"
],
"e": "Se grabó para Distant Drums (1951), pero se bautizó por el soldado Wilhelm de esta película de 1953. Ben Burtt lo recuperó para Star Wars."
},
{
"id": 236,
"c": "cine",
"d": 4,
"q": "¿Cuál fue la primera película en lengua no inglesa nominada al Óscar a la mejor película?",
"o": [
"La gran ilusión",
"Metrópolis",
"El séptimo sello",
"Ladrón de bicicletas"
],
"e": "La película de Jean Renoir sobre prisioneros de la Primera Guerra Mundial estuvo nominada en la gala de 1939."
},
{
"id": 237,
"c": "cine",
"d": 4,
"q": "«El mal querer» de Rosalía nació como trabajo de fin de grado. ¿En qué obra medieval se inspira?",
"o": [
"Flamenca",
"El cantar de mio Cid",
"La Celestina",
"El libro de buen amor"
],
"e": "«Flamenca» es una novela occitana anónima del siglo XIII sobre una esposa a la que encierra su marido celoso."
},
{
"id": 238,
"c": "cine",
"d": 4,
"q": "¿Qué escultor diseñó la primera estatuilla de los premios Goya, que era desmontable?",
"o": [
"Miguel Ortiz Berrocal",
"Eduardo Chillida",
"Pablo Serrano",
"Jorge Oteiza"
],
"e": "Aquel primer busto de Goya pesaba unos 15 kg y se podía desmontar en piezas. Después se cambió por otro diseño."
},
{
"id": 239,
"c": "cine",
"d": 4,
"q": "Eurovisión 1969 se celebró en Madrid y terminó en un empate inédito. ¿Cuántos países ganaron?",
"o": [
"Cuatro",
"Dos",
"Tres",
"Cinco"
],
"e": "España (Salomé), Reino Unido, Países Bajos y Francia empataron a 18 votos y se declararon ganadores a los cuatro."
},
{
"id": 240,
"c": "cine",
"d": 3,
"q": "¿Qué película de 1992 devolvió «Bohemian Rhapsody» a las listas de EE. UU. con una escena en un coche?",
"o": [
"Wayne's World",
"Mira quién habla",
"Solo en casa",
"Bill y Ted"
],
"e": "La escena de los cabezazos llevó el tema de Queen al número dos del Billboard, 16 años después de su estreno."
}
];
export default Q;
