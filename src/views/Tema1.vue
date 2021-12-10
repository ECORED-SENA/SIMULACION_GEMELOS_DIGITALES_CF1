<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Simulación en 2D
    .row.align-items-center.mb-4
      .col-lg-9.mb-4.mb-lg-0
        p En la simulación en 2D, se presentan herramientas en movimiento, como la herramienta CAE asociativa e integrada, que proporciona capacidades integrales de análisis y modelado de mecanismos en 2D y 3D.
        .bloque-texto-a.color-secundario.p-4.p-md-3.mb-5(data-aos="slide-right")
          .row.m-0.align-items-center.justify-content-between
            .col-lg-4.mb-4.mb-lg-0
              img(src='@/assets/curso/img2.svg', style="width: 300px").m-auto
            .col-lg-8
              .bloque-texto-a__texto.p-4
                p A través de Motion, se pueden simular y evaluar sistemas mecánicos, mediante el análisis de las variables cinemáticas, tales como: desplazamiento, velocidad y aceleración, rango de movimiento, fuerzas de reacción, fuerzas de inercia, momentos de torsión y momentos transmitidos entre cuerpos; y a su vez, permite la captura de cargas para modelado de elementos finitos. (Siemens, 2017)
      .col-lg-3
        figure(data-aos="slide-left")
          img(src='@/assets/curso/img2.png', style="width: 450px").m-auto
    p.mb-5 Observe la siguiente figura que representa el Mecanismo en 2D.
    .row.justify-content-center.mb-5
      .col-lg-8(data-aos="slide-left")
        .titulo-sexto.color-acento-contenido
          p.mb-0 #[span.text-deco1 Figura 1.] #[b Mecanismo 2D]
        figure
          img(src='@/assets/curso/img3.png', style="width: 850px").m-auto
          figcaption Nota. Adaptada del sistema CAD NX 12.
    .row.bg-color2
      .col-12.px-5
        .cajon.color-primario.p-4.mb-5
          p.mb-0 Para que las figuras y diferentes productos puedan cumplir con estas características, se requiere de los siguientes elementos, los cuales serán compartidos a través de imágenes o videos cortos que permitan, además de ello, reconocer su uso y aplicación.
        #t_1_1
        .titulo-segundo.color-secundario
          h2 1.1 Interfaz de entorno de simulación
        p.mb-5 Esta se reconoce a partir del #[b NX (Motion)], el cual proporciona un navegador de movimiento, que permite ver y manipular, de manera gráfica, los archivos y objetos en movimiento dentro de una estructura de árbol. En él, se pueden agrupar, en cuerpos de movimiento, juntas, articulaciones, impulsores y los resultados de la simulación. (Siemens, 2017). Ver Figura 2:
        .row.justify-content-center
          .col-lg-8(data-aos="slide-left")
            .titulo-sexto.color-acento-contenido
              p.mb-0 #[span.text-deco1 Figura 2.] #[b Aplicación de movimiento (Motion)]
            figure
              img(src='@/assets/curso/img4.png', style="width: 850px").m-auto
              figcaption Nota. Adaptada del sistema CAD NX 12.
        separador.mb-5
        #t_1_2
        .titulo-segundo.color-secundario
          h2 1.2 Panel de herramientas
        p.mb-5 El panel de herramientas está organizado por grupos de comandos; de izquierda a derecha, se observa solución, mecanismo, acopladores, conectores, contacto y restricciones; con los cuales se pueden crear y analizar mecanismos en 2D y 3D. Ver Figura 3:
        .row.justify-content-center
          .col-lg-8(data-aos="slide-left")
            .titulo-sexto.color-acento-contenido
              p.mb-0 #[span.text-deco1 Figura 3.] #[b Panel de herramientas Motion]
            figure
              img(src='@/assets/curso/img5.png', style="width: 850px").m-auto
              figcaption Nota. Adaptada del sistema CAD NX 12.
        separador.mb-5
        #t_1_3
        .titulo-segundo.color-secundario
          h2 1.3 Comandos para la definición de mecanismos
        p.mb-5 NX Motion dispone de una serie de comandos que permiten simular un mecanismo a partir de la definición de cuerpos en movimiento, juntas, accionadores de movimiento y un gestor de funciones, el cual permite administrar funciones matemáticas y gráficas XY para controlar el movimiento del sistema. Ver Figura 4:
        .row.justify-content-center.mb-5
          .col-lg-6(data-aos="slide-left")
            .titulo-sexto.color-acento-contenido
              p.mb-0 #[span.text-deco1 Figura 4.] #[b Comandos para la definición de un mecanismo 2D]
            figure
              img(src='@/assets/curso/img6.png', style="width: 850px").m-auto
              figcaption Nota. Adaptada del sistema CAD NX 12.
    .row.bg-color3
      .col-12.px-5
        p.mt-4#menu1 Los comandos que se han mencionado anteriormente serán explicados en los siguientes videos, donde, de manera sencilla, se reconoce su uso e implementación. Para ello, lea la breve descripción que se comparte desde cada numeral; luego, observe la imagen que lo representa; y finalmente, visualice el video que lo explica.
        .row.justify-content-evenly.img-position2
          .col-5.col-lg-3.mb-4.mb-lg-0
            a(href="#1A")
              figure.efect1
                img(src="@/assets/curso/img4.svg", style="width:200px").m-auto
          .col-5.col-lg-3.mb-4.mb-lg-0
            a(href="#2A")
              figure.efect1
                img(src="@/assets/curso/img5.svg", style="width:200px").m-auto
          .col-5.col-lg-3
            a(href="#3A")
              figure.efect1
                img(src="@/assets/curso/img6.svg", style="width:200px").m-auto
          .col-5.col-lg-3
            a(href="#4A")
              figure.efect1
                img(src="@/assets/curso/img7.svg", style="width:200px").m-auto
    #1A
    br
    br
    .row.py-5.align-items-center.justify-content-between
      .col-4
        h3.text-white.mb-0.text-deco2 #[b Cuerpo en movimiento]
      .col-2
        a(href="#menu1")
          figure.efect1
            img(src="@/assets/curso/img8.svg", style="width:50px").m-auto
    .row
      .col-12
        p.mb-5 Esta herramienta se encuentra en la pestaña de inicio, en el grupo de mecanismos, y permite la definición de cada uno de los componentes que harán parte de la simulación del sistema mecánico; estos elementos pueden tener o no movimiento.
        .row.justify-content-center.mb-5
          .col-lg-8(data-aos="slide-right")
            .titulo-sexto.color-acento-contenido
              p.mb-0 #[span.text-deco1 Figura 5.] #[b Asignar los cuerpos en movimiento]
            figure
              img(src='@/assets/curso/img7.png', style="width: 850px").m-auto
              figcaption Nota. Adaptada del sistema CAD NX 12.
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/EFxvi6LI8z8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        hr
    #2A
    br
    br
    .row.py-5.align-items-center.justify-content-between
      .col-4
        h3.text-white.mb-0.text-deco2 #[b Juntas]
      .col-2
        a(href="#menu1")
          figure.efect1
            img(src="@/assets/curso/img8.svg", style="width:50px").m-auto
    .row
      .col-12
        p.mb-5 Este comando permite crear diferentes tipos de juntas que restringen el movimiento de cada componente, definiendo los grados de libertad del mecanismo; estas juntas pueden ser de revolución, deslizantes, cilíndricas, esféricas, entre otras.
        .row.justify-content-center.mb-5
          .col-lg-8(data-aos="slide-right")
            .titulo-sexto.color-acento-contenido
              p.mb-0 #[span.text-deco1 Figura 6.] #[b Definición de juntas]
            figure
              img(src='@/assets/curso/img8.png', style="width: 850px").m-auto
              figcaption Nota. Adaptada del sistema CAD NX 12.
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/rDijXuc75bc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        hr
    #3A
    br
    br
    .row.py-5.align-items-center.justify-content-between
      .col-4
        h3.text-white.mb-0.text-deco2 #[b Accionador]
      .col-2
        a(href="#menu1")
          figure.efect1
            img(src="@/assets/curso/img8.svg", style="width:50px").m-auto
    .row
      .col-12
        p.mb-5 Este comando permite definir la entrada del movimiento del mecanismo, seleccionando una junta desde el navegador de movimiento.
        .row.justify-content-center.mb-5
          .col-lg-8(data-aos="slide-right")
            .titulo-sexto.color-acento-contenido
              p.mb-0 #[span.text-deco1 Figura 7.] #[b Accionador de movimiento]
            figure
              img(src='@/assets/curso/img9.png', style="width: 850px").m-auto
              figcaption Nota. Adaptada del sistema CAD NX 12.
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/IA2ELFGc7TQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        hr
    #4A
    br
    br
    .row.py-5.align-items-center.justify-content-between
      .col-4
        h3.text-white.mb-0.text-deco2 #[b Gestor de funciones]
      .col-2
        a(href="#menu1")
          figure.efect1
            img(src="@/assets/curso/img8.svg", style="width:50px").m-auto
    .row
      .col-12
        p.mb-5 A través de este comando, se puede asignar una función matemática como entrada del movimiento de un mecanismo. Esta asignación se podría definir desde una junta o desde un accionador.
        .row.justify-content-center.mb-5
          .col-lg-8(data-aos="slide-right")
            .titulo-sexto.color-acento-contenido
              p.mb-0 #[span.text-deco1 Figura 8.] #[b Gestor de funciones]
            figure
              img(src='@/assets/curso/img10.png', style="width: 850px").m-auto
              figcaption Nota. Adaptada del sistema CAD NX 12.
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/srGFQfcdB1A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    .row.bg-color2
      .col-12.px-5
        separador.mb-5
        #t_1_4
        .titulo-segundo.color-secundario
          h2 1.4 Conectores
        .bloque-texto-a.color-primario.p-4.p-md-3.mb-5(data-aos="slide-down")
          .row.m-0.align-items-center.justify-content-between
            .col-lg-4.mb-4.mb-lg-0
              .titulo-sexto.color-acento-contenido
                p.mb-0 #[span.text-deco1 Figura 9.] #[b Conectores]
              figure
                img(src='@/assets/curso/img11.png', style="width: 850px").m-auto
                figcaption Nota. Adaptada del sistema CAD NX 12.
            .col-lg-8
              .bloque-texto-a__texto.p-4
                p Este grupo de comandos permite acoplar elementos mecánicos al mecanismo, como resortes o amortiguadores, en forma independiente, o el sistema integrado de resorte-amortiguador.
        SlyderA
          .row.justify-content-center
            .col-11
              figure
                img(src='@/assets/curso/img12.png', style="width: 1200px").m-auto
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
                      a.boton.color-primario.me-3(href="https://www.youtube.com/watch?v=VIeV522NaQQ" target="_blank" type="application/pdf")
                        span Ver video
                        i.fas.fa-file-download
          .row.justify-content-center
            .col-11
              figure
                img(src='@/assets/curso/img13.png', style="width: 1200px").m-auto
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
                      a.boton.color-primario.me-3(href="https://www.youtube.com/watch?v=uTSy0hYcALQ" target="_blank" type="application/pdf")
                        span Ver video
                        i.fas.fa-file-download
        separador.mb-5
        #t_1_5
        .titulo-segundo.color-secundario
          h2 1.5 Restricciones de movimiento
        p.mb-5 En este grupo de comandos, se encuentran comandos que permiten generar diferentes tipos de contacto entre cuerpos en movimiento, tales como punto sobre curva, curva sobre curva, punto sobre superficie y contacto entre dos elementos 2D en un plano.
        .row.justify-content-center
          .col-10.col-lg-5.mb-5(data-aos="slide-right")
            .titulo-sexto.color-acento-contenido
              p.mb-0 #[span.text-deco1 Figura 12.] #[b Comandos de contacto entre elementos]
            figure
              img(src='@/assets/curso/img15.png', style="width: 450px").m-auto
              figcaption Nota. Adaptada del sistema CAD NX 12.
          .col-12
            LineaTiempoD.color-primario
              .row(numero="1" titulo="Curva sobre curva")
                .col-12
                  p.mb-5 Una restricción de curva sobre curva restringe una curva para que permanezca en contacto con una segunda curva. Al menos una de las dos curvas debe pertenecer a un cuerpo en movimiento. Esta restricción permite cuatro grados de libertad entre los dos cuerpos de movimiento. El origen de la unión se coloca en la intersección proyectada de Curve1 y Curve2. El punto de contacto entre los dos cuerpos de movimiento cambia durante el movimiento del mecanismo. (Siemens, s. f.)
                  .row.justify-content-center
                    .col-10.col-lg-5.mb-5
                      .titulo-sexto.color-acento-contenido
                        p.mb-0 #[span.text-deco1 Figura 13.] #[b Curva sobre curva]
                      figure
                        img(src='@/assets/curso/img16.png', style="width: 450px").m-auto
                        figcaption Nota. Adaptada del sistema CAD NX 12.
                  .row.justify-content-center
                    .col-10.col-lg-5.mb-5
                      .titulo-sexto.color-acento-contenido
                        p.mb-0 #[span.text-deco1 Figura 14.] #[b Comando curva sobre curva]
                      figure
                        img(src='@/assets/curso/img17.png', style="width: 450px").m-auto
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
                          a.boton.color-primario.me-3(href="https://www.youtube.com/watch?v=HzGUW8LO7Og" target="_blank" type="application/pdf")
                            span Ver video
                            i.fas.fa-file-download
              .row(numero="2" titulo="Punto sobre curva")
                .col-12
                  p Una restricción de punto sobre curva elimina dos grados de libertad de traslación. El punto puede rodar y deslizarse sobre la curva, pero la restricción evita que el movimiento o el cuerpo flexible que contiene el punto se levante del cuerpo de movimiento que contiene la curva.
                  p.mb-5 La curva debe ser una curva continua, aunque puede crearla seleccionando varias curvas. Todas las curvas deben pertenecer al mismo cuerpo de movimiento. La curva resultante no puede estar en el mismo cuerpo de movimiento que el punto.
                  .row.justify-content-center
                    .col-10.col-lg-5.mb-5
                      .titulo-sexto.color-acento-contenido
                        p.mb-0 #[span.text-deco1 Figura 15.] #[b Punto curva sobre curva]
                      figure
                        img(src='@/assets/curso/img18.png', style="width: 450px").m-auto
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
                          a.boton.color-primario.me-3(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank" type="application/pdf")
                            span Ver video
                            i.fas.fa-file-download
        separador.mb-5
        #t_1_6
        .titulo-segundo.color-secundario
          h2 1.6 Análisis del movimiento
        .row.mb-5.align-items-center.justify-content-center
          .col-lg-6.mb-4.mb-lg-0
            p.mb-4 En la pestaña #[b Análisis] del espacio #[b Movimiento], se encuentran los comandos que permiten reproducir y visualizar los resultados de una simulación, posteriormente a la creación de una solución.
            .row.justify-content-center
              .col-10(data-aos="slide-right")
                .titulo-sexto.color-acento-contenido
                  p.mb-0 #[span.text-deco1 Figura 16.] #[b Análisis de movimiento]
                figure
                  img(src='@/assets/curso/img19.png', style="width: 550px").m-auto
                  figcaption Nota. Adaptada del sistema CAD NX 12.
          .col-lg-6
            figure(data-aos="slide-left")
              img(src='@/assets/curso/img20.png', style="width: 500px").m-auto
        TabsC.color-primario
          .py-3.py-md-4(titulo="Solución de la simulación")
            .row.align-items-center
              .col-lg-6.mb-4.mb-lg-0
                .titulo-sexto.color-acento-contenido
                  p.mb-0 #[span.text-deco1 Figura 17.] #[b Solución de la simulación]
                figure
                  img(src='@/assets/curso/img21.png', style="width: 650px").m-auto
                  figcaption Nota. Adaptada del sistema CAD NX 12.
              .col-lg-6
                h3 Solución de la simulación
                p.mb-4 Crea una solución que define el tipo de análisis, el tipo de solución y las cargas específicas de la solución. Para ello, es necesario definir el #[b tiempo final de la solución].
                .row.align-items-center.justify-content-center.mb-5
                  .col-2.d-none.d-xxl-block
                    figure.img-position4
                      img(src='@/assets/curso/img14.png')
                  .col-9.bg-color4.p-4
                    .row.align-items-center.justify-content-end
                      .col-12.col-lg-7.mb-4.mb-lg-0
                        h3.text-deco3 Video tutorial
                        p.mb-0 Estimado aprendiz, para profundizar sobre el tema puede consultar el siguiente video.
                      .col-lg-3
                        a.boton.color-primario.me-3(href="https://www.youtube.com/watch?v=ZsvD0k_b7b8" target="_blank" type="application/pdf")
                          span Ver video
          .py-3.py-md-4(titulo="Resolver la solución de la simulación")
            .row.align-items-center
              .col-lg-6.mb-4.mb-lg-0
                .titulo-sexto.color-acento-contenido
                  p.mb-0 #[span.text-deco1 Figura 18.] #[b Resolver la solución]
                figure
                  img(src='@/assets/curso/img22.png', style="width: 650px").m-auto
                  figcaption Nota. Adaptada del sistema CAD NX 12.
              .col-lg-6
                h3 Resolver la solución de la simulación
                p.mb-4 A través de este comando, el sistema realiza los cálculos de la simulación, generando un conjunto de resultados de la solución del movimiento. En el cuadro de diálogo, el sistema realiza un diagnóstico detallado de los parámetros de la simulación; en caso de alguna inconsistencia, basta con leer el informe, para realizar los ajustes que sean necesarios.
                .row.align-items-center.justify-content-center.mb-5
                  .col-2.d-none.d-xxl-block
                    figure.img-position4
                      img(src='@/assets/curso/img14.png')
                  .col-9.bg-color4.p-4
                    .row.align-items-center.justify-content-end
                      .col-12.col-lg-7.mb-4.mb-lg-0
                        h3.text-deco3 Video tutorial
                        p.mb-0 Estimado aprendiz, para profundizar sobre el tema puede consultar el siguiente video.
                      .col-lg-3
                        a.boton.color-primario.me-3(href="https://www.youtube.com/watch?v=V2FkLb3fYmY" target="_blank" type="application/pdf")
                          span Ver video
  
</template>

<script>
export default {
  name: 'Tema1',
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
