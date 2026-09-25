---
title: Home
subtitle: "Political Watch is an independent organisation with a global outlook, based in Spain. We specialise in research for social change, political advocacy and the development of pro-democratic technology. We promote public policies that are transparent, participatory, and more effective. Our work imagines the democracy of tomorrow while forging alliances to strengthen the institutions of today."

featuredItems:
  - title: "Vinculante"
    subtitle: "La participación que deja huella"
    description: "Vinculante.ai analiza las aportaciones de un proceso participativo para identificar de manera automática de qué forma han quedado recogidas, con qué grado y explicando el por qué. Trazabilidad verificable entre lo que se propuso y el texto que finalmente vio la luz."
    button: "Quiero saber más"
    link: "https://vinculante.ai"
    image: /images/featured-vinculante.png
  - title: "Qué Hacen Los Diputados"
    subtitle: "Our flagship tool for keeping track of what your political representatives get up to."
    description: "It simplifies and clearly lays out the work done in Congress, and is invaluable for journalists, researchers and NGOs pursuing legislative change. It includes trackers for 41 social issues, as well as an index of parliamentary activity."
    button: "View activity"
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
  title="The democracy we deserve"
  description="We fight for a fairer world, and we know the only way to get there is by reclaiming and renewing our democracy — a democracy that’s drifted too far from the people it exists to serve.">
</banner>

<featured
  title="Featured projects"
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
