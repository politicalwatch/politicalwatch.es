---
title: Inicio
subtitle: "Political Watch es una plataforma de innovación política que promueve la monitorización, vigilancia y participación ciudadana a través de desarrollos basados en tecnologías cívicas para la promoción del desarrollo sostenible"

featuredItems:
  - title: "Qué Hacen Los Diputados"
    subtitle: "Lorem ipsum is a dummy or placeholder text commonly used"
    description: "Nuestra herramienta estrella de vigilancia política. Simplifica y ordena el trabajo del Congreso. Muy útil para periodistas, investigadores y ONG que buscan conseguir cambios legislativos. Incluye el seguimiento de 42 temáticas sociales y un índice de actividad parlamentaria."
    button: "Consulta la actividad"
    link: "https://qhld.es"
    image: /images/featured-qhld.png
  - title: "Ampliando Democracia"
    subtitle: "Lorem ipsum is a dummy or placeholder text commonly used"
    description: "Impulsamos esta gran coalición que hace propuestas concretas para mejorar el funcionamiento de las instituciones y abrirlas a la ciudadanía. Las agrupamos en 7 áreas para cambiar las cosas."
    button: "Quiero saber más"
    link: "https://ampliandodemocracia.org"
    image: /images/featured-ad.png

alliances:
  - image: '/images/alliances/logooecd_en.png'
    link: 'http://www.oecd.org/pcd/thepcsdpartnership.htm'
    title: 'The PCSD Partnership - OCDE'
  - image: '/images/alliances/gpsdd.png'
    link: 'http://www.data4sdgs.org/'
    title: 'Global Partnership for Sustainable Development Data'
  - image: '/images/alliances/cfall-logo.svg'
    link: 'http://www.codeforall.org/'
    title: 'Code for All'
  - image: '/images/alliances/iaciudadana.png'
    link: 'https://iaciudadana.org/'
    title: 'IA Ciudadana'
  - image: '/images/alliances/poletika.jpg'
    link: 'http://www.poletika.org/'
    title: 'Polétika | Política + Ética'
  - image: '/images/alliances/CPA_logo_small1.jpg'
    link: 'https://www.proacceso.org/'
    title: 'Coalición Proacceso'
  - image: '/images/alliances/upcomillas.png'
    link: 'https://www.comillas.edu/es/'
    title: 'Universidad Pontificia de Comillas'
---

<hero></hero>

<newsletter light></newsletter>

<banner
  title="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  description="Political Watch es la plataforma formada por tecnólogas, economistas y periodistas que se inscribe dentro de la estrategia de CIECODE como una de sus principales líneas de trabajo."
  button="Saber más"
  link="#enlace">
</banner>

<banner
  bg="/images/bgbanner.jpg"
  title="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  description="Political Watch es la plataforma formada por tecnólogas, economistas y periodistas que se inscribe dentro de la estrategia de CIECODE como una de sus principales líneas de trabajo.">
</banner>

<featured
  title="Proyectos destacados"
  :featured="featuredItems">
</featured>

<alliances :alliances="alliances"></alliances>

::BlogLatest
---
postLimit: 2
---
::
