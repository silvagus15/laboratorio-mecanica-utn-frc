const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".main-nav");
const views = document.querySelectorAll(".view");
const searchInputs = document.querySelectorAll(".element-search-input");
const catalogChoice = document.getElementById("catalogChoice");
const catalogBrowser = document.getElementById("catalogBrowser");
const catalogBack = document.getElementById("catalogBack");

const catalogItems = [
  {
    id: "bomba-hidraulica",
    name: "Bomba hidráulica",
    image: "img_piezas/bomba_hidraulica_1.jpeg",
    images: [
      "img_piezas/bomba_hidraulica_2.jpeg",
      "img_piezas/bomba_hidraulica_partes.png"
    ],
    what: "Máquina que transforma energía mecánica en energía hidráulica para impulsar un fluido líquido.",
    purpose: "Suministrar y presurizar el aceite hidráulico para generar el caudal necesario en un circuito, permitiendo la transmisión de potencia para levantar grandes cargas en maquinaria pesada o sistemas industriales como excavadoras, tractores y brazos robóticos."
  },
  {
    id: "bomba-aceite",
    name: "Bomba de aceite",
    image: "img_piezas/bomba_aceite_2.jpeg",
    images: [
      "img_piezas/bomba_aceite_1.jpeg",
      "img_piezas/bomba_aceite_partes.png"
    ],
    what: "Componente del motor encargado de hacer circular el aceite por todo el sistema de lubricación.",
    purpose: "Suministrar y distribuir aceite a presión a las distintas partes móviles del motor para reducir la fricción, minimizar el desgaste mecánico y contribuir al control de la temperatura interna de la máquina."
  },
  {
    id: "compresor-aire-acondicionado",
    name: "Compresor de A/C",
    image: "img_piezas/compresor_ac_3.jpeg",
    images: [
      "img_piezas/compresor_ac_1.jpeg",
      "img_piezas/compresor_ac_2.jpeg",
      "img_piezas/compresor_ac_4.jpeg",
      "img_piezas/compresor_ac_5.jpeg",
      "img_piezas/compresor_ac_6.jpeg",
      "img_piezas/compresor_ac_7.jpeg",
      "img_piezas/compresor_ac_8.jpeg",
      "img_piezas/compresor_ac_partes.png"
    ],
    what: "Componente del sistema de aire acondicionado que utiliza un conjunto de pistones dispuestos de forma axial para comprimir y hacer circular el fluido refrigerante.",
    purpose: "Elevar la presión y temperatura del gas refrigerante para impulsarlo a través del circuito cerrado, permitiendo el ciclo termodinámico necesario para absorber el calor y enfriar el habitáculo del vehículo."
  },
  {
    id: "bomba-agua",
    name: "Bomba de agua",
    image: "img_piezas/bomba_agua_automotriz_2.jpeg",
    images: [
      "img_piezas/bomba_agua_automotriz_1.jpeg",
      "img_piezas/bomba_agua_automotriz_3.jpeg",
      "img_piezas/bomba_agua_automotriz_partes.png"
    ],
    what: "Máquina hidráulica encargada de impulsar y hacer circular el líquido refrigerante a través del sistema de enfriamiento del motor.",
    purpose: "Transportar el fluido refrigerante entre los conductos internos del bloque del motor y el radiador para disipar el calor excesivo, manteniendo la temperatura óptima de operación y evitando sobrecalentamientos."
  },
  {
    id: "alternador",
    name: "Alternador",
    image: "img_piezas/alternador_2.jpeg",
    images: [
      "img_piezas/alternador_1.jpeg",
      "img_piezas/alternador_3.jpeg",
      "img_piezas/alternador_partes.jpg"
    ],
    videos: ["vid_piezas/alternador_video.gif"],
    what: "Máquina eléctrica rotativa que transforma la energía mecánica del motor de combustión en energía eléctrica mediante inducción electromagnética.",
    purpose: "Suministrar corriente eléctrica a todos los sistemas, sensores y accesorios del vehículo mientras el motor está en marcha, recargando continuamente la batería para mantenerla en su nivel óptimo."
  },
  {
    id: "tubo-llama",
    name: "Tubo de llama",
    image: "img_piezas/tubo_llama_2.jpeg",
    images: [
      "img_piezas/tubo_llama_1.jpeg",
      "img_piezas/tubo_llama_3.jpeg",
      "img_piezas/tubo_llama_partes.jpg"
    ],
    what: "Revestimiento o camisa interior de alta resistencia térmica que conforma la cámara de combustión en turbinas de gas y motores a reacción.",
    purpose: "Confinar, estabilizar y dirigir la combustión continua a temperaturas extremas, protegiendo la estructura externa del motor y canalizando los gases calientes a alta velocidad hacia la turbina."
  },
  {
    id: "rotor-compresor-axial",
    name: "Rotor de compresor axial",
    image: "img_piezas/rotor_axial_1.jpeg",
    images: [
      "img_piezas/rotor_axial_2.jpeg",
      "img_piezas/rotor_axial_3.jpeg"
    ],
    videos: ["vid_piezas/rotor_axial_video.gif"],
    what: "Conjunto rotativo de una turbomáquina compuesto por un eje central dotado de múltiples filas o etapas de álabes móviles.",
    purpose: "Acelerar e impartir energía cinética al flujo de aire que entra de forma paralela al eje, contribuyendo a su compresión continua a través de las etapas sucesivas del compresor."
  },
  {
    id: "manguito-fijacion",
    name: "Manguito de fijación",
    image: "img_piezas/manguito_fijacion_1.jpeg",
    images: [
      "img_piezas/manguito_fijacion_2.jpeg",
      "img_piezas/manguito_fijacion_partes1.avif",
      "img_piezas/manguito_fijacion_partes2.jpg"
    ],
    what: "Elemento mecánico de montaje utilizado para posicionar y sujetar componentes sobre un eje de transmisión.",
    purpose: "Asegurar la fijación rígida de piezas como rodamientos o poleas sobre el eje, transmitiendo los esfuerzos mecánicos y evitando desplazamientos o vibraciones durante el funcionamiento."
  },
  {
    id: "crapodina",
    name: "Crapodina",
    image: "img_piezas/crapodina_1.jpeg",
    images: [
      "img_piezas/crapodina_2.jpeg",
      "img_piezas/crapodina_3.jpg",
      "img_piezas/crapodina_4.png"
    ],
    what: "Componente del sistema de embrague de un vehículo, también llamado rulemán o collarín de empuje del embrague.",
    purpose: "Accionar el embrague, presionando el diafragma o mecanismo de presión para separar el motor de la caja de cambios cuando se pisa el pedal."
  },
  {
    id: "electrobomba-hidraulica",
    name: "Electrobomba hidráulica",
    image: "img_piezas/electrobomba_hidra_2.jpeg",
    images: [
      "img_piezas/electrobomba_hidra_1.jpeg",
      "img_piezas/electrobomba_hidra_piezacomercial.png"
    ],
    what: "Unidad compacta formada por un motor eléctrico acoplado a una bomba hidráulica.",
    purpose: "Utilizar electricidad para impulsar un fluido hidráulico a presión y hacer funcionar los movimientos o mecanismos de máquinas industriales y tornos CNC."
  },
  {
    id: "bomba-nafta",
    name: "Bomba de nafta",
    image: "img_piezas/bomba_nafta_1.jpeg",
    images: [
      "img_piezas/bomba_nafta_2.jpeg",
      "img_piezas/bomba_nafta_partes.jpg"
    ],
    what: "Componente del sistema de alimentación encargado de llevar el combustible desde el tanque hacia el motor (en la imagen principal se visualiza una bomba particularmente muy usada en los autos modelo Torino).",
    purpose: "Enviar un caudal constante y justo de combustible al motor con la presión necesaria para que el auto arranque y funcione correctamente."
  },
  {
    id: "turbocompresor",
    name: "Turbocompresor",
    image: "img_piezas/turbocompresor_4.jpeg",
    images: [
      "img_piezas/turbocompresor_1.jpeg",
      "img_piezas/turbocompresor_2.jpeg",
      "img_piezas/turbocompresor_3.jpeg",
      "img_piezas/turbocompresor_funcionamiento.png",
      "img_piezas/turbocompresor_partes.png"
    ],
    what: "Sistema de sobrealimentación que aprovecha la energía de los gases de escape para comprimir aire limpio e introducirlo a presión dentro del motor (el modelo en particular de la imagen principal se utiliza en motores Perkins para vehículos y maquinaria de trabajo).",
    purpose: "Aumentar la cantidad de oxígeno que ingresa a los cilindros para generar una combustión más eficiente, incrementando la potencia, el rendimiento y la fuerza del motor sin necesidad de aumentar su tamaño."
  },
  {
    id: "diferencial",
    name: "Diferencial",
    image: "img_piezas/diferencial.jpeg",
    images: ["img_piezas/diferencial_partes.jpg"],
    videos: ["vid_piezas/diferencial_video.mp4"],
    what: "Mecanismo de engranajes del sistema de transmisión encargado de transferir la fuerza del motor hacia las ruedas motrices (el modelo de la imagen principal fue utilizado en el histórico Ford Falcon).",
    purpose: "Transmitir el movimiento permitiendo que las ruedas giren a distintas velocidades al doblar (la rueda exterior recorre más distancia que la interior), evitando que el auto patine y garantizando estabilidad en las curvas."
  },
  {
    id: "caja-cambios",
    name: "Caja de cambios",
    image: "img_piezas/caja_cambios_2.jpeg",
    images: [
      "img_piezas/caja_cambios_1.jpeg",
      "img_piezas/caja_cambios_partes.jpg"
    ],
    videos: ["vid_piezas/caja_cambios_video.mp4"],
    what: "Conjunto de engranajes y mecanismos del sistema de transmisión encargado de administrar la fuerza y la velocidad provenientes del motor.",
    purpose: "Seleccionar diferentes relaciones de marcha para adaptar el torque y la velocidad del vehículo según las necesidades de conducción."
  },
  {
    id: "ciguenal",
    name: "Cigüeñal",
    image: "img_piezas/cigueñal_1.jpeg",
    images: ["img_piezas/cigueñal_partes.jpg"],
    videos: ["vid_piezas/cigueñal_video.gif"],
    what: "Eje principal del motor encargado de transformar el movimiento lineal de subida y bajada de los pistones en un movimiento rotativo continuo.",
    purpose: "Recibir la fuerza de las explosiones de los cilindros para transmitir esa energía de giro hacia la caja de cambios y las ruedas, impulsando el movimiento del vehículo."
  },
  {
    id: "arbol-levas",
    name: "Árbol de levas",
    image: "img_piezas/arbol_levas_1.jpeg",
    images: ["img_piezas/arbol_levas_partes.jpg"],
    videos: ["vid_piezas/arbol_levas_video.gif"],
    what: "Eje mecánico provisto de salientes ovaladas (levas) sincronizado con el giro del motor para empujar y accionar las válvulas.",
    purpose: "Regular con máxima precisión el momento exacto y el tiempo que permanecen abiertas y cerradas las válvulas de admisión (entrada de aire y combustible) y escape (salida de gases quemados)."
  },
  {
    id: "piston",
    name: "Pistón",
    image: "img_piezas/piston_1.jpeg",
    images: [],
    what: "Pieza móvil de forma cilíndrica ubicada dentro del bloque del motor, diseñada para desplazarse verticalmente a alta velocidad.",
    purpose: "Recibir directamente el empuje de los gases generados durante la combustión y transmitir esa fuerza hacia la biela para iniciar la transformación del movimiento en el motor."
  },
  {
    id: "biela",
    name: "Biela",
    image: "img_piezas/bielas_1.jpeg",
    images: ["img_piezas/biela_partes.jpeg"],
    what: "Brazo articulado de alta resistencia mecánica que conecta el pistón con el muñón del cigüeñal.",
    purpose: "Transmitir la fuerza generada en el pistón hacia el cigüeñal, actuando como eslabón intermediario para convertir el movimiento lineal de subida y bajada en rotación continua."
  },
  {
    id: "conjunto-piston-biela",
    name: "Conjunto pistón-biela",
    image: "img_piezas/piston_biela_1.jpeg",
    images: ["img_piezas/piston_biela_partes.jpeg"],
    videos: ["vid_piezas/piston_biela_video.gif"],
    what: "Subconjunto mecánico integrado por el pistón, su perno pasador y la biela articulada que los conecta al cigüeñal.",
    purpose: "Trabajar como una sola unidad cinemática para recibir el empuje de los gases de combustión y transferir esa fuerza directamente hacia el cigüeñal, transformando el movimiento lineal en giro del motor."
  },
  {
    id: "rodamiento",
    name: "Rodamiento",
    image: "img_piezas/rodamientos_1.jpeg",
    images: ["img_piezas/rodamientos_partes.jpeg"],
    videos: ["vid_piezas/rodamientos_video.gif"],
    what: "Componente mecánico de precisión compuesto por pistas de rodadura y elementos rodantes (como bolas o rodillos) ubicado entre un eje giratorio y su soporte fijo.",
    purpose: "Guiar y facilitar el movimiento rotativo reduciendo la fricción y el desgaste al mínimo, además de absorber y soportar las cargas mecánicas generadas durante el funcionamiento."
  },
  {
    id: "fresa-madre",
    name: "Fresa madre",
    image: "img_piezas/fresa_madre_1.jpeg",
    images: ["img_piezas/fresa_madre_partes.jpeg"],
    what: "Herramienta de corte utilizada en fresadoras y talladoras de engranajes.",
    purpose: "Tallar y dar forma precisa a los dientes de engranajes y ruedas dentadas mediante un proceso continuo y coordinado de corte y rotación sincronizada con la pieza."
  },
  {
    id: "bomba-paletas",
    name: "Bomba de paletas",
    image: "img_piezas/bomba_paletas_2.jpeg",
    images: [
      "img_piezas/bomba_paletas_1.jpeg",
      "img_piezas/bomba_paletas_partes.jpeg"
    ],
    videos: ["vid_piezas/bomba_paletas_video.mp4"],
    what: "Bomba hidráulica formada por un rotor ranurado con paletas deslizantes que giran dentro de una cavidad.",
    purpose: "Impulsar fluido hidráulico con un caudal continuo y silencioso, entregando la presión necesaria para accionar cilindros, motores hidráulicos y diversos actuadores del circuito."
  },
  {
    id: "valvula-direccional",
    name: "Válvula direccional",
    image: "img_piezas/valvula_direccional.jpeg",
    images: [
      "img_piezas/valvula_direccional_partes.webp",
      "img_piezas/valvula_direccional_partes_1.jpg",
      "img_piezas/valvula_direccional_partes_2.png"
    ],
    what: "Válvula de control direccional que utiliza un carrete o corredera interna deslizante para abrir, cerrar y comunicar distintos conductos hidráulicos.",
    purpose: "Dirigir y desviar el flujo de fluido a presión hacia diferentes partes del circuito, permitiendo comandar movimientos específicos como el avance, retroceso o detención de cilindros y motores hidráulicos."
  },
  {
    id: "compresor-lobulos",
    name: "Compresor de lóbulos",
    image: "img_piezas/compresor_lobulos_2.jpeg",
    images: [
      "img_piezas/compresor_lobulos_1.jpeg",
      "img_piezas/compresor_lobulos_partes.jpg"
    ],
    videos: ["vid_piezas/compresor_lobulos_video.gif"],
    what: "Máquina de desplazamiento positivo equipada con dos rotores sincronizados en forma de lóbulos (o figura de \"8\") que giran en sentidos opuestos sin llegar a rozarse entre sí.",
    purpose: "Atrapar grandes volúmenes de aire o gas entre los lóbulos y la carcasa para impulsarlos de forma continua y aumentar su presión, entregando un flujo comprimido hacia motores y sistemas industriales."
  },
  {
    id: "manometro-tubo-bourdon",
    name: "Manómetro de tubo Bourdon",
    image: "img_piezas/manometro_1.jpeg",
    images: [
      "img_piezas/manometro_2.jpeg",
      "img_piezas/manometro_partes.jpeg"
    ],
    videos: ["vid_piezas/manometro_video.gif"],
    what: "Instrumento de aguja diseñado para medir la presión de líquidos o gases (como aire, agua o aceite) dentro de un circuito o tanque.",
    purpose: "Mostrar de forma visual y en tiempo real el nivel de presión del sistema para controlar que funcione de manera segura y dentro de los límites correctos."
  },
  {
    id: "medidor-gas",
    name: "Medidor de gas",
    image: "img_piezas/medidor_gas_1.jpeg",
    images: ["img_piezas/medidor_gas_partes.jpeg"],
    what: "Dispositivo de medición instalado en cañerías para contabilizar el volumen de gas que circula a través de una instalación.",
    purpose: "Registrar de forma acumulada y precisa el consumo de gas a lo largo del tiempo, permitiendo controlar y medir el uso en hogares, comercios o industrias."
  },
  {
    id: "purgador-condensado",
    name: "Purgador de condensado",
    image: "img_piezas/purgador_1.jpeg",
    images: [
      "img_piezas/purgador_2.jpeg",
      "img_piezas/purgador_partes.png"
    ],
    what: "Dispositivo de drenaje instalado en tuberías, filtros y tanques de sistemas de aire comprimido para evacuar el agua y aceites acumulados por la humedad del ambiente.",
    purpose: "Expulsar automáticamente los líquidos condensados del circuito para evitar la formación de óxido y corrosión en las herramientas y máquinas conectadas."
  },
  {
    id: "trampa-agua",
    name: "Trampa de agua",
    image: "img_piezas/trampa_agua_1.jpeg",
    images: [
      "img_piezas/trampa_agua_2.jpg",
      "img_piezas/trampa_agua_3.jpg"
    ],
    what: "Dispositivo filtrante instalado en la línea de aire comprimido diseñado para interceptar el flujo y retener las gotas de agua y humedad suspendidas.",
    purpose: "Retener el agua presente en el aire comprimido para que no llegue a las herramientas, evitando la formación de óxido y desgaste en los componentes."
  },
  {
    id: "valvula-anti-retorno",
    name: "Válvula anti retorno",
    image: "img_piezas/valvula_antiretorno_1.jpeg",
    images: ["img_piezas/valvula_antiretorno_2.jpg"],
    videos: ["vid_piezas/valvula_antiretorno_video.gif"],
    what: "Válvula automática diseñada para permitir el paso libre de un fluido en una sola dirección y cerrarse de forma instantánea si el flujo intenta retroceder.",
    purpose: "Evitar el retroceso del fluido en el circuito, protegiendo bombas y componentes sensibles contra golpes de presión o pérdidas de carga cuando el sistema se detiene."
  },
  {
    id: "medidor-agua",
    name: "Medidor de agua",
    image: "img_piezas/medidor_agua_1.jpeg",
    images: [
      "img_piezas/medidor_agua_2.png",
      "img_piezas/medidor_agua_partes.webp"
    ],
    what: "Dispositivo de medición instalado en cañerías para contabilizar el volumen de agua potable o de proceso que circula a través de una instalación.",
    purpose: "Registrar de forma continua y acumulada el consumo de agua a lo largo del tiempo, permitiendo medir y gestionar el uso del suministro en hogares, comercios o industrias."
  },
  {
    id: "valvula-esclusa",
    name: "Válvula esclusa",
    image: "img_piezas/valvula_esclusa_1_1_4.jpeg",
    images: [
      "img_piezas/valvula_esclusa_1_1_4_2.webp",
      "img_piezas/valvula_esclusa_2.jpeg",
      "img_piezas/valvula_esclusa_2_2.webp",
      "img_piezas/valvula_esclusa_partes.jpg"
    ],
    what: "Válvula de corte para cañerías que cuenta con una compuerta o disco interno que sube y baja verticalmente al girar el volante manual.",
    purpose: "Bloquear o habilitar por completo el paso del agua u otros fluidos en la instalación, ofreciendo un cierre para tareas de mantenimiento, control o aislar secciones de la red sin generar pérdidas de presión cuando está totalmente abierta."
  },
  {
    id: "bobina-encendido",
    name: "Bobina de encendido",
    image: "img_piezas/bobina_encendido_1.jpeg",
    images: [
      "img_piezas/bobina_encendido_2.jpg",
      "img_piezas/bobina_encendido_3.jpg",
      "img_piezas/bobina_encendido_partes.jpg"
    ],
    what: "Transformador eléctrico del sistema de encendido que convierte los 12 voltios de la batería en pulsos de alta tensión de miles de voltios (entre 15.000 y 30.000 V).",
    purpose: "Generar el golpe de alto voltaje necesario para que las bujías produzcan la chispa eléctrica e inicien la combustión de la mezcla de aire y combustible dentro de los cilindros del motor."
  },
  {
    id: "carburador",
    name: "Carburador",
    image: "img_piezas/carburador_1.jpeg",
    images: [
      "img_piezas/carburador_2.jpeg",
      "img_piezas/carburador_partes.jpg"
    ],
    videos: ["vid_piezas/carburador_video.gif"],
    what: "Dispositivo mecánico encargado de pulverizar y mezclar la nafta con el aire en la proporción exacta antes de que ingrese a los cilindros.",
    purpose: "Dosificar y preparar la mezcla óptima de aire y combustible para que el motor logre una combustión eficiente y genere la potencia necesaria para moverse."
  },
  {
    id: "contrapunto-giratorio",
    name: "Contrapunto giratorio",
    image: "img_piezas/contrapunto_giratorio_1.jpeg",
    images: [
      "img_piezas/contrapunto_giratorio_2.webp",
      "img_piezas/contrapunto_giratorio_funcionamiento.png"
    ],
    what: "Accesorio con punta cónica y rodamientos internos montado en el torno, diseñado para girar al unísono con la pieza de trabajo.",
    purpose: "Servir de apoyo y centrado de piezas largas durante el torneado, evitando que se flexionen o vibren para lograr un mecanizado preciso, seguro y uniforme."
  },
  {
    id: "bomba-freno",
    name: "Bomba de freno",
    image: "img_piezas/bomba_freno_1.jpeg",
    images: [
      "img_piezas/bomba_freno_2.jpeg",
      "img_piezas/bomba_freno_3.jpeg",
      "img_piezas/bomba_freno_4.jpg"
    ],
    what: "Pieza conectada al pedal de freno encargada de empujar el líquido de frenos con gran fuerza a través de los caños del auto.",
    purpose: "Enviar el líquido a presión hacia los frenos de cada rueda para que el vehículo reduzca la velocidad o se detenga al pisar el pedal."
  },
  {
    id: "juntas-homocineticas",
    name: "Juntas homocinéticas",
    image: "img_piezas/juntas_1.jpeg",
    images: [
      "img_piezas/juntas_2.jpeg",
      "img_piezas/juntas_partes.jpg"
    ],
    videos: ["vid_piezas/juntas_video.gif"],
    what: "Articulaciones del sistema de transmisión encargadas de transmitir la fuerza de giro del motor hacia las ruedas, incluso cuando estas cambian de ángulo.",
    purpose: "Llevar el movimiento a las ruedas de forma continua y a velocidad constante, permitiendo que sigan girando mientras doblan con la dirección o suben y bajan con la suspensión."
  },
];

const machineCatalogItems = [
  {
    id: "robot-soldadura-cloos",
    name: "Robot de soldadura - Marca Cloos",
    image: "img_piezas/robot_soldadura_2.jpeg",
    images: [
      "img_piezas/robot_soldadura_1.jpeg",
      "img_piezas/robot_soldadura_3.jpg",
      "img_piezas/robot_soldadura_4.jpg"
    ],
    what: "Equipo industrial automatizado que utiliza un brazo robótico para realizar trabajos de soldadura de manera programada.",
    purpose: "Soldar piezas metálicas de forma automática, precisa y repetitiva, logrando uniones uniformes y reduciendo el trabajo manual del operario."
  },
  {
    id: "maquina-generadora-vibraciones",
    name: "Máquina generadora de vibraciones mecánicas",
    image: "img_piezas/vibraciones_mecanicas_2.jpeg",
    images: [
      "img_piezas/vibraciones_mecanicas_1.jpeg",
      "img_piezas/vibraciones_mecanicas_3.jpeg"
    ],
    videos: [
      "vid_piezas/vibraciones_mecanicas_video.mp4",
      "vid_piezas/maquina_vibraciones_mecanicas_video_1.mp4"
    ],
    what: "Equipo que produce movimientos vibratorios controlados sobre una pieza o estructura.",
    purpose: "Estudiar y medir el comportamiento de sistemas sometidos a vibraciones, analizando parámetros como frecuencia, amplitud, resonancia y respuesta mecánica."
  },
  {
    id: "fresadora-cnc-5-ejes",
    name: "Fresadora CNC de 3 ejes",
    image: "img_piezas/fresa_5ejes_1.jpeg",
    images: [
      "img_piezas/fresa_5ejes_1.jpeg",
      "img_piezas/fresa_5ejes_2.jpeg"
    ],
    what: "Máquina automatizada y controlada por computadora que permite tallar y mecanizar una pieza moviendo la herramienta de corte, la mesa de trabajo o la pieza en 3 ejes diferentes.",
    purpose: "Realizar cortes, perforaciones y formas complejas con alta precisión, pudiendo trabajar varias caras de una pieza sin tener que cambiarla de posición manualmente."
  },
  {
    id: "torno-cnc-promecor",
    name: "Torno CNC - Marca Promecor",
    image: "img_piezas/tornocnc_promecor_1.jpeg",
    images: [
      "img_piezas/tornocnc_promecor_1.jpeg",
      "img_piezas/tornocnc_promecor_2.jpeg"
    ],
    what: "Máquina automatizada y controlada por computadora que hace girar una pieza sobre su propio eje mientras una herramienta de corte le da forma.",
    purpose: "Fabricar piezas de revolución (cilíndricas, cónicas, esféricas, etc.) con precisión, realizando operaciones como cilindrado, refrentado, ranurado, roscado y perforado de manera automática."
  },
  {
    id: "torno-paralelo-t190-turri",
    name: "Torno paralelo T-190 - Marca Turri",
    image: "img_piezas/tornoparalelo_turri_1.jpeg",
    images: [
      "img_piezas/tornoparalelo_turri_1.jpeg",
      "img_piezas/tornoparalelo_turri_2.jpeg"
    ],
    what: "Máquina convencional (manual) en la que la pieza gira sobre su eje mientras una herramienta de corte avanza sobre ella para darle forma. \"T-190\" indica que posee una altura de centro de 190 mm desde la bancada o base del plato hasta el eje del mismo.",
    purpose: "Mecanizar piezas de revolución, especialmente cilíndricas, realizando de forma manual trabajos como cilindrado, refrentado, roscado, ranurado y perforado."
  }
];

const benchCatalogItems = [
  {
    id: "banco-pruebas-resortes-helicoidales",
    name: "Banco de ensayos: resortes helicoidales",
    image: "img_piezas/medicion_resortes_2.jpeg",
    images: [
      "img_piezas/medicion_resortes_1.jpeg",
      "img_piezas/medicion_resortes_3.jpeg",
      "img_piezas/medicion_resortes_4.jpeg"
    ],
    what: "Dispositivo de ensayo que permite aplicar distintas cargas a un resorte helicoidal y medir cuánto se deforma.",
    purpose: "Determinar la rigidez o constante elástica del resorte, relacionando la fuerza aplicada con su deformación. Estrechamente relacionado con la Ley de Hooke."
  },
  {
    id: "banco-perdidas-carga-tuberias",
    name: "Banco de ensayos: pérdidas de carga en tuberías",
    image: "img_piezas/cargas_tuberias_1.jpeg",
    images: [
      "img_piezas/cargas_tuberias_1.jpeg",
      "img_piezas/cargas_tuberias_2.jpeg"
    ],
    what: "Equipo didáctico que permite bombear un fluido por tuberías de distintos materiales, diámetros y accesorios.",
    purpose: "Medir la caída de presión o pérdida de energía del fluido provocada por la fricción en las tuberías y por el paso a través de codos, válvulas, uniones y otros accesorios."
  },
  {
    id: "banco-numero-reynolds",
    name: "Banco de ensayos: número de Reynolds",
    image: "img_piezas/ensayo_reynolds_1.jpeg",
    images: [
      "img_piezas/ensayo_reynolds_1.jpeg",
      "img_piezas/ensayo_reynolds_2.jpeg"
    ],
    what: "Equipo utilizado para observar el comportamiento de un fluido dentro de una tubería transparente. Pilar fundamental en la práctica de mecánica de fluidos.",
    purpose: "Permite identificar si el flujo es laminar, de transición o turbulento mediante el número de Reynolds, relacionando las fuerzas de inercia con las fuerzas viscosas del fluido."
  },
  {
    id: "banco-brazo-hidraulico",
    name: "Banco de ensayos: brazo hidráulico",
    image: "img_piezas/hidraulica_y_brazo_1.jpeg",
    images: [
      "img_piezas/hidraulica_y_brazo_1.jpeg",
      "img_piezas/hidraulica_y_brazo_2.jpeg"
    ],
    what: "Equipo didáctico o de ensayo que utiliza aceite a alta presión para generar movimiento y fuerza en un brazo mecánico.",
    purpose: "Permitir estudiar y practicar el funcionamiento de sistemas hidráulicos, observando cómo la presión del fluido acciona cilindros hidráulicos y mueve las distintas articulaciones del brazo."
  },
  {
    id: "banco-neumatica-festo",
    name: "Banco didáctico de neumática - Marca Festo",
    image: "img_piezas/banconeumatica_festo_2.jpeg",
    images: [
      "img_piezas/banconeumatica_festo_1.jpeg",
      "img_piezas/banconeumatica_festo_2.jpeg"
    ],
    what: "Equipo de enseñanza que permite diseñar, armar y probar circuitos industriales que funcionan con aire comprimido.",
    purpose: "Permite aprender y practicar el funcionamiento de componentes neumáticos como cilindros, válvulas, mangueras, reguladores y actuadores, observando cómo el aire comprimido genera movimiento y fuerza de forma automatizada."
  },
  {
    id: "banco-medicion-bombas-hidraulicas",
    name: "Banco de ensayos: medición de bombas hidráulicas",
    image: "img_piezas/banco_medicion_bombas_1.jpeg",
    images: [
      "img_piezas/banco_medicion_bombas_1.jpeg",
      "img_piezas/banco_medicion_bombas_2.jpeg"
    ],
    what: "Equipo de ensayo hidráulico que permite conectar dos o más bombas hidráulicas de distintas formas y evaluar su funcionamiento.",
    purpose: "Comparar el caudal, la presión y el rendimiento de las bombas cuando trabajan en serie o en paralelo."
  }
];

const spaceCatalogItems = [
  {
    id: "sala-de-metrologia",
    name: "Sala de Metrología",
    image: "img_espacios/metrologia_3.jpeg",
    images: [
      "img_espacios/metrologia_1.jpeg",
      "img_espacios/metrologia_2.jpeg"
    ],
    what: "La Sala de Metrología es un espacio del Laboratorio de Ingeniería Mecánica dedicado al estudio y aplicación de técnicas de medición. La metrología es fundamental en Ingeniería Mecánica, ya que permite garantizar la confiabilidad de las mediciones y el cumplimiento de las especificaciones de diseño.",
    purpose: "La sala cuenta con instrumentos y equipos de precisión que permiten a los alumnos realizar actividades como:",
    purposePoints: [
      "Medición de longitudes, diámetros, espesores y profundidades.",
      "Verificación de ángulos, perfiles y geometrías.",
      "Control de tolerancias dimensionales.",
      "Medición y verificación de piezas mediante sistemas de coordenadas.",
      "Medición de la dureza de diferentes materiales mediante ensayos específicos."
    ],
    equipment: [
      "Proyector de perfiles óptico: permite observar y medir el contorno, perfil, ángulos y dimensiones de piezas.",
      "Máquina de Medición por Coordenadas (MMC/CMM): permite realizar mediciones dimensionales y geométricas de piezas en tres dimensiones con alta precisión.",
      "Durómetro: utilizado para determinar la dureza de diferentes materiales mediante métodos de ensayo específicos.",
      "Gramil: utilizado para realizar trazados y mediciones de altura sobre una superficie de referencia, permitiendo marcar puntos y líneas a una determinada distancia.",
      "Micrómetro de altura: utilizado para realizar mediciones de altura con gran precisión y determinar diferencias de nivel respecto de una superficie de referencia.",
      "Calibres de pie de rey: utilizados para medir dimensiones exteriores, interiores, profundidades y escalones."
    ]
  },
  {
    id: "sala-de-motores",
    name: "Sala de Motores",
    image: "img_espacios/motores_3.jpeg",
    images: ["img_espacios/motores_1.jpeg", "img_espacios/motores_2.jpeg", "img_espacios/motores_4.jpeg"],
    what: "La Sala de Motores es un espacio del Laboratorio de Ingeniería Mecánica destinado al estudio experimental, análisis térmico y ensayo de motores de combustión interna.",
    purpose: "La sala permite a los alumnos de Ingeniería Mecánica, Electrónica y carreras afines aplicar conceptos de asignaturas como Termodinámica, Máquinas Alternativas y Automotores, realizando actividades como:",
    purposePoints: [
      "Determinación de curvas características de par motor, potencia y consumo en función del régimen de giro (RPM).",
      "Ensayo de motores bajo diferentes condiciones de carga y operación.",
      "Monitoreo y análisis de parámetros térmicos, presiones y funcionamiento general del motor, junto a registro digital en tiempo real de las variables del ensayo para su posterior análisis y evaluación técnica."
    ],
    equipment: [
      "Banco de ensayos dividido en dos sectores: la habitación de prueba insonorizada y el puesto de control.",
      "En la habitación insonorizada, el motor está montado sobre una base fija y conectado a un freno dinamométrico que le aplica carga, junto con sus sistemas de refrigeración, combustible y escape de gases.",
      "Desde el puesto de control exterior, los alumnos operan el equipo de forma segura mediante una consola de mando y una computadora con software de adquisición de datos, que registra y grafica los resultados del ensayo en tiempo real."
    ]
  },
  {
    id: "area-de-fluidos",
    name: "Área de Fluidos",
    image: "img_espacios/fluidos_2.jpeg",
    images: ["img_espacios/fluidos_1.jpeg", "img_espacios/fluidos_3.jpeg"],
    what: "El Área de Fluidos es un espacio del Laboratorio de Ingeniería Mecánica destinado al estudio experimental de los fluidos y de los sistemas hidráulicos.",
    purpose: "El área permite a los alumnos aplicar conceptos teóricos de materias como Ingeniería Mecánica I, Ingeniería Mecánica II y Mecánica de Fluidos mediante actividades como:",
    purposePoints: [
      "Estudio del comportamiento de los fluidos en tuberías.",
      "Determinación y análisis del número de Reynolds y los diferentes regímenes de flujo (laminar, transición y turbulento).",
      "Estudio y medición de pérdidas de carga en tuberías y accesorios.",
      "Ensayo y comparación del funcionamiento de diferentes bombas hidráulicas en distintas configuraciones.",
      "Análisis de la transmisión de fuerza y movimiento mediante sistemas y actuadores hidráulicos."
    ],
    equipment: [
      "Brazo hidráulico: equipo didáctico que utiliza fluido a presión para generar fuerza y movimiento mecánico mediante cilindros y mandos hidráulicos.",
      "Módulo de bombas hidráulicas: instalación con depósito y sistema de acoplamiento para evaluar bombas iguales en serie y paralelo.",
      "Número de Reynolds: módulo vertical movible con depósito elevado y un tubo transparente donde se inyecta tinta para visualizar los regímenes de flujo.",
      "Banco de pérdidas de carga en tuberías: red didáctica montada en panel con diversos tramos y tuberías de distintos materiales, diámetros y accesorios para medir pérdidas de presión y caudal."
    ]
  },
  {
    id: "sala-de-herreria",
    name: "Sala de Herrería",
    image: "img_espacios/herreria_3.jpeg",
    images: ["img_espacios/herreria_1.jpeg", "img_espacios/herreria_2.jpeg"],
    what: "La Sala de Herrería es un espacio del Laboratorio de Ingeniería Mecánica destinado al trabajo y transformación de materiales, principalmente metales, mediante diferentes operaciones de corte y mecanizado.",
    purpose: "La sala les permite a los alumnos conocer y aplicar el funcionamiento de distintas máquinas y herramientas, realizando actividades como:",
    purposePoints: [
      "Corte de barras, perfiles y piezas metálicas.",
      "Desbaste de material.",
      "Realización de operaciones de fresado.",
      "Realización de procesos de soldadura.",
      "Operaciones de conformado, enderezado y montaje mediante prensa hidráulica."
    ],
    equipment: [
      "Esmeril: utilizado principalmente para operaciones de desbaste, afilado y eliminación de material mediante ruedas abrasivas.",
      "Sensitiva: utilizada para realizar cortes de materiales, principalmente barras, perfiles y piezas metálicas, mediante un disco abrasivo.",
      "Sierra sin fin: utilizada para realizar cortes de materiales mediante una cinta dentada continua.",
      "Fresadora: máquina-herramienta utilizada para mecanizar piezas mediante una herramienta de corte rotativa, permitiendo realizar superficies planas, ranuras y diferentes formas geométricas.",
      "Prensa hidráulica: utilizada para operaciones de enderezado, curvado, embutido y montaje o desmontaje de componentes a presión.",
      "Equipos de soldadura y protección: conjunto de soldadoras y elementos de protección para el aprendizaje de técnicas de unión de metales."
    ]
  },
  {
    id: "area-de-higiene-y-seguridad",
    name: "Área de Higiene y Seguridad",
    image: "img_espacios/higiene_1.jpeg",
    images: ["img_espacios/higiene_2.jpeg"],
    what: "El Área de Higiene y Seguridad es un espacio del Laboratorio de Ingeniería Mecánica destinado al estudio y la enseñanza de la prevención de riesgos laborales, la protección en maquinaria, la ergonomía y la seguridad industrial.",
    purpose: "El área permite a los alumnos comprender la aplicación práctica de las normas de seguridad e higiene mediante actividades como:",
    purposePoints: [
      "Evaluación de riesgos mecánicos mediante la simulación de situaciones operacionales y verificación de la efectividad de los dispositivos de protección.",
      "Análisis ergonómico y control de riesgos a través de la evaluación de zonas de alcance y posturas de trabajo, sumado a la identificación de actos y condiciones inseguras, mapas de riesgo y planos de evacuación.",
      "Gestión de productos químicos mediante la interpretación de pictogramas de seguridad y pautas para el manejo y almacenamiento seguro de sustancias."
    ],
    equipment: [
      "Cabina de simulación de proyección de partículas: estación de prueba cerrada con ventanas de acrílico para ensayos de impacto de materiales.",
      "Cabina de simulación con barrera óptica: estación de prueba cerrada equipada con cortina de luz infrarroja de corte automático.",
      "Cabina de simulación con mando bimanual: estación provista de consola con cruz de dobles pulsadores de accionamiento simultáneo.",
      "Tablero de actos, condiciones inseguras y mapas de riesgo: panel gráfico didáctico con esquemas de las instalaciones, señalización de peligros y vías de evacuación.",
      "Tablero de Ergonomía (ErgoZone): panel interactivo con cuadrículas de colores para la delimitación de radios de alcance del operario.",
      "Panel informativo de productos químicos."
    ]
  },
  {
    id: "sala-de-proyectos-mecanicos",
    name: "Sala de Proyectos Mecánicos",
    image: "img_espacios/proy_mecanico_4.jpeg",
    images: ["img_espacios/proy_mecanico_1.jpeg", "img_espacios/proy_mecanico_2.jpeg", "img_espacios/proy_mecanico_3.jpeg"],
    what: "La Sala de Proyectos Mecánicos es un espacio del Laboratorio de Ingeniería Mecánica destinado al estudio, desarrollo y ensayo práctico de sistemas automotrices, automatización industrial y diversos tipos de motores.",
    purpose: "La sala permite a los alumnos realizar actividades prácticas mediante:",
    purposePoints: [
      "Ensayo y diagnóstico automotriz mediante la inspección y prueba de maquetas de vehículos.",
      "Programación y automatización industrial a través de prácticas de cableado, lógica de control y programación en tableros didácticos con PLC.",
      "Análisis mecánico mediante la inspección, armado y desarmado de motores y transmisiones."
    ],
    equipment: [
      "Simulador vehicular y motores de prueba: maqueta de automóvil y diversos modelos de motores sobre soportes para prácticas de ensayo y diagnóstico.",
      "Estación de automatización y PLC: tableros didácticos de pared con controladores programables para simulación de control.",
      "Equipamiento auxiliar: bancos para motores, mesas de trabajo, grúa hidráulica y carros de herramientas."
    ],
    motorSheets: [
      { label: "Motor Fiat 1.4 FIRE", itemId: "motor-fiat-1-4-fire" },
      { label: "Motor Renault 1.6", itemId: "motor-renault-1-6" },
      { label: "Motor Renault 1.9 diésel", itemId: "motor-renault-1-9-diesel" },
      { label: "Motor Renault 2.0", itemId: "motor-renault-2-0" },
      { label: "Suzuki GSR 600", itemId: "suzuki-gsr-600" }
    ]
  },
  {
    id: "gabinete-informatico",
    name: "Gabinete Informático",
    what: "El Gabinete Informático es un espacio del Laboratorio de Ingeniería Mecánica destinado al diseño asistido por computadora, la simulación numérica y el procesamiento de datos. Es un área de uso libre a disposición de todos los estudiantes de la carrera para el desarrollo de sus actividades académicas y proyectos.",
    purpose: "El área permite a los alumnos realizar actividades de ingeniería computacional (CAD/CAE) utilizando herramientas digitales, tales como:",
    purposePoints: [
      "Modelado tridimensional de piezas, mecanismos y ensambles.",
      "Elaboración de planos técnicos y documentación gráfica de ingeniería.",
      "Cálculo numérico, programación y resolución de problemas de ingeniería.",
      "Análisis de datos, modelización matemática y generación de planillas de cálculo.",
      "Estudio libre, resolución de trabajos prácticos y desarrollo de proyectos integradores en equipo."
    ],
    equipment: [
      "Estaciones de trabajo (PC): mesadas equipadas con computadoras destinadas al trabajo individual y grupal de los estudiantes.",
      "Software de diseño e ingeniería: programas especializados para modelado 3D, dibujo técnico y simulación (como SolidWorks, AutoCAD, entre otros).",
      "Software de cálculo y análisis: entornos informáticos para cálculo numérico, programación y procesamiento de datos (como GNU Octave, Microsoft Excel y herramientas específicas de la especialidad).",
      "Pizarrón: espacio para explicaciones teóricas y resolución de dudas durante las prácticas."
    ]
  }
];

const engineCatalogItems = [
  {
    id: "motor-fiat-1-4-fire",
    name: "Motor Fiat 1.4 FIRE",
    image: "fichas_motores/MOTOR FIAT 1.4 FIRE_.jpg"
  },
  {
    id: "motor-renault-1-6",
    name: "Motor Renault 1.6",
    image: "fichas_motores/MOTOR RENAULT 1.6_.jpg"
  },
  {
    id: "motor-renault-1-9-diesel",
    name: "Motor Renault 1.9 diésel",
    image: "fichas_motores/MOTOR RENAULT 1.9 DIESSEL_.jpg"
  },
  {
    id: "motor-renault-2-0",
    name: "Motor Renault 2.0",
    image: "fichas_motores/MOTOR_RENAULT_2.0.jpeg"
  },
  {
    id: "suzuki-gsr-600",
    name: "Suzuki GSR 600",
    image: "fichas_motores/SUZUKI_GSR_600.jpeg"
  }
];

const catalogGrid = document.getElementById("catalogGrid");
const detailImage = document.getElementById("detailImage");
const detailImageGroup = document.getElementById("detailImageGroup");
const detailName = document.getElementById("detailName");
const engineDetailTitle = document.getElementById("engineDetailTitle");
const detailWhatGroup = document.getElementById("detailWhatGroup");
const detailWhat = document.getElementById("detailWhat");
const detailPurposeGroup = document.getElementById("detailPurposeGroup");
const detailPurpose = document.getElementById("detailPurpose");
const detailPurposeTitle = document.getElementById("detailPurposeTitle");
const detailPurposePoints = document.getElementById("detailPurposePoints");
const detailEquipmentGroup = document.getElementById("detailEquipmentGroup");
const detailEquipment = document.getElementById("detailEquipment");
const detailMotorSheetsGroup = document.getElementById("detailMotorSheetsGroup");
const detailMotorSheets = document.getElementById("detailMotorSheets");
const detailGallery = document.getElementById("detailGallery");
const imageModal = document.getElementById("imageModal");
const imageModalContent = document.getElementById("imageModalContent");
const imageZoomControls = document.getElementById("imageZoomControls");
const imageZoomOut = document.getElementById("imageZoomOut");
const imageZoomReset = document.getElementById("imageZoomReset");
const imageZoomIn = document.getElementById("imageZoomIn");
const videoModalContent = document.getElementById("videoModalContent");
const imageModalClose = document.getElementById("imageModalClose");
let currentCatalogType = "pieces";
let imageZoomLevel = 1;

function updateCatalogHeader() {
  const catalogTitle = document.getElementById("catalogTitle");
  const catalogDescription = catalogTitle?.nextElementSibling;

  const typeConfig = {
    pieces: {
      label: "Piezas",
      description: "Seleccione una pieza para ver su ficha completa."
    },
    machines: {
      label: "Máquinas",
      description: "Seleccione una máquina para ver su ficha completa."
    },
    "bench-tests": {
      label: "Bancos de Ensayo",
      description: "Seleccione un banco de ensayo para ver su ficha completa."
    },
    engines: {
      label: "Motores",
      description: "Seleccione un motor para ver su ficha completa."
    },
    "lab-spaces": {
      label: "Espacios del Laboratorio",
      description: "Seleccione un espacio del laboratorio para ver su ficha completa."
    }
  };

  const activeType = typeConfig[currentCatalogType] || typeConfig.pieces;
  if (catalogTitle) catalogTitle.textContent = activeType.label;
  if (catalogDescription) catalogDescription.textContent = activeType.description;
}

function getCurrentCatalogItems() {
  if (currentCatalogType === "machines") return machineCatalogItems;
  if (currentCatalogType === "bench-tests") return benchCatalogItems;
  if (currentCatalogType === "lab-spaces") return spaceCatalogItems;
  if (currentCatalogType === "engines") return engineCatalogItems;
  return catalogItems;
}

function getAllCatalogItems() {
  return [...catalogItems, ...machineCatalogItems, ...benchCatalogItems, ...spaceCatalogItems, ...engineCatalogItems];
}

function findItemById(itemId) {
  return getAllCatalogItems().find(item => item.id === itemId);
}

function getSelectedItemFromQuery() {
  const params = new URLSearchParams(window.location.search);
  return params.get("item");
}

function updateUrl(itemId) {
  const url = itemId ? `?item=${itemId}` : window.location.pathname;
  window.history.replaceState({}, "", url);
}

function showView(viewName) {
  views.forEach(view => {
    const shouldShow = view.id === `${viewName}View`;
    view.classList.toggle("active", shouldShow);
  });

  document.querySelectorAll("[data-view]").forEach(button => {
    const isActive = button.dataset.view === viewName;
    button.classList.toggle("active", isActive);
  });

  if (viewName === "catalog" || viewName === "home") {
    updateUrl(null);
  }

  if (viewName === "catalog") renderCatalog();
  if (viewName === "catalog") showCatalogChoice();

  if (viewName === "detail") {
    const selectedId = getSelectedItemFromQuery();
    if (selectedId) {
      updateUrl(selectedId);
    }
  }
}

function showCatalogChoice() {
  catalogChoice.hidden = false;
  catalogBrowser.hidden = true;
  catalogGrid.innerHTML = "";
}

function showCatalogType(type) {
  currentCatalogType = type;
  catalogChoice.hidden = true;
  catalogBrowser.hidden = false;
  updateCatalogHeader();
  renderCatalog();
}

function renderCatalog() {
  const items = getCurrentCatalogItems();
  const sortedItems = [...items].sort((firstItem, secondItem) =>
    firstItem.name.localeCompare(secondItem.name, "es", { sensitivity: "base" })
  );

  document.querySelector(".element-search").hidden = sortedItems.length === 0;
  catalogGrid.innerHTML = sortedItems.length ? sortedItems.map(item => `
    <button class="catalog-card" data-id="${item.id}" type="button">
      <h3>${item.name}</h3>
      <span class="card-action">Ver ficha →</span>
    </button>
  `).join("") : '<p class="catalog-empty">No hay elementos cargados en esta categoría.</p>';

  document.querySelectorAll(".catalog-card").forEach(button => {
    button.addEventListener("click", () => {
      const selectedId = button.dataset.id;
      updateUrl(selectedId);
      selectItem(selectedId);
      showView("detail");
    });
  });
}

document.querySelectorAll("[data-catalog-type]").forEach(button => {
  button.addEventListener("click", () => {
    showCatalogType(button.dataset.catalogType);
  });
});

catalogBack.addEventListener("click", showCatalogChoice);

function findMatchingItem(searchTerm) {
  const normalizedTerm = normalizeSearchText(searchTerm);
  if (!normalizedTerm) return null;

  return getCurrentCatalogItems().find(item =>
    normalizeSearchText(item.name).includes(normalizedTerm)
  );
}

function filterCatalog(searchTerm) {
  const normalizedTerm = normalizeSearchText(searchTerm);
  document.querySelectorAll(".catalog-card").forEach(card => {
    const item = getCurrentCatalogItems().find(entry => entry.id === card.dataset.id);
    card.hidden = Boolean(normalizedTerm) && !normalizeSearchText(item.name).includes(normalizedTerm);
  });
}

function normalizeSearchText(text) {
  return text
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLocaleLowerCase()
    .trim();
}

searchInputs.forEach(input => {
  input.addEventListener("input", () => {
    searchInputs.forEach(otherInput => {
      if (otherInput !== input) otherInput.value = input.value;
    });
    filterCatalog(input.value);
  });

  input.addEventListener("keydown", event => {
    if (event.key !== "Enter") return;

    const item = findMatchingItem(input.value);
    if (!item) return;

    updateUrl(item.id);
    selectItem(item.id);
    showView("detail");
    input.blur();
  });
});

function selectItem(itemId) {
  const item = findItemById(itemId);
  if (!item) {
    console.warn(`No se encontró la ficha "${itemId}" en ninguna categoría.`);
    return;
  }

  const itemType =
    catalogItems.some(entry => entry.id === item.id) ? "pieces" :
    machineCatalogItems.some(entry => entry.id === item.id) ? "machines" :
    benchCatalogItems.some(entry => entry.id === item.id) ? "bench-tests" :
    spaceCatalogItems.some(entry => entry.id === item.id) ? "lab-spaces" :
    "engines";

  currentCatalogType = itemType;
  updateCatalogHeader();
  document.getElementById("detailCard").classList.toggle("space-ficha", itemType === "lab-spaces");
  document.getElementById("detailCard").classList.toggle("engine-ficha", itemType === "engines");
  engineDetailTitle.textContent = item.name;
  engineDetailTitle.hidden = itemType !== "engines";
  detailName.hidden = itemType === "engines";
  detailPurposeTitle.textContent = itemType === "lab-spaces" ? "¿Para qué se usa?" : "Función principal";

  const catalogBackButton = document.querySelector(".back-btn");
  if (catalogBackButton) {
    catalogBackButton.dataset.returnTo = currentCatalogType;
  }

  const galleryImages = (item.images || []).filter(image => image !== item.image);
  const galleryVideos = item.videos || [];

  detailImageGroup.hidden = !item.image;
  if (item.image) {
    detailImage.src = item.image;
    detailImage.alt = item.name;
  } else {
    detailImage.removeAttribute("src");
    detailImage.alt = "";
  }
  detailGallery.innerHTML = galleryImages.map(image => `
    <button class="detail-gallery-item" type="button" aria-label="Ver imagen completa de ${item.name}">
      <img src="${image}" alt="${item.name}" loading="lazy">
    </button>
  `).join("") + galleryVideos.map(video => {
    if (/\.(mp4|webm|ogg)$/i.test(video)) {
      return `
        <div class="detail-gallery-item detail-gallery-video" data-video-src="${video}" role="button" tabindex="0" aria-label="Ver video completo de ${item.name}">
          <video src="${video}" muted preload="metadata"></video>
        </div>
      `;
    }
    return `
      <div class="detail-gallery-item detail-gallery-video" data-video-src="${video}" role="button" tabindex="0" aria-label="Ver video de ${item.name}">
        <img src="${video}" alt="Video de ${item.name}" loading="lazy">
      </div>
    `;
  }).join("");
  detailGallery.hidden = galleryImages.length === 0 && galleryVideos.length === 0;
  detailName.textContent = item.name;
  detailWhat.textContent = item.what;
  detailWhatGroup.hidden = !item.what;
  detailPurpose.textContent = item.purpose;
  detailPurposeGroup.hidden = !item.purpose && !item.purposePoints?.length;
  detailPurposePoints.replaceChildren(...(item.purposePoints || []).map(text => {
    const listItem = document.createElement("li");
    listItem.textContent = text;
    return listItem;
  }));
  detailPurposePoints.hidden = !item.purposePoints?.length;
  detailEquipment.replaceChildren(...(item.equipment || []).map(text => {
    const listItem = document.createElement("li");
    listItem.textContent = text;
    return listItem;
  }));
  detailEquipmentGroup.hidden = !item.equipment?.length;
  detailMotorSheets.replaceChildren(...(item.motorSheets || []).map(sheet => {
    const link = document.createElement("a");
    link.className = "motor-sheet-link";
    link.href = `?item=${sheet.itemId}`;
    link.textContent = sheet.label;
    return link;
  }));
  detailMotorSheetsGroup.hidden = !item.motorSheets?.length;

  detailImage.onclick = item.image ? () => openImageModal(detailImage.src, detailImage.alt) : null;
  detailGallery.querySelectorAll(".detail-gallery-item").forEach(itemElement => {
    const openMedia = () => {
      const image = itemElement.querySelector("img");
      const video = itemElement.dataset.videoSrc;
      if (video && /\.(mp4|webm|ogg)$/i.test(video)) {
        openVideoModal(video);
      } else {
        openImageModal(image.src, image.alt);
      }
    };
    itemElement.addEventListener("click", openMedia);
    itemElement.addEventListener("keydown", event => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        openMedia();
      }
    });
  });
}

function openImageModal(src, alt) {
  imageModalContent.src = src;
  imageModalContent.alt = alt;
  setImageZoom(1);
  imageModalContent.hidden = false;
  imageZoomControls.hidden = false;
  videoModalContent.hidden = true;
  videoModalContent.pause();
  videoModalContent.removeAttribute("src");
  imageModal.hidden = false;
}

function openVideoModal(src) {
  imageModalContent.hidden = true;
  imageModalContent.removeAttribute("src");
  imageZoomControls.hidden = true;
  videoModalContent.hidden = false;
  videoModalContent.pause();
  videoModalContent.src = src;
  videoModalContent.load();
  imageModal.hidden = false;
  videoModalContent.play().catch(() => {});
}

function setImageZoom(level) {
  imageZoomLevel = Math.min(4, Math.max(0.5, level));
  imageModalContent.style.transform = `scale(${imageZoomLevel})`;
  imageZoomReset.textContent = `${Math.round(imageZoomLevel * 100)}%`;
  imageZoomOut.disabled = imageZoomLevel <= 0.5;
  imageZoomIn.disabled = imageZoomLevel >= 4;
}

function closeImageModal() {
  imageModal.hidden = true;
  imageModalContent.src = "";
  imageModalContent.style.transform = "";
  imageZoomControls.hidden = true;
  setImageZoom(1);
  videoModalContent.pause();
  videoModalContent.removeAttribute("src");
}

imageModalClose.addEventListener("click", closeImageModal);
imageZoomOut.addEventListener("click", () => setImageZoom(imageZoomLevel - 0.5));
imageZoomReset.addEventListener("click", () => setImageZoom(1));
imageZoomIn.addEventListener("click", () => setImageZoom(imageZoomLevel + 0.5));
imageModal.addEventListener("click", event => {
  if (event.target === imageModal) closeImageModal();
});
document.addEventListener("keydown", event => {
  if (event.key === "Escape" && !imageModal.hidden) closeImageModal();
});

menuToggle?.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", open);
});

document.querySelectorAll("[data-view]").forEach(button => {
  button.addEventListener("click", () => {
    const targetView = button.dataset.view;

    if (targetView === "detail") return;

    showView(targetView);
    if (targetView === "catalog") {
      const returnType = button.dataset.returnTo;
      if (returnType === "machines") {
        showCatalogType("machines");
      } else if (returnType === "bench-tests") {
        showCatalogType("bench-tests");
      } else if (returnType === "pieces") {
        showCatalogType("pieces");
      } else if (returnType === "lab-spaces") {
        showCatalogType("lab-spaces");
      } else if (returnType === "engines") {
        showCatalogType("engines");
      } else {
        showCatalogChoice();
      }
    }
    nav.classList.remove("open");
    menuToggle?.setAttribute("aria-expanded", "false");
  });
});

const initialItem = getSelectedItemFromQuery();
updateCatalogHeader();
renderCatalog();

if (initialItem) {
  selectItem(initialItem);
  showView("detail");
} else {
  showView("home");
}
