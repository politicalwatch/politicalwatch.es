---
title: Inicio
subtitle: "Political Watch es una plataforma de innovación política que promueve la monitorización, vigilancia y participación ciudadana a través de desarrollos basados en tecnologías cívicas para la promoción del desarrollo sostenible"
featuredItem:
  title: 'CivicTech'
  subtitle: 'Descarga el Informe "Más de 10 años de CivicTech"'
  description: 'Ya puedes descargar el informe "Más de 10 años de CivicTech", informe realizado para la Generalitat de Catalunya con un enfoque en la participación ciudadana. En dicho informe encontrarás hallazgos del momento actual del sector, recomendaciones a los actores relevantes y entrevistas a organizaciones de España y América Latina sobre su futuro entre otras cosas.'
  button: 'Descárgalo ya'
  link: 'https://t.ly/fsOS'
  image: /images/featured-civictech.png
othersItems:
  - title: 'OJITO'
    description: 'El objetivo de este proyecto liderado por jóvenes es promover una cultura de rendición de cuentas de los decisores públicos a través de la monitorización de la actividad de los grupos parlamentarios y el Gobierno en torno a una serie de temáticas seleccionadas y el desarrollo de una campaña de incidencia pública.'
    button: 'Accede ahora'
    link: 'http://ojito.politicalwatch.es'
  - title: 'Escáner 2030'
    description: 'Esta herramienta online te permite detectar y visualizar la presencia de los diferentes Objetivos de Desarrollo Sostenible (ODS) de las Naciones Unidas en cualquier texto.'
    button: 'Escanea un texto'
    link: 'https://escaner2030.es/'
blogLatest: 2
---
<hero></hero>

<newsletter light></newsletter>

<featured
  title="Entre manos"
  :featured="featuredItem"
  :others="othersItems">
</featured>

<lines-of-work></lines-of-work>

<!---
<banner
  bg="/images/bgbanner.jpg"
  title="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  description="Political Watch es la plataforma formada por tecnólogas, economistas y periodistas que se inscribe dentro de la estrategia de CIECODE como una de sus principales líneas de trabajo."
  button="Saber más"
  link="#enlace">
</banner>

<banner
  title="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  description="Political Watch es la plataforma formada por tecnólogas, economistas y periodistas que se inscribe dentro de la estrategia de CIECODE como una de sus principales líneas de trabajo."
  button="Saber más"
  link="#enlace">
</banner>
-->

<blog-latest></blog-latest>
