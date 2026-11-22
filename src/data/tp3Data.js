export const STARTUP_INFO = {
  name: 'RedBarrioAnimal',
  category: 'Donaciones y bienestar animal',
  objective: 'Red de donaciones por redondeo de compras para refugios de animales.',
  origin: 'IFTS 16',
  targetInstitute: 'IFTS 29 · Desarrollo de Sistemas Web · Front End',
  groupNumber: 'Grupo 16',
  sorteoCode: 'S02-B',
  blockName: 'Medios y rendición',
  problemSummary:
    'Cuando una persona colabora redondeando su compra y cuando un refugio solicita recibir fondos, la plataforma necesita reglas claras para evitar cobros duplicados, donaciones mal registradas y transferencias sin rendición previa.',
  logoPath: '/logo_redbarrioanimal.webp',
  members: [
    {
      name: 'Ignacio Miguel Penovi',
      initials: 'IM',
      github: 'https://github.com/IgnacioMiguelPenovi',
      variant: 'ignacio',
    },
    {
      name: 'Eliana Moguilevsky',
      initials: 'EM',
      github: 'https://github.com/ElianaMoguilevsky',
      variant: 'eliana',
    },
    {
      name: 'Ester Mosquera',
      initials: 'EM',
      github: 'https://github.com/Kira-Blan',
      variant: 'ester',
    },
    { name: 'Celeste Di Leonardo', initials: 'CD' },
  ],
};

export const PROPOSALS = [
  {
    id: 'propuesta-r3',
    badge: 'Propuesta 1 · Sentencia R3',
    title: 'Guardián del pago solidario',
    shortTag: 'Cobro único y confirmación real',
    originalSentence:
      'Si la compra todavía no fue pagada, el cliente confirmó el total y el medio elegido es una tarjeta habilitada o una billetera habilitada, el sistema permite iniciar el pago; solo registra una donación como pagada si estaba incluida en ese total y el proveedor confirma el pago exitoso de esa misma operación.',
    benefit:
      'Ayuda a que cada compra se pague una sola vez y solo cuando corresponde. La donación se anota como pagada únicamente cuando el pago realmente se concretó. Así los clientes confían en el sistema y los refugios reciben aportes confirmados.',
    breakdown: {
      inputs: [
        { key: 'idCompra', desc: 'Identificador único y estado actual de la compra' },
        { key: 'tipoMedioPago', desc: 'Tarjeta habilitada o billetera habilitada' },
        { key: 'montoDonación', desc: 'Importe del redondeo solidario (si existiese)' },
        { key: 'idProveedor', desc: 'Identificador del proveedor que confirmará la operación' },
      ],
      condition: '¬Pagada(compra) y ClienteConfirma(total) y (TarjetaHabilitada o BilleteraHabilitada)',
      consequence: [
        'Permite iniciar el pago.',
        'Sólo registra la donación como pagada si (DonaciónIncluidaEnTotal y ProveedorConfirmaÉxito).',
      ],
    },
    agentSummary: {
      role: 'Cuando el cliente confirma cuánto va a pagar, el futuro agente revisa que esa compra no se haya pagado antes y que el medio elegido esté habilitado. Si cumple, habilita el pago, espera la respuesta del proveedor y recién anota la donación como pagada si estaba incluida en el total y esa operación resultó exitosa.',
      purpose: 'Evitar que alguien pague dos veces la misma compra y evitar registrar una donación como cobrada si el pago no se concretó.',
      tools: 'Servicio de pagos (proveedor) y base de datos de compras.',
      humanIntervention: 'No requiere intervención humana cuando el circuito normal se cumple; solo escala ante conciliaciones excepcionales si el proveedor queda sin respuesta.',
      expectedResult: 'El cliente paga de forma segura una sola vez y la donación queda registrada únicamente con confirmación real.',
    },
    scenarios: [
      {
        id: 'happy',
        label: 'Caso 1 · Cumple todo (camino exitoso)',
        badge: 'SÍ → SÍ',
        activeNodes: [
          'r3-inicio',
          'r3-datos',
          'r3-dec1',
          'r3-dec1-si',
          'r3-iniciar',
          'r3-esperar',
          'r3-dec2',
          'r3-dec2-si',
          'r3-registrar',
          'r3-fin-ok',
        ],
        explanation:
          'La compra no estaba pagada, el cliente confirmó el total y eligió una tarjeta o billetera habilitada. Se inicia el pago, el proveedor confirma esa misma operación y la donación estaba incluida en el total: la donación queda registrada como pagada.',
      },
      {
        id: 'blocked',
        label: 'Caso 2 · No cumple condición inicial',
        badge: 'NO (Decisión del grupo)',
        activeNodes: [
          'r3-inicio',
          'r3-datos',
          'r3-dec1',
          'r3-dec1-no',
          'r3-no-permitir',
          'r3-fin-no-iniciado',
        ],
        explanation:
          'Si la compra ya figura pagada, falta confirmar el total o el medio no está habilitado, la sentencia no habilita el pago. Como decisión del grupo (borde punteado), el agente bloquea el inicio del pago e informa el motivo al cliente.',
      },
      {
        id: 'unconfirmed',
        label: 'Caso 3 · Fallo del proveedor o sin donación',
        badge: 'SÍ → NO',
        activeNodes: [
          'r3-inicio',
          'r3-datos',
          'r3-dec1',
          'r3-dec1-si',
          'r3-iniciar',
          'r3-esperar',
          'r3-dec2',
          'r3-dec2-no',
          'r3-no-registrar',
          'r3-fin-sin-registro',
        ],
        explanation:
          'Aunque el pago pudo iniciarse, si el proveedor rechaza/no confirma esa operación o la compra no incluía redondeo solidario, el agente no registra ninguna donación como pagada.',
      },
    ],
    accordions: [
      {
        id: 'r3-datos',
        title: 'Datos de entrada y condición lógica',
        tag: 'Entrada y regla',
        content: {
          intro: 'Antes de habilitar cualquier cobro, el agente reúne cuatro datos clave y evalúa la regla original conservando los operadores ¬ (negación), Y y O:',
          bullets: [
            'Estado de la compra (idCompra): verifica que todavía figure como no pagada (¬Pagada).',
            'Confirmación del total: valida que el cliente aprobó explícitamente el monto final.',
            'Medio elegido (tipoMedioPago): comprueba que sea una tarjeta habilitada O una billetera habilitada.',
            'Inclusión de donación y proveedor (montoDonación, idProveedor): distingue si el total incluye redondeo y vincula la operación con la respuesta del proveedor.',
          ],
          highlight: 'Condición formal: ¬Pagada(compra) y ClienteConfirma(total) y (TarjetaHabilitada o BilleteraHabilitada).',
        },
      },
      {
        id: 'r3-acciones',
        title: 'Qué hace el futuro agente, herramientas y resultado esperado',
        tag: 'Flujo agéntico',
        content: {
          intro: 'El agente actúa como coordinador de validación en dos etapas para proteger tanto al donante como al refugio:',
          bullets: [
            'Etapa 1 (Pre-pago): consulta el registro de la compra y la lista de medios habilitados; si todo cumple, habilita el inicio del pago.',
            'Etapa 2 (Post-pago): aguarda la confirmación del servicio de pagos externo asociada a esa misma operación (idProveedor + idCompra).',
            'Resultado esperado: la compra se cobra una única vez y la donación se marca como pagada exclusivamente cuando estaba en el total y el proveedor confirmó el éxito.',
            'Intervención humana: no es necesaria en el flujo normal, ya que la regla está completamente automatizada por verificación de estado y confirmación del proveedor.',
          ],
          highlight: 'Herramientas consultadas: Registro interno de compras + Pasarela / Servicio de pagos.',
        },
      },
      {
        id: 'r3-excepciones',
        title: 'Excepciones, casos límite y decisiones del grupo',
        tag: 'Casos límite',
        content: {
          intro: 'La sentencia define cuándo iniciar el pago y cuándo registrar la donación, pero deja abiertas situaciones donde el equipo incorporó decisiones explícitas:',
          bullets: [
            'Compra ya pagada o medio no habilitado (Decisión del grupo): la sentencia no detalla qué mostrar si falla la condición inicial; el grupo definió impedir el pago e informar el motivo claro al cliente para evitar dobles cobros.',
            'Confirmación de otro intento o pago sin donación: si el cliente desmarcó el redondeo o el proveedor confirma otra operación distinta, el pago de la compra puede ocurrir pero no se registra donación.',
            'Caso límite — Timeout o respuesta ambigua del proveedor: si el servicio de pagos demora o se corta la conexión tras iniciar el pago, el agente no marca la donación como pagada y deja la operación pendiente de conciliación para revisión humana.',
          ],
          highlight: 'Transparencia de diseño: todo camino marcado con borde punteado es una decisión de diseño del Grupo 16, no una consecuencia automática de la sentencia.',
        },
      },
    ],
  },
  {
    id: 'propuesta-r4',
    badge: 'Propuesta 2 · Sentencia R4',
    title: 'Revisor de rendición de cuentas',
    shortTag: 'Control previo y criterio humano',
    originalSentence:
      'Si un refugio solicita una transferencia y su informe de gastos está pendiente de verificación, el sistema deja la solicitud en revisión para una persona responsable.',
    benefit:
      'Evita que se envíe dinero a un refugio sin comprobar antes en qué gastó lo anterior. El agente solo detecta el caso y avisa, y una persona responsable decide. Así hay más transparencia y más confianza entre quienes donan.',
    breakdown: {
      inputs: [
        { key: 'idRefugio', desc: 'Identificador del refugio solicitante' },
        { key: 'tipoTransferencia', desc: 'Tipo de transferencia pedida (bancaria, electrónica, etc.)' },
        { key: 'responsable', desc: 'Persona o rol asignado para revisar la solicitud' },
      ],
      condition: 'SolicitudTransferencia(refugio) y InformeGastosPendienteVerificación',
      consequence: ['Estado = "En revisión" asignado a responsable.'],
    },
    agentSummary: {
      role: 'Cuando un refugio pide que le transfieran fondos, el futuro agente revisa si su informe de gastos anterior ya fue verificado. Si todavía figura pendiente de verificación, frena el envío, deja la solicitud en estado "En revisión" y notifica a la persona responsable asignada.',
      purpose: 'Garantizar que ningún refugio reciba nuevas transferencias sin haber rendido cuentas de los aportes anteriores.',
      tools: 'Registro de solicitudes de transferencia y módulo de informes de gastos de los refugios.',
      humanIntervention: 'Sí: la intervención humana es central en este flujo. El agente detecta y deriva, pero una persona responsable analiza los comprobantes y decide aprobar o rechazar.',
      expectedResult: 'La solicitud queda registrada en estado "En revisión" y asignada a una persona responsable antes de mover dinero.',
    },
    scenarios: [
      {
        id: 'pending',
        label: 'Caso 1 · Informe pendiente (intervención humana)',
        badge: 'SÍ → Revisión humana',
        activeNodes: [
          'r4-inicio',
          'r4-datos',
          'r4-dec',
          'r4-dec-si',
          'r4-en-revision',
          'r4-humana',
          'r4-fin-revision',
        ],
        explanation:
          'El refugio solicita una transferencia y su informe de gastos anterior está pendiente de verificación. El agente coloca la solicitud en estado "En revisión" y la deriva a una persona responsable para su control manual.',
      },
      {
        id: 'verified',
        label: 'Caso 2 · Informe ya verificado (circuito normal)',
        badge: 'NO (Decisión del grupo)',
        activeNodes: [
          'r4-inicio',
          'r4-datos',
          'r4-dec',
          'r4-dec-no',
          'r4-circuito-normal',
          'r4-fin-normal',
        ],
        explanation:
          'Si el informe de gastos no está pendiente (es decir, ya fue verificado), la sentencia no indica qué hacer después. Como decisión del grupo (borde punteado), la solicitud continúa por el circuito normal de transferencia.',
      },
    ],
    accordions: [
      {
        id: 'r4-datos',
        title: 'Datos de entrada y condición lógica',
        tag: 'Entrada y regla',
        content: {
          intro: 'Al recibirse un pedido de fondos por parte de un refugio, el agente consulta dos fuentes y aplica la conjunción lógica Y:',
          bullets: [
            'Solicitud de transferencia (idRefugio, tipoTransferencia): identifica quién pide los fondos y por qué vía (bancaria, electrónica, etc.).',
            'Estado del informe de gastos: verifica si la rendición previa del refugio figura como pendiente de verificación.',
            'Responsable asignado (responsable): identifica a la persona o rol revisor al que se le debe derivar el caso.',
          ],
          highlight: 'Condición formal: SolicitudTransferencia(refugio) y InformeGastosPendienteVerificación.',
        },
      },
      {
        id: 'r4-acciones',
        title: 'Qué hace el futuro agente, intervención humana y resultado',
        tag: 'Flujo agéntico',
        content: {
          intro: 'En esta propuesta el agente funciona como un filtro preventivo que protege la transparencia sin reemplazar el criterio humano:',
          bullets: [
            'Consulta automática: revisa el historial de rendiciones del refugio al momento de ingresar la solicitud.',
            'Cambio de estado: si el informe está pendiente, cambia el estado de la transferencia a "En revisión" para bloquear envíos automáticos.',
            'Intervención humana obligatoria: notifica y asigna el caso a la persona responsable, quien examina facturas, comprobantes y destino de los fondos antes de autorizar o rechazar.',
            'Resultado esperado: trazabilidad completa de por qué se pausó una transferencia y quién tiene la responsabilidad de verificarla.',
          ],
          highlight: 'Herramientas consultadas: Módulo de solicitudes de transferencia + Repositorio de informes de gastos.',
        },
      },
      {
        id: 'r4-excepciones',
        title: 'Excepciones, casos límite y decisiones del grupo',
        tag: 'Casos límite',
        content: {
          intro: 'Contemplamos las variantes que la regla original no explicita para asegurar que el flujo nunca libere dinero por error:',
          bullets: [
            'Informe ya verificado (Decisión del grupo): la sentencia R4 solo describe qué pasa si el informe está pendiente. El grupo decidió que, si ya fue verificado sin observaciones, la solicitud continúa por el circuito normal de transferencia.',
            'Caso límite — Informe incompleto, observado o vencido: si el refugio subió un comprobante ilegible o venció el plazo de rendición, se lo trata con el mismo resguardo preventivo: queda "En revisión" con alerta prioritaria para la persona responsable.',
            'Caso límite — Refugio sin persona responsable activa en turno: si el revisor habitual no está disponible, el agente reasigna la revisión al rol de respaldo para evitar que la solicitud quede bloqueada sin atención.',
          ],
          highlight: 'Regla de oro del flujo: el agente nunca aprueba ni rechaza una rendición por su cuenta; siempre resguarda los fondos hasta la revisión humana.',
        },
      },
    ],
  },
];
