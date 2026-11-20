# Bitácora de Cambios (Changelog) - Rama `Eliana`

Este documento registra los cambios realizados en el proyecto, detallando el qué, cómo y por qué de cada modificación, junto con los metadatos técnicos de la Inteligencia Artificial empleada para la asistencia.

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
