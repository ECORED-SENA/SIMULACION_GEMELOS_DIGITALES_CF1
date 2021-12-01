<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .row.align-items-center.mb-5(data-aos="slide-left")
      .col-2
        figure.img-position1
          img(src='@/assets/curso/img1.png')
      .col-10.bg-color1
        p.mb-0 Estimado aprendiz, se le invita a ver el siguiente video que explica lo que tratará este componente formativo. Ánimo con este proceso que apenas comienza y que se espera sea de su agrado:
    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/9rwh8ezI3vM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
