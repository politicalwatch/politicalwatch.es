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
  - title: "Derechos digitales & participación"
    subtitle: "Investigamos sobre el potencial de la tecnología para la participación ciudadana"
    description: "Los derechos digitales también son derechos humanos, incluido el de participar en la vida pública. El acceso a la información, la transparencia, la rendición de cuentas o la no discriminación se exigen también en esta esfera, que tiene además un enorme potencial para mejorar la calidad de nuestra democracia."
    button: "Quiero saber más"
    link: "/derechos-digitales"
    image: /images/featured-dd.png
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

::research
---
researchLimit: 3
---
::

::BlogLatest
---
postLimit: 2
---
::

<alliances :alliances="alliances"></alliances>
