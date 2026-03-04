<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Conceptos básicos
    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-4
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/Temas/tema1/img1.jpg')})`}"
        )
        .bloque-texto-g__texto.p-4
          p.mb-0 Un conjunto de tecnologías orientadas a la presentación de datos y la creación de interfaz de usuario, están presentes en la construcción de aplicaciones #[i web]. Unas se ocupan de aquellos contenidos que se deben presentar, otras se encargan de cómo darle estilo visual a aquello que se está presentando y, finalmente, otras se encargan de controlar el comportamiento de los elementos que se presentaron en la interfaz de usuario.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        p.text-center.mb-0 Estas tecnologías son HTTP (Hypertext Transfer Protocol), CSS (Cascading Style Sheets) y JavaScript, respectivamente. Las dos primeras serán el objeto principal de estudio de esta temática, las que se explican a continuación:

    

    TabsB.color-acento-botones
      .py-4.BG02.py-md-5(titulo="Documentos" :icono="require('@/assets/curso/Temas/tema1/img2.svg')")
        .px-4
          .row
            .col-md-7.mb-4.mb-md-0
              h5 HTML (documentos)
              
              p.mb-0 Las aplicaciones o sitios #[i web] están compuestos, principalmente, por varios documentos HTML, estos documentos cuentan con una estructura escrita por etiquetas, que permiten que el #[i browser] lo interprete y muestre lo que, normalmente, se ve al momento de acceder a una página #[i web], portal #[i web], sitio #[i web] o aplicación #[i web].
            .col-md-5.mb-4.mb-md-0
              img(src="@/assets/curso/Temas/tema1/img7.svg" alt="Adornos flotantes")

      .py-4.BG02.py-md-5(titulo="Navegador" :icono="require('@/assets/curso/Temas/tema1/img3.svg')")
        .px-4 
          .row
            .col-md-7.mb-4.mb-md-0
              h5 HTML (interpretación del navegador)
              
              p.mb-0 Para que el #[i browser] o navegador de Internet Mozilla Explorer Edge Chrome... etc. interprete estos documentos debe guardarse con la extensión .HTML por ejemplo miPagina.html.
            .col-md-5.mb-4.mb-md-0
              img(src="@/assets/curso/Temas/tema1/img8.svg" alt="Adornos flotantes")

      .py-4.BG02.py-md-5(titulo="Texto" :icono="require('@/assets/curso/Temas/tema1/img4.svg')")
        .px-4 
          .row
            .col-md-7.mb-4.mb-md-0
              h5 HTML (editores de texto)
              
              p.mb-0 Para crear un documento HTML sencillo no es necesario obtener una herramienta en específico solo con un editor de texto es suficiente para escribir y construir estos documentos sin embargo existen herramientas que permiten crea
            .col-md-5.mb-4.mb-md-0
              img(src="@/assets/curso/Temas/tema1/img9.svg" alt="Adornos flotantes")

      .py-4.BG02.py-md-5(titulo="Sintaxis" :icono="require('@/assets/curso/Temas/tema1/img5.svg')")
        .px-4 
          .row
            .col-md-7.mb-4.mb-md-0
              h5 HTML (sintaxis)
              
              p.mb-0 La sintaxis del HTML se basa en etiquetas que normalmente se generan: una para la apertura de un bloque de información y otra para cerrarla.
            .col-md-5.mb-4.mb-md-0
              img(src="@/assets/curso/Temas/tema1/img10.svg" alt="Adornos flotantes")

      .py-4.BG02.py-md-5(titulo="Etiquetas" :icono="require('@/assets/curso/Temas/tema1/img6.svg')")
        .px-4 
          .row
            .col-md-7.mb-4.mb-md-0
              h5 HTML (estructura de las etiquetas)
              
              p.mb-0 Etiqueta de apertura html y etiqueta de cierre html . Nótese que la etiqueta de cierre siempre lleva un carácter especial de esta forma el #[i browser] lee el contenido entre las etiquetas y lo muestra al usuario
            .col-md-5.mb-4.mb-md-0
              img(src="@/assets/curso/Temas/tema1/img11.svg" alt="Adornos flotantes")
    
</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
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
