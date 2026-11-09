// Historia de B-Eco: un registro vivo, una entrada por mesa directiva.
// Orden: la mesa más reciente va PRIMERO.
//
// Para agregar una mesa nueva, copia un bloque { ... } completo,
// pégalo hasta arriba de la lista y cambia sus datos.
// - periodo:      años de la mesa (ej. "2027-2028")
// - presidencia:  nombre de quien preside
// - mesa:         otros cargos (opcional): [{ cargo: "Tesorería", nombre: "..." }]
// - resumen:      uno o dos párrafos sobre lo que pasó
// - semestres:    (opcional) lo que pasó cada semestre: resumen, cifras, portada y fotos
// - fotos:        enlaces de Firebase Storage o rutas en public/ (ej. /historia/...)
// - logros:       reconocimientos o hitos (opcional)
// - proyectos:    nombres de proyectos (opcional)
// - pagina:       enlace a la página completa de esa mesa (opcional)

import carrusel2026 from './years/current/carousel-images.json';
import carrusel2023 from './years/2023-2025/carousel-images.json';
import { projectsResources as proyectos2023 } from './years/2023-2025/projects';
import { cardsContent as tarjetas2023 } from './years/2023-2025/cards';

export const mesasDirectivas = [
  {
    id: '2025',
    periodo: '2025 – actual',
    etiqueta: 'Mesa actual',
    presidencia: 'Roberto Carlos Navarro Félix',
    mesa: [],
    resumen: [
      'Mesa directiva en funciones. Su meta: atender problemas ambientales concretos, generar conciencia y dejar resultados tangibles para la comunidad.',
    ],
    // Cada semestre de la mesa, del más reciente al más antiguo.
    // portada: la foto "insignia" del semestre (se muestra grande).
    semestres: [
      {
        id: '2027-ene-jun',
        nombre: '4.º semestre',
        fechas: 'Enero – junio 2027',
        estado: 'Próximo',
        resumen: [
          'Segunda etapa de la restauración del Sendero Ecológico Didáctico (S.E.D.) del Parque Metropolitano de Guadalajara, ahora como proyecto de Servicio Social: jardín polinizador, estanque e invernadero, los sábados de 9:00 a 13:00.',
        ],
        cifras: [],
        fotos: [],
      },
      {
        id: '2026-ago-dic',
        nombre: '3.er semestre',
        fechas: 'Agosto – diciembre 2026',
        estado: 'En curso',
        resumen: [
          'Arrancamos la restauración del Sendero Ecológico Didáctico (S.E.D.) del Parque Metropolitano: deshierbe del jardín polinizador, limpieza de áreas invadidas por pasto y recorridos de reconocimiento con el equipo del parque.',
        ],
        cifras: [],
        portada: {
          src: '/historia/2026-ago-dic/portada-reconocimiento.jpg',
          pie: 'La mesa directiva con su reconocimiento en el Sendero Ecológico Didáctico.',
        },
        fotos: [
          '/historia/2026-ago-dic/sed-entrada.jpg',
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
        cifras: [
          { valor: '680 kg', texto: 'de tapitas donadas a Cómplices A.C. para apoyar causas contra el cáncer' },
          { valor: '50', texto: 'personas capacitadas en el curso de cultivo de hongos' },
          { valor: '+100 kg', texto: 'de sustrato preparado para la granja de hongos' },
          { valor: '~80', texto: 'cocos procesados para pruebas de fibra' },
          { valor: '183', texto: 'hogares censados en La Primavera (perros y gatos), 16.96 km con 10 equipos' },
          { valor: '50', texto: 'videos de concientización; el primero superó las 4,000 vistas' },
        ],
        portada: {
          src: '/historia/2026-ene-jun/tapas-680kg.jpg',
          pie: 'Parte de los 680 kg de tapitas antes de su entrega (26 de mayo de 2026).',
        },
        fotos: [],
      },
      {
        id: '2025-ago-dic',
        nombre: '1.er semestre',
        fechas: 'Agosto – diciembre 2025',
        resumen: [
          'Semestre de gestión: trámites y acuerdos con el Bosque Los Colomos y el Parque Metropolitano para abrir el camino a los proyectos de campo de la mesa.',
        ],
        cifras: [],
        fotos: [],
      },
    ],
    fotos: carrusel2026.images.map((foto) => foto.img),
    tituloFotos: 'Galería de la mesa',
    logros: [],
    proyectos: [
      'Restauración del Sendero Ecológico Didáctico',
      'Campaña de tapitas',
      'Granja y curso de hongos',
      'Censo en La Primavera',
      'Videos de concientización',
    ],
    pagina: '/',
  },
  {
    id: '2023-2025',
    periodo: '2023 – 2025',
    etiqueta: 'Mesa anterior',
    presidencia: 'Por confirmar',
    mesa: [],
    resumen: [
      'Etapa en la que B-Eco creció con talleres para niñas, niños y estudiantes, proyectos de reforestación y la recuperación de espacios públicos con llantas recicladas.',
    ],
    fotos: [
      ...new Set([
        ...carrusel2023.images.map((foto) => foto.img),
        ...proyectos2023.map((proyecto) => proyecto.image),
      ]),
    ],
    logros: tarjetas2023.map((tarjeta) => ({
      imagen: tarjeta.img,
      texto: tarjeta.text,
      enlace: tarjeta.link,
    })),
    proyectos: proyectos2023.map((proyecto) => proyecto.title),
    pagina: '/historia/2023-2025',
  },
];
