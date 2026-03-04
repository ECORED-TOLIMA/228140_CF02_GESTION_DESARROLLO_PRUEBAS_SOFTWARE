<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-8.order-2.order-lg-1
        p El desarrollo #[i web frontend] constituye la base para la creación de aplicaciones #[i web] modernas, funcionales y centradas en el usuario. A través del uso de lenguajes y tecnologías estándar, es posible estructurar contenidos, definir estilos visuales y dotar de interactividad a los sitios #[i web], garantizando experiencias de uso accesibles y eficientes.
        .cajon.color-primario.p-4
          p.mb-0 Por lo anterior, se invita a acceder al siguiente video, en el cual se explica cómo la integración de HTML5, CSS y JavaScript, permite crear interfaces #[i web] amigables, resaltando la evolución constante de estas tecnologías, la aplicación de normas y estándares de desarrollo, así como la importancia de construir aplicaciones funcionales en menos tiempo y con mayor calidad:
      .col-lg-4.col-6.mb-4.mb-lg-0.order-1.order-lg-2
        figure
          img(src="@/assets/curso/Temas/intro/img1.png", alt="alt")
    
    .row.justify-content-center.align-items-center
      .col-lg-12
        figure(data-aos="zoom-in")
          .video
            iframe(width="1346" height="757" src="https://www.youtube.com/embed/BPEm300HKyk" title="Frontend con HTML5, CSS y JSS: introducción" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen)
</template>

<script>
export default {
  name: 'Introduccion',
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
