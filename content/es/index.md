---
title: Inicio
featuredItem:
  title: 'Vigilancia ciudadana'
  subtitle: 'Innovamos para fomentar un debate público informado'
  description: 'Political Watch es la plataforma formada por tecnólogas, economistas y periodistas que se inscribe dentro de la estrategia de CIECODE como una de sus principales líneas de trabajo.'
  button: 'Saber más'
  link: '#link'
  image: /images/featured.jpg
othersItems:
  - title: 'Vitae elementum arcu integer eu'
    description: 'Political Watch es la plataforma formada por tecnólogas, economistas y periodistas que se inscribe dentro de la estrategia de CIECODE como una de sus principales líneas de trabajo.'
    button: 'Saber más'
    link: '#link'
  - title: 'Vitae elementum arcu integer eu'
    description: 'Political Watch es la plataforma formada por tecnólogas, economistas y periodistas que se inscribe dentro de la estrategia de CIECODE como una de sus principales líneas de trabajo.'
    button: 'Saber más'
    link: '#link'
sections:
  - title: 'Democracia'
    image: /images/democracy.svg
    subtitle: 'Vigilancia ciudadana para una sociedad mejor'
    button: 'Cuéntame más'
    link: '#link'
  - title: 'Coherencia'
    image: /images/coherence.svg
    subtitle: 'Políticas a la altura de los retos de nuestra era'
    button: 'Cuéntame más'
    link: '#link'
blogLatest: 2
---
<hero></hero>

<featured
  title="Entre manos"
  :featured="featuredItem"
  :others="othersItems">
</featured>

<sections
  title="Qué hacemos"
  subtitle="Political Watch es la plataforma formada por tecnólogas, economistas y periodistas que se inscribe dentro de la estrategia de CIECODE como una de sus principales líneas de trabajo."
  :sections="sections">
</sections>

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

<blog-latest></blog-latest>
