<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 CSS
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-12
        figure.mb-4
          img(src="@/assets/curso/Temas/tema3/img1.png" alt="Imagen decorativa código")
          
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10  
        p.mb-4 El CSS (hojas de estilo en cascada), es la manera en que se da formato a un grupo de elementos del documento HTML. Cascada, en tanto refiere que los elementos tendrán un formato, teniendo en cuenta la jerarquía.
        .tarjeta.BG02.p-4
          p.mb-0 Se invita a profundizar, entonces, los aspectos más sobresalientes e importantes de las hojas de estilo en cascada (CSS), estudiando atentamente el video que se presenta a continuación:
      .col-lg-2.d-none.d-lg-block
        figure
          img(src="@/assets/curso/Temas/tema3/img2.svg" alt="Logo CSS3")
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        figure(data-aos="zoom-in")
          .video
            iframe(width="1346" height="757" src="https://www.youtube.com/embed/BPEm300HKyk" title="#[i Frontend] con HTML5, CSS y JSS: introducción" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; #[i web]-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen)
    separador
    .titulo-segundo.color-primario
      h2 3.1. Referencias de estilos y propiedades de CSS3
    .tarjeta--BMG05.px-5
      p.md-5 Con relación a las referencias de estilos, existe una guía básica de estilos muy comunes y bastante utilizados, con los que se puede dar formato a las páginas #[i web].
    
      .row.justify-content-center.align-items-center
        .col-lg-4
          figure
            img(src="@/assets/curso/Temas/tema3/img3.png", alt="alt")
        .col-lg-8
          //- Tarjeta de Descarga
          .tarjeta.BG04.p-3.mb-5(data-aos="zoom-in")
            .row.justify-content-around.align-items-center
              .col-4.col-sm-3.col-lg-2
                img(src="@/assets/curso/Temas/tema3/img4.svg")
              .col
                .row.justify-content-between.align-items-center
                  .col.mb-3.mb-sm-0
                    h3.mb-1 Referencias de estilos y propiedades CSS3
                    p.mb-0 Explore este documento y encuentre allí los estilos de uso más frecuente, en la asignación de formato en la creación de páginas #[i web].
                  .col-sm-auto
                    a.boton.color-acento-botones(:href="obtenerLink('/downloads/Anexo_2_RerefenciasYEtiquetas.pdf')" target="_blank")
                      span Descargar
                      i.fas.fa-file-download
          //- Tarjeta de Descarga
          .tarjeta.BG04.p-3.mb-5(data-aos="zoom-in")
            .row.justify-content-around.align-items-center
              .col-4.col-sm-3.col-lg-2
                img(src="@/assets/curso/Temas/tema3/img5.svg")
              .col
                .row.justify-content-between.align-items-center
                  .col.mb-3.mb-sm-0
                    h3.mb-1 CSS
                    p.mb-0 Todos los elementos de estilo actualizados pueden ser encontrados, navegando esta página #[i web].
                  .col-sm-auto
                    a.boton.color-acento-botones(href="https://developer.mozilla.org/es/docs/Web/CSS" target="_blank")
                      span Enlace #[i Web]
                      i.fas.fa-file-code
    separador
    .titulo-segundo.color-primario
      h2 3.2. Selectores
    .row.justify-content-center.align-items-center.mb-4
      .col-1
        figure
          img(src="@/assets/curso/Temas/tema3/img6.svg" alt="Adornos flotantes")
      .col-11
        p.mb-3 Los selectores son utilizados para hacer referencia a las etiquetas del HTML. Estos selectores están clasificados en ciertos tipos; por lo que en este punto del componente se invita a abordar tales tipos de selectores, explicados en el siguiente video
   
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        figure(data-aos="zoom-in")
          .video
            iframe(width="1346" height="757" src="https://www.youtube.com/embed/BPEm300HKyk" title="#[i Frontend] con HTML5, CSS y JSS: introducción" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; #[i web]-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen)

</template>

<script>
export default {
  name: 'Tema3',
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
