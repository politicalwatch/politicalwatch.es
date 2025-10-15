---
title: Inicio
subtitle: "Political Watch es una organización independiente con sede en España y enfoque global. Nuestra especialidad es la investigación para el cambio social, la incidencia política y el desarrollo de tecnologías pro-democracia. Queremos conseguir políticas públicas más transparentes y participativas, que serán también las más eficaces. Trabajamos pensando en la democracia del futuro, mientras activamos alianzas para mejorar las instituciones del presente."

featuredItems:
  - title: "Qué Hacen Los Diputados"
    subtitle: "Nuestra herramienta estrella de vigilancia política"
    description: "Simplifica y ordena el trabajo del Congreso. Muy útil para periodistas, investigadores y ONG que buscan conseguir cambios legislativos. Incluye el seguimiento de 41 temáticas sociales y un índice de actividad parlamentaria."
    button: "Consulta la actividad"
    link: "https://qhld.es"
    image: /images/featured-qhld.jpg
    imageAuthor: "Julian David Perez del Basto"
    imageRef: "https://es.wikipedia.org/wiki/Congreso_de_los_Diputados#/media/Archivo:Congreso_de_los_diputados,_Madrid_Espa%C3%B1a.jpg"
  - title: "Ampliando Democracia"
    subtitle: "Una plataforma en crecimiento de renovación democrática"
    description: "A través de la deliberación ciudadana y la inteligencia colectiva generamos innovaciones escalables para gobernar mejor. Nuestro trabajo convierte el diálogo en propuestas de política pública y en infraestructuras democráticas de largo plazo. Invertir en esta iniciativa significa apoyar un nuevo ecosistema democrático: resiliente, participativo y preparado para afrontar los desafíos globales de hoy."
    button: "Quiero saber más"
    link: "https://ampliandodemocracia.org"
    image: /images/featured-ad.jpg
    imageAuthor: 
    imageRef: 

alliances:
  - image: '/images/alliances/cfall-logo.svg'
    link: 'http://www.codeforall.org/'
    title: 'Code for All'
  - image: '/images/alliances/gdc.png'
    link: 'https://globaldemocracycoalition.org/'
    title: 'Global Democracy Coalition'
  - image: '/images/alliances/logooecd_en.png'
    link: 'http://www.oecd.org'
    title: 'OCDE - Red de innovación sobre participación ciudadana'
  - image: '/images/alliances/iaciudadana.png'
    link: 'https://iaciudadana.org/'
    title: 'IA Ciudadana'
  - image: '/images/alliances/dnc.png'
    link: 'https://www.peoplepowered.org/news-content/introducing-the-democracy-narratives-campaign'
    title: 'Democracy Narratives Campaign'
  - image: '/images/alliances/CPA_logo_small1.jpg'
    link: 'https://www.proacceso.org/'
    title: 'Coalición Proacceso'
---

<hero></hero>

<newsletter light></newsletter>

<banner
  bg="/images/bgbanner.jpg"
  title="La democracia que nos merecemos"
  description="Aspiramos a un mundo más justo. Para conseguirlo, apostamos por renovar la democracia actual, que se ha desconectado de la ciudadanía a la que representa.">
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
