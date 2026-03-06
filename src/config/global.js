export default {
  global: {
    Name: 'Tecnologías para el desarrollo de aplicaciones <em>web</em>',
    Description:
      'Este componente formativo pretende mostrar el desarrollo <em>web</em> utilizando lenguajes como HTML5, CSS y JSS; explicando, además, sus funciones, componentes y semántica, junto a las bondades que brinda trabajar desarrollos independientes de la parte del servidor y para el usuario, llamado <i>frontend</i>. Mostrará, también, cómo mezclando estos lenguajes se pueden crear grandes y complejos desarrollos <i>web</i>.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.png'),
      },
    ],
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
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Conceptos básicos',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Estructura de una página <em>web</em>',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Estructura del cuerpo de una página <em>web</em>',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Nuevos elementos HTML5',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Referencias y etiquetas',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'CSS',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Referencias de estilos y propiedades de CSS3',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Selectores',
            hash: 't_3_2',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'JavaScript',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'API',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Librerías',
            hash: 't_4_2',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Pruebas y depuración de código',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
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
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/CFA_CF02_DU.pdf',
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
  complementario: [
    {
      tema: '',
      referencia: '',
      tipo: 'Sitio <em>web</em>',
      link: '',
    },
  ],
  glosario: [
    {
      termino: 'API',
      significado:
        'conjunto de definiciones y protocolos que se utilizan para desarrollar e integrar el <em>software</em> de las aplicaciones. API significa interfaz de programación de aplicaciones. Las API permiten que sus productos y servicios se comuniquen con otros, sin necesidad de saber cómo están implementados.',
    },
    {
      termino: 'Aplicación',
      significado:
        'programa informático diseñado como una herramienta para realizar operaciones o funciones específicas. Generalmente, son diseñadas para facilitar ciertas tareas complejas y hacer más sencilla la experiencia informática de las personas.',
    },
    {
      termino: 'Base de datos',
      significado:
        'recopilación organizada de información o datos estructurados, que normalmente se almacena de forma electrónica en un sistema informático.',
    },
    {
      termino: '<em>Browser</em>',
      significado:
        'término inglés que se utiliza para identificar a un navegador <em>web</em> o navegador de Internet. Consiste en un <em>software</em>, programa o incluso aplicación, que ofrece al usuario el acceso a la red.',
    },
    {
      termino: 'Depurar',
      significado:
        'quitar de una cosa lo malo, lo que es extraño o lo que no sirve para dejarla pura.',
    },
    {
      termino: 'Geolocalización',
      significado:
        'identificación de la ubicación geográfica a partir de un dispositivo conectado a internet. Existen muchas tecnologías aptas para determinar la geolocalización de una persona.',
    },
    {
      termino: 'Ícono',
      significado:
        'signo que representa un objeto o una idea con los que guarda una relación de identidad o semejanza formal.',
    },
    {
      termino: 'Interfaz',
      significado:
        'se designa, en informática, la conexión física y funcional que se establece entre dos aparatos, dispositivos o sistemas que funcionan independientemente uno del otro. En este sentido, la comunicación entre un ser humano y una computadora se realiza por medio de una interfaz.',
    },
    {
      termino: 'Servidor',
      significado:
        'conjunto de computadoras capaz de atender las peticiones de un cliente y devolverle una respuesta en concordancia.',
    },
    {
      termino: 'Sintáctico',
      significado:
        'análisis de las funciones sintácticas o relaciones de concordancia y jerarquía que guardan las palabras cuando se agrupan entre sí en forma de sintagmas.',
    },
    {
      termino: 'Sintaxis',
      significado:
        'parte de la gramática que estudia el modo en que se combinan las palabras y los grupos que estas forman para expresar significados, así como las relaciones que se establecen entre todas esas unidades.',
    },
    {
      termino: 'Sitio <em>web</em>',
      significado:
        'conjunto de páginas <em>web</em> accesibles a través de internet, convenientemente enlazadas y con una finalidad concreta.',
    },
    {
      termino: '<em>Web</em>',
      significado:
        'conjunto de información que se encuentra en una dirección determinada de internet.',
    },
  ],
  referencias: [
    {
      referencia:
        '100 <em>Web</em> Hosting. (s.f.). Referencia Etiquetas HTML5. [Web log post]. Cafetero 100.',
      link: 'https://www.cafetero100.com/manual-html5/',
    },
    {
      referencia:
        'Crea tu <em>web</em> creando internet. (s.f.). Estilos CSS: referencia. [Web log post]. Espaciolatino.',
      link: 'https://creatuweb.espaciolatino.com/tutorhtml/tema17.html',
    },
    {
      referencia:
        'Martínez, M. (2020). 12 librerías JavaScript que deberías conocer. [Web log post]. Profile.',
      link: 'https://profile.es/blog/librerias-javascript/',
    },
    {
      referencia:
        'Mdn <em>web</em> docs. (2021). File. [Web log post]. MDN Web Docs.',
      link: 'https://developer.mozilla.org/es/docs/Web/API/File',
    },
    {
      referencia:
        'Mdn <em>web</em> docs. (2021). WebSockets. [Web log post]. MDN Web Docs.',
      link: 'https://developer.mozilla.org/es/docs/Web/API/WebSockets_API',
    },
    {
      referencia:
        'Mdn <em>web</em> docs. (2021). Almacenamiento. [Web log post]. MDN Web Docs.',
      link: 'https://developer.mozilla.org/es/docs/Web/API/Storage',
    },
    {
      referencia:
        'Nieto, I. (2003). Eventos en JavaScript. [Web log post]. Laplace.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Responsable Ecosistema de Recursos Educativos Digitales (RED)',
          centro: 'Dirección General',
        },
        {
          nombre: 'Diana Rocío Possos Beltrán',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Solanlly Sánchez Melo',
          cargo: 'Experta temática',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Andrés Felipe Velandia Espitia',
          cargo: 'Evaluador instruccional',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Oscar Ivan Uribe Ortiz',
          cargo: 'Diseñador de contenidos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Juan Daniel Polanco Muñoz',
          cargo: 'Diseñador de contenidos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Veimar Celis Meléndez',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
          cargo: 'Desarrollador <em>full stack</em>',
        },
        {
          nombre: 'Francisco José Vásquez Suárez',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
          cargo: 'Desarrollador <em>full stack</em>',
        },
        {
          nombre: 'Manuel Felipe Echavarria Orozco',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
          cargo: 'Desarrollador <em>full stack</em>',
        },
        {
          nombre: 'Ernesto Navarro Jaimes',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Gilberto Junior Rodríguez Rodríguez',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'María Fernanda Pineda Mora',
          cargo: 'Evaluadora de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Javier Mauricio Oviedo',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Jorge Bustos Gómez',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
