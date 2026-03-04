<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
import Actividad from 'ecored-pkg-fliz/plugin/components/actividad/Actividad.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema: 'Microcontroladores y sensores',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> evaluar la comprensión de los conceptos fundamentales del desarrollo de aplicaciones <em>web frontend</em>, con el fin de reforzar los conocimientos sobre HTML5, CSS, JavaScript, API, así como procesos de prueba y depuración.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO.',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuál es la función principal del desarrollo <em>web frontend</em>?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Crear la interfaz visible para el usuario.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Administrar bases de datos.',
              esCorrecta: false,
            },
            { id: 'c', texto: 'Gestionar servidores.', esCorrecta: false },
            {
              id: 'd',
              texto: 'Controlar la seguridad del sistema.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia la comprensión del rol del frontend en la creación de la interfaz visible para el usuario.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 2,
          texto:
            '¿Qué lenguaje se utiliza para estructurar el contenido de una página <em>web</em>?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'CSS.', esCorrecta: false },
            { id: 'b', texto: 'HTML.', esCorrecta: true },
            { id: 'c', texto: 'Java.', esCorrecta: false },
            { id: 'd', texto: 'Python.', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se reconoce que HTML es el lenguaje encargado de estructurar el contenido de una página <em>web</em>.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 3,
          texto:
            '¿Qué extensión debe tener un archivo para ser interpretado como documento HTML?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: '.doc.', esCorrecta: false },
            { id: 'b', texto: '.css.', esCorrecta: false },
            { id: 'c', texto: '.js.', esCorrecta: false },
            { id: 'd', texto: '.html.', esCorrecta: true },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se identifica adecuadamente la extensión que permite al navegador interpretar un documento HTML.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 4,
          texto: '¿Cuál es la finalidad del uso de CSS?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Controlar eventos.', esCorrecta: false },
            { id: 'b', texto: 'Estructurar el documento.', esCorrecta: false },
            { id: 'c', texto: 'Ejecutar scripts.', esCorrecta: false },
            {
              id: 'd',
              texto: 'Dar estilo visual al contenido.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se comprende que CSS se utiliza para definir el estilo visual de los contenidos <em>web</em>.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 5,
          texto:
            '¿Qué etiqueta encapsula todo el contenido de un documento HTML?',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: '&lt;html&gt;.', esCorrecta: true },
            { id: 'b', texto: '&lt;head&gt;.', esCorrecta: false },
            { id: 'c', texto: '&lt;body&gt;.', esCorrecta: false },
            { id: 'd', texto: '&lt;meta&gt;.', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se reconoce la etiqueta raíz que contiene toda la estructura del documento HTML.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 6,
          texto:
            '¿En qué sección del documento HTML se define el contenido visible?',
          imagen: require('@/assets/actividad/imagen6.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: '&lt;head&gt;.', esCorrecta: false },
            { id: 'b', texto: '&lt;title&gt;.', esCorrecta: false },
            { id: 'c', texto: '&lt;meta&gt;.', esCorrecta: false },
            { id: 'd', texto: '&lt;body&gt;.', esCorrecta: true },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se identifica que el contenido visible se encuentra dentro de la etiqueta body.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 7,
          texto:
            '¿Qué etiqueta se usa para definir la codificación de caracteres?',
          imagen: require('@/assets/actividad/imagen7.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: '&lt;link&gt;.', esCorrecta: false },
            { id: 'b', texto: '&lt;meta&gt;.', esCorrecta: true },
            { id: 'c', texto: '&lt;script&gt;.', esCorrecta: false },
            { id: 'd', texto: '&lt;section&gt;.', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se reconoce el uso de la etiqueta meta para definir la codificación de caracteres.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 8,
          texto:
            '¿Cuál fue la etiqueta inicialmente usada para estructurar páginas <em>web</em>?',
          imagen: require('@/assets/actividad/imagen8.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: '&lt;div&gt;.', esCorrecta: false },
            { id: 'b', texto: '&lt;section&gt;.', esCorrecta: false },
            { id: 'c', texto: '&lt;table&gt;.', esCorrecta: true },
            { id: 'd', texto: '&lt;header&gt;.', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se identifica que las tablas fueron usadas inicialmente para estructurar páginas <em>web</em>.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 9,
          texto: '¿Qué etiqueta HTML5 representa la cabecera del contenido?',
          imagen: require('@/assets/actividad/imagen9.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: '&lt;head&gt;.', esCorrecta: false },
            { id: 'b', texto: '&lt;nav&gt;.', esCorrecta: false },
            { id: 'c', texto: '&lt;header&gt;.', esCorrecta: true },
            { id: 'd', texto: '&lt;footer&gt;.', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se reconoce la etiqueta header como la cabecera del contenido.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 10,
          texto:
            '¿Qué elemento HTML5 se utiliza para mostrar contenido de navegación?',
          imagen: require('@/assets/actividad/imagen10.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: '&lt;section&gt;.', esCorrecta: false },
            { id: 'b', texto: '&lt;nav&gt;.', esCorrecta: true },
            { id: 'c', texto: '&lt;aside&gt;.', esCorrecta: false },
            { id: 'd', texto: '&lt;article&gt;.', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se identifica que nav se utiliza para definir la navegación del sitio.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 11,
          texto: '¿Qué elemento permite insertar video en HTML5?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: '&lt;media&gt;.', esCorrecta: false },
            { id: 'b', texto: '&lt;movie&gt;.', esCorrecta: false },
            { id: 'c', texto: '&lt;video&gt;.', esCorrecta: true },
            { id: 'd', texto: '&lt;iframe&gt;.', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se reconoce la etiqueta de HTML5 destinada a la inserción de video.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 12,
          texto:
            '¿Qué atributo permite que un video se reproduzca automáticamente?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Loop.', esCorrecta: false },
            { id: 'b', texto: 'Controls.', esCorrecta: false },
            { id: 'c', texto: 'Muted.', esCorrecta: false },
            { id: 'd', texto: 'Autoplay.', esCorrecta: true },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se identifica el atributo que permite la reproducción automática del video.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 13,
          texto: '¿Qué son los selectores en CSS?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Métodos de validación.', esCorrecta: false },
            { id: 'b', texto: 'Eventos del navegador.', esCorrecta: false },
            { id: 'c', texto: 'Reglas de animación.', esCorrecta: false },
            {
              id: 'd',
              texto: 'Referencias a elementos HTML.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se comprende que los selectores permiten referenciar elementos HTML para aplicar estilos.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 14,
          texto: '¿Cuál es la función principal de JavaScript?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Diseñar estilos.', esCorrecta: false },
            { id: 'b', texto: 'Crear estructuras.', esCorrecta: false },
            { id: 'c', texto: 'Agregar interactividad.', esCorrecta: true },
            { id: 'd', texto: 'Compilar código.', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se reconoce que JavaScript permite agregar interactividad a las aplicaciones <em>web</em>.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 15,
          texto: '¿Dónde se ejecuta principalmente JavaScript?',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'En el navegador.', esCorrecta: true },
            { id: 'b', texto: 'En el servidor.', esCorrecta: false },
            { id: 'c', texto: 'En la base de datos.', esCorrecta: false },
            { id: 'd', texto: 'En el sistema operativo.', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se identifica que JavaScript se ejecuta principalmente en el navegador.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 16,
          texto: '¿Qué es un evento en JavaScript?',
          imagen: require('@/assets/actividad/imagen6.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Un error del sistema.', esCorrecta: false },
            { id: 'b', texto: 'Una acción del usuario.', esCorrecta: true },
            { id: 'c', texto: 'Una librería externa.', esCorrecta: false },
            { id: 'd', texto: 'Un archivo HTML.', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se reconoce que un evento corresponde a una acción realizada por el usuario.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 17,
          texto: '¿Qué evento se ejecuta cuando se hace clic en un elemento?',
          imagen: require('@/assets/actividad/imagen7.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'onLoad.', esCorrecta: false },
            { id: 'b', texto: 'onSubmit.', esCorrecta: false },
            { id: 'c', texto: 'onChange.', esCorrecta: false },
            { id: 'd', texto: 'onClick.', esCorrecta: true },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se identifica el evento que se ejecuta al hacer clic sobre un elemento.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 18,
          texto: '¿Qué es una API?',
          imagen: require('@/assets/actividad/imagen8.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Un lenguaje de programación.',
              esCorrecta: false,
            },
            { id: 'b', texto: 'Un editor de código.', esCorrecta: false },
            {
              id: 'c',
              texto: 'Una interfaz para crear funcionalidades.',
              esCorrecta: true,
            },
            { id: 'd', texto: 'Un sistema operativo.', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se comprende que una API facilita la creación de funcionalidades mediante interfaces.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 19,
          texto: '¿Qué API permite almacenar información en el navegador?',
          imagen: require('@/assets/actividad/imagen9.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'WebSocket.', esCorrecta: false },
            { id: 'b', texto: 'File.', esCorrecta: false },
            { id: 'c', texto: 'Storage.', esCorrecta: true },
            { id: 'd', texto: 'Geolocation.', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se identifica la API que permite almacenar información en el navegador.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 20,
          texto:
            '¿Cuál es el objetivo principal de las pruebas y la depuración?',
          imagen: require('@/assets/actividad/imagen10.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Diseñar interfaces.', esCorrecta: false },
            {
              id: 'b',
              texto: 'Eliminar errores del código.',
              esCorrecta: true,
            },
            { id: 'c', texto: 'Crear estilos visuales.', esCorrecta: false },
            { id: 'd', texto: 'Optimizar bases de datos.', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se reconoce que las pruebas y la depuración permiten identificar y corregir errores del código.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
      ],
      mensaje_final_aprobado:
        'Ha superado la actividad y demuestra sólidos conocimientos sobre el componente formativo.',
      mensaje_final_reprobado:
        'No ha superado la actividad. Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
