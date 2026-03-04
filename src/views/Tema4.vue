<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 4
      h1 Tema 4
    .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/Temas/tema4/img1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p JavaScript es un lenguaje de programación de secuencia de comandos para la web; es un lenguaje que no necesita compilador, como otros #[i lenguajes] y se ejecuta directamente en el navegador.
        br
        br
        p.mb-0 Es momento de profundizar en los elementos de empleo del JavaScript y para ello, se sugiere la siguiente información, procurando llevar registro de los aspectos más destacados en la libreta personal de apuntes
    br
    .contenedor-titulo.d-flex.align-items-center.mb-4(data-aos="fade-left")
      .logo-box.me-3
        i.fas.code-terminal.text-white
      .titulo-bg.py-2.px-4
        h4.mb-0 Empleo de JavaScript
    br
    p.mb-0 JavaScript se utiliza, normalmente, en la web pero también para:
    br
    .cajon.color-primario-2.p-4
      .row
        .col-3
          figure
          img(src="@/assets/curso/Temas/tema4/img2.svg" alt="Adornos flotantes")
        .col-9
          p.mb-0 • Desarrollo de todo el backend de una aplicación, programando con Node.js, que sigue siendo JavaScript.
          p.mb-0 • Sistemas operativos.
          p.mb-0 • Servidores de internet.
          p.mb-0 • Bases de datos.
          p.mb-0 • Plataformas de juego.
          p.mb-0 • Desarrollo móvil.
    br
    p Las siguientes acciones se deben tener en cuenta en este proceso:
    br
    .row
      .col-1
      .col-10
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
          //- Primer fila: Selectores
          .row(titulo="Selectores")
            .col-12
              //- En móvil, el orden de las columnas de Bootstrap ayuda a subir la imagen si fuera necesario, 
              //- pero aquí al ser una sola columna, simplemente controlamos el SRC.
              p Los selectores funcionan de forma muy similar a los del #[i CSS] y permite seleccionar y encontrar elementos dentro del #[i HTML].
              figure.mt-3
                img(:src="esMovil ? require('@/assets/curso/Temas/tema4/img3_1.png') : require('@/assets/curso/Temas/tema4/img3.png')" alt="")

          //- Segunda fila: Selectores (clase o tipo)
          .row(titulo="Selectores (clase o tipo)")
            .col-12
              p El selector se puede utilizar buscando por la clase o por el tipo.
              figure.mt-3
                img(:src="esMovil ? require('@/assets/curso/Temas/tema4/img4_1.svg') : require('@/assets/curso/Temas/tema4/img4.svg')" alt="")

          //- Tercera fila: Eventos (Aquí reordenamos para que la imagen quede arriba en móvil)
          .row(titulo="Eventos")
            //- .order-1 en móvil (arriba), .order-lg-2 en escritorio (derecha)
            .col-lg-4.col-10.mx-auto.mb-4.mb-lg-0.order-1.order-lg-2
              figure
                img(:src="require('@/assets/curso/Temas/tema4/img6.svg')", alt="alt")
            
            //- .order-2 en móvil (abajo), .order-lg-1 en escritorio (izquierda)
            .col-lg-8.order-2.order-lg-1
              p La interacción del usuario con una aplicación, página o sitio web se establece como evento; por lo tanto, un evento es una acción que el usuario quiere hacer en determinada parte de la aplicación. Por ejemplo, darle clic a un botón o cambiar un valor de un elemento de texto, entre otros.
              .cajon.color-secundario.p-4
                .row.align-items-center
                  .col-auto
                    figure
                      img(src="@/assets/curso/Temas/tema4/img5.svg" alt="Adornos flotantes" style="width: 50px")
                  .col
                    p.mb-0 Estas acciones se capturan mediante manejadores de eventos ya establecidos y se programan mediante funciones en JavaScript.

          //- Cuarta fila: Ejemplo de funcionamiento
          .row(titulo="Ejemplo de funcionamiento")
            .col-12
              //- Reordenamiento simple: Imagen primero en el flujo si esMovil
              template(v-if="esMovil")
                figure.mb-3
                  img(src="@/assets/curso/Temas/tema4/img7_1.png" alt="")
                p Este es un ejemplo práctico de cómo funciona un evento. En el momento en que el cursor esté en el campo de texto, automáticamente arroja la alerta.
              
              template(v-else)
                p Este es un ejemplo práctico de cómo funciona un evento. En el momento en que el cursor esté en el campo de texto, automáticamente arroja la alerta.
                figure.mt-3
                  img(src="@/assets/curso/Temas/tema4/img7.png" alt="")
    br
    p.text-center En la siguiente tabla se especifican los eventos que pueden utilizarse:
    br
    .row
      .col-1
      .col-10
        .titulo-sexto.color-acento-contenido.mb-3
        h5 Tabla 1.
        span Eventos
        .tabla-a.color-primario
          table
            thead
              tr
                th Evento
                th Se ejecuta cuando
            tbody
              tr
                td Vulgar
                td El usuario interrumpe la carga de una imagen.
              tr
                td onBlur
                td Un elemento de formulario, una ventana o un marco pierden el foco.
              tr
                td onChange
                td El valor de un campo de formulario cambia.
              tr
                td onClick
                td Se hace clic en un objeto o formulario.
              tr
                td onDblClick
                td Se hace doble clic en un objeto o formulario
    separador
    .titulo-segundo.color-primario
      h2 4.1. API
    p Las API (Interfaces de Programación de Aplicaciones), son aplicaciones que crean los desarrolladores para, a su vez, crear funcionalidades de forma más sencilla y rápida.
    p.mb-0 A continuación, se presentan algunos tipos de API:
    br
    AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--azul")
      //- Primer fila: Selectores
      .row(titulo="Geolocation")
        .col-12
          //- En móvil, el orden de las columnas de Bootstrap ayuda a subir la imagen si fuera necesario, 
          //- pero aquí al ser una sola columna, simplemente controlamos el SRC.
          p PI sencilla que consiste en utilizar objetos sencillos. Contiene tres métodos para el control y recuperación de datos geográﬁcos.
          .tarjeta.color-primario.p-0.mt-3.overflow-hidden
                .px-3.py-2(style="background-color: #311a6a; display: flex; align-items: center;")
                  .d-flex
                    .circle.me-1(style="width: 12px; height: 12px; border-radius: 50%; background-color: #81d4fa;")
                    .circle.me-1(style="width: 12px; height: 12px; border-radius: 50%; background-color: #b39ddb;")
                    .circle(style="width: 12px; height: 12px; border-radius: 50%; background-color: #4dd0e1;")
                .p-4(style="background-color: #0d0d2b;")
                  .row.align-items-center
                    .col-md-5.mb-3.mb-md-0
                       p.text-white.mb-1 ncc{
                       p.text-white.mb-2 var latlng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
                       p.text-white.mb-2  var myOptions = {
                       p.text-white.ms-3.mb-1  zoom: 8,
                       p.text-white.ms-3.mb-1  center: latlng,
                       p.text-white.ms-3.mb-1  mapTypeId: google.maps.MapTypeId.TERRAIN,
                       p.text-white.ms-3.mb-1  cdisableDefaultUI: true
                       p.text-white.ms-2.mb-1  }
                       p.text-white.ms-2.mb-1  var map = new google.maps.Map(document.querySelector("#map_canvas"), myOptions);
                       p.text-white.ms-1.mb-1  });

      //- Segunda fila: Selectores (clase o tipo)
      .row(titulo="Position")
        .col-12
          p Presenta la ubicación de un dispositivo móvil y maneja el objeto Coordinates que muestra la ubicación actual y una marca de tiempo, incluyendo latitud, longitud, altitud, velocidad, dirección de movimiento y otras.
          .tarjeta.color-primario.p-0.mt-3.overflow-hidden
                .px-3.py-2(style="background-color: #311a6a; display: flex; align-items: center;")
                  .d-flex
                    .circle.me-1(style="width: 12px; height: 12px; border-radius: 50%; background-color: #81d4fa;")
                    .circle.me-1(style="width: 12px; height: 12px; border-radius: 50%; background-color: #b39ddb;")
                    .circle(style="width: 12px; height: 12px; border-radius: 50%; background-color: #4dd0e1;")
                .p-4(style="background-color: #0d0d2b;")
                  .row.align-items-center
                    .col-md-5.mb-3.mb-md-0
                       p.code-comment.mb-2 //Para retornar a la ubicación actual, se usa esta sentencia
                       p.text-white.mb-2 
                       p.text-white.mb-2 navigator.geolocation.getCurrentPosition(function(position) { ... });
                       p.text-white.mb-2 
                       p.code-comment.mb-2 //Sentencia para recuperar la posición con las coordenadas correspondientes
                       p.text-white.mb-2 
                       p.text-white.ms-3.mb-2 var position = navigator.geolocation.getCurrentePosition();
                       p.text-white.ms-3.mb-1 var mmyLatitude = position.coords.latitude;

      //- Tercera fila: Eventos (Aquí reordenamos para que la imagen quede arriba en móvil)
      .row(titulo="file")
        //- .order-1 en móvil (arriba), .order-lg-2 en escritorio (derecha)
        p La API File provee información de archivos y permite que el JavaScript tenga acceso a su contenido. Los objetos File que se recuperan a través del objeto FileList (en-US), retornan utilizando el elemento &lt;input&gt;. El objeto File puede ser utilizado en cualquier contexto: FileReader, URL.createObjectURL(), createImageBitmap() (en-US), y XMLHttpRequest.send().
          figure.mt-3
            img(:src="require('@/assets/curso/Temas/tema4/img10.png')" alt="")

      //- Cuarta fila: Ejemplo de funcionamiento
      .row(titulo="File (propiedades)")
        p Revise en la siguiente tabla, algunas de las propiedades de File y su descripción:
        .tabla-a.color-primario
          table
            thead
              tr
                th Propiedad
                th Descripción
            tbody
              tr
                td File.lastModified
                td Retorna el último tiempo que el archivo se modificó, en milsegundos desde la época UNIX (1 de enero de 1970 a medianoche).
              tr
                td File.lastModifiedDate
                td Retorna la última fecha (en un objeto DateDate) de modificación del archivo referenciada por el objeto File.
              tr
                td File.name
                td Retorna el nombre del archivo referenciado por el objeto File.
              tr
                td File.webkitRelativePath
                td Retorna la ruta relativa de la URL del File.
              tr
                td File.size
                td Retorna el tamaño del archivo en bytes.

      .row(titulo="File (métodos)")
        p La interfaz File no define algún método, pero los hereda de la interfaz Blob de la siguiente manera:
        .tabla-a.color-primario
          table
            thead
              tr
                th Propiedad
                th Descripción
            tbody
              tr
                td Blob.slice([start[, end[, contentType]]])
                td Retorna un nuevo objeto Blob conteniendo la información en el rango especificado de bytes de la fuente Blob.
              tr
                td Blob.stream()
                td Transforma el archivo File en un ReadableStream (en-US) que puede ser usado para leer el contenido del File.
              tr
                td Blob.tex()
                td Transforma el archivo File en una corriente (stream) para leerse hasta completarse. Retorna una promesa que se resuelve con un USVString.
              tr
                td Blob.arrayBuffer()
                td Transforma el archivo File en una corriente para leerse hasta completarse. Devuelve una promesa
      .row(titulo="Web socket")
        .col-12
          p Tecnología que permite abrir una sesión de comunicación entre el navegador del usuario y un servidor. Puede enviar mensajes a un servidor y recibir respuestas controladas, sin tener que consultar al servidor.
          .tarjeta.color-primario.p-0.mt-3.overflow-hidden
                .px-3.py-2(style="background-color: #311a6a; display: flex; align-items: center;")
                  .d-flex
                    .circle.me-1(style="width: 12px; height: 12px; border-radius: 50%; background-color: #81d4fa;")
                    .circle.me-1(style="width: 12px; height: 12px; border-radius: 50%; background-color: #b39ddb;")
                    .circle(style="width: 12px; height: 12px; border-radius: 50%; background-color: #4dd0e1;")
                .p-4(style="background-color: #0d0d2b;")
                  .row.align-items-center
                    .col-md-5.mb-3.mb-md-0
                       p.code-comment.mb-2 // Create WebSocket connection.
                       p.text-white.mb-2 const socket = new WebSocket('ws://localhost:8080');
                       p.text-white.mb-2 
                       p.code-comment.mb-2 // Connection opened
                       p.text-white.mb-2 socket.addEventListener('open', function (event) {
                       p.text-white.mb-3 socket.send('Hello Server!');
                       p.text-white.mb-2 });
                       p.text-white.mb-2 
                       p.code-comment.mb-2 // Listen for messages
                       p.text-white.mb-2 socket.addEventListener('message', function (event) {
                       p.text-white.mb-3 console.log('Message from server ', event.data);
                       p.text-white.mb-2 });
      .row(titulo="Storage")
        .col-12
          p Permite acceder y gestionar información tanto a nivel de sesión como de manera local en el dispositivo, posibilitando la creación, actualización o eliminación de datos. El manejo de la sesión se realiza mediante Window.sessionStorage y el acceso local por Window.localStorage.
          .tarjeta.color-primario.p-0.mt-3.overflow-hidden
                .px-3.py-2(style="background-color: #311a6a; display: flex; align-items: center;")
                  .d-flex
                    .circle.me-1(style="width: 12px; height: 12px; border-radius: 50%; background-color: #81d4fa;")
                    .circle.me-1(style="width: 12px; height: 12px; border-radius: 50%; background-color: #b39ddb;")
                    .circle(style="width: 12px; height: 12px; border-radius: 50%; background-color: #4dd0e1;")
                .p-4(style="background-color: #0d0d2b;")
                  .row
                    .col-12
                      p.code-comment.mb-1 // Obtiene el campo de texto que vamos a monitorear
                      p.text-white.mb-3 var field = document.getElementById("field");
                      
                      p.code-comment.mb-1 // Verificamos si tenemos algún valor auto guardado
                      p.code-comment.mb-1 // (esto solo ocurrirá si la página es recargada accidentalmente)
                      p.text-white.mb-1 if (sessionStorage.getItem("autosave")) {
                      p.code-comment.ms-3.mb-1 // Restaura el contenido al campo de texto
                      p.text-white.ms-3.mb-1 field.value = sessionStorage.getItem("autosave");
                      p.text-white.mb-3 }
                      
                      p.code-comment.mb-1 // Espera por cambios en el campo de texto
                      p.text-white.mb-1 field.addEventListener("change", function() {
                      p.code-comment.ms-3.mb-1 // Almacena el resultado en el objeto de almacenamiento de sesión
                      p.text-white.ms-3.mb-1 sessionStorage.setItem("autosave", field.value);
                      p.text-white.mb-0 });
      .row(titulo="Windows.sessionStorage")
        .col-12
          p Permite acceder al almacenamiento asociado a la sesión actual. La propiedad sessionStorage se comporta similar a localStorage; la diferencia es que la información se almacena en localStorage y no expira, solo se elimina al finalizar la sesión.
          .tarjeta.color-primario.p-0.mt-3.overflow-hidden
                .px-3.py-2(style="background-color: #311a6a; display: flex; align-items: center;")
                  .d-flex
                    .circle.me-1(style="width: 12px; height: 12px; border-radius: 50%; background-color: #81d4fa;")
                    .circle.me-1(style="width: 12px; height: 12px; border-radius: 50%; background-color: #b39ddb;")
                    .circle(style="width: 12px; height: 12px; border-radius: 50%; background-color: #4dd0e1;")
                .p-4(style="background-color: #0d0d2b;")
                  .row
                    .col-12
                      p.code-comment.mb-1 // Almacena la información en sessionStorage
                      p.text-white.mb-3 sessionStorage.setItem('key', 'value');
                      
                      p.code-comment.mb-1 // Obtiene la información almacenada desde sessionStorage
                      p.text-white.mb-1 var data = sessionStorage.getItem('key');

</template>

<script>
export default {
  name: 'Tema4',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
