<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 5
      h1 Pruebas y depuración de código
    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/Temas/tema5/img1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 En el desarrollo tienen mucha importancia las pruebas de desarrollador que están orientadas a prueba y error, cada vez que se va escribiendo cualquier código, pues cada lenguaje de programación tiene su validador de sintaxis. Además, las herramientas para la depuración son diferentes y son utilizadas según las preferencias del desarrollador.
    br
    p.mb-4 En este punto del componente formativo, se estudiarán los depuradores para aplicaciones, sitios y páginas web mediante el video que se propone a continuación:
    .row.justify-content-center.align-items-center
        .col-lg-12
          figure(data-aos="zoom-in")
            .video
              iframe(width="1346" height="757" src="https://www.youtube.com/embed/C6mw3uvLNSY" title="Pruebas y depuración de código" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen)


</template>

<script>
export default {
  name: 'Tema5',
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
