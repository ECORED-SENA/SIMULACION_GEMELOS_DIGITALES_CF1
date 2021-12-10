<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Simulación en 3D
    .row.justify-content-end.bg-color5.mb-5(data-aos="slide-left")
      .col-12.d-block.d-lg-none.bg-color6
        br
        br
        br
        br
        br
        br
        br
        br
        br
        br
      .col-lg-7.p-5.bg-color7
        p.mb-0 Al igual que en la simulación en 2D, NX Motion permite simular y evaluar sistemas mecánicos, mediante el análisis de las variables cinemáticas, como: desplazamiento, velocidad y aceleración, pero en este caso en cuerpos rígidos en 3D. Una vez definidos los cuerpos de movimiento y establecidas las juntas de revolución y deslizantes, el sistema facilita la visualización de los resultados de la simulación, detectar colisiones. (Siemens, s. f.)
    .row.bg-color2
      .col-12.px-5
        .row.justify-content-center.mb-5
          .col-lg-8(data-aos="slide-left")
            .titulo-sexto.color-acento-contenido
              p.mb-0 #[span.text-deco1 Figura 19.] #[b Simulación 3D]
            figure
              img(src='@/assets/curso/img25.png', style="width: 850px").m-auto
              figcaption Nota. Adaptada del sistema CAD NX 12.
        #t_2_1
        .titulo-segundo.color-secundario
          h2 2.1 Acopladores
        .row.align-items-center.mb-5
          .col-lg-6.mb-4.mb-lg-0
            p.mb-4 Permiten definir diferentes elementos mecánicos en 3D. Dentro de este grupo de comandos, se encuentra acoplador de engranajes, cremallera piñón y cable, entre otros.
            .row.justify-content-center.mb-5
              .col-lg-8(data-aos="slide-right")
                .titulo-sexto.color-acento-contenido
                  p.mb-0 #[span.text-deco1 Figura 20.] #[b Acoplador]
                figure
                  img(src='@/assets/curso/img26.png', style="width: 550px").m-auto
                  figcaption Nota. Adaptada del sistema CAD NX 12.
          .col-lg-6
            figure(data-aos="slide-left")
              img(src='@/assets/curso/img27.png', style="width: 550px").m-auto
        SlyderA
          .row.justify-content-center
            .col-11
              figure
                img(src='@/assets/curso/img28.png', style="width: 1200px").m-auto
              .row.align-items-center.justify-content-center.mb-5
                .col-2.d-none.d-lg-block
                  figure.img-position3
                    img(src='@/assets/curso/img14.png')
                .col-9.bg-color4.p-4
                  .row.align-items-center.justify-content-end
                    .col-12.col-lg-7
                      h3.text-deco3 Video tutorial
                      p.mb-0 Estimado aprendiz, para profundizar sobre el tema puede consultar el siguiente video.
                    .col-lg-3
                      a.boton.color-primario.me-3(href="https://www.youtube.com/watch?v=UKT-YAagB3I" target="_blank" type="application/pdf")
                        span Ver video
                        i.fas.fa-file-download
          .row.justify-content-center
            .col-11
              figure
                img(src='@/assets/curso/img29.png', style="width: 1200px").m-auto
              .row.align-items-center.justify-content-center.mb-5
                .col-2.d-none.d-lg-block
                  figure.img-position3
                    img(src='@/assets/curso/img14.png')
                .col-9.bg-color4.p-4
                  .row.align-items-center.justify-content-end
                    .col-12.col-lg-7
                      h3.text-deco3 Video tutorial
                      p.mb-0 Estimado aprendiz, para profundizar sobre el tema puede consultar el siguiente video.
                    .col-lg-3
                      a.boton.color-primario.me-3(href="https://www.youtube.com/watch?v=DWz3h2wJ_OM" target="_blank" type="application/pdf")
                        span Ver video
                        i.fas.fa-file-download
        separador.mb-5
        #t_2_2
        .titulo-segundo.color-secundario
          h2 2.2 Contactos
        .bloque-texto-a.color-primario.p-4.p-md-3.mb-5(data-aos="slide-right")
          .row.m-0.align-items-center.justify-content-between
            .col-lg-4.mb-4.mb-lg-0
              .titulo-sexto.color-acento-contenido
                p.mb-0 #[span.text-deco1 Figura 23.] #[b Comando de contacto]
              .row.justify-content-center
                .col-9
                  figure
                    img(src='@/assets/curso/img30.png', style="width: 300px").m-auto
                    figcaption Nota. Adaptada del sistema CAD NX 12.
            .col-lg-8
              .bloque-texto-a__texto.p-4
                p Esta funcionalidad genera contactos entre cuerpos rígidos, evitando que los componentes se traslapen. En este grupo de comandos, se encuentran las herramientas que permiten generar contacto 3D, contacto entre engranajes y crear engranaje.
        LineaTiempoD.color-primario
          .row(numero="1" titulo="Contacto 3D")
            .col-12
              p.mb-5 Define el contacto entre un cuerpo rígido y un objeto estacionario, entre dos cuerpos en movimiento, o para sostener un cuerpo con respecto a otro. 
              .row.justify-content-center
                .col-10.col-lg-8.mb-5
                  .titulo-sexto.color-acento-contenido
                    p.mb-0 #[span.text-deco1 Figura 24.] #[b Contacto 3D]
                  figure
                    img(src='@/assets/curso/img31.png', style="width: 850px").m-auto
                    figcaption Nota. Adaptada del sistema CAD NX 12.
              .row.align-items-center.justify-content-center.mb-5
                .col-2.d-none.d-lg-block
                  figure.img-position3
                    img(src='@/assets/curso/img14.png')
                .col-9.bg-color4.p-4
                  .row.align-items-center.justify-content-end
                    .col-12.col-lg-7.mb-4.mb-lg-0
                      h3.text-deco3 Video tutorial
                      p.mb-0 Estimado aprendiz, para profundizar sobre el tema puede consultar el siguiente video.
                    .col-lg-3
                      a.boton.color-primario.me-3(href="https://www.youtube.com/watch?v=1oSWdW-dm1U" target="_blank" type="application/pdf")
                        span Ver video
                        i.fas.fa-file-download
          .row(numero="2" titulo="Contacto entre engranajes")
            .col-12
              p.mb-5 Define el contacto entre dos elementos de engranajes.
              .row.justify-content-center
                .col-10.col-lg-8.mb-5
                  .titulo-sexto.color-acento-contenido
                    p.mb-0 #[span.text-deco1 Figura 25.] #[b Contacto entre engranajes]
                  figure
                    img(src='@/assets/curso/img32.png', style="width: 850px").m-auto
                    figcaption Nota. Adaptada del sistema CAD NX 12.
              .row.align-items-center.justify-content-center.mb-5
                .col-2.d-none.d-lg-block
                  figure.img-position3
                    img(src='@/assets/curso/img14.png')
                .col-9.bg-color4.p-4
                  .row.align-items-center.justify-content-end
                    .col-12.col-lg-7.mb-4.mb-lg-0
                      h3.text-deco3 Video tutorial
                      p.mb-0 Estimado aprendiz, para profundizar sobre el tema puede consultar el siguiente video.
                    .col-lg-3
                      a.boton.color-primario.me-3(href="https://www.youtube.com/watch?v=Wh-c2jaS_AM" target="_blank" type="application/pdf")
                        span Ver video
                        i.fas.fa-file-download
    separador.mb-5
    #t_2_3
    .titulo-segundo.color-secundario
      h2 2.3 Análisis del movimiento
    .row.align-items-center.mb-5#menu2
      .col-lg-6.mb-4.mb-lg-0
        p.mb-4 En la pestaña Análisis del espacio Movimiento, se encuentran los comandos que permiten reproducir y visualizar los resultados de una simulación, posterior a la creación de una solución.
        .row.justify-content-center
          .col-10.col-lg-8.mb-5(data-aos="slide-right")
            .titulo-sexto.color-acento-contenido
              p.mb-0 #[span.text-deco1 Figura 26.] #[b Análisis del movimiento]
            figure
              img(src='@/assets/curso/img33.png', style="width: 850px").m-auto
              figcaption Nota. Adaptada del sistema CAD NX 12.
      .col-lg-6
        figure(data-aos="slide-left")
          img(src='@/assets/curso/img34.png', style="width: 550px").m-auto
    .row.justify-content-evenly.img-position2
      .col-5.col-lg-3.mb-4.mb-lg-0
        a(href="#1B")
          figure.efect1
            img(src="@/assets/curso/img35.svg", style="width:400px").m-auto
      .col-5.col-lg-3.mb-4.mb-lg-0
        a(href="#2B")
          figure.efect1
            img(src="@/assets/curso/img36.svg", style="width:400px").m-auto
      .col-5.col-lg-3
        a(href="#3B")
          figure.efect1
            img(src="@/assets/curso/img37.svg", style="width:400px").m-auto
    #1B
    br
    br
    .row.py-5.align-items-center.justify-content-between
      .col-4
        h3.text-white.mb-0.text-deco2 #[b Solución de la simulación]
      .col-2
        a(href="#menu2")
          figure.efect1
            img(src="@/assets/curso/img8.svg", style="width:50px").m-auto
    .row
      .col-12
        p.mb-5 Crea una solución que define el tipo de análisis, el tipo de solución y las cargas específicas de la solución. Para ello, es necesario definir #[b el tiempo final de la solución], el valor y las unidades de la gravedad.
        .row.justify-content-center.mb-5
          .col-lg-6(data-aos="slide-right")
            .titulo-sexto.color-acento-contenido
              p.mb-0 #[span.text-deco1 Figura 27.] #[b Solución de la simulación]
            figure
              img(src='@/assets/curso/img35.png', style="width: 850px").m-auto
              figcaption Nota. Adaptada del sistema CAD NX 12.
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/4vdVyTCuFUs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        hr
    #2B
    br
    br
    .row.py-5.align-items-center.justify-content-between
      .col-4
        h3.text-white.mb-0.text-deco2 #[b Resolver la solución de la simulación]
      .col-2
        a(href="#menu2")
          figure.efect1
            img(src="@/assets/curso/img8.svg", style="width:50px").m-auto
    .row
      .col-12
        p.mb-5 A través de este comando, el sistema realiza los cálculos de la simulación, generando un conjunto de resultados de la solución del movimiento. En el cuadro de diálogo, el sistema realiza un diagnóstico detallado de los parámetros de la simulación; en caso de alguna inconsistencia, basta con leer el informe, para realizar los ajustes que sean necesarios.
        .row.justify-content-center.mb-5
          .col-lg-8(data-aos="slide-left")
            .titulo-sexto.color-acento-contenido
              p.mb-0 #[span.text-deco1 Figura 28.] #[b Solución de la simulación]
            figure
              img(src='@/assets/curso/img36.png', style="width: 850px").m-auto
              figcaption Nota. Adaptada del sistema CAD NX 12.
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/d-onKVpV5gY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        hr
    #3B
    br
    br
    .row.py-5.align-items-center.justify-content-between
      .col-4
        h3.text-white.mb-0.text-deco2 #[b Reproductor de animaciones]
      .col-2
        a(href="#menu2")
          figure.efect1
            img(src="@/assets/curso/img8.svg", style="width:50px").m-auto
    .row
      .col-12
        p.mb-5 A través de este comando, es posible reproducir una simulación, además, exportar la simulación en un formato avi. Adicionalmente, se puede aumentar o disminuir la velocidad de reproducción.
        .row.justify-content-center.mb-5
          .col-lg-8(data-aos="slide-right")
            .titulo-sexto.color-acento-contenido
              p.mb-0 #[span.text-deco1 Figura 29.] #[b Reproductor de animaciones]
            figure
              img(src='@/assets/curso/img37.png', style="width: 850px").m-auto
              figcaption Nota. Adaptada del sistema CAD NX 12.
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/EyfvfgHBfYI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        hr
    .row.bg-color8.align-items-center.justify-content-center(data-aos="fade-down")
      .col-6.col-lg-3.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/img2.svg', style="width: 400px").m-auto
      .col-lg-9
        p.mb-0 Al concluir este componente formativo, el aprendiz estará en capacidad de realizar simulaciones de mecanismos en 2D y 3D, estudiar el movimiento, detectar colisiones en cuerpos rígidos y analizar los resultados de la simulación, lo que le permitirá optimizar y validar las variables de diseño en sistemas mecánicos. A su vez, en el módulo de Motion de NX, podrá generar secuencias de movimiento y videos en diferentes formatos de reproducción.

</template>

<script>
export default {
  name: 'Tema2',
  components: {},
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
