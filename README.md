# B-ECO - Sitio Web Oficial

![B-ECO](https://firebasestorage.googleapis.com/v0/b/b-eco-18c09.appspot.com/o/Assets%2FWhatsApp%20Image%202023-11-18%20at%2016.37.27.jpeg?alt=media&token=8009eb0c-74b2-4bfe-a228-be41c6e2483f)

**Sitio Web:** [https://b-eco.vercel.app/](https://b-eco.vercel.app/)

B-ECO es el sitio web del grupo estudiantil enfocado en proyectos de sostenibilidad y medio ambiente del Tecnológico de Monterrey.

---

## 📋 Tabla de Contenidos

1. [Requisitos Previos](#-requisitos-previos)
2. [Configuración Inicial](#-configuración-inicial)
3. [Cómo Actualizar Contenido](#-cómo-actualizar-contenido)
4. [Cómo Subir Imágenes a Firebase](#-cómo-subir-imágenes-a-firebase)
5. [Ejecutar el Proyecto Localmente](#-ejecutar-el-proyecto-localmente)
6. [Desplegar Cambios](#-desplegar-cambios)
7. [Archivar una Mesa Directiva](#-archivar-una-mesa-directiva)
8. [Solución de Problemas](#-solución-de-problemas)
9. [Recursos Útiles](#-recursos-útiles)

---

## 🔧 Requisitos Previos

Antes de comenzar, necesitas tener instalado lo siguiente en tu computadora:

### 1. **Node.js y npm**
- **Descargar:** [https://nodejs.org/](https://nodejs.org/) (versión LTS recomendada)
- Node.js incluye npm (gestor de paquetes)
- **Verificar instalación:** Abre una terminal y ejecuta:
  ```bash
  node --version
  npm --version
  ```

### 2. **Git**
- **Descargar:** [https://git-scm.com/downloads](https://git-scm.com/downloads)
- **Verificar instalación:**
  ```bash
  git --version
  ```

### 3. **Cuenta de GitHub**
- **Crear cuenta:** [https://github.com/signup](https://github.com/signup)
- **Configurar Git con tu cuenta:** [Guía oficial de GitHub](https://docs.github.com/es/get-started/quickstart/set-up-git)

### 4. **Editor de Código (Recomendado)**
- **Visual Studio Code:** [https://code.visualstudio.com/](https://code.visualstudio.com/)

---

## 🚀 Configuración Inicial

### Paso 1: Configurar Git con GitHub

Si es tu primera vez usando Git, necesitas configurar tu identidad:

```bash
git config --global user.name "Tu Nombre"
git config --global user.email "tu-email@ejemplo.com"
```

**Autenticar con GitHub:**
- **Guía completa:** [Conectar con GitHub usando SSH](https://docs.github.com/es/authentication/connecting-to-github-with-ssh)
- **Alternativa simple:** Usar [GitHub CLI](https://cli.github.com/)

### Paso 2: Clonar el Repositorio

Abre una terminal y ejecuta:

```bash
git clone https://github.com/Roberthecoder/B-ECO_2.0.git
cd B-ECO_2.0/b-eco
```

### Paso 3: Instalar Dependencias

Dentro de la carpeta `b-eco`, ejecuta:

```bash
npm install
```

Este comando descarga todas las librerías necesarias para el proyecto (puede tardar unos minutos).

---

## 📝 Cómo Actualizar Contenido

El contenido del sitio está organizado en archivos de datos que puedes editar fácilmente.

### Estructura de Directorios

```
b-eco/src/app/data/years/
├── current/              ← Contenido de la mesa directiva ACTUAL
│   ├── carousel-images.json
│   ├── projects.js
│   ├── cards.js
│   └── who-are-we.js
└── 2023-2025/           ← Contenido archivado (NO EDITAR)
    ├── carousel-images.json
    ├── projects.js
    ├── cards.js
    └── who-are-we.js
```

**⚠️ IMPORTANTE:** Sólo edita archivos en la carpeta `current/`. Los archivos en `2023-2025/` son históricos.

---

### 1️⃣ Actualizar el Carrusel Principal (Portada)

**Archivo:** `b-eco/src/app/data/years/current/carousel-images.json`

Este archivo controla las imágenes que aparecen en rotación en la parte superior de la página principal.

**Formato:**

```json
{
  "images": [
    {
      "img": "URL_DE_LA_IMAGEN",
      "title": "Descripción de la imagen",
      "fitMode": "cover"
    }
  ]
}
```

**Campos:**
- `img`: URL de la imagen en Firebase Storage (ver sección de [Subir Imágenes](#-cómo-subir-imágenes-a-firebase))
- `title`: Descripción breve de la imagen (para accesibilidad)
- `fitMode`:
  - `"cover"` = La imagen se recorta para llenar el espacio
  - `"contain"` = La imagen se muestra completa con fondo blanco

**Ejemplo:**

```json
{
  "images": [
    {
      "img": "https://firebasestorage.googleapis.com/v0/b/b-eco-18c09.appspot.com/o/Assets%2FCarrusel2026%2F1.jpg?alt=media&token=...",
      "title": "Reforestación 2026",
      "fitMode": "cover"
    },
    {
      "img": "https://firebasestorage.googleapis.com/v0/b/b-eco-18c09.appspot.com/o/Assets%2FCarrusel2026%2F2.jpg?alt=media&token=...",
      "title": "Taller de Compostaje",
      "fitMode": "cover"
    }
  ]
}
```

---

### 2️⃣ Actualizar la Sección "¿Quiénes Somos?"

**Archivo:** `b-eco/src/app/data/years/current/who-are-we.js`

Este archivo controla el texto e imagen de la sección "Nosotros".

**Formato:**

```javascript
export const whoAreWeContent = {
  title: "¿Quiénes Somos?",
  paragraphs: [
    "Primer párrafo de texto...",
    "Segundo párrafo de texto...",
    "Tercer párrafo (opcional)..."
  ],
  image: "URL_DE_LA_IMAGEN"
};
```

**Ejemplo:**

```javascript
export const whoAreWeContent = {
  title: "¿Quiénes Somos?",
  paragraphs: [
    "Somos B-ECO 2026, una comunidad apasionada de estudiantes del Tec de Monterrey comprometidos con la sostenibilidad.",
    "Trabajamos en proyectos concretos que impactan positivamente nuestro entorno y comunidad."
  ],
  image: "https://firebasestorage.googleapis.com/v0/b/b-eco-18c09.appspot.com/o/Assets%2F2026%2Fequipo.jpg?alt=media&token=..."
};
```

---

### 3️⃣ Actualizar Proyectos

**Archivo:** `b-eco/src/app/data/years/current/projects.js`

Este archivo controla el carrusel de proyectos.

**Formato:**

```javascript
export const projectsResources = [
  {
    image: "URL_DE_LA_IMAGEN",
    title: "Nombre del Proyecto",
    description: "Descripción completa del proyecto..."
  },
  // Más proyectos...
];
```

**Ejemplo:**

```javascript
export const projectsResources = [
  {
    image: "https://firebasestorage.googleapis.com/v0/b/b-eco-18c09.appspot.com/o/Assets%2FProyectos%2Freforestacion.jpg?alt=media&token=...",
    title: "Reforestación Campus",
    description: "Proyecto de reforestación en el campus universitario donde plantamos más de 500 árboles nativos de la región."
  },
  {
    image: "https://firebasestorage.googleapis.com/v0/b/b-eco-18c09.appspot.com/o/Assets%2FProyectos%2Fcompostaje.jpg?alt=media&token=...",
    title: "Taller de Compostaje",
    description: "Taller educativo para la comunidad sobre cómo crear composta en casa y reducir residuos orgánicos."
  }
];
```

---

### 4️⃣ Actualizar Tarjetas de Redes Sociales

**Archivo:** `b-eco/src/app/data/years/current/cards.js`

Este archivo controla las tarjetas de publicaciones destacadas en la sección "Síguenos".

**Formato:**

```javascript
export const cardsContent = [
  {
    img: "URL_DE_LA_IMAGEN",
    text: "Texto de la publicación (máximo 200 caracteres)...",
    link: "URL_DEL_POST_EN_INSTAGRAM"
  },
  // Más tarjetas...
];
```

**Ejemplo:**

```javascript
export const cardsContent = [
  {
    img: "https://firebasestorage.googleapis.com/v0/b/b-eco-18c09.appspot.com/o/Assets%2FPosts%2Fpost1.jpg?alt=media&token=...",
    text: "¡Celebramos nuestro primer aniversario! Gracias a todos por formar parte de este proyecto...",
    link: "https://www.instagram.com/p/ABC123/"
  },
  {
    img: "https://firebasestorage.googleapis.com/v0/b/b-eco-18c09.appspot.com/o/Assets%2FPosts%2Fpost2.jpg?alt=media&token=...",
    text: "Ganadores del premio 'Proyecto Estudiantil Destacado 2026'",
    link: "https://www.instagram.com/p/DEF456/"
  }
];
```

---

## 🖼️ Cómo Subir Imágenes a Firebase

Firebase Storage es donde se almacenan todas las imágenes del sitio web.

### Paso 1: Acceder a Firebase Console

1. Ve a [https://console.firebase.google.com/](https://console.firebase.google.com/)
2. Inicia sesión con la cuenta de Firebase del proyecto (pide las credenciales al encargado)
3. Selecciona el proyecto **b-eco**

### Paso 2: Navegar a Storage

1. En el menú lateral, haz clic en **"Storage"** (Si no aparece por defecto esta en la seccion de **Build**)
2. Verás la carpeta `Assets/`

### Paso 3: Organizar las Imágenes

**Estructura recomendada:**

```
Assets/
├── Carrusel2026/       ← Imágenes del carrusel principal
├── Proyectos2026/      ← Imágenes de proyectos
├── Posts2026/          ← Imágenes de tarjetas sociales
└── Equipo2026/         ← Fotos del equipo
```

**Crear carpeta:**
1. Haz clic en **"Subir carpeta"** o **"Crear carpeta"**
2. Nombra la carpeta (ejemplo: `Carrusel2026`)

### Paso 4: Subir Imágenes

1. Dentro de la carpeta deseada, haz clic en **"Subir archivo"**
2. Selecciona las imágenes desde tu computadora
3. Espera a que se complete la carga

### Paso 5: Obtener la URL de la Imagen

1. Una vez subida la imagen, haz clic sobre ella
2. En el panel derecho, busca la sección **"Tokens de acceso"**
3. Copia la **URL de descarga** (se ve así):
   ```
   https://firebasestorage.googleapis.com/v0/b/b-eco-18c09.appspot.com/o/Assets%2FCarrusel2026%2F1.jpg?alt=media&token=abc123...
   ```
4. Pega esta URL en el archivo correspondiente (ver sección [Actualizar Contenido](#-cómo-actualizar-contenido))

**💡 Tip:** Si la URL no aparece automáticamente, asegúrate de que la imagen tenga permisos públicos:
- Haz clic derecho en la imagen → **"Obtener URL pública"**

### Recomendaciones para Imágenes

- **Carrusel principal:** 1920x1080px (formato horizontal)
- **Proyectos:** 800x600px
- **Tarjetas sociales:** 600x600px (cuadrado)
- **Formato:** JPG o PNG
- **Peso:** Máximo 2MB por imagen (comprime si es necesario)

**Herramientas de compresión:**
- [TinyPNG](https://tinypng.com/)
- [Squoosh](https://squoosh.app/)

---

## 💻 Ejecutar el Proyecto Localmente

Para ver los cambios en tu computadora antes de publicarlos:

### 1. Abrir el proyecto

```bash
cd /ruta/a/B-ECO_2.0/b-eco
```

### 2. Iniciar el servidor de desarrollo

```bash
npm run dev
```

### 3. Ver el sitio en el navegador

Abre tu navegador y ve a: [http://localhost:3000](http://localhost:3000)

El sitio se actualizará automáticamente cuando guardes cambios en los archivos.

### 4. Detener el servidor

Presiona `Ctrl + C` en la terminal.

---

## 🚢 Desplegar Cambios

Una vez que hayas hecho cambios y los hayas probado localmente, es momento de publicarlos.

### Paso 1: Verificar los Cambios

```bash
git status
```

Este comando muestra los archivos que han sido modificados.

### Paso 2: Preparar los Cambios

```bash
git add .
```

Esto prepara todos los archivos modificados para el commit.

### Paso 3: Crear un Commit

```bash
git commit -m "Descripción de los cambios (ejemplo: Actualizar carrusel 2026)"
```

**💡 Tip:** Usa mensajes descriptivos. Ejemplos:
- ✅ `"Actualizar proyectos de la mesa 2026"`
- ✅ `"Agregar imágenes del carrusel principal"`
- ❌ `"cambios"` (muy vago)

### Paso 4: Subir los Cambios a GitHub

```bash
git push origin main
```

**Si es tu primera vez:**
- Es posible que te pida autenticarte con GitHub
- Sigue las instrucciones en pantalla

### Paso 5: Despliegue Automático

El sitio está configurado con **Vercel** para despliegue automático:

1. Después de hacer `git push`, Vercel detecta los cambios automáticamente
2. Construye una nueva versión del sitio
3. En ~2-3 minutos, los cambios estarán en vivo en [https://b-eco.vercel.app/](https://b-eco.vercel.app/)

**Ver el estado del despliegue:**
- Ve a [Vercel Dashboard](https://vercel.com/dashboard)
- Inicia sesión con la cuenta del proyecto
- Verás el estado del build en tiempo real

---

## 📦 Archivar una Mesa Directiva

> **Línea del tiempo (`/historia`)**: la historia del grupo vive en un solo archivo,
> `b-eco/src/app/data/historia.js`. Cada mesa directiva es un bloque con su periodo,
> presidencia, resumen, fotos, proyectos y logros. Para agregar una mesa nueva, copia un
> bloque, pégalo **hasta arriba** de la lista y cambia sus datos. El menú "Historia" se
> actualiza solo. Los pasos de abajo sirven si además quieres guardar la página completa
> de esa mesa en `/historia/<periodo>`.
>
> **Fotos**: ya no se deforman. En `carousel-images.json`, `fitMode` puede ser `"cover"`
> (llena el espacio recortando orillas, recomendado) o `"contain"` (foto completa con fondo blanco).


Cuando termine el periodo de una mesa directiva y entre una nueva:

### Paso 1: Crear Carpeta de Archivo

1. Crea una nueva carpeta en `b-eco/src/app/data/years/`
2. Nómbrala con el periodo (ejemplo: `2026-2028`)

```bash
cd b-eco/src/app/data/years/
mkdir 2026-2028
```

### Paso 2: Copiar Contenido Actual

```bash
cp current/*.* 2026-2028/
```

Esto copia todos los archivos de `current/` a la nueva carpeta de archivo.

### Paso 3: Actualizar Configuración

Edita el archivo `b-eco/src/app/data/homepage-configs.js`:

```javascript
// Agrega la nueva configuración
import archive2026Carousel from './years/2026-2028/carousel-images.json';
import { projectsResources as archive2026Projects } from './years/2026-2028/projects';
import { cardsContent as archive2026Cards } from './years/2026-2028/cards';
import { whoAreWeContent as archive2026WhoAreWe } from './years/2026-2028/who-are-we';

export const homepageConfigs = {
  "current": {
    // ... configuración actual
  },
  "2023-2025": {
    // ... configuración existente
  },
  "2026-2028": {  // ← NUEVO
    year: "2026-2028",
    displayName: "2026-2028",
    headerCarouselImages: archive2026Carousel.images,
    whoAreWeContent: archive2026WhoAreWe,
    projectsData: archive2026Projects,
    followUsCards: archive2026Cards,
    showSnakeGame: true,
  }
};
```

### Paso 4: Agregar al Menú de Navegación

**Navbar:** Edita `b-eco/src/app/components/Navbar.jsx`

```jsx
<div className="dropdown-menu">
  <Link href="/historia/2023-2025" className="dropdown-item">
    2023-2025
  </Link>
  <Link href="/historia/2026-2028" className="dropdown-item">
    2026-2028  {/* ← NUEVO */}
  </Link>
</div>
```

**Sidebar:** Edita `b-eco/src/app/components/Sidebar.jsx` (similar al Navbar)

### Paso 5: Actualizar Rutas Estáticas

Edita `b-eco/src/app/historia/[year]/page.js`:

```javascript
export async function generateStaticParams() {
  return [
    { year: '2023-2025' },
    { year: '2026-2028' },  // ← NUEVO
  ];
}
```

### Paso 6: Actualizar Contenido Actual

Ahora puedes editar los archivos en `current/` con la información de la nueva mesa directiva sin perder el contenido anterior.

---

## 🐛 Solución de Problemas

### Error: `npm: command not found`

**Solución:** Node.js no está instalado o no está en el PATH.
- Reinstala Node.js desde [https://nodejs.org/](https://nodejs.org/)
- Reinicia tu terminal

### Error: `git: command not found`

**Solución:** Git no está instalado.
- Descarga Git desde [https://git-scm.com/downloads](https://git-scm.com/downloads)
- Reinicia tu terminal

### Error al hacer `git push`: `Permission denied`

**Solución:** No tienes permisos para subir cambios al repositorio.
- Asegúrate de estar autenticado con GitHub
- Pide al administrador del repositorio que te agregue como colaborador

### Error: `Module not found`

**Solución:** Las dependencias no están instaladas.

```bash
cd b-eco
npm install
```

### El sitio no se actualiza después de hacer cambios

**Solución:**
1. Verifica que guardaste los archivos
2. Si estás en modo desarrollo (`npm run dev`), el navegador debería actualizarse automáticamente
3. Intenta refrescar el navegador con `Ctrl + F5` (refresco forzado)
4. Verifica que no haya errores en la consola del navegador (F12 → Consola)

### Error de Build: `Syntax Error`

**Solución:** Hay un error de sintaxis en algún archivo.
- Revisa que todos los archivos `.js` y `.json` tengan la sintaxis correcta
- Los archivos JSON deben tener comillas dobles `"`, no simples `'`
- Verifica que no falten comas o corchetes

### Las imágenes no se ven

**Solución:**
- Verifica que la URL de Firebase Storage sea correcta
- Asegúrate de que la imagen tenga permisos públicos en Firebase
- Verifica que la URL incluya el token de acceso (`?alt=media&token=...`)

---

## 📚 Recursos Útiles

### Documentación Oficial

- **Next.js:** [https://nextjs.org/docs](https://nextjs.org/docs)
- **React:** [https://react.dev/](https://react.dev/)
- **Firebase:** [https://firebase.google.com/docs](https://firebase.google.com/docs)
- **Git:** [https://git-scm.com/doc](https://git-scm.com/doc)

### Tutoriales en Español

- **Git y GitHub para principiantes:**
  - [Guía interactiva](https://learngitbranching.js.org/?locale=es_ES)

- **Configurar SSH con GitHub:**
  - [Guía oficial en español](https://docs.github.com/es/authentication/connecting-to-github-with-ssh)

- **Firebase Storage:**
  - [Documentación en español](https://firebase.google.com/docs/storage?hl=es)

### Herramientas Recomendadas

- **Editor de Código:** [Visual Studio Code](https://code.visualstudio.com/)
- **Cliente Git Visual:** [GitHub Desktop](https://desktop.github.com/)

### Soporte

Si tienes problemas o preguntas:

1. **Revisa esta documentación** - La mayoría de problemas comunes están cubiertos aquí
2. **Busca el error en Google** - Copia el mensaje de error y búscalo
3. **Consulta al equipo técnico** - Contacta al encargado de tecnología de B-ECO
4. **GitHub Issues** - Crea un issue en el repositorio: [https://github.com/Roberthecoder/B-ECO_2.0/issues](https://github.com/Roberthecoder/B-ECO_2.0/issues)

---

## 📄 Licencia

Este proyecto es propiedad de B-ECO, grupo estudiantil del Tecnológico de Monterrey.

---

*Última actualización: Febrero 2026*
