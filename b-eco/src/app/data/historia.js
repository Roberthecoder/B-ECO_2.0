// Historia de B-Eco: un registro vivo de todo lo que ha hecho el grupo.
// Se muestra en la página "Nosotros" (/nosotros).
//
// Orden: la mesa más reciente va PRIMERO, y dentro de cada mesa,
// el semestre más reciente va primero.
//
// Cada mesa tiene:
// - periodo, presidencia, resumen
// - fotoMesa: foto de grupo de la mesa (sale en "¿Quiénes somos?")
// - semestres: lista de semestres (nombre, fechas, estado, resumen,
//   cifras, portada, acciones, fotos)
//
// Cada ACCIÓN es una tarjeta en la línea del tiempo:
//   { fecha: '24 may 2026', titulo: '...', texto: '...',
//     tipo: 'accion' | 'logro' | 'proximo', foto: '/historia/...', enlace: 'https://...' }
//
// Para agregar algo nuevo: copia una acción, pégala arriba de la lista del
// semestre que corresponde y cambia los datos. Las fotos van en
// public/historia/<semestre>/ o en Firebase Storage (carpeta Assets/).

import carrusel2026 from './years/current/carousel-images.json';
import carrusel2023 from './years/2023-2025/carousel-images.json';
import { projectsResources as proyectos2023 } from './years/2023-2025/projects';
import { cardsContent as tarjetas2023 } from './years/2023-2025/cards';

const fotoProyecto2023 = (titulo) => proyectos2023.find((p) => p.title === titulo)?.image;

// Cifras que se muestran en "B-Eco en números"
export const cifrasGenerales = [
  { valor: '+100', texto: 'voluntarios en ene – jun 2026' },
  { valor: '20', texto: 'voluntarios en ago – dic 2026' },
  { valor: '30', texto: 'lugares para voluntarios en ene – jun 2027' },
  { valor: '680 kg', texto: 'de tapitas donadas contra el cáncer' },
  { valor: '183', texto: 'hogares censados en La Primavera' },
  { valor: '50', texto: 'personas capacitadas en cultivo de hongos' },
  { valor: '50', texto: 'videos de concientización' },
  { valor: '2', texto: 'premios en 2023' },
];

export const mesasDirectivas = [
  {
    id: '2025',
    periodo: '2025 – actual',
    etiqueta: 'Mesa actual',
    presidencia: 'Roberto Carlos Navarro Félix',
    fotoMesa: '/historia/2026-ago-dic/portada-reconocimiento.jpg',
    mesa: [],
    resumen: [
      'Mesa directiva en funciones. Su meta: atender problemas ambientales concretos, generar conciencia y dejar resultados tangibles para la comunidad.',
    ],
    semestres: [
      {
        id: '2027-ene-jun',
        nombre: '4.º semestre',
        fechas: 'Enero – junio 2027',
        estado: 'Próximo',
        resumen: ['Habrá lugar para 30 voluntarios.'],
        acciones: [
          {
            fecha: 'Feb – jun 2027',
            tipo: 'proximo',
            titulo: 'Recuperación de áreas del Sendero Ecológico Didáctico: segunda etapa',
            texto: 'Proyecto de Servicio Social en el Parque Metropolitano de Guadalajara: jardín polinizador, estanque e invernadero. Sábados de 9:00 a 13:00.',
          },
        ],
        fotos: [],
      },
      {
        id: '2026-ago-dic',
        nombre: '3.er semestre',
        fechas: 'Agosto – diciembre 2026',
        estado: 'En curso',
        resumen: ['Trabajamos con 20 voluntarios.'],
        portada: {
          src: '/historia/2026-ago-dic/portada-reconocimiento.jpg',
          pie: 'La mesa directiva con su reconocimiento del Bosque La Primavera. Foto tomada en el Sendero Ecológico Didáctico.',
        },
        acciones: [
          {
            fecha: '2026',
            tipo: 'logro',
            titulo: 'Reconocimiento del Bosque La Primavera',
            texto: 'La mesa directiva recibió el reconocimiento del Bosque La Primavera por el trabajo del grupo.',
          },
          {
            fecha: 'Ago – dic 2026',
            tipo: 'accion',
            titulo: 'Arranca la recuperación de áreas del Sendero Ecológico Didáctico (S.E.D.)',
            texto: 'Recuperamos áreas del sendero: deshierbe del jardín polinizador, limpieza de zonas invadidas por pasto y recorridos con el equipo del Parque Metropolitano.',
            foto: '/historia/2026-ago-dic/sed-entrada.jpg',
          },
        ],
        fotos: [
          '/historia/2026-ago-dic/bienvenida.jpg',
          '/historia/2026-ago-dic/circulo.jpg',
          '/historia/2026-ago-dic/recorrido.jpg',
          '/historia/2026-ago-dic/trabajo-jardin.jpg',
          '/historia/2026-ago-dic/jardin-polinizador.jpg',
          '/historia/2026-ago-dic/deshierbe.jpg',
          '/historia/2026-ago-dic/carretilla.jpg',
          '/historia/2026-ago-dic/selfie-equipo.jpg',
          '/historia/2026-ago-dic/plantando.jpg',
        ],
      },
      {
        id: '2026-ene-jun',
        nombre: '2.º semestre',
        fechas: 'Enero – junio 2026',
        resumen: [
          'Cinco líneas de trabajo que combinaron acción ambiental, vinculación con la comunidad, divulgación y biotecnología, con más de 100 voluntarios activos.',
        ],
        acciones: [
          {
            fecha: '26 may 2026',
            tipo: 'logro',
            titulo: '680 kg de tapitas donadas a Cómplices A.C.',
            texto: 'Recolectamos tapas plásticas durante todo el semestre para evitar que terminaran como basura y apoyar causas contra el cáncer. Un compañero habilitó su casa como centro de acopio.',
            foto: '/historia/2026-ene-jun/tapas-680kg.jpg',
          },
          {
            fecha: '24 may 2026',
            tipo: 'accion',
            titulo: 'Censo de perros y gatos en La Primavera',
            texto: 'Con el Bosque La Primavera, 10 equipos recorrieron 16.96 km de calles y censaron 183 hogares. Los datos sirven para campañas de vacunación, esterilización y tenencia responsable que protegen a la fauna silvestre.',
          },
          {
            fecha: '15 may 2026',
            tipo: 'accion',
            titulo: 'Curso de cultivo de hongos y granja',
            texto: 'Capacitamos a 50 personas y preparamos más de 100 kg de sustrato para terminar de establecer la granja de hongos: residuos que se convierten en alimento.',
          },
          {
            fecha: 'Ene – jun 2026',
            tipo: 'accion',
            titulo: 'Pruebas con fibra de coco',
            texto: 'Procesamos la fibra de unos 80 cocos para probar sustratos alternativos para hongos, y dimos mantenimiento al espacio de la granja.',
          },
          {
            fecha: 'Ene – jun 2026',
            tipo: 'accion',
            titulo: '50 videos de concientización',
            texto: 'Los voluntarios produjeron 50 videos ambientales. El primero superó los 200 likes y las 4,000 vistas.',
          },
        ],
        fotos: [],
      },
      {
        id: '2025-ago-dic',
        nombre: '1.er semestre',
        fechas: 'Agosto – diciembre 2025',
        acciones: [
          {
            fecha: 'Ago – dic 2025',
            tipo: 'accion',
            titulo: 'Gestión con Los Colomos y el Parque Metropolitano',
            texto: 'Semestre de trámites y acuerdos con el Bosque Los Colomos y el Parque Metropolitano para abrir el camino a los proyectos de campo de la mesa.',
          },
        ],
        fotos: [],
      },
    ],
    fotos: carrusel2026.images.map((foto) => foto.img),
    tituloFotos: 'Galería de la mesa',
  },
  {
    id: '2023-2025',
    periodo: '2022 – 2025',
    etiqueta: 'Mesa anterior',
    presidencia: 'Elizabeth Galván',
    fotoMesa: 'https://firebasestorage.googleapis.com/v0/b/b-eco-18c09.appspot.com/o/Assets%2FWhatsApp%20Image%202023-12-04%20at%2018.36.34.jpeg?alt=media&token=7b2a0c64-83a5-46b2-9870-9e7f44b52b4c',
    mesa: [],
    resumen: [
      'Elizabeth Galván, vicepresidenta de la mesa fundadora, asumió la presidencia en agosto de 2022.',
      'Etapa en la que B-Eco creció con talleres para niñas, niños y estudiantes, reforestación, un jardín polinizador y la recuperación de espacios públicos con llantas recicladas.',
    ],
    semestres: [
      {
        id: '2023-2025-acciones',
        nombre: 'Acciones y logros',
        fechas: '2023 – 2025',
        acciones: [
          {
            fecha: '2023',
            tipo: 'logro',
            titulo: 'Galardón "Proyecto Joven", Zapopan 2023',
            texto: 'Premio de participación ciudadana y gobernanza del municipio de Zapopan.',
            foto: tarjetas2023[0].img,
            enlace: tarjetas2023[0].link,
          },
          {
            fecha: '2023',
            tipo: 'logro',
            titulo: 'Proyecto interdisciplinario destacado 2023',
            texto: '"Parque Comando" ganó por darle una segunda vida a un residuo para recuperar un espacio público.',
            foto: tarjetas2023[1].img,
            enlace: tarjetas2023[1].link,
          },
          {
            fecha: '2023',
            tipo: 'logro',
            titulo: 'Un año de la iniciativa',
            texto: '"Si no somos nosotros, ¿quién? Si no es ahora, ¿cuándo?" Celebramos el primer año del proyecto viendo el trabajo hecho realidad.',
            foto: tarjetas2023[2].img,
            enlace: tarjetas2023[2].link,
          },
          {
            fecha: '2023 – 2025',
            tipo: 'accion',
            titulo: 'De vuelta al parque',
            texto: 'Transformamos llantas abandonadas en mobiliario para renovar espacios comunitarios.',
            foto: fotoProyecto2023('De vuelta al parque'),
          },
          {
            fecha: '2023 – 2025',
            tipo: 'accion',
            titulo: 'Sembrando Vida, Cosechando Futuro',
            texto: 'Proyecto de reforestación para restaurar y preservar ecosistemas.',
            foto: fotoProyecto2023('Sembrando Vida, Cosechando Futuro'),
          },
          {
            fecha: '2023 – 2025',
            tipo: 'accion',
            titulo: 'Flores que Zumban, Vida que Prospera',
            texto: 'Jardín polinizador con flores elegidas para atraer y cuidar a los polinizadores locales.',
            foto: fotoProyecto2023('Flores que Zumban, Vida que Prospera'),
          },
          {
            fecha: '2023 – 2025',
            tipo: 'accion',
            titulo: 'Cultiva en Casa: Mi Primer Huerto',
            texto: 'Taller para crear y cuidar un huerto en casa con materiales comunes.',
            foto: fotoProyecto2023('Cultiva en Casa - Mi Primer Huerto'),
          },
          {
            fecha: '2023 – 2025',
            tipo: 'accion',
            titulo: 'EcoExploradores: Creando Composta',
            texto: 'Taller para niñas, niños y alumnos sobre cómo convertir residuos orgánicos en abono.',
            foto: fotoProyecto2023('EcoExploradores - Creando Composta'),
          },
          {
            fecha: '2023 – 2025',
            tipo: 'accion',
            titulo: 'Pequeños Científicos en Acción',
            texto: 'Taller para despertar la curiosidad por la ciencia a través de experimentos.',
            foto: fotoProyecto2023('Pequeños Científicos en Acción'),
          },
          {
            fecha: '2023 – 2025',
            tipo: 'accion',
            titulo: 'Taller de papel reciclado',
            texto: 'Le dimos nueva vida a cuadernos viejos convirtiéndolos en hojas de papel artesanal.',
            foto: fotoProyecto2023('Taller papel reciclado'),
          },
        ],
        fotos: [],
      },
      {
        id: '2023-ene-jun',
        nombre: 'El primer parque con llantas',
        fechas: 'Enero – junio 2023',
        portada: {
          src: '/historia/2022/2023-parque-llantas-b.jpg',
          pie: 'El equipo en el primer parque renovado con llantas, en Colinas de la Primavera, Zapopan.',
        },
        acciones: [
          {
            fecha: 'May 2023',
            tipo: 'logro',
            titulo: 'Primer parque renovado con llantas',
            texto: 'En Colinas de la Primavera, Zapopan, convertimos un terreno abandonado en un parque con columpios, torres, mesas, juegos y un recorrido para perros, todo con llantas recicladas. Fueron seis meses de gestiones; se juntaron tres áreas del gobierno de Zapopan para ayudarnos, pusieron luz y mandaron patrullas. El día de la inauguración el parque se llenó de familias.',
            foto: '/historia/2022/2023-parque-llantas-a.jpg',
            enlace: 'https://conecta.tec.mx/es/noticias/guadalajara/educacion/de-vuelta-al-parque-estudiantes-de-tec-gdl-renuevan-area-en-zapopan',
            textoEnlace: 'Leer la nota en Conecta →',
          },
        ],
        fotos: [],
      },
      {
        id: '2022-ago-dic',
        nombre: 'Arranque de la mesa',
        fechas: 'Agosto – diciembre 2022',
        acciones: [
          {
            fecha: 'Oct 2022',
            tipo: 'accion',
            titulo: 'Talleres en una prepa de Tequila',
            texto: 'Dimos varios talleres a estudiantes de un bachillerato en Tequila, Jalisco. Nos regalaron botellas y, como se ve, salimos muy felices.',
            foto: '/historia/2022/2022-10-tequila-a.jpg',
          },
          {
            fecha: 'Ago 2022',
            tipo: 'logro',
            titulo: 'Toma de protesta de la nueva mesa directiva',
            texto: 'Elizabeth Galván asume la presidencia y la nueva mesa rinde protesta como líderes estudiantiles LiFE.',
            foto: '/historia/2022/2022-ad-mesa.jpg',
          },
        ],
        fotos: ['/historia/2022/2022-10-tequila-b.jpg'],
      },
    ],
    fotos: carrusel2023.images.map((foto) => foto.img),
    tituloFotos: 'Galería de la mesa',
    pagina: '/historia/2023-2025',
  },
  {
    id: '2022',
    periodo: 'Feb – jun 2022',
    titulo: 'Mesa fundadora · 2022',
    etiqueta: 'Los inicios',
    presidencia: 'Juancho',
    mesa: [{ cargo: 'Vicepresidencia', nombre: 'Elizabeth Galván' }],
    resumen: [
      'B-Eco nació en febrero de 2022. La primera mesa directiva era un grupo de amigos que decidió formar el grupo, con muy pocos colaboradores.',
      'Ese semestre se enfocó en crecer: muchas juntas para planear el futuro y un solo taller. Juancho fue presidente solo ese semestre.',
    ],
    semestres: [
      {
        id: '2022-feb-jun',
        nombre: 'Primer semestre',
        fechas: 'Febrero – junio 2022',
        acciones: [
          {
            fecha: 'Jun 2022',
            tipo: 'accion',
            titulo: 'Primer taller: ciencia para niñas y niños de primaria',
            texto: 'El único taller de ese semestre: experimentos de ciencia para alumnos de primaria.',
            foto: '/historia/2022/2022-06-taller-ciencia.jpg',
          },
          {
            fecha: 'Feb 2022',
            tipo: 'logro',
            titulo: 'Nace B-Eco',
            texto: 'Se crea el grupo. En la foto están todos los colaboradores de ese momento, incluida la mesa directiva: éramos muy poquitos. Juancho, el primer presidente, es el de camisa azul con mangas verdes.',
            foto: '/historia/2022/2022-02-fundacion.jpg',
          },
        ],
        fotos: [],
      },
    ],
    fotos: [],
  },
];
