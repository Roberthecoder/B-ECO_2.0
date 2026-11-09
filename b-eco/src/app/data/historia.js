// Historia de B-Eco: un registro vivo, una entrada por mesa directiva.
// Orden: la mesa más reciente va PRIMERO.
//
// Para agregar una mesa nueva, copia un bloque { ... } completo,
// pégalo hasta arriba de la lista y cambia sus datos.
// - periodo:      años de la mesa (ej. "2027-2028")
// - presidencia:  nombre de quien preside
// - mesa:         otros cargos (opcional): [{ cargo: "Tesorería", nombre: "..." }]
// - resumen:      uno o dos párrafos sobre lo que pasó
// - fotos:        enlaces de Firebase Storage (carpeta Assets/)
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
      'Mesa directiva en funciones.',
      'Próximo proyecto (febrero–junio 2027): restauración del Sendero Ecológico Didáctico del Parque Metropolitano de Guadalajara, con el jardín polinizador, el estanque y el invernadero. Será un proyecto de Servicio Social con cerca de 40 voluntarios los sábados.',
    ],
    fotos: carrusel2026.images.map((foto) => foto.img),
    logros: [],
    proyectos: ['Restauración del Sendero Ecológico Didáctico (2027)'],
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
