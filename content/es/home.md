---
title: Inicio
subtitle: "Political Watch es una plataforma de innovación política que promueve la monitorización, vigilancia y participación ciudadana a través de desarrollos basados en tecnologías cívicas para la promoción del desarrollo sostenible"

featuredItems:
  - title: "Qué Hacen Los Diputados"
    subtitle: "Nuestra herramienta estrella de vigilancia política"
    description: "Simplifica y ordena el trabajo del Congreso. Muy útil para periodistas, investigadores y ONG que buscan conseguir cambios legislativos. Incluye el seguimiento de 41 temáticas sociales y un índice de actividad parlamentaria."
    button: "Consulta la actividad"
    link: "https://qhld.es"
    image: /images/featured-qhld.jpg
  - title: "Ampliando Democracia"
    subtitle: "Una plataforma en crecimiento de renovación democrática"
    description: "A través de la deliberación ciudadana y la inteligencia colectiva generamos innovaciones escalables para gobernar mejor. Nuestro trabajo convierte el diálogo en propuestas de política pública y en infraestructuras democráticas de largo plazo. Invertir en esta iniciativa significa apoyar un nuevo ecosistema democrático: resiliente, participativo y preparado para afrontar los desafíos globales de hoy."
    button: "Quiero saber más"
    link: "https://ampliandodemocracia.org"
    image: /images/featured-ad.jpg

alliances:
  - image: '/images/alliances/logooecd_en.png'
    link: 'http://www.oecd.org'
    title: 'OCDE - Red de innovación sobre participación ciudadana'
  - image: '/images/alliances/gpsdd.png'
    link: 'http://www.data4sdgs.org/'
    title: 'Alianza global de datos para el desarrollo sostenible'
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
