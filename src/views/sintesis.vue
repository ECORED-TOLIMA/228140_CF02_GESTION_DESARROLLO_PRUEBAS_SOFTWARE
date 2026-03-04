<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p Este componente formativo introduce los fundamentos del desarrollo #[i web] orientado al usuario, integrando conceptos esenciales y buenas prácticas para la creación de aplicaciones #[i web] funcionales, dinámicas y eficientes. A través del uso de tecnologías estándar como HTML5, CSS y JavaScript, se promueve la construcción de interfaces claras, accesibles y coherentes, así como la incorporación de estilos, interactividad y funcionalidades que respondan a las necesidades actuales. Además, se enfatiza la importancia de aplicar estándares, aprovechar recursos existentes y realizar procesos de prueba y depuración que garanticen la calidad y el correcto funcionamiento de las soluciones desarrolladas.
    .row.justify-content-center
      .col-lg-10.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg", alt="La síntesis del componente formativo Tecnologías para el desarrollo de aplicaciones web, inicia con la comprensión de los conceptos básicos y la estructura de una página web, mediante el uso de HTML5, sus elementos, etiquetas y referencias. Posteriormente, se avanza en la aplicación de estilos y selectores con CSS3 para la construcción de interfaces visuales coherentes y funcionales y en la incorporación de interactividad a través de JavaScript, el uso de APIs y librerías. El recorrido formativo se complementa con la realización de pruebas y procesos de depuración de código, orientados a garantizar aplicaciones web eficientes, funcionales y alineadas con estándares de calidad.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
