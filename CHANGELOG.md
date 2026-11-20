# Changelog – Registro de acciones realizadas por la IA (Antigravity)
# Bitácora de Cambios (Changelog)

**IA:** Antigravity (GPT‑OSS 120B – Medium)
**Fecha de generación:** 2026‑11‑20

## Entradas

| Fecha | Razón del cambio | Qué se cambió | Archivos modificados |
|-------|------------------|----------------|----------------------|
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

### 3. Verificación
* Compilación de producción exitosa mediante `npm run build`.
* Verificación visual en escritorio (`1280×800`) en `#equipo`: 0 errores de consola, sin desbordes horizontales, simetría exacta en las 4 tarjetas y comprobación de los estados `:hover` tanto de Ignacio como de Ester.

### 4. Archivos modificados
* `src/data/tp3Data.js`
* `src/components/SummaryAndTeam.jsx`
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

## [2026-11-20] - Menú móvil accesible con botón hamburguesa en Navbar



| 2026‑11‑05 13:12 | Consultar contenido del PDF y del archivo de texto enviado por el usuario | Lectura del archivo `TP3.txt` para localizar la sección "Qué tienen que hacer" y el punto 3 | *Ningún archivo modificado* |
| 2026‑11‑20 13:45 | Registrar en un `changelog.md` todas las acciones realizadas en esta conversación | Creación del archivo `changelog.md` con el resumen anterior | `tp3-frontend\changelog.md` |

*Este registro sirve para documentar de forma transparente el trabajo ejecutado por la IA durante la sesión.*
