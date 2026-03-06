<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Estructura de una página #[i web]
    .BMG1.px-5
      .row.justify-content-center.mb-4
        .col-lg-12.contenido-sobrepuesto
          figure
            img(src="@/assets/curso/Temas/tema2/img1.png" alt="Adornos flotantes")
      
      p Los documentos HTML son estructuras de código estrictamente organizadas, allí se utilizan etiquetas en donde se puede declarar y determinar la forma específica del funcionamiento o apariencia del contenido
      p.mb-5 En este punto del componente formativo, se indica cómo se construye la estructura global de un documento HTML:
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        LineaTiempoD.color-acento-botones
          .row(numero="1" titulo="&lt;!DOCTYPE html&gt;")
            .col-12
              p Se utiliza inicialmente para indicar qué tipo de documento es el que tiene que interpretarse o crearse en este caso HTML.
              .tarjeta.color-primario.p-0.mt-3.overflow-hidden
                .px-3.py-2(style="background-color: #311a6a; display: flex; align-items: center;")
                  .d-flex
                    .circle.me-1(style="width: 12px; height: 12px; border-radius: 50%; background-color: #81d4fa;")
                    .circle.me-1(style="width: 12px; height: 12px; border-radius: 50%; background-color: #b39ddb;")
                    .circle(style="width: 12px; height: 12px; border-radius: 50%; background-color: #4dd0e1;")
                .p-4(style="background-color: #0d0d2b;")
                  .row.align-items-center
                    .col-md-5.mb-3.mb-md-0
                      h4.text-white &lt;!DOCTYPE html&gt;
          .row(numero="2" titulo="&lt;html&gt;")
            .col-12
              p Esta es la etiqueta principal de la estructura de un documento HTML esta etiqueta encapsula todo el contenido del documento.
              .tarjeta.color-primario.p-0.mt-3.overflow-hidden
                .px-3.py-2(style="background-color: #311a6a; display: flex; align-items: center;")
                  .d-flex
                    .circle.me-1(style="width: 12px; height: 12px; border-radius: 50%; background-color: #81d4fa;")
                    .circle.me-1(style="width: 12px; height: 12px; border-radius: 50%; background-color: #b39ddb;")
                    .circle(style="width: 12px; height: 12px; border-radius: 50%; background-color: #4dd0e1;")
                .p-4(style="background-color: #0d0d2b;")
                  .row.align-items-center
                    .col-md-5.mb-3.mb-md-0
                      h4.text-white &lt;!DOCTYPE html&gt;
                       p.text-white.mb-1  &lt;html&gt;
                       p.text-white.ms-4.mb-1  ...
                       p.text-white.mb-0  &lt;/html&gt;
          .row(numero="3" titulo="&lt;head&gt;")
            .col-12
              p El documento necesita una cabecera en donde se suministra información (en la parte superior del documento).
              .tarjeta.color-primario.p-0.mt-3.overflow-hidden
                .px-3.py-2(style="background-color: #311a6a; display: flex; align-items: center;")
                  .d-flex
                    .circle.me-1(style="width: 12px; height: 12px; border-radius: 50%; background-color: #81d4fa;")
                    .circle.me-1(style="width: 12px; height: 12px; border-radius: 50%; background-color: #b39ddb;")
                    .circle(style="width: 12px; height: 12px; border-radius: 50%; background-color: #4dd0e1;")
                .p-4(style="background-color: #0d0d2b;")
                  .row.align-items-center
                    .col-md-5.mb-3.mb-md-0
                       h4.text-white &lt;!DOCTYPE html&gt;
                       p.text-white.mb-1  &lt;html&gt;
                       p.text-white.ms-3.mb-1  &lt;head&gt;
                       p.text-white.ms-4.mb-1  ...
                       p.text-white.ms-3.mb-1  &lt;/head&gt;
                       p.text-white.mb-0  &lt;/html&gt;
          .row(numero="4" titulo="&lt;body&gt;")
            .col-12
              p Esta etiqueta permite encapsular todo el contenido que se va a mostrar en el documento HTML. Con estas etiquetas ya es posible construir el primer documento estructurado en HTML. A excepción de la primera etiqueta &lt;DOCTYPE&gt;, todas tienen una etiqueta de apertura y otra de cierre.
              .tarjeta.color-primario.p-0.mt-3.overflow-hidden
                .px-3.py-2(style="background-color: #311a6a; display: flex; align-items: center;")
                  .d-flex
                    .circle.me-1(style="width: 12px; height: 12px; border-radius: 50%; background-color: #81d4fa;")
                    .circle.me-1(style="width: 12px; height: 12px; border-radius: 50%; background-color: #b39ddb;")
                    .circle(style="width: 12px; height: 12px; border-radius: 50%; background-color: #4dd0e1;")
                .p-4(style="background-color: #0d0d2b;")
                  .row.align-items-center
                    .col-md-5.mb-3.mb-md-0
                      h4.text-white &lt;!DOCTYPE html&gt;
                       p.text-white.mb-1  &lt;html&gt;
                       p.text-white.ms-3.mb-1  &lt;head&gt;
                       p.text-white.ms-4.mb-1  ...
                       p.text-white.ms-3.mb-1  &lt;/head&gt;
                       p.text-white.ms-3.mb-1   &lt;body&gt;
                       p.text-white.ms-4.mb-1  ...
                       p.text-white.ms-3.mb-1   &lt;/body&gt;
                       p.text-white.mb-0  &lt;/html&gt;
          .row(numero="5" titulo="&lt;meta&gt;")
            .col-12
              p Etiqueta que, junto con el atributo específico, permite modificar el comportamiento de lo que se va a mostrar en el documento, por ejemplo: atributo charset=”iso-8859-1” permite especificar la codificación de los caracteres y cómo se mostrará el texto al usuario, el atributo name=”description” content=”Ejemplo de HTML5” y el name=”keywords” content=”HTML5, CSS3, Javascript” define otros aspectos al momento de mostrar un documento web, la forma correcta de escribir estas etiqueta y la forma de agregarla a la estructura es dentro del bloque &lt;head&gt; &lt;/head&gt; del documento y se utilizará de forma global para todos los documentos HTML enlazados al sitio o a la aplicación.
              .tarjeta.color-primario.p-0.mt-3.overflow-hidden
                .px-3.py-2(style="background-color: #311a6a; display: flex; align-items: center;")
                  .d-flex
                    .circle.me-1(style="width: 12px; height: 12px; border-radius: 50%; background-color: #81d4fa;")
                    .circle.me-1(style="width: 12px; height: 12px; border-radius: 50%; background-color: #b39ddb;")
                    .circle(style="width: 12px; height: 12px; border-radius: 50%; background-color: #4dd0e1;")
                .p-4(style="background-color: #0d0d2b;")
                  .row.align-items-center
                    .col-md-5.mb-3.mb-md-0
                      h4.text-white &lt;!DOCTYPE html&gt;
                       p.text-white.mb-1  &lt;html&gt;
                       p.text-white.ms-3.mb-1  &lt;head&gt;
                       p.text-white.ms-5.mb-1  &lt;meta charset=&quot;iso-8859-1&quot;&gt;
                       p.text-white.ms-5.mb-1  &lt;meta name=&quot;description&quot; content=&quot;Ejemplo de HTML5&quot;&gt;
                       p.text-white.ms-5.mb-1  &lt;meta name=&quot;keywords&quot; content=&quot;HTML5, CSS3, Javascript&quot;&gt;
                       p.text-white.ms-3.mb-1  &lt;/head&gt;
                       p.text-white.ms-3.mb-1   &lt;body&gt;
                       p.text-white.ms-4.mb-1  ...
                       p.text-white.ms-3.mb-1   &lt;/body&gt;
                       p.text-white.mb-0  &lt;/html&gt;
          .row(numero="6" titulo="&lt;title&gt;")
            .col-12
              p Esta etiqueta permite ponerle un título al documento este título se mostrará en la pestaña del #[i browser] donde se despliega el documento HTML.
              .tarjeta.color-primario.p-0.mt-3.overflow-hidden
                .px-3.py-2(style="background-color: #311a6a; display: flex; align-items: center;")
                  .d-flex
                    .circle.me-1(style="width: 12px; height: 12px; border-radius: 50%; background-color: #81d4fa;")
                    .circle.me-1(style="width: 12px; height: 12px; border-radius: 50%; background-color: #b39ddb;")
                    .circle(style="width: 12px; height: 12px; border-radius: 50%; background-color: #4dd0e1;")
                .p-4(style="background-color: #0d0d2b;")
                  .row.align-items-center
                    .col-md-5.mb-3.mb-md-0
                      h4.text-white &lt;!DOCTYPE html&gt;
                       p.text-white.mb-1  &lt;html&gt;
                       p.text-white.ms-3.mb-1  &lt;head&gt;
                       p.text-white.ms-5.mb-1  &lt;meta charset=&quot;iso-8859-1&quot;&gt;
                       p.text-white.ms-5.mb-1  &lt;meta name=&quot;description&quot; content=&quot;Ejemplo de HTML5&quot;&gt;
                       p.text-white.ms-5.mb-1  &lt;meta name=&quot;keywords&quot; content=&quot;HTML5, CSS3, Javascript&quot;&gt;
                       p.text-white.ms-5.mb-1  &lt;title&gt;Mi primer código html&lt;/title&gt;
                       p.text-white.ms-3.mb-1  &lt;/head&gt;
                       p.text-white.ms-3.mb-1   &lt;body&gt;
                       p.text-white.ms-4.mb-1  ...
                       p.text-white.ms-3.mb-1   &lt;/body&gt;
                       p.text-white.mb-0  &lt;/html&gt;
          .row(numero="7" titulo="&lt;link&gt;")
            .col-12
              p Esta etiqueta permite agregar estilo CSS y código Javascript.
              .tarjeta.color-primario.p-0.mt-3.overflow-hidden
                .px-3.py-2(style="background-color: #311a6a; display: flex; align-items: center;")
                  .d-flex
                    .circle.me-1(style="width: 12px; height: 12px; border-radius: 50%; background-color: #81d4fa;")
                    .circle.me-1(style="width: 12px; height: 12px; border-radius: 50%; background-color: #b39ddb;")
                    .circle(style="width: 12px; height: 12px; border-radius: 50%; background-color: #4dd0e1;")
                .p-4(style="background-color: #0d0d2b;")
                  .row.align-items-center
                    .col-md-5.mb-3.mb-md-0
                      h4.text-white &lt;!DOCTYPE html&gt;
                       p.text-white.mb-1  &lt;html&gt;
                       p.text-white.ms-3.mb-1  &lt;head&gt;
                       p.text-white.ms-5.mb-1  &lt;meta charset=&quot;iso-8859-1&quot;&gt;
                       p.text-white.ms-5.mb-1  &lt;meta name=&quot;description&quot; content=&quot;Ejemplo de HTML5&quot;&gt;
                       p.text-white.ms-5.mb-1  &lt;meta name=&quot;keywords&quot; content=&quot;HTML5, CSS3, Javascript&quot;&gt;
                       p.text-white.ms-5.mb-1  &lt;title&gt;Mi primer código html&lt;/title&gt;
                       p.text-white.ms-5.mb-1  &lt;link real=&quot;stylesheet&quot; href=&quot;miArchivoCss.css&quot;&gt;
                       p.text-white.ms-3.mb-1  &lt;/head&gt;
                       p.text-white.ms-3.mb-1   &lt;body&gt;
                       p.text-white.ms-4.mb-1  ...
                       p.text-white.ms-3.mb-1   &lt;/body&gt;
                       p.text-white.mb-0  &lt;/html&gt;

    .row.justify-content-center.align-items-center
      .col-lg-10
        .tarjeta.BG03.p-4
          .row.justify-content-center.align-items-center
            .col-2
              figure
                img(src="@/assets/curso/Temas/tema2/img10.svg" alt="Adornos flotantes")
            .col-10
              p.mb-0 Tenga presente que las etiquetas &lt;meta&gt; &lt;title&gt; y &lt;link&gt; permiten mostrar contenidos más específicos o permiten crear comportamientos en el documento.

    separador
    .titulo-segundo.color-acento-contenido
      h2 2.1 Estructura del cuerpo de una página web         
    p.mb-5 La estructura del cuerpo no es más que la estructura que se crea dentro del #[i body]; normalmente se le denomina plantilla y de esta forma es posible mostrar, organizadamente y por secciones, la información que llegará al usuario.

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-4
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/Temas/tema2/img11.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 En HTML se utilizan algunos elementos para crear la estructura dentro de #[i body], el elemento utilizado inicialmente para crear esta estructura era la etiqueta &lt;table&gt;, la que permite al desarrollador organizar la información, utilizando filas y columnas para mostrar y organizar información como: imágenes, textos y otros elementos, logrando que el usuario tenga una mejor experiencia visual y no se pierda entre los contenidos.
    
    .row.justify-content-center.align-items-center.mb-4
      .col-1
        figure
          img(src="@/assets/curso/Temas/tema2/img12.svg" alt="Adornos flotantes")
      .col-11
        p.mb-3 La etiqueta &lt;div&gt; llegó para reemplazar la etiqueta &lt;table&gt; al momento de crear esta estructura. Esta etiqueta lo que hace es separar el cuerpo, funcionando como la celda de una tabla, es más fácil de implementar y se utiliza menos código para crear la estructura.


    .tarjeta.BG02.p-4.mb-4
      .row
        .col-10
          p.mb-3 La forma establecer qué elemento utilizar para la estructura, depende de cada desarrollador, teniendo en cuenta las bondades y la necesidad de lo que se quiera mostrar, en pantalla, al usuario.
          p.mb-3 A continuación, se relacionan algunas estructuras del #[i body] que normalmente se utilizan y se identifican, al momento de ingresar a un sitio #[i web] o a una aplicación web; se debe tener presente que estas estructuras pueden variar, según el diseñador web, pero, normalmente, se siguen algunos estándares:
        .col-2.d-none.d-lg-block
          figure
            img(src="@/assets/curso/Temas/tema2/img13.svg" alt="Adornos flotantes")

    .BG03.p-5.mb-4 
      SlyderB(:datos="datosSlyder")
    .row.align-items-center.mb-4
      .col-lg-4.col-md-5.mb-4.mb-md-0
        figure
          img(src="@/assets/curso/Temas/tema2/img20.png" alt="Imagen decorativa")
      
      .col-lg-8.col-md-7
        .titulo.mb-4(data-aos="fade-left")
          img(src='@/assets/curso/icon.svg', alt='Imagen decorativa')
          h5 Elementos del contenido
        
        p.mb-3 La mayoría de elementos vistos hasta este punto del componente, son elementos orientados a ofrecer metadatos (para los motores de búsqueda, &lt;meta&gt;, &lt;title&gt;) o de estructura (&lt;header&gt;, &lt;body&gt;). A continuación, se verán aquellos elementos usados para segmentar los contenidos dentro de una página o interfaz web o, simplemente, para diferenciar los contenidos de la página.


    //- Tarjeta de Descarga
    .tarjeta.BG04.p-3(data-aos="zoom-in")
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/Temas/tema2/img21.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h3.mb-1 Elementos del contenido
              p Para afianzar su saber en lo relacionado con los elementos del contenido, acceda a este documento. Recuerde llevar registro de los aspectos más destacados e importantes, en sueta personal de apuntes.
            .col-sm-auto
              a.boton.color-acento-botones(:href="obtenerLink('/downloads/Elementos_del_contenido.pdf')" target="_blank")
                span Descargar                
                i.fas.fa-file-download
    separador
    .titulo-segundo.color-acento-contenido
      h2 2.2 Nuevos elementos HTML5

    p En respuesta a la normal evolución de los sisTemas informáticos y la necesidad permanente de mejorar las funcionalidades de desarrollo y la experiencia de usuario, se ha seguido actualizando el código HTML.
    p.mb-4 Se invita a conocer algunas funcionalidades y beneficios de HTML5, con respecto a multimedia, estudiando atentamente el recurso que se muestra a continuación:

    TabsB.color-acento-botones.mb-5
      .py-4.BG02.py-md-5(titulo="Video" :icono="require('@/assets/curso/Temas/tema2/img22.svg')")
        .px-4
          p.mb-4 Este elemento utiliza etiquetas de apertura y de cierre &lt;video&gt; y solo es obligatorio colocar la ruta de acceso al video #[b src]; además de algunos atributos para el control del elemento como: #[i #[b width]] y #[i #[b heigth]], para el tamaño en el que se va a mostrar el video en el #[i browser].
    
          .row
            .col-2
            .col-8
              figure
                img(src="@/assets/curso/Temas/tema2/img26.png" alt="Adornos flotantes")

      .py-4.BG02.py-md-5(titulo="Atributos de video" :icono="require('@/assets/curso/Temas/tema2/img23.svg')")
        .px-4
          p.mb-4 
            p.mb-0 Algunos atributos adicionales de video son el #[i autoplay], utilizado para indicar al navegador que se reproducirá automáticamente. Así mismo, el loop que permite reproducir de neuvo el video cuando lelgue al final. Con esta etiqueta y estos atributos es posible ubicar los videos dentro un sitio o aplicación #[i web].
            .row
              .col-2
              .col-8
                .tarjeta.color-primario.p-0.mt-3.overflow-hidden
                  .px-3.py-2(style="background-color: #311a6a; display: flex; align-items: center;")
                    .d-flex
                      .circle.me-1(style="width: 12px; height: 12px; border-radius: 50%; background-color: #81d4fa;")
                      .circle.me-1(style="width: 12px; height: 12px; border-radius: 50%; background-color: #b39ddb;")
                      .circle(style="width: 12px; height: 12px; border-radius: 50%; background-color: #4dd0e1;")
                  .p-4(style="background-color: #0d0d2b;")
                    .row.align-items-center
                      .col-md-5.mb-3.mb-md-0
                        h4.text-white &lt;!DOCTYPE #[i HTML]&gt;
                          p.text-white.mb-1
                            | &lt;#[i HTML] Lang="es"&gt;
                          p.text-white.ms-3.mb-1
                            | &lt;head&gt;
                          p.text-white.ms-5.mb-1
                            | &lt;title&gt; Reproductor de Video &lt;/title&gt;
                          p.text-white.ms-3.mb-1
                            | &lt;/head&gt;
                          p.text-white.ms-3.mb-1
                            | &lt;body&gt;
                          p.text-white.ms-5.mb-1
                            | &lt;section id="reproductor"&gt;
                          p.text-white.ms-5.mb-1
                            | &lt;video src="https://www.youtube.com/watch?v=U_exqn8Khp" controls&gt;
                          p.text-white.ms-5.mb-1
                            | &lt;/video&gt;
                          p.text-white.ms-5.mb-1
                            | &lt;/section&gt;
                          p.text-white.ms-3.mb-1
                            | &lt;/body&gt;
                          p.text-white.mb-0
                            | &lt;/#[i HTML]&gt;

      .py-4.BG02.py-md-5(titulo="Audio" :icono="require('@/assets/curso/Temas/tema2/img24.svg')")
        .px-4
          p Este elemento utiliza la etiqueta &lt;audio&gt;, así como el video. Es decir, utilzia casi los mismos atributos del elemento video
    
          .row
            .col-2
            .col-8
              figure
                img(src="@/assets/curso/Temas/tema2/img28.png" alt="Adornos flotantes")

      .py-4.BG02.py-md-5(titulo="Atributos de audio" :icono="require('@/assets/curso/Temas/tema2/img25.svg')")
        .px-4
          p.mb-0 El atributo obligatorio es la ruta del archivo de audio, también cuenta con el atributo #[i autoplay] y #[i loop] que tiene el msimo comportamiento que el video.
            .row
              .col-2
              .col-8
                .tarjeta.color-primario.p-0.mt-3.overflow-hidden
                  .px-3.py-2(style="background-color: #311a6a; display: flex; align-items: center;")
                    .d-flex
                      .circle.me-1(style="width: 12px; height: 12px; border-radius: 50%; background-color: #81d4fa;")
                      .circle.me-1(style="width: 12px; height: 12px; border-radius: 50%; background-color: #b39ddb;")
                      .circle(style="width: 12px; height: 12px; border-radius: 50%; background-color: #4dd0e1;")
                  .p-4(style="background-color: #0d0d2b;")
                    .row.align-items-center
                      .col-md-5.mb-3.mb-md-0
                        h4.text-white &lt;!DOCTYPE #[i HTML]&gt;
                          p.text-white.mb-1
                            | &lt;#[i HTML] Lang="es"&gt;
                          p.text-white.ms-3.mb-1
                            | &lt;head&gt;
                          p.text-white.ms-5.mb-1
                            | &lt;title&gt; Reproductor de Audio &lt;/title&gt;
                          p.text-white.ms-3.mb-1
                            | &lt;/head&gt;
                          p.text-white.ms-3.mb-1
                            | &lt;body&gt;
                          p.text-white.ms-5.mb-1
                            | &lt;section id="reproductor"&gt;
                          p.text-white.ms-5.mb-1
                            | &lt;audio src="https://minkbooks.com/content/beach.mp3" controls&gt;
                          p.text-white.ms-5.mb-1
                            | &lt;/audio&gt;
                          p.text-white.ms-5.mb-1
                            | &lt;/section&gt;
                          p.text-white.ms-3.mb-1
                            | &lt;/body&gt;
                          p.text-white.mb-0
                            | &lt;/#[i HTML]&gt;
            
    .titulo-segundo.color-secundario
      h2 2.3 Referencias y etiquetas
    .tarjeta--BMG04.px-5

      p.mb-4 Acceda a cada uno de los siguientes enlaces para tener mayor entendimiento de esta temática:
      .row.row.justify-content-center.align-items-center.mb-5
        .col-lg-8
          figure
            img(src="@/assets/curso/Temas/tema2/img30.png" alt="Adornos flotantes")
      //- Tarjeta de Descarga
      .tarjeta.BG04.p-3.mb-5(data-aos="zoom-in")
        .row.justify-content-around.align-items-center
          .col-3.col-sm-2.col-lg-1
            img(src="@/assets/curso/Temas/tema2/img31.svg")
          .col
            .row.justify-content-between.align-items-center
              .col.mb-3.mb-sm-0
                h3.mb-1 Referencias y etiquetas
                p Conozca con mayor detalle, aspectos de suma importancia en lo relacionado con referencias y etiquetas, encontrando un listado de etiquetas que son las que comúnmente se emplean para la construcción de sitios o interfaces #[i web].
              .col-sm-auto
                a.boton.color-acento-botones(:href="obtenerLink('/downloads/Anexo_2_RerefenciasYEtiquetas.pdf')" target="_blank")
                  span Descargar
                  i.fas.fa-file-download
      //- Tarjeta de Descarga
      .tarjeta.BG04.p-3.mb-0(data-aos="zoom-in")
        .row.justify-content-around.align-items-center
          .col-3.col-sm-2.col-lg-1
            img(src="@/assets/curso/Temas/tema2/img32.svg")
          .col
            .row.justify-content-between.align-items-center
              .col.mb-3.mb-sm-0
                h3.mb-1 HTML: Lenguaje de etiquetas de hipertexto
                p Si desea encontrar y conocer con mayor detalle, un compendio de las etiquetas completas y actualizadas, ingrese y explore el enlace que aquí se propone.
              .col-sm-auto
                a.boton.color-acento-botones(:href="'https://developer.mozilla.org/es/docs/Web/#[i HTML]'" target="_blank")
                  span Enlace Web
                  i.fas.fa-file-code
</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
    datosSlyder: [
      {
        titulo: 'Cabecera',
        texto:
          'Esta plantilla está dividida en secciones, en donde se suministrará información relevante para el usuario; la cabecera es, normalmente, utilizada para mostrar, entre otros, banners e imágenes corporativas de la empresa dueña del sitio web.',
        imagen: require('@/assets/curso/Temas/tema2/img14.png'),
        imagenMovil: require('@/assets/curso/Temas/tema2/img14_1.png'),
      },
      {
        titulo: 'Barra de navegación',
        texto:
          'Bajo la cabecera se encuentra la barra de navegación: allí se muestra normalmente el menú de navegación de todo el sitio web e información principal. Si se tiene una sección de noticias y está en el menú de navegación me mostrarán',
        imagen: require('@/assets/curso/Temas/tema2/img15.png'),
        imagenMovil: require('@/assets/curso/Temas/tema2/img15_1.png'),
      },
      {
        titulo: 'Barra lateral',
        texto:
          'En la barra lateral pueden mostrarse links de interés para los usuarios o información del autor, entre otras cosas. Por último, se cuenta con la sección institucional, a la que se llamó de esta forma porque, normalmente, se utiliza para mostrar información de la empresa del autor; generalmente, estas plantillas son utilizadas para crear blogs.',
        imagen: require('@/assets/curso/Temas/tema2/img16.png'),
        imagenMovil: require('@/assets/curso/Temas/tema2/img16_1.png'),
      },
      {
        titulo: 'Ejemplo',
        texto:
          'Este es un ejemplo de una estructura y su escritura en código #[i HTML].',
        imagen: require('@/assets/curso/Temas/tema2/img17.png'),
        imagenMovil: require('@/assets/curso/Temas/tema2/img17_1.png'),
      },
      {
        titulo: 'Estructura',
        texto:
          '#[i HTML]5 permite crear esta estructura básica, usando nuevos elementos para dividir la plantilla y mostrar la sección correspondiente. Al momento de crear la estructura de la plantilla dentro del body, como se muestra en la imagen, se utilizan etiquetas que permiten dividir y estructurar las secciones del sitio, página o aplicación web.',
        imagen: require('@/assets/curso/Temas/tema2/img18.png'),
        imagenMovil: require('@/assets/curso/Temas/tema2/img18_1.png'),
      },
      {
        titulo: 'Etiqueta <header>',
        texto:
          'La etiqueta <header> se utiliza para la cabecera, teniendo en cuenta que la etiqueta <head> y <header> son totalmente diferentes; <nav> es utilizada para colocar el menú de navegación, <section> es la sección que incluirá la información dependiendo de lo que se quiere mostrar, <aside> hace parte de la estructura del body que se puede utilizar para poner información personal o enlaces importantes; por último, está el <footer>.',
        imagen: require('@/assets/curso/Temas/tema2/img19.png'),
        imagenMovil: require('@/assets/curso/Temas/tema2/img19_1.png'),
      },
    ],
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
