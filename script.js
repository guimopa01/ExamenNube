const preguntas = [
  {
    pregunta: "1. ¿Cuál es el objetivo principal de la infraestructura distribuida de AWS?",
    respuestas: [
      "Reducir el coste del hardware y de las licencias de software.",
      "Garantizar alta disponibilidad, redundancia y bajas latencias.",
      "Evitar que los usuarios tengan que configurar Security Groups.",
      "Eliminar la necesidad de tener conexión a Internet."
    ],
    correcta: 1
  },
  {
    pregunta: "2. ¿Cómo se identifica habitualmente una región de AWS?",
    respuestas: [
      "Con una dirección IP pública única.",
      "Con el nombre del centro de datos.",
      "Con un código identificador geográfico.",
      "Con el nombre del servicio principal que contiene."
    ],
    correcta: 2
  },
  {
    pregunta: "3. ¿Cuál de las siguientes NO es una consideración a la hora de elegir qué región de AWS utilizar?",
    respuestas: [
      "Latencia.",
      "Cumplimiento normativo.",
      "Costes.",
      "Disponibilidad de servicios.",
      "Estrategia de negocio.",
      "Selección de Key Pairs."
    ],
    correcta: 5
  },
  {
    pregunta: "4. ¿Cuál de las siguientes NO es una característica de una AZ de AWS?",
    respuestas: [
      "Suministro eléctrico propio.",
      "Red y conectividad redundantes.",
      "Sistemas de refrigeración y seguridad física independientes.",
      "Instalación automática del sistema operativo en todas las instancias."
    ],
    correcta: 3
  },
  {
    pregunta: "5. ¿Cuántas AZ tiene normalmente cada región de AWS?",
    respuestas: [
      "Exactamente 1 AZ por región.",
      "Entre 2 y 6 AZ por región.",
      "67.",
      "Un número ilimitado que depende del tráfico de Internet."
    ],
    correcta: 1
  },
  {
    pregunta: "6. Si un desarrollador despliega una instancia EC2 en eu-west-1a y otra en eu-west-1b, ¿qué objetivo principal está buscando?",
    respuestas: [
      "Cumplir con la normativa GDPR.",
      "Reducir a la mitad el coste de la factura de AWS.",
      "Alta disponibilidad y tolerancia a fallos en caso de que caiga un centro de datos.",
      "Evitar tener que configurar un Security Group."
    ],
    correcta: 2
  },
  {
    pregunta: "7. ¿Cuál de las siguientes NO es una responsabilidad de AWS según el Modelo de Responsabilidad Compartida?",
    respuestas: [
      "La infraestructura física, hardware e instalaciones de los centros de datos.",
      "La red global, las regiones y las zonas de disponibilidad (AZ).",
      "La capa de virtualización y el hardware anfitrión que sustenta los servicios.",
      "La gestión de los datos del cliente, el cifrado y la configuración de los permisos de acceso (IAM)."
    ],
    correcta: 3
  },
  {
    pregunta: "8. ¿Cuál de las siguientes NO es una responsabilidad del cliente según el Modelo de Responsabilidad Compartida de AWS?",
    respuestas: [
      "La actualización del sistema operativo invitado (guest OS) y los parches de seguridad en las instancias EC2.",
      "La configuración de los cortafuegos virtuales a nivel de instancia y subred (Security Groups y NACLs).",
      "El cifrado y la protección de los datos almacenados por el propio cliente.",
      "El mantenimiento físico, reparación y sustitución del hardware averiado de los centros de datos."
    ],
    correcta: 3
  },
  {
    pregunta: "9. ¿Cuál de las siguientes opciones describe correctamente la función principal del servicio AWS IAM?",
    respuestas: [
      "Gestionar automáticamente la creación de redes virtuales privadas (VPC) a nivel global.",
      "Gestionar de forma segura las identidades, usuarios, grupos, roles y permisos de acceso a los recursos de AWS.",
      "Crear y configurar discos virtuales de almacenamiento en bloques para las instancias EC2.",
      "Monitorizar el rendimiento de las instancias y enviar alertas automáticas en caso de fallo."
    ],
    correcta: 1
  },
  {
    pregunta: "10. ¿Cuál es la principal diferencia entre un Usuario y un Rol en IAM?",
    respuestas: [
      "Los usuarios tienen coste económico y los roles son gratuitos.",
      "Los usuarios se asocian a personas y los roles se asignan a servicios o aplicaciones.",
      "Los roles solo se utilizan en Amazon S3 y los usuarios en EC2.",
      "No existe ninguna diferencia, son sinónimos dentro de la consola."
    ],
    correcta: 1
  },
  {
  pregunta: "11. ¿En qué formato se escriben las políticas de seguridad en IAM?",
  respuestas: [
    "XML",
    "YAML",
    "JSON",
    "HTML"
  ],
  correcta: 2
},
{
  pregunta: "12. ¿En qué consiste el principio de mínimo privilegio aplicado a la seguridad?",
  respuestas: [
    "Dar acceso de administrador a todos los usuarios para ahorrar tiempo.",
    "Asignar a cada usuario o servicio únicamente los permisos estrictamente necesarios para realizar su tarea.",
    "Utilizar siempre la cuenta root para cualquier configuración diaria.",
    "Abrir todos los puertos de entrada a las instancias EC2."
  ],
  correcta: 1
},
{
  pregunta: "13. ¿Qué es Amazon EC2?",
  respuestas: [
    "Un servicio de almacenamiento ilimitado de archivos en la red.",
    "Un servicio que permite alquilar máquinas virtuales.",
    "Un servicio de base de datos relacional gestionada.",
    "Un cortafuegos físico situado en las oficinas del cliente."
  ],
  correcta: 1
},
{
  pregunta: "14. ¿Qué es una AMI en el contexto de EC2?",
  respuestas: [
    "Un disco duro físico conectado por cable a la instancia.",
    "La clave privada que se utiliza para conectarse por SSH.",
    "Una plantilla preconfigurada que contiene el sistema operativo y el software inicial.",
    "La dirección IP pública de la máquina virtual."
  ],
  correcta: 2
},
{
  pregunta: "15. ¿Qué componente se utiliza principalmente como disco virtual persistente asociado a una instancia EC2?",
  respuestas: [
    "Key Pairs.",
    "Volumen EBS.",
    "Network ACL.",
    "IAM Group."
  ],
  correcta: 1
},
{
  pregunta: "16. ¿Qué método de autenticación utiliza AWS por defecto para acceder de forma segura a una instancia EC2 Linux mediante SSH?",
  respuestas: [
    "Usuario y contraseña por defecto admin/admin.",
    "Key Pairs (clave pública y privada).",
    "Dirección MAC de la tarjeta de red.",
    "El pelo de Iker."
  ],
  correcta: 1
},
{
  pregunta: "17. ¿Qué ocurre si un usuario pierde su clave privada (Key Pair) asociada a una instancia EC2?",
  respuestas: [
    "Se puede recuperar fácilmente haciendo clic en 'Recordar contraseña'.",
    "AWS la reenvía automáticamente por correo electrónico.",
    "Se pierde el acceso a la instancia.",
    "La instancia se elimina automáticamente por seguridad."
  ],
  correcta: 2
},
{
  pregunta: "18. ¿Cuál de las siguientes NO se considera un error habitual de los clientes en la gestión de la seguridad en AWS?",
  respuestas: [
    "Dejar puertos abiertos a Internet (ej.: 0.0.0.0/0:22).",
    "Utilizar usuarios root por defecto para tareas cotidianas.",
    "No configurar copias de seguridad de los datos críticos.",
    "Configurar correctamente un par de claves (Key Pair) seguras para acceder mediante SSH."
  ],
  correcta: 3
},
{
  pregunta: "19. ¿Qué significa que un Security Group sea stateful?",
  respuestas: [
    "Que requiere reiniciar la instancia para aplicar los cambios.",
    "Que si se permite el tráfico de entrada (inbound), la respuesta de salida (outbound) se permite automáticamente.",
    "Que hay que escribir reglas de entrada y salida duplicadas para cada puerto.",
    "Que solo funciona con direcciones IPv6."
  ],
  correcta: 1
},
{
  pregunta: "20. ¿Cuál es la principal diferencia entre un Security Group y una Network ACL (NACL)?",
  respuestas: [
    "El Security Group es gratuito y la NACL es de pago.",
    "El Security Group actúa a nivel de instancia y la NACL a nivel de subred.",
    "La NACL se utiliza para IAM y el Security Group para EC2.",
    "No existe ninguna diferencia, hacen exactamente lo mismo."
  ],
  correcta: 1
},
{
  pregunta: "21. ¿Qué son las Zonas de Disponibilidad (AZ) en AWS?",
  respuestas: [
    "Zonas geográficas grandes que contienen múltiples centros de datos en un país o área concreta.",
    "Centros de datos independientes pero interconectados.",
    "Plantillas que definen el sistema operativo y software inicial de la instancia.",
    "Firewalls virtuales que controlan el tráfico a nivel de instancia mediante reglas de entrada y salida."
  ],
  correcta: 1
},
{
  pregunta: "22. ¿Cuál de las siguientes NO es una de las principales razones por las que son importantes las AZ?",
  respuestas: [
    "Alta disponibilidad.",
    "Replicación.",
    "Disaster recovery.",
    "Reducción de costes."
  ],
  correcta: 3
},
{
  pregunta: "23. ¿Cuál de las siguientes NO es una característica propia de una región de AWS?",
  respuestas: [
    "Separación geográfica.",
    "Cumplimiento legal y normativo.",
    "Latencia.",
    "Redundancia.",
    "Disponibilidad de servicios.",
    "Configuración de las reglas de red mediante Network ACLs a nivel de subred."
  ],
  correcta: 5
},
{
  pregunta: "24. ¿Cuál de las siguientes afirmaciones explica correctamente la diferencia principal entre una Región de AWS y una Zona de Disponibilidad (AZ)?",
  respuestas: [
    "Una región es una zona geográfica amplia que contiene múltiples países, mientras que una AZ es un único país.",
    "Cada región está formada por varias AZ, que son centros de datos independientes pero interconectados.",
    "Las regiones se utilizan exclusivamente para almacenamiento de copias de seguridad y las AZ para ejecutar cargas de trabajo de EC2.",
    "Una AZ determina el coste económico del servicio según el país, mientras que la región determina únicamente la contraseña de acceso Root."
  ],
  correcta: 1
},
{
  pregunta: "25. ¿Cuáles son las dos políticas administradas que ofrece el servicio AWS IAM?",
  respuestas: [
    "AWS Managed Policies y Customer Managed Policies.",
    "Regional Managed Policies y Global Managed Policies.",
    "Network Managed Policies y Storage Managed Policies.",
    "Account Managed Policies e Instance Managed Policies."
  ],
  correcta: 0
},
{
  pregunta: "26. ¿Cuál es la diferencia principal entre una AWS Managed Policy y una Customer Managed Policy en AWS IAM?",
  respuestas: [
    "Las AWS Managed Policies se aplican únicamente a instancias EC2, mientras que las Customer Managed Policies se aplican a usuarios de la consola.",
    "Las AWS Managed Policies están predefinidas y mantenidas por AWS, mientras que las Customer Managed Policies son creadas y administradas por el usuario para cubrir necesidades específicas.",
    "Las Customer Managed Policies son de pago, mientras que las AWS Managed Policies son gratuitas.",
    "Las AWS Managed Policies solo pueden utilizarse en una única región, mientras que las Customer Managed Policies son globales."
  ],
  correcta: 1
},
{
  pregunta: "27. ¿Cuál de las siguientes NO es una buena práctica de seguridad importante en AWS?",
  respuestas: [
    "No utilizar nunca la cuenta root para el día a día.",
    "Activar MFA (Multi-Factor Authentication) para todos los usuarios importantes.",
    "Revisar y rotar las claves de acceso de forma periódica.",
    "Compartir libremente la contraseña de la cuenta root entre todos los miembros del equipo."
  ],
  correcta: 3
},
{
  pregunta: "28. ¿Cuál de los siguientes NO es un uso típico de los roles en AWS IAM?",
  respuestas: [
    "EC2 con permisos para acceder a S3.",
    "Aplicaciones que envían métricas a CloudWatch.",
    "Servicios que necesitan leer secretos desde Secrets Manager.",
    "Compartir recursos entre diferentes cuentas de AWS.",
    "Modificar físicamente el hardware y los discos duros de los centros de datos de AWS.",
    "Ejecutar aplicaciones con permisos temporales sin necesidad de credenciales permanentes."
  ],
  correcta: 4
},
{
  pregunta: "29. ¿Cuál de las siguientes NO es una característica principal de Amazon EC2?",
  respuestas: [
    "Elección de diferentes tipos de instancia (CPU, memoria, GPU, etc.).",
    "Control total sobre el sistema operativo y su configuración.",
    "Escalabilidad: pasar de tener una instancia a cientos en minutos.",
    "Construcción e instalación física de redes de fibra óptica en las oficinas del cliente."
  ],
  correcta: 3
},
{
  pregunta: "30. ¿Cuál de los siguientes NO es un caso de uso típico de Amazon EC2?",
  respuestas: [
    "Alojamiento de páginas web o aplicaciones.",
    "Servidores de bases de datos.",
    "Entornos de prueba y desarrollo.",
    "Fabricación y comercialización de microprocesadores físicos para ordenadores personales."
  ],
  correcta: 3
},
{
  pregunta: "31. ¿Qué son los Security Groups (Grupos de seguridad) en AWS?",
  respuestas: [
    "Cortafuegos virtuales a nivel de instancia que controlan el tráfico de entrada y salida mediante reglas.",
    "Carpetas compartidas para almacenar contraseñas de usuarios de IAM de forma centralizada.",
    "Políticas globales de facturación que se aplican a todas las regiones de una cuenta.",
    "Discos virtuales de alta velocidad asociados a las instancias EC2."
  ],
  correcta: 0
},
{
  pregunta: "32. ¿Qué significa que las Network ACLs (NACLs) sean stateless?",
  respuestas: [
    "Que recuerdan automáticamente todas las conexiones de entrada para autorizar la salida sin necesidad de reglas adicionales.",
    "Que requieren reglas explícitas tanto para el tráfico de entrada (ingress) como para el tráfico de salida (egress).",
    "Que no se pueden modificar ni eliminar una vez creadas dentro de la VPC.",
    "Que solo funcionan para usuarios root y no para usuarios IAM estándar."
  ],
  correcta: 1
},
{
  pregunta: "33. ¿Cuál de las siguientes NO es una buena práctica de seguridad de red en AWS?",
  respuestas: [
    "Aplicar el principio de mínimo privilegio abriendo únicamente los puertos estrictamente necesarios.",
    "Limitar el acceso por dirección IP siempre que sea posible.",
    "Separar entornos (por ejemplo, producción y pruebas en Security Groups distintos).",
    "Dejar permanentemente todos los puertos abiertos a Internet (0.0.0.0/0) para cualquier tipo de tráfico por comodidad."
  ],
  correcta: 3
},
{
  pregunta: "34. ¿Cuál de las siguientes afirmaciones sobre las reglas de los Security Groups es FALSA?",
  respuestas: [
    "Permiten definir reglas para autorizar tráfico, pero no tienen reglas explícitas de tipo Deny.",
    "El tráfico que no queda autorizado por las reglas aplicables no pasa.",
    "Si hay varios Security Groups asociados a una interfaz de red, se puede utilizar una regla Deny en uno de ellos para anular la autorización de otro.",
    "Las reglas de varios Security Groups asociados a una misma interfaz se evalúan conjuntamente."
  ],
  correcta: 2
},
{
  pregunta: "35. ¿Cómo se evalúan las reglas dentro de una Network ACL (NACL)?",
  respuestas: [
    "Se evalúan todas simultáneamente sin importar el orden, aplicando primero las restricciones más restrictivas.",
    "Se evalúan en orden ascendente según el número de la regla, y al coincidir una regla se aplica su acción y no se continúan examinando las posteriores.",
    "Se evalúan estrictamente de mayor a menor número, dando prioridad siempre a las acciones de tipo ALLOW.",
    "Se evalúan de forma aleatoria dependiendo de la carga de la subred en ese momento."
  ],
  correcta: 1
},
{
  pregunta: "36. ¿Cuál es la consecuencia si un Security Group permite el tráfico HTTP (puerto 80) hacia una instancia EC2, pero la Network ACL (NACL) de la subred donde está alojada bloquea ese mismo tráfico?",
  respuestas: [
    "La petición pasará sin problemas porque el Security Group tiene prioridad absoluta sobre la NACL.",
    "La página web no será accesible, ya que ambos mecanismos actúan como capas complementarias y deben superarse los controles de red de ambos.",
    "AWS asignará automáticamente una excepción temporal a la NACL.",
    "La instancia EC2 se detendrá automáticamente por conflicto de configuración."
  ],
  correcta: 1
},
{
  pregunta: "37. ¿Qué es una Network ACL (Network Access Control List) en una VPC de AWS?",
  respuestas: [
    "Un cortafuegos virtual asociado directamente a la interfaz de red de una instancia EC2 concreta.",
    "Una lista de reglas que controla el tráfico que entra y sale de una subred de la VPC.",
    "Un servicio global de IAM utilizado exclusivamente para gestionar contraseñas y usuarios de la consola.",
    "Un volumen de almacenamiento en bloques persistente asociado a las instancias para guardar datos."
  ],
  correcta: 1
},
{
  pregunta: "38. ¿Cuál es una de las diferencias principales en cuanto a los tipos de reglas permitidas entre un Security Group y una Network ACL (NACL)?",
  respuestas: [
    "Los Security Groups permiten reglas de tipo ALLOW y DENY, mientras que las NACLs solo permiten ALLOW.",
    "Los Security Groups solo permiten reglas de tipo ALLOW, mientras que las NACLs permiten tanto reglas de tipo ALLOW como de tipo DENY.",
    "Las NACLs no tienen reglas de entrada ni de salida y solo dependen de los permisos de IAM.",
    "No existen diferencias; ambos sistemas utilizan obligatoriamente reglas de tipo DENY."
  ],
  correcta: 1
},
{
  pregunta: "39. ¿Cuándo es recomendable utilizar principalmente un Security Group (SG) en lugar de una Network ACL?",
  respuestas: [
    "Cuando necesitamos bloquear explícitamente un rango completo de IPs maliciosas a escala de toda la subred.",
    "Cuando queremos actuar como mecanismo principal para controlar el acceso a los recursos, como permitir HTTP a los servidores web o conexiones SSH desde orígenes autorizados.",
    "Cuando necesitamos una lista de reglas stateless que se evalúen en orden numérico estricto.",
    "Cuando queremos crear discos virtuales y gestionar volúmenes EBS persistentes."
  ],
  correcta: 1
},
{
  pregunta: "40. ¿Cuándo es recomendable utilizar una Network ACL (NACL) en AWS?",
  respuestas: [
    "Cuando queremos un cortafuegos virtual simple asociado directamente a una única instancia EC2 para gestionar su tráfico individual.",
    "Cuando necesitamos una capa adicional de protección a nivel de subred, por ejemplo para bloquear un rango de IP o aplicar una política general.",
    "Para crear plantillas preconfiguradas del sistema operativo y software inicial de una instancia.",
    "Como método predeterminado y obligatorio para generar pares de claves (Key Pairs) de acceso seguro."
  ],
  correcta: 1
}
];

    


// Función para barajar un array
function barajarArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Barajar el orden de las preguntas
barajarArray(preguntas);

// Barajar las respuestas dentro de cada pregunta y actualizar la respuesta correcta
preguntas.forEach(pregunta => {
    const respuestas = [...pregunta.respuestas];
    const correcta = pregunta.correcta;
    barajarArray(respuestas);
    pregunta.correcta = respuestas.indexOf(pregunta.respuestas[correcta]);
    pregunta.respuestas = respuestas;
});

let indicePregunta = 0;
let preguntaActual = 1;
let respuestasCorrectas = 0;

// Función para mostrar la pregunta y las respuestas
function mostrarPregunta() {
    const preguntaContainer = document.getElementById('pregunta');
    const respuestasContainer = document.getElementById('respuestas-container');
    const inputContainer = document.getElementById('input-container');
    const respuestaBox = document.getElementById('respuesta-box');
    const respuestaText = document.getElementById('respuesta-text');
    const contadorPregunta = document.getElementById('contador-pregunta');

    preguntaContainer.innerText = preguntas[indicePregunta].pregunta;
    respuestasContainer.innerHTML = '';
    respuestaBox.style.display = 'none';
    contadorPregunta.innerText = `Pregunta ${preguntaActual} de ${preguntas.length}`;
    inputContainer.style.display = 'none';

    preguntas[indicePregunta].respuestas.forEach((respuesta, index) => {
        const respuestaElement = document.createElement('div');
        respuestaElement.classList.add('respuesta');
        respuestaElement.innerText = respuesta;
        respuestaElement.onclick = () => seleccionarRespuesta(index);
        respuestasContainer.appendChild(respuestaElement);
    });
}

// Función para seleccionar la respuesta
function seleccionarRespuesta(respuestaUsuario) {
    const respuestaBox = document.getElementById('respuesta-box');
    const respuestaText = document.getElementById('respuesta-text');
    const respuestasContainer = document.getElementById('respuestas-container');
    const respuestaCorrecta = preguntas[indicePregunta].correcta;
    const opciones = respuestasContainer.children;

    for (let i = 0; i < opciones.length; i++) {
        if (i === respuestaCorrecta) {
            opciones[i].classList.add('correcta');
        } else {
            opciones[i].classList.add('incorrecta');
        }
        opciones[i].onclick = null;
    }

    if (respuestaUsuario === respuestaCorrecta) {
        respuestaText.innerText = "¡Correcto!";
        respuestasCorrectas++;
    } else {
        respuestaText.innerText = `Incorrecto. Respuesta correcta: ${preguntas[indicePregunta].respuestas[respuestaCorrecta]}`;
    }

    respuestaBox.style.display = 'block';
}

// Función para avanzar a la siguiente pregunta
function siguientePregunta() {
    indicePregunta++;
    preguntaActual++;

    if (indicePregunta < preguntas.length) {
        mostrarPregunta();
    } else {
        alert(`Has completado todas las preguntas.\nRespuestas correctas: ${respuestasCorrectas} / ${preguntas.length}`);
        // Reiniciar el cuestionario
        indicePregunta = 0;
        preguntaActual = 1;
        respuestasCorrectas = 0;
        barajarArray(preguntas); // Rebarajar preguntas
        preguntas.forEach(pregunta => {
            const respuestas = [...pregunta.respuestas];
            const correcta = pregunta.correcta;
            barajarArray(respuestas);
            pregunta.correcta = respuestas.indexOf(pregunta.respuestas[correcta]);
            pregunta.respuestas = respuestas;
        });
        mostrarPregunta();
    }
}

// Inicializar la primera pregunta al cargar la página
window.onload = function() {
    mostrarPregunta();
};




