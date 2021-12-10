export default {
  global: {
    componenteFormativo:
      'Simulación de gemelos digitales de mecanismos en 2D y 3D',
    descripcionCurso:
      'Para validar el diseño de gemelos digitales a través de la simulación mediante la aplicación del sistema CAD NX y asociar un gemelo digital como representación virtual del producto o el proceso, desde la simulación, se pueden detectar a tiempo los factores que intervienen en su funcionamiento, para simular y evaluar el movimiento de sistemas mecánicos.',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.svg'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Simulación en 2D',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Interfaz del entorno de simulación',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Panel de herramientas',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Comandos para la definición de mecanismos',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Conectores',
            hash: 't_1_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.5',
            titulo: 'Restricciones de movimiento',
            hash: 't_1_5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.6',
            titulo: 'Análisis del movimiento',
            hash: 't_1_6',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Simulación en 3D',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Acopladores',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Contactos',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Análisis del movimiento',
            hash: 't_2_3',
          },
        ],
      },
    ],
    subMenu: [
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Aguilar, L. (2017). Industria 4.0 "La Cuarta Revolución Industrial". Alfaomega.',
    },
    {
      referencia:
        'CAD/CAE/CAM Tutorial. (Diciembre 2 de 2017). NX Motion Tutorial: Kinematic Motion Simulation [Video]. YouTube. ',
      link: 'https://youtu.be/dmOpFi3MHao',
    },
    {
      referencia:
        'CAD CAM CAE TUTORIALS. (Septiembre 10 de 2019). NX MOTION TUTORIAL #1 || Design and simulation of four bar mechanism in NX. (without narration) [Video]. YouTube. ',
      link: 'https://youtu.be/2OIJJ2VNMJs',
    },
    {
      referencia:
        'ESTEQ Tutorials. (Octubre 23 de 2017). NX Motion Lecture 3 - Example Model 1 - Joints and Motion [Video]. YouTube. ',
      link: 'https://youtu.be/W53bELcNmjQ',
    },
    {
      referencia:
        'Inge Lui. (Mayo 11 de 2020). Unidad 2 ensambles utilizando NX [Video]. YouTube. ',
      link: 'https://youtu.be/J5h38RBj_hI',
    },
    {
      referencia:
        'Mundo tutorial / Tutorial world. (Octubre 10 de 2017). Siemens NX. Pieza 3D. Tutorial [Video]. YouTube. ',
      link: 'https://youtu.be/UeJ1Yegal9E',
    },
    {
      referencia:
        'NX Skill Share. (Junio 28 de 2014). NX9 Realize shape - vacuum [Video]. YouTube. ',
      link: 'https://youtu.be/INQXEa7Nj-A',
    },
    {
      referencia:
        'Siemens. (s. f.). Modelado de formas de formato libre. Explore alternativas de diseño sin limitaciones. ',
      link:
        'https://www.plm.automation.siemens.com/global/es/products/mechanical-design/freeform-shape-modeling.html',
    },
    {
      referencia: 'Siemens. (2017). Cara en puente. ',
      link:
        'https://docs.plm.automation.siemens.com/tdoc/nx/12/nx_help#uid:xid1128417:index_xid851385:xid1123951:xid610642',
    },
    {
      referencia:
        'Siemens. (2020). Documentación didáctica / para cursos de formación. ',
      link:
        'https://www.automation.siemens.com/sce-static/learning-training-documents/tia-portal/digital-twin/sce-150-004-mcd-tia-com-digital-twin-at-education-static-model-nx-hs-darmstadt-1219-es.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Accionador',
      significado:
        'Este comando permite definir la entrada del movimiento del mecanismo seleccionando una junta desde el navegador de movimiento.',
    },
    {
      termino: 'Acoplador de engranajes',
      significado:
        'Permite crear una relación de transmisión entre un par de engranajes, seleccionando las juntas de revolución y definiendo el radio, diámetro o el número de dientes de cada engranaje.',
    },
    {
      termino: 'Acoplador Cremallera piñón',
      significado:
        'Crea una relación de transmisión entre una cremallera y un piñón, definiendo el movimiento relativo entre una articulación deslizante y una articulación giratoria.',
    },
    {
      termino: 'Amortiguador',
      significado:
        'Este comando es empleado para disipar una oscilación, disminuyendo la amplitud en cada periodo de tiempo.',
    },
    {
      termino: 'Conectores',
      significado:
        'Grupo de comandos que permiten acoplar elementos mecánicos al mecanismo, como resortes, amortiguadores, en forma independiente, o el sistema integrado de resorte-amortiguador.',
    },
    {
      termino: 'Contacto de 3D',
      significado:
        'Define el contacto entre un cuerpo rígido y un objeto estacionario, entre dos cuerpos en movimiento, o para sostener un cuerpo con respecto a otro.',
    },
    {
      termino: 'Cuerpo en movimiento',
      significado:
        'Este comando permite la definición de cada uno de los componentes que harán parte de la simulación del sistema mecánico, estos elementos pueden tener o no movimiento.',
    },
    {
      termino: 'Gestor de funciones',
      significado:
        'Comando empleado para asignar una función matemática como entrada del movimiento de un mecanismo. Esta asignación se podría definir desde una junta o desde un accionador.',
    },
    {
      termino: 'Juntas',
      significado:
        'Este comando permite crear diferentes tipos de juntas que restringen el movimiento de cada componente, definiendo los grados de libertad del mecanismo. Estas juntas pueden ser de revolución, deslizantes, cilíndricas o esféricas.',
    },
    {
      termino: 'Resolver la solución de la simulación',
      significado:
        'Esta función realiza los cálculos de la simulación, generando un conjunto de resultados de la solución del movimiento. En el cuadro de diálogo, el sistema realiza un diagnóstico detallado de los parámetros de la simulación; en caso de alguna inconsistencia, basta con leer el informe, para realizar los ajustes que sean necesarios.',
    },
    {
      termino: 'Resorte',
      significado:
        'Esta función se emplea para realizar el análisis de vibraciones mecánicas. Se acopla entre un cuerpo en movimiento y un elemento base.',
    },
    {
      termino: 'Solución de la simulación',
      significado:
        'Crea una solución que define el tipo de análisis, el tipo de solución y las cargas específicas de la solución. Para ello, es necesario definir el <em>tiempo final</em> de la <em>solución</em>, el valor y las unidades de la gravedad.',
    },
  ],
  complementario: [
    {
      texto:
        '<b>1. Simulación en 2D</b><br><br>CAD/CAE/CAM Tutorial. (Diciembre 2 de 2017). <em>NX Motion Tutorial: Kinematic Motion Simulation</em> [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://youtu.be/dmOpFi3MHao',
    },
    {
      texto:
        '<b>1. Simulación en 2D</b><br><br>CAD/CAE/CAM Tutorial. (Febrero 28 de 2017). <em>NX Motion Simulation Tutorial: Example 2D Contact Simulation</em> [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://youtu.be/bIJGT3SSnbU',
    },
    {
      texto:
        '<b>2. Simulación en 3D</b><br><br>CAD CAM CAE TUTORIALS. (Septiembre 10 de 2019). <em>NX MOTION TUTORIAL #1 || Design and simulation of four bar mechanism in NX. (without narration)</em> [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://youtu.be/2OIJJ2VNMJs',
    },
    {
      texto:
        '<b>2. Simulación en 3D</b><br><br>ESTEQ Tutorials. (Octubre 23 de 2017). <em>NX Motion Lecture 3 - Example Model 1 - Joints and Motion</em> [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://youtu.be/W53bELcNmjQ',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro industrial del diseño y la manufactura - Regional Santander',
      },
      {
        nombre: 'Oscar Riveros',
        cargo: 'Experto Temático',
        centro: 'Centro Diseño y Metrología',
      },
      {
        nombre: 'Leydy Jhuliana Jaramillo Mejía',
        cargo: 'Diseñador Instruccional',
        centro: 'Centro de Gestión Industrial',
      },
      {
        nombre: 'Darío González',
        cargo: 'Corrección de estilo',
        centro: 'Centro agropecuario la granja - Regional Tolima',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro industrial del diseño y la manufactura - Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de comercio y servicios - Regional Tolima',
      },
      {
        nombre: 'Antonio Vecino Valero',
        cargo: 'Diseño web',
        centro:
          'Centro industrial del diseño y la manufactura - Regional Santander',
      },
      {
        nombre: 'Zuleidy Maria Ruiz Torres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro industrial del diseño y la manufactura - Regional Santander',
      },
      {
        nombre: 'Wilson Andrés Arenales Caceres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro industrial del diseño y la manufactura - Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodriguez Rodriguez',
        cargo: 'Producción audiovisual',
        centro:
          'Centro industrial del diseño y la manufactura - Regional Santander',
      },
      {
        nombre: 'Camilo Andrés Bolaño Rey',
        cargo: 'Producción audiovisual',
        centro:
          'Centro industrial del diseño y la manufactura - Regional Santander',
      },
      {
        nombre: 'Daniela Muñoz Bedoya',
        cargo: 'Producción audiovisual',
        centro:
          'Centro industrial del diseño y la manufactura - Regional Santander',
      },
      {
        nombre: 'Andrés Felipe Herrera Roldan',
        cargo: 'Producción audiovisual',
        centro:
          'Centro industrial del diseño y la manufactura - Regional Santander',
      },
      {
        nombre: 'Jhon Jairo Urueta Alvarez',
        cargo: 'Desarrollo Front-End',
        centro:
          'Centro industrial del diseño y la manufactura - Regional Santander',
      },
      {
        nombre: 'Andrés Mauricio Santaella Ochoa',
        cargo: 'Soporte front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Maria camila ovalle ospina',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro industrial del diseño y la manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de comercio y servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
