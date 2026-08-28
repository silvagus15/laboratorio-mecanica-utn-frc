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

const catalogGrid = document.getElementById("catalogGrid");
const detailImage = document.getElementById("detailImage");
const detailName = document.getElementById("detailName");
const detailWhat = document.getElementById("detailWhat");
const detailPurpose = document.getElementById("detailPurpose");
const detailGallery = document.getElementById("detailGallery");
const imageModal = document.getElementById("imageModal");
const imageModalContent = document.getElementById("imageModalContent");
const videoModalContent = document.getElementById("videoModalContent");
const imageModalClose = document.getElementById("imageModalClose");

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

function showPiecesCatalog() {
  catalogChoice.hidden = true;
  catalogBrowser.hidden = false;
  renderCatalog();
}

function renderCatalog() {
  const sortedItems = [...catalogItems].sort((firstItem, secondItem) =>
    firstItem.name.localeCompare(secondItem.name, "es", { sensitivity: "base" })
  );

  catalogGrid.innerHTML = sortedItems.map(item => `
    <button class="catalog-card" data-id="${item.id}" type="button">
      <h3>${item.name}</h3>
      <span class="card-action">Ver ficha →</span>
    </button>
  `).join("");

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
    showPiecesCatalog();
  });
});

catalogBack.addEventListener("click", showCatalogChoice);

function findMatchingItem(searchTerm) {
  const normalizedTerm = normalizeSearchText(searchTerm);
  if (!normalizedTerm) return null;

  return catalogItems.find(item =>
    normalizeSearchText(item.name).includes(normalizedTerm)
  );
}

function filterCatalog(searchTerm) {
  const normalizedTerm = normalizeSearchText(searchTerm);
  document.querySelectorAll(".catalog-card").forEach(card => {
    const item = catalogItems.find(entry => entry.id === card.dataset.id);
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
  const item = catalogItems.find(entry => entry.id === itemId) || catalogItems[0];

  detailImage.src = item.image;
  detailImage.alt = item.name;
  detailGallery.innerHTML = (item.images || []).map(image => `
    <button class="detail-gallery-item" type="button" aria-label="Ver imagen completa de ${item.name}">
      <img src="${image}" alt="${item.name}" loading="lazy">
    </button>
  `).join("") + (item.videos || []).map(video => {
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
  detailName.textContent = item.name;
  detailWhat.textContent = item.what;
  detailPurpose.textContent = item.purpose;

  detailImage.onclick = () => openImageModal(detailImage.src, detailImage.alt);
  detailGallery.querySelectorAll(".detail-gallery-item").forEach(itemElement => {
    const openMedia = () => {
      const image = itemElement.querySelector("img");
      const video = itemElement.dataset.videoSrc;
      if (video) {
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
  imageModalContent.hidden = false;
  videoModalContent.hidden = true;
  videoModalContent.pause();
  videoModalContent.removeAttribute("src");
  imageModal.hidden = false;
}

function openVideoModal(src) {
  imageModalContent.hidden = true;
  imageModalContent.removeAttribute("src");
  videoModalContent.hidden = false;
  videoModalContent.pause();
  videoModalContent.src = src;
  videoModalContent.load();
  imageModal.hidden = false;
  videoModalContent.play().catch(() => {});
}

function closeImageModal() {
  imageModal.hidden = true;
  imageModalContent.src = "";
  videoModalContent.pause();
  videoModalContent.removeAttribute("src");
}

imageModalClose.addEventListener("click", closeImageModal);
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
    if (targetView === "catalog" && button.dataset.returnTo === "pieces") {
      showPiecesCatalog();
    }
    nav.classList.remove("open");
    menuToggle?.setAttribute("aria-expanded", "false");
  });
});

const initialItem = getSelectedItemFromQuery();
renderCatalog();

if (initialItem) {
  selectItem(initialItem);
  showView("detail");
} else {
  selectItem(catalogItems[0].id);
  showView("home");
}
