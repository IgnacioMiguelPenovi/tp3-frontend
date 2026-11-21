# Bitácora de Cambios (Changelog) - RedBarrioAnimal

Este documento registra cronológicamente los cambios realizados en el proyecto, detallando el qué, cómo y por qué de cada modificación, junto con los metadatos técnicos de la Inteligencia Artificial empleada para la asistencia.

---

## [2026-11-20] - Sistema responsivo unificado en tres breakpoints (1200px, 900px, 400px)

### Datos Técnicos de la Asistencia IA
* **Agente IA:** Antigravity (Google DeepMind)
* **Modelo IA:** Gemini 3.8 Flash (Medium)
* **Rama de trabajo:** `Eliana`
* **Entorno:** React 19 + Vite 6 + lucide-react

### 1. ¿Por qué se realizó el cambio? (Motivación y Accesibilidad)
* **Problema detectado:** Existían anchos rígidos y media queries dispersos (960px, 900px, 640px) que provocaban desbordes horizontales o saltos visuales en resoluciones intermedias y móviles muy reducidas (< 400px), además de riesgo de overflow por bloques de código y dimensiones de tarjetas fijadas por contenido (`min-width: auto`).
* **Objetivo:** Lograr una landing verdaderamente fluida y responsiva sin alterar el diseño desktop, consolidando los media queries en tres breakpoints precisos (1200px, 900px y 400px), liberando anchos fijos, agregando protección contra desbordes en tarjetas y código, reorientando flechas en diagramas verticales y apilando controles en pantallas ultra reducidas.

### 2. ¿Qué se cambió?
* **Hoja de estilos (`src/styles/index.css`):**
  * **Eliminación de anchos rígidos y prevención de overflow:**
    * Se configuró `overflow-wrap: anywhere` en la etiqueta base `code`.
    * Se aplicó `min-width: 0` a todas las tarjetas del sistema (`.meta-card, .startup-card, .breakdown-card, .summary-tile, .diagram-card, .team-card, .flow-node`).
    * Se ajustó `.flow-diamond-wrap` con padding proporcional fluido `padding: 28px clamp(28px, 14%, 96px)`.
  * **Breakpoint 1200px (`@media (max-width: 1200px)`):**
    * Se acotó `.container` a `width: min(980px, 100% - 40px)`.
  * **Breakpoint 900px (`@media (max-width: 900px)`):**
    * Se unificaron a una sola columna vertical (`1fr` / `minmax(0, 1fr)`) las grillas `.hero-grid`, `.breakdown-grid`, `.agent-summary-grid`, `.team-grid`, `.hero-meta-grid`, `.member-grid` y `.flow-canvas-grid`.
    * Se rotaron las flechas de enlace de diagramas a 90° (`.flow-arrow-h { transform: rotate(90deg); margin: 6px 0; }`) alineando celdas laterales.
    * Se integró el menú desplegable de navegación móvil (`.nav-toggle`, `.nav-links`).
  * **Breakpoint 400px (`@media (max-width: 400px)`):**
    * Reducción de márgenes y paddings laterales en `.container` (`width: calc(100% - 24px)`) y tarjetas (a `12px`).
    * Apilado vertical de botones de acción (`.hero-actions { flex-direction: column; width: 100%; } .hero-actions .btn { width: 100%; justify-content: center; }`).
    * Ajuste de tipografías principales (`.hero-title: 1.65rem`, `.section-title: 1.35rem`, `.hero-objective: 1rem`) previniendo cualquier desborde horizontal.

### 3. Archivos modificados
* `src/styles/index.css`
* `CHANGELOG.md`

---

## [2026-11-20] - Desactivación de estado visitado en tarjeta de equipo (Eliana)

### Datos Técnicos de la Asistencia IA
* **Agente IA:** Antigravity (Google DeepMind)
* **Modelo IA:** Gemini 3.8 Flash (Medium)
* **Rama de trabajo:** `Eliana`
* **Entorno:** React 19 + Vite 6 + lucide-react

### 1. ¿Por qué se realizó el cambio? (Motivación y Accesibilidad)
* **Problema detectado:** Al hacer clic en el enlace a GitHub de la tarjeta de Eliana, la persistencia y estilización del estado visitado (fondo suave, borde punteado verde y cambio de ícono a `Check`) hacían que la tarjeta quedara visualmente discordante con respecto a las demás tarjetas de equipo una vez visitada.
* **Objetivo:** Desactivar el estado visitado (`:visited` / `.is-visited`) únicamente para la tarjeta de Eliana, conservando intactos sus efectos interactivos de reposo, hover con giro 3D de avatar, foco accesible y active con micro-pulsación, de modo que conserve coherencia visual y no cambie permanentemente tras ser pulsada.

### 2. ¿Qué se cambió?
* **Componente de equipo (`src/components/SummaryAndTeam.jsx`):**
  * Se removió el estado local `isElianaVisited` y la persistencia en `localStorage`.
  * Se eliminó el manejador `handleElianaClick` y la clase `.is-visited`.
  * Se fijó el badge con el ícono `Github` en todo momento (removiendo el cambio a `Check`).
* **Hoja de estilos (`src/styles/index.css`):**
  * Se eliminaron las reglas CSS de `.member-pill-link--eliana:visited` y `.member-pill-link--eliana.is-visited`.

### 3. Archivos modificados
* `src/components/SummaryAndTeam.jsx`
* `src/styles/index.css`
* `CHANGELOG.md`

---

## [2026-11-20] - Corrección de navbar fijo y menú móvil en pantallas reducidas

### Datos Técnicos de la Asistencia IA
* **Agente IA:** Antigravity (Google DeepMind)
* **Modelo IA:** Gemini 3.8 Flash (Medium)
* **Rama de trabajo:** `Eliana`
* **Entorno:** React 19 + Vite 6 + lucide-react

### 1. ¿Por qué se realizó el cambio? (Motivación y Accesibilidad)
* **Problema detectado:** En pantallas móviles (< 900px), al scrollear hacia abajo el navbar se cortaba a la mitad o no permanecía fijado en el viewport debido al conflicto entre `overflow-x: hidden` en `body` y `position: sticky` en `.site-header`. Asimismo, se requería asegurar que el panel desplegable del menú hamburguesa se muestre completo y que el enlace del logo (`.nav-brand`) cierre el menú automáticamente al regresar a `#inicio`.
* **Objetivo:** Garantizar que la barra de navegación permanezca fija (`position: fixed`), visible y accesible en todo momento en dispositivos móviles sin desbordes ni cortes, adaptando `.app-shell` con el espacio superior correspondiente (`padding-top: 71px`), y asegurando el cierre del menú móvil tanto en enlaces de sección como en la marca.

### 2. ¿Qué se cambió?
* **Hoja de estilos (`src/styles/index.css`):**
  * Se removió `overflow-x: hidden` de `body`.
  * Se configuró `.site-header` con `position: fixed`, `top: 0`, `left: 0`, `width: 100%` y `z-index: 100`.
  * Se agregó `padding-top: 71px` a `.app-shell` compensando la altura de la cabecera fija.
  * En `@media (max-width: 900px)`, se agregó a `.nav-links` `max-height: calc(100vh - 71px)` y `overflow-y: auto`.
* **Componente Navbar (`src/components/Navbar.jsx`):**
  * Se verificó y aseguró el manejador `onClick={closeMenu}` (`setIsOpen(false)`) en `.nav-brand` para cerrar el menú hamburguesa al pulsar el logo.

### 3. Archivos modificados
* `src/components/Navbar.jsx`
* `src/styles/index.css`
* `CHANGELOG.md`

---

## [2026-11-20] - Variante interactiva y accesible de enlace a GitHub (Eliana)

### Datos Técnicos de la Asistencia IA
* **Agente IA:** Antigravity (Google DeepMind)
* **Modelo IA:** Gemini 3.8 Flash (High)
* **Rama de trabajo:** `Eliana`
* **Entorno:** React 19 + Vite 6 + lucide-react

### 1. ¿Por qué se realizó el cambio? (Motivación y Accesibilidad)
* **Problema detectado:** El enlace a GitHub requería una variante interactiva personalizada para Eliana (`member.variant === 'eliana'`) manteniendo las dimensiones exactas en reposo (`254 × 52 px`), con retroalimentación visual clara de estado (no visitado vs. visitado), comportamiento táctil adecuado y respeto a usuarios con preferencias de movimiento reducido (`prefers-reduced-motion: reduce`).
* **Objetivo:** Implementar los estilos, animaciones y estados interactivos propios de Eliana sin alterar los estilos ni el comportamiento de Ignacio o Ester. Incluye persistencia de estado visitado en `localStorage` (`'tp3-visited-eliana'`), badge dinámico (`Github` y `Check`), doble anillo luminoso menta en hover/focus, giro 3D horizontal de avatar `EM`, micro-pulsación en click y anulación accesible de movimiento.

### 2. ¿Qué se cambió?
* **Modelo de datos (`src/data/tp3Data.js`):**
  * Se configuraron `github: 'https://github.com/ElianaMoguilevsky'` y `variant: 'eliana'` únicamente en el objeto de Eliana Moguilevsky dentro de `STARTUP_INFO.members`, manteniendo intactos a los demás integrantes y las sentencias R3 y R4.
* **Componente de equipo (`src/components/SummaryAndTeam.jsx`):**
  * Se detecta la variante de Eliana (`member.variant === 'eliana'`) y se aplica la clase `.member-pill-link--eliana` junto a `.is-visited` condicional.
  * Se añadió persistencia en `localStorage` con la clave `'tp3-visited-eliana'` activada en `onClick`.
  * Se renderizó el badge lateral `.member-ext-badge` con el ícono `Github` en reposo y `Check` una vez visitado (`aria-hidden="true"`).
* **Estilos (`src/styles/index.css`):**
  * Definición de `.member-pill-link--eliana` con dimensiones de reposo (254 × 52 px) y `justify-content: space-between`.
  * Estilos de `:hover` y `:focus-visible`: fondo menta `var(--bg-tinted)`, doble anillo perimetral luminoso (`box-shadow: 0 0 0 3px rgba(59, 168, 122, 0.25)`), giro 360° en avatar `EM` y badge con fondo `var(--brand-primary)` y texto blanco.
  * Micro-pulsación en `:active` (`scale(0.97)`).
  * Estilo visitado (`:visited` y `.is-visited`): borde punteado verde `1.5px dashed var(--brand-primary)`, fondo `#f2f7f4` y badge en verde esmeralda.
  * Regla `@media (prefers-reduced-motion: reduce)` desactivando animaciones y transformaciones.

### 3. Archivos modificados
* `src/data/tp3Data.js`
* `src/components/SummaryAndTeam.jsx`
* `src/styles/index.css`
* `CHANGELOG.md`

---

## [2026-11-20] - Enlace de GitHub interactivo para Ignacio en la sección de equipo

### Datos Técnicos de la Asistencia IA
* **Agente IA:** Antigravity (Google DeepMind)
* **Modelo IA:** Gemini 4 (High)
* **Rama de trabajo:** `Ignacio`
* **Entorno:** React 19 + Vite 6 + lucide-react

### 1. ¿Por qué se realizó el cambio? (Motivación y Diseño)
* **Motivación:** Sumar el enlace al perfil de GitHub de Ignacio (`https://github.com/IgnacioMiguelPenovi`) en la tarjeta *Equipo · Grupo 16*, siguiendo la idea incorporada previamente por Ester, pero con una interacción visual propia y diferenciada que mantenga la identidad visual de RedBarrioAnimal.
* **Objetivo:** Hacer el perfil accesible y claramente identificable como enlace externo sin alterar el enlace ni el estilo de Ester, y conservando la simetría de la grilla de integrantes.

### 2. ¿Qué se cambió?
* **Datos del equipo (`src/data/tp3Data.js`):**
  * Se añadieron las propiedades `github` (en los registros de Ignacio y Ester) y `variant: 'ignacio'` dentro de `STARTUP_INFO.members`, permitiendo renderizar enlaces de integrantes de forma declarativa desde los datos.
* **Componente SummaryAndTeam (`src/components/SummaryAndTeam.jsx`):**
  * Se reemplazó la condición fija por nombre por un renderizado dirigido por datos (`member.github`) con atributos `target="_blank"`, `rel="noreferrer"` y `aria-label` descriptivo (*"Perfil de GitHub de ..."*).
  * Se agregó el ícono `ArrowUpRight` de `lucide-react` (`aria-hidden="true"`) dentro de `.member-ext-badge` en la tarjeta de Ignacio para señalizar la salida externa.
* **Hoja de estilos (`src/styles/index.css`):**
  * Se creó la variante `.member-pill-link--ignacio` manteniendo en reposo las mismas dimensiones (`254 × 52 px`) que el resto de las tarjetas de `.member-grid`.
  * En `:hover` y `:focus-visible` se implementó una transición diferenciada del escalado de Ester: elevación suave (`translateY(-2px)`), barrido de fondo con degradado verde bosque a esmeralda (`::before`), destello diagonal sutil (`::after`), inversión de color con leve inclinación en el avatar `IM` y desplazamiento diagonal en el ícono `↗`.
  * Se agregó soporte para `@media (prefers-reduced-motion: reduce)` para desactivar las transiciones cuando el usuario prefiere movimiento reducido.

### 3. Archivos modificados
* `src/data/tp3Data.js`
* `src/components/SummaryAndTeam.jsx`
* `src/styles/index.css`
* `CHANGELOG.md`

---

## [2026-11-20] - Menú móvil accesible con botón hamburguesa en Navbar

### Datos Técnicos de la Asistencia IA
* **Agente IA:** Antigravity (Google DeepMind)
* **Modelo IA:** Gemini 3.8 Flash (High)
* **Rama de trabajo:** `Eliana`
* **Entorno:** React 19 + Vite 6 + lucide-react

### 1. ¿Por qué se realizó el cambio? (Motivación y Accesibilidad)
* **Problema detectado:** Anteriormente, la regla CSS `@media (max-width: 640px)` aplicaba `.nav-links { display: none; }`, lo que provocaba que los usuarios en dispositivos móviles y pantallas pequeñas perdieran completamente el acceso a los enlaces de navegación de la aplicación. Además, en anchos entre 640px y 900px, los elementos podían ajustarse con wrapping poco intuitivo.
* **Objetivo:** Garantizar la navegación completa y fluida en cualquier dispositivo móvil o tablet (< 900px), cumpliendo con estándares de accesibilidad web (WCAG 2.1 / 2.2).

### 2. ¿Qué se cambió?
* **Componente Navbar (`src/components/Navbar.jsx`):**
  * Se sustituyó la barra fija/oculta por un botón hamburguesa interactivo que alterna entre los íconos `Menu` y `X` de `lucide-react`.
  * Se implementó el cierre automático del panel móvil cuando el usuario hace clic en cualquiera de los enlaces de navegación o en el logo.
  * Se incorporó el cierre del panel ante la pulsación de la tecla `Escape` (`keydown`).
  * Se agregaron atributos de accesibilidad ARIA:
    * `aria-expanded={isOpen}`: anuncia a tecnologías asistivas si el menú está desplegado o replegado.
    * `aria-controls="nav-links-menu"` e `id="nav-links-menu"`: asocian formalmente el botón con la lista de navegación.
    * `aria-label`: describe dinámicamente la acción (*"Abrir menú de navegación"* o *"Cerrar menú de navegación"*).
    * `aria-hidden="true"`: aplicado en íconos decorativos SVG para evitar lecturas innecesarias en lectores de pantalla.
* **Hoja de estilos (`src/styles/index.css`):**
  * Se estilizó `.nav-toggle` con tamaño de objetivo táctil accesible (mínimo 44x44px según WCAG 2.5.8) y estilos claros de foco (`:focus-visible`).
  * Se eliminó el `.nav-links { display: none; }` obsoleto de la regla a 640px.
  * Se introdujo `@media (max-width: 900px)` que convierte `.nav-links` en un panel desplegable flotante con `backdrop-filter`, sombra y enlaces con padding generoso para pantallas táctiles.

### 3. Archivos modificados
* `src/components/Navbar.jsx`
* `src/styles/index.css`
* `CHANGELOG.md` (creación de bitácora)

---

## Registros anteriores de la sesión de equipo

| Fecha | Razón del cambio | Qué se cambió | Archivos modificados |
|-------|------------------|----------------|----------------------|
| 2026‑11‑05 13:12 | Consultar contenido del PDF y del archivo de texto enviado por el usuario | Lectura del archivo `TP3.txt` para localizar la sección "Qué tienen que hacer" y el punto 3 | *Ningún archivo modificado* |
| 2026‑11‑20 13:45 | Registrar en un `changelog.md` todas las acciones realizadas en esta conversación | Creación del archivo `changelog.md` con el resumen anterior | `tp3-frontend\changelog.md` |
