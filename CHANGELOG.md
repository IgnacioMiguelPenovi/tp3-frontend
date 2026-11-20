# Bitácora de Cambios (Changelog) - Rama `Eliana`

Este documento registra los cambios realizados en el proyecto, detallando el qué, cómo y por qué de cada modificación, junto con los metadatos técnicos de la Inteligencia Artificial empleada para la asistencia.

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
