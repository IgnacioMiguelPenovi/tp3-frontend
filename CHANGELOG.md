# Bitácora de Cambios (Changelog) - RedBarrioAnimal

Este documento registra cronológicamente los cambios realizados en el proyecto, detallando el qué, cómo y por qué de cada modificación, junto con los metadatos técnicos de la Inteligencia Artificial empleada para la asistencia.

---


## [2026-11-24] - Prioridad 3: refuerzo integral de accesibilidad (Grupo 16)

### Datos Técnicos de la Asistencia IA
* **Agente IA:** GitHub Copilot
* **Modelo IA activo:** modelo no informado
* **Rama de trabajo:** `fix-r3-parentesis`
* **Entorno:** React 19 + Vite 6 + lucide-react

### 1. ¿Por qué se realizó el cambio? (Accesibilidad)
* **Pedido:** Completar la tarea del Grupo 16 para reforzar la accesibilidad integral del sitio.
* **Objetivo:** Facilitar la navegación por teclado, comunicar estados y relaciones semánticas, respetar preferencias de movimiento reducido y ofrecer un acceso identificable al perfil de GitHub.

### 2. ¿Qué se cambió?
* **Aplicación (`src/App.jsx`):** Se agregó el enlace visible al recibir foco para saltar al contenido principal y se identificó el elemento `main` como destino.
* **Controles de escenario (`src/components/ProposalSection.jsx`):** Se agregó `aria-pressed` a la vista completa y a los botones de escenario según la selección activa.
* **Tabla comparativa (`src/components/SummaryAndTeam.jsx`):** Se definieron encabezados de columna y fila con los atributos `scope` correspondientes.
* **Enlace de GitHub (`src/components/Hero.jsx`):** Se añadió el botón visual integrado “Mi GitHub”, con ícono, nombre accesible y apertura segura en una pestaña nueva.
* **Estilos (`src/styles/index.css`):** Se estilizó el enlace de salto y se amplió `prefers-reduced-motion` para reducir animaciones, transiciones y desplazamiento suave en todo el sitio.

### 3. Archivos modificados
* `src/App.jsx`
* `src/components/ProposalSection.jsx`
* `src/components/SummaryAndTeam.jsx`
* `src/components/Hero.jsx`

#### [2026-11-24] - Consolidación de documentación en README.md y trazabilidad en bitácora (Eliana)

##### Datos Técnicos de la Asistencia IA
* **Agente IA:** Antigravity (Google DeepMind)
* **Modelo IA:** Gemini 3.8 Flash (Medium)
* **Rama de trabajo:** `Eliana`
* **Entorno:** Markdown (`README.md`, `CHANGELOG.md`)

##### 1. ¿Por qué se realizó el cambio? (Documentación y cumplimiento de rúbrica)
* **Motivo:** Los campos correspondientes a Eliana Moguilevsky y la sección de revisión cruzada entre integrantes figuraban pendientes de completar en `README.md`, y faltaba detallar explícitamente la creación de `CHANGELOG.md` dentro de la entrada inicial de Eliana del `[2026-11-20]`.
* **Objetivo:** Completar la documentación obligatoria de aportes individuales, auditoría QA del sitio, revisión entre integrantes, herramientas/modelos de IA utilizados y evidencia de iteración en `README.md` sin alterar los registros previos de Ignacio y Ester.

##### 2. ¿Qué se cambió?
* **Documentación principal (`README.md`):** Se completó la fila de aportes de Eliana Moguilevsky (incluyendo la auditoría funcional/visual y coordinación de tareas pendientes), la subsección de revisión entre integrantes con los hallazgos detectados sobre la versión inicial y su ficha técnica de IA con evidencia de iteración.
* **Bitácora del proyecto (`CHANGELOG.md`):** Se detalló la creación inicial de `CHANGELOG.md` dentro de la entrada de Eliana del `[2026-11-20]` y se registró esta actualización documental.

##### 3. Archivos modificados
* `README.md`
* `CHANGELOG.md`

---

## [2026-11-23] - Registro de autoría de la landing y crédito discreto en el pie de página (Ignacio Miguel Penovi)

### Datos Técnicos de la Asistencia IA
* **Agente IA:** Antigravity (Google DeepMind)
* **Modelo IA:** Gemini 4 (High)
* **Rama de trabajo:** `Ignacio`
* **Entorno:** React 19 + Vite 6

### 1. ¿Por qué se realizó el cambio? (Trazabilidad y atribución)
* **Motivo:** Al reorganizar la bitácora del proyecto había quedado sin registrar la creación inicial de la landing page en React realizada el `2026-11-18` por **Ignacio Miguel Penovi**.
* **Objetivo:** Incorporar el registro histórico completo de la creación de la página en `CHANGELOG.md` y añadir un crédito discreto y prolijo en el pie de página de la web sin alterar la jerarquía visual ni el contenido principal.

### 2. ¿Qué se cambió?
* **Pie de página (`src/components/SummaryAndTeam.jsx` y `src/styles/index.css`):**
  * Se agregó en `.site-footer` una línea secundaria sutil (`Página desarrollada por Ignacio Miguel Penovi`) con enlace accesible a `https://github.com/IgnacioMiguelPenovi`.
* **Bitácora (`CHANGELOG.md`):**
  * Se incorporó la entrada cronológica del `[2026-11-18]` detallando la construcción inicial completa de la landing page (commit `5370301`, PR `#1`).

### 3. Archivos modificados
* `src/components/SummaryAndTeam.jsx`
main
* `src/styles/index.css`
* `CHANGELOG.md`

---



## [2026-11-22] - Personaje glasses que sigue el cursor para Ester Mosquera

### Datos Técnicos de la Asistencia IA
* **Agente IA:** OpenAI Codex
* **Modelo IA:** GPT-6
* **Rama de trabajo:** `Ester`
* **Entorno:** React 19 + Vite 6 + page-mascot 0.1.0

### 1. ¿Por qué se realizó el cambio? (Interacción y personalización)
* **Pedido:** Incorporar el personaje `glasses` de Koboyo en la tarjeta de Ester Mosquera.
* **Objetivo:** Hacer que el personaje mire hacia el cursor y reaccione al hacer clic, manteniendo el avatar circular verde `EM` y el enlace al perfil de GitHub de Ester.

### 2. ¿Qué se cambió?
* **Dependencias (`package.json` y `package-lock.json`):** Se agregó `page-mascot` (`^0.1.0`).
* **Tarjeta del equipo (`src/components/SummaryAndTeam.jsx` y `src/styles/index.css`):** Se integró el componente `<Mascot>` a la derecha del nombre de Ester. El personaje sigue el cursor en dispositivos con puntero preciso y muestra reacciones al hacer clic; el avatar `EM` permanece a la izquierda.
* **Recursos (`public/mascots/`):** Se agregaron las hojas `glasses-directions.webp` y `glasses-reactions.webp`.

### 3. Archivos modificados
* `package.json`
* `package-lock.json`
* `src/components/SummaryAndTeam.jsx`
* `src/data/tp3Data.js`
* `src/styles/index.css`
* `public/mascots/glasses-directions.webp`
* `public/mascots/glasses-reactions.webp`
* **Commit:** `4eb510b` (`Add cursor-following Ester mascot`), con coautoría de OpenAI Codex.

---


## [2026-11-21] - Gatito Honey que sigue el cursor y cursor predeterminado (Ester)

### Datos Técnicos de la Asistencia IA
* **Agente IA:** OpenAI Codex
* **Modelo IA:** GPT-6
* **Rama de trabajo:** `Ester`
* **Entorno:** React 19 + Vite 6 + oneko 0.6.1

### 1. ¿Por qué se realizó el cambio? (Motivación y diseño)
* **Pedido:** Incorporar el gatito Honey de Oneko para que acompañe el cursor.
* **Problema detectado durante la iteración:** Las variantes de cursor con ovillo y ratón no convencieron al grupo; el ratón además se perdía visualmente y no combinaba con la landing de ayuda animal.
* **Objetivo:** Conservar el gatito, sin textos ni emojis, y volver al cursor predeterminado del navegador.

### 2. ¿Qué se cambió?
* **Dependencias (`package.json` y `package-lock.json`):** Se agregó `oneko` (`^0.6.1`).
* **Aplicación (`src/App.jsx`):** Se importó y renderizó `<Oneko>` con `skin="honey"`; se desactivaron los maullidos (`meow={false}`), el movimiento libre (`freerunChance={0}`) y las burbujas (`bubbleEnabled={false}`).
* **Cursor:** Se mantuvo el cursor predeterminado del navegador, sin agregar una imagen personalizada de ratón.

### 3. Archivos modificados
* `package.json`
* `package-lock.json`
* `src/App.jsx`
* `CHANGELOG.md`
* **Commit de integración en `Ester`:** `d6dca56` (coautor: OpenAI Codex).

---

## [2026-11-20] - Enlace de GitHub con hover para Ester en la lista del equipo

### Datos Técnicos de la Asistencia IA
* **Agente IA:** OpenAI Codex
* **Modelo IA:** GPT-6
* **Rama de trabajo:** `Ester`
* **Entorno:** React 19 + Vite 6

### 1. ¿Por qué se realizó el cambio? (Motivación y diseño)
* **Pedido:** Enlazar el nombre de Ester Mosquera en la lista del equipo con su perfil de GitHub (`https://github.com/Kira-Blan`).
* **Objetivo:** Mantener la tarjeta con el aspecto de las demás, dejar toda su superficie clickeable y dar una respuesta visual al pasar el cursor, con foco visible para teclado.

### 2. ¿Qué se cambió?
* **Componente de equipo (`src/components/SummaryAndTeam.jsx`):** El avatar y el nombre de Ester se agruparon dentro de un enlace externo que abre el perfil en una pestaña nueva (`target="_blank"`, `rel="noreferrer"`).
* **Hoja de estilos (`src/styles/index.css`):** Se ajustó la tarjeta enlazada para conservar fondo, borde, tipografía, espaciado y forma de las demás. El hover la agranda suavemente (`scale(1.04)`) y añade borde y sombra; `:focus-visible` muestra un contorno accesible.

### 3. Archivos modificados
* `src/components/SummaryAndTeam.jsx`
* `src/styles/index.css`
* **Commit:** `a59f65d` (`feat: agregar hover al enlace de GitHub de Ester`), con coautoría de Codex.

---


## [2026-11-19] - Favicon con huella para RedBarrioAnimal

### Datos Técnicos de la Asistencia IA
* **Agente IA:** OpenAI Codex
* **Modelo IA:** GPT-6
* **Rama de trabajo:** `Ester`
* **Entorno:** React 19 + Vite 6

### 1. ¿Por qué se realizó el cambio? (Identidad visual)
* **Objetivo:** Identificar el sitio en la pestaña del navegador con un favicon acorde a la temática de RedBarrioAnimal.

### 2. ¿Qué se cambió?
* **Recurso visual (`public/favicon.png`):** Se añadió el favicon PNG con una huella animal.
* **Documento HTML (`index.html`):** Se enlazó el recurso mediante `<link rel="icon" type="image/png" href="/favicon.png" />`.

### 3. Archivos modificados
* `public/favicon.png`
* `index.html`
* **Commit:** `0ecfd4b` (`Add paw favicon`), con coautoría de ChatGPT.

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
* **Bitácora del proyecto (`CHANGELOG.md`):**
  * Se creó el archivo `CHANGELOG.md` estableciendo el formato estándar del repositorio para registrar cronológicamente cada cambio, su motivación, los archivos afectados y los metadatos técnicos de la Inteligencia Artificial empleada (agente, modelo, rama de trabajo y entorno).

### 3. Archivos modificados
* `src/components/Navbar.jsx`
* `src/styles/index.css`
* `CHANGELOG.md` (creación de bitácora)

---

## [2026-11-18] - Creación inicial de la landing page en React (Ignacio Miguel Penovi)

### Datos Técnicos de la Asistencia IA
* **Autor / responsable del desarrollo:** Ignacio Miguel Penovi
* **Agente IA:** Antigravity (Google DeepMind)
* **Modelo IA:** Gemini 4 (High)
* **Rama de trabajo:** `Ignacio`
* **Entorno:** React 19 + Vite 6 + lucide-react

### 1. ¿Por qué se realizó el cambio? (Construcción base del TP3)
* **Objetivo:** Construir desde cero la landing page en React correspondiente al TP3 (*Dos sentencias, dos soluciones*) para la startup asignada **RedBarrioAnimal** (Grupo 16 · S02-B · Bloque *Medios y rendición*, origen IFTS 16), cumpliendo todos los puntos de la consigna y la rúbrica.

### 2. ¿Qué se construyó?
* **Configuración del proyecto (`package.json`, `vite.config.js`, `index.html`, `.gitignore`):** Inicialización del entorno React 19 + Vite 6, carga del logo original en `public/logo_redbarrioanimal.webp` y exclusión de `/context/`, `node_modules/` y `dist/` en Git.
* **Identidad y navegación (`src/components/Navbar.jsx`, `src/components/Hero.jsx`):** Presentación completa de RedBarrioAnimal, logo original sin recortes, objetivo, descripción del problema, bloque asignado y aclaración de alcance conceptual.
* **Desglose lógico (`src/components/SentenceBreakdown.jsx`, `src/data/tp3Data.js`):** Fichas estructuradas de las sentencias **R3** y **R4** conservando los operadores `¬`, `y`, `o`, datos necesarios y consecuencias.
* **Propuestas y diagramas de flujo agénticos (`src/components/ProposalSection.jsx`, `src/components/FlowDiagramR3.jsx`, `src/components/FlowDiagramR4.jsx`, `src/components/FlowPrimitives.jsx`):**
  * Flujo 1 (**"Guardián del pago solidario" · R3**) y Flujo 2 (**"Revisor de rendición de cuentas" · R4**) con rombos de decisión, ramas `SÍ`/`NO`, borde punteado para decisiones del grupo, destaque para intervención humana y simulador interactivo de escenarios paso a paso.
  * Ajustes visuales iterativos durante la revisión en escritorio (`1280×800`) para contener los textos dentro de los rombos y alinear el tronco vertical de ambos diagramas en grilla de 2 columnas.
* **Desplegables accesibles, tabla comparativa y sección de equipo (`src/components/AccordionPanel.jsx`, `src/components/SummaryAndTeam.jsx`, `src/styles/index.css`):** Acordeones operables por clic y teclado (`Tab`, `Enter`, `Espacio`), tabla comparativa entre ambos flujos, lista de integrantes del Grupo 16 y hoja de estilos base.

### 3. Archivos creados
* `.gitignore`, `index.html`, `package.json`, `package-lock.json`, `vite.config.js`
* `public/logo_redbarrioanimal.webp`
* `src/main.jsx`, `src/App.jsx`, `src/data/tp3Data.js`, `src/styles/index.css`
* `src/components/Navbar.jsx`, `src/components/Hero.jsx`, `src/components/SentenceBreakdown.jsx`, `src/components/ProposalSection.jsx`, `src/components/FlowPrimitives.jsx`, `src/components/FlowDiagramR3.jsx`, `src/components/FlowDiagramR4.jsx`, `src/components/AccordionPanel.jsx`, `src/components/SummaryAndTeam.jsx`
* **Commit:** `5370301` (`feat: add RedBarrioAnimal TP3 React landing with R3 and R4 agentic flowcharts`, PR `#1`, coautor: Antigravity).

---

## [2026-11-05] - Definición inicial de dos sentencias y desglose de reglas de negocio (AI)

### Datos Técnicos de la Asistencia IA
* **Agente IA:** Antigravity (Google DeepMind)
* **Modelo IA:** Gemini 3.8 Flash (Medium)
* **Autor:** `Ester`
* **Contexto de entrega:** Previo a la creación del repositorio Git (documentación generada en formato PDF / Markdown)

### 1. ¿Por qué se realizó el cambio? (Definición del problema y reglas de negocio)
* **Contexto:** En esta etapa aún no existía el repositorio del proyecto; el trabajo se originó a partir del documento de consignas `TP3.txt` y se formalizó en formato PDF/documento previo (`Punto3.pdf` / `Punto3.md`).
* **Objetivo:** Definir la problemática de la startup RedBarrioAnimal y establecer las dos sentencias base con sus reglas de negocio desglosadas (información requerida, condición lógica y consecuencia) para el sistema de donaciones y transferencias a refugios.

### 2. ¿Qué se definió?
* **Sentencias principales del proyecto:**
  * **Sentencia 1 (R3 - Donaciones por redondeo):** *"Red de donaciones por redondeo de compras para refugios de animales. Si la compra todavía no fue pagada, el cliente confirmó el total y el medio elegido es una tarjeta habilitada o una billetera habilitada, el sistema permite iniciar el pago; solo registra una donación como pagada si estaba incluida en ese total y el proveedor confirma el pago exitoso de esa misma operación."*
  * **Sentencia 2 (R4 - Transferencias a refugios):** *"Cuando una persona colabora redondeando su compra y cuando un refugio solicita recibir fondos, la plataforma necesita reglas claras para evitar cobros duplicados, donaciones mal registradas y transferencias sin rendición previa. Si un refugio solicita una transferencia y su informe de gastos está pendiente de verificación, el sistema deja la solicitud en revisión para una persona responsable."*
* **Desglose de condiciones y consecuencias:** Se esquematizaron las tablas de datos necesarios, condiciones compuestas y consecuencias operativas correspondientes a R3 y R4.

### 3. Archivos y entregables originados
* `Punto3.pdf` / `Punto3.md` (documento de trabajo inicial previo al repositorio)

## Registros anteriores

| Fecha | Razón del cambio | Qué se cambió | Archivos modificados |
|---|---|---|---|
| 2026‑11‑05 13:12 | Consultar contenido del PDF y del archivo de texto enviado por el usuario | Lectura del archivo `TP3.txt` para localizar la sección "Qué tienen que hacer" y el punto 3 | *Ningún archivo modificado* |
| 2026‑11‑20 13:45 | Registrar en un `changelog.md` todas las acciones realizadas en esta conversación | Creación del archivo `changelog.md` con el resumen anterior | `tp3-frontend\changelog.md` |
