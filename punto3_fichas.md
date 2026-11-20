# Punto 3 – Desglose de sentencias (según ejemplos del PDF)

---

## Formato del ejemplo
Los ejemplos del PDF presentan una tabla con tres columnas:
1. **Información que hace falta**
2. **Condición**
3. **Consecuencia**

A continuación reproducimos ese mismo formato para las dos sentencias (R3 y R4).

---

### Sentencia **R3**
> *Si la compra todavía no fue pagada, el cliente confirmó el total y el medio elegido es una tarjeta habilitada o una billetera habilitada, el sistema permite iniciar el pago; solo registra una donación como pagada si estaba incluida en ese total y el proveedor confirma el pago exitoso de esa misma operación.*

| Datos necesarios | Condición | Consecuencia |
|-----------------------|-----------|--------------|
| `idCompra` – identificador de la compra<br>`tipoMedioPago` – *tarjeta habilitada* **o** *billetera habilitada*<br>`montoDonación` – importe de la donación (si existiese)<br>`idProveedor` – identificador del proveedor que confirmará el pago | `¬Pagada(compra)` **y** `ClienteConfirma(total)` **y** (`TarjetaHabilitada` **o** `BilleteraHabilitada`) | • **Permite iniciar el pago**.<br>• **Sólo** registra la donación como pagada **si** (`DonaciónIncluidaEnTotal` **y** `ProveedorConfirmaÉxito`). |

---

### Sentencia **R4**
> *Si un refugio solicita una transferencia y su informe de gastos está pendiente de verificación, el sistema deja la solicitud en revisión para una persona responsable.*

| Datos necesarios | Condición | Consecuencia |
|-----------------------|-----------|--------------|
| `idRefugio` – identificador del refugio<br>`tipoTransferencia` – tipo de transferencia solicitada (bancaria, electrónica, etc.)<br>`responsable` – persona o rol que revisará la solicitud | `SolicitudTransferencia(refugio)` **y** `InformeGastosPendienteVerificación` | `Estado = "En revisión"` asignado a `responsable`. |

---

## Notas adicionales
- Los operadores lógicos **y**, **o**, **¬** (negación) se mantienen tal cual aparecen en la condición, tal como se muestra en los ejemplos del PDF.
- Cada fila de la tabla corresponde a una *ficha* que el equipo debe incluir en el README bajo el apartado **“Qué tienen que hacer > 3. Desarmen cada sentencia”.**

---

*Este archivo está listo para ser copiado al `README.md` del proyecto o a cualquier documento de entrega.*
