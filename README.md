# TP3 · Dos sentencias, dos soluciones — RedBarrioAnimal (Grupo 16)

Landing page desarrollada para la materia **Desarrollo de Sistemas Web · Front End** (**IFTS 29**, 2do Cuatrimestre 2026), construida de forma **100% agéntica** a partir de la startup y las dos sentencias lógicas asignadas del **IFTS 16**.

---

## Enlaces de entrega

- **Landing publicada (Vercel):** https://tp3-frontend-five.vercel.app/
- **Repositorio GitHub:** https://github.com/IgnacioMiguelPenovi/tp3-frontend
- **Bitácora detallada de cambios:** [CHANGELOG.md](./CHANGELOG.md)

---

## Startup y bloque asignado

- **Startup:** RedBarrioAnimal *(origen: estudiantes del IFTS 16)*
- **Categoría:** Donaciones y bienestar animal
- **Objetivo del servicio:** Red de donaciones por redondeo de compras para refugios de animales.
- **Grupo:** Grupo 16
- **Código de sorteo:** `S02-B`
- **Bloque asignado:** Medios y rendición

### Sentencias originales y desglose (Punto 3)

#### Sentencia R3 — Propuesta 1: *"Guardián del pago solidario"*

> *"Si la compra todavía no fue pagada, el cliente confirmó el total y el medio elegido es una tarjeta habilitada o una billetera habilitada, el sistema permite iniciar el pago; solo registra una donación como pagada si estaba incluida en ese total y el proveedor confirma el pago exitoso de esa misma operación."*

| Datos necesarios | Condición | Consecuencia |
| --- | --- | --- |
| `idCompra` (identificador y estado de la compra), `tipoMedioPago` (tarjeta habilitada o billetera habilitada), `montoDonación` (importe de la donación, si existiese), `idProveedor` (proveedor que confirma el pago) | `¬Pagada(compra)` **y** `ClienteConfirma(total)` **y** (`TarjetaHabilitada` **o** `BilleteraHabilitada`) | • Permite iniciar el pago.<br>• Sólo registra la donación como pagada **si** (`DonaciónIncluidaEnTotal` **y** `ProveedorConfirmaÉxito`). |

#### Sentencia R4 — Propuesta 2: *"Revisor de rendición de cuentas"*

> *"Si un refugio solicita una transferencia y su informe de gastos está pendiente de verificación, el sistema deja la solicitud en revisión para una persona responsable."*

| Datos necesarios | Condición | Consecuencia |
| --- | --- | --- |
| `idRefugio` (identificador del refugio), `tipoTransferencia` (bancaria, electrónica, etc.), `responsable` (persona o rol que revisará la solicitud) | `SolicitudTransferencia(refugio)` **y** `InformeGastosPendienteVerificación` | `Estado = "En revisión"` asignado a `responsable`. |

---

## Integrantes del grupo y aportes

| Integrante | Aportes concretos en el proyecto |
| --- | --- |
| **Miguel Penovi, Ignacio** | Configuración del repositorio y `.gitignore`; dirección agéntica para la construcción inicial completa de la landing en React + Vite (`Hero`, desglose lógico, propuestas R3 y R4, diagramas de flujo interactivos, desplegables accesibles, tabla comparativa y sección de equipo); correcciones visuales de los rombos, alineación vertical de los flujos y agrupamiento lógico `(tarjeta habilitada O billetera habilitada)` en R3; tarjeta interactiva con enlace a GitHub y crédito discreto en el pie de página; integración de Pull Requests, publicación en Vercel y estructuración base del `README.md`. |
| **Moguilevsky, Eliana** | *(Completar)* |
| **Mosquera, Ester** | *(Completar)* |
| **Di Leonardo, Celeste** | *(Completar)* |

### Revisión entre integrantes y mejora concreta

*(Completar en equipo con al menos una revisión cruzada entre integrantes y la mejora concreta resultante)*

- **Quién revisó:** 
- **Qué problema u oportunidad se detectó:** 
- **Qué mejora concreta se aplicó (y en qué archivo/PR):** 

---

## Cómo instalar y ejecutar el proyecto

### Requisitos previos

- **Node.js** (v18 o superior) y **npm**

### Instalación y ejecución local

```bash
git clone https://github.com/IgnacioMiguelPenovi/tp3-frontend.git
cd tp3-frontend
npm install
npm run dev
```

Abrir en el navegador la URL local que informa Vite (por defecto `http://localhost:5173`).

### Compilación de producción y vista previa

```bash
npm run build
npm run preview
```

---

## Herramientas de IA, aplicaciones y modelos utilizados

El registro cronológico completo de cambios del repositorio se encuentra además en [CHANGELOG.md](./CHANGELOG.md).

### Miguel Penovi, Ignacio

- **Aplicación:** Antigravity (Google DeepMind)
- **Modelo:** Gemini 4 (High)
- **Para qué se usó:** Construcción 100% agéntica de la landing base en React + Vite (estructura, estilos, desglose lógico, diagramas de flujo R3 y R4 con simulador de casos y desplegables accesibles), enlace interactivo de GitHub, crédito discreto en el pie de página, corrección del agrupamiento lógico en el diagrama R3 y armado de esta documentación.
- **Evidencia de iteración (instrucción inicial → problema detectado → pedido de mejora):**
  1. **Alineación y legibilidad de los diagramas (R3 y R4):**
     - *Instrucción inicial:* generar la landing en React con ambos flujos gráficos respetando las sentencias R3 y R4 y las ramas `SÍ` / `NO`.
     - *Problema detectado:* al revisar en desktop (`1280×800`), los textos dentro de los rombos de decisión de R3 tocaban los bordes diagonales y las filas con rama lateral `NO` desplazaban el tronco principal hacia el costado, desalineando las flechas verticales.
     - *Pedido de mejora:* corregir las proporciones internas de los rombos, alinear los diagramas en un único eje vertical y unificar el fondo del marco del logo en el hero.
     - *Qué cambió y por qué:* se refactorizó el layout de los diagramas a una grilla fija de 2 columnas (`.flow-canvas-grid`) manteniendo todo el tronco en la columna 1 y las ramas `NO` en la columna 2 con `grid-row: span 2`, y se aumentaron la altura y los márgenes internos de `DecisionDiamond` para garantizar legibilidad completa sin superposiciones.
  2. **Agrupamiento lógico explícito en el diagrama R3:**
     - *Problema detectado:* durante la revisión de la rúbrica se señaló que el primer rombo de R3 escribía `tarjeta habilitada O billetera habilitada` sin paréntesis, pudiendo prestarse a ambigüedad junto a los conectores `Y`.
     - *Pedido de mejora:* agrupar explícitamente `(tarjeta habilitada O billetera habilitada)` en `src/components/FlowDiagramR3.jsx`.
     - *Qué cambió y por qué:* se añadieron los paréntesis en la Decisión 1 para que el diagrama coincida exactamente con la condición formal `¬Pagada(compra) y ClienteConfirma(total) y (TarjetaHabilitada o BilleteraHabilitada)`.

### Moguilevsky, Eliana

- **Aplicación:** 
- **Modelo:** 
- **Para qué se usó:** 
- **Evidencia de iteración (instrucción inicial → problema detectado → pedido de mejora):**
  - *Instrucción inicial:* 
  - *Problema detectado:* 
  - *Pedido de mejora:* 
  - *Qué cambió y por qué:* 

### Mosquera, Ester

- **Aplicación:** 
- **Modelo:** 
- **Para qué se usó:** 
- **Evidencia de iteración (instrucción inicial → problema detectado → pedido de mejora):**
  - *Instrucción inicial:* 
  - *Problema detectado:* 
  - *Pedido de mejora:* 
  - *Qué cambió y por qué:* 

### Di Leonardo, Celeste

- **Aplicación:** 
- **Modelo:** 
- **Para qué se usó:** 
- **Evidencia de iteración (instrucción inicial → problema detectado → pedido de mejora):**
  - *Instrucción inicial:* 
  - *Problema detectado:* 
  - *Pedido de mejora:* 
  - *Qué cambió y por qué:* 
