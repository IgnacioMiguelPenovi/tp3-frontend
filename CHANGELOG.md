# Changelog – Registro de acciones asistidas por IA

**IA y modelo de las entradas previas:** Antigravity (GPT‑OSS 120B – Medium)
**Fecha de generación de las entradas previas:** 2026‑11‑20

## Entradas

| Fecha | Razón del cambio | Qué se cambió | Archivos modificados |
|-------|------------------|----------------|----------------------|
| 2026‑11‑05 13:05 | Crear fichas para el punto 3 del README (desglose de sentencias) | Se añadió el documento con tabla de datos necesarios, condición y consecuencia para R3 y R4 | `punto3_fichas.md` (en el directorio de artefactos) |
| 2026‑11‑05 13:07 | Ajustar encabezado de tabla para que coincida con la consigna | Cambiado "Información que falta" → "Datos necesarios" en la tabla | `punto3_fichas.md` |

| 2026‑11‑05 13:12 | Consultar contenido del PDF y del archivo de texto enviado por el usuario | Lectura del archivo `TP3.txt` para localizar la sección "Qué tienen que hacer" y el punto 3 | *Ningún archivo modificado* |
| 2026‑11‑20 13:45 | Registrar en un `changelog.md` todas las acciones realizadas en esta conversación | Creación del archivo `changelog.md` con el resumen anterior | `tp3-frontend\changelog.md` |

## 2026-11-21 · Gatito Honey en la rama Ester

**Aplicación y modelo:** OpenAI Codex · GPT-6

- **Instrucción inicial:** incorporar el gato Honey de Oneko para que siguiera el cursor.
- **Problema detectado durante la iteración:** las alternativas de cursor con ovillo y ratón no convencieron; el ratón además se perdía visualmente.
- **Pedido de mejora:** mantener el gatito sin textos ni emojis y volver a la flecha habitual.
- **Cambio y motivo:** se integró `oneko` con `skin="honey"` en `src/App.jsx`, con maullidos y burbujas desactivados. Se conservó el cursor predeterminado del navegador para que la página mantuviera una interacción clara.
- **Archivos:** `package.json`, `package-lock.json` y `src/App.jsx`.
- **Commit en `Ester`:** `d6dca56` (coautor: OpenAI Codex).

*Este registro sirve para documentar de forma transparente el trabajo ejecutado por la IA durante la sesión.*
