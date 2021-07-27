---
title: 'A un año del proyecto Political Watch COVID-19: Vigilancia e incidencia durante el confinamiento'
image: '/images/posts/un-año-covidwatch/comision-covid-19.jpg'
description: 'El impacto de la pandemia del COVID-19 a nivel social y económico es ya indiscutible, sin embargo, hace poco más de un año, aún en confinamiento estricto, el Congreso de los Diputados de España creó la Comisión para la ‘Reconstrucción Social y Económica’, que en tiempo récord tuvo que debatir y definir los grandes lineamientos en materia de salud, economía, políticas sociales y cooperación con la Unión Europea para salir de la crisis que ya se venía venir.'
author: belen-aguero
createdAt: 2021-07-27
related:
  - reconstrucción-transparente-patxi-lópez-responde-a-la-petición-de-la-sociedad-civil
  - querida-transparencia-hoy-toca-celebrar
  - propuestas-ciudadanas-claras-y-accesibles-en-el-congreso-de-los-diputados
lineOfWork: democracy
---


El impacto de la pandemia del COVID-19 a nivel social y económico es ya indiscutible, sin embargo, hace poco más de un año, aún en confinamiento estricto, el Congreso de los Diputados de España creó la Comisión para la ‘Reconstrucción Social y Económica’, que en tiempo récord tuvo que debatir y definir los grandes lineamientos en materia de salud, economía, políticas sociales y cooperación con la Unión Europea para salir de la crisis que ya se venía venir.

Esta comisión se subdividió en cuatro [Grupos de Trabajo](https://docs.google.com/document/d/1ovn2qXhjOjMYQusmY7nd4oeU-802tb85UuBzV3ja5nw/edit), Reactivación Económica, Unión Europea, Sanidad y Salud Pública y Políticas Sociales y Sistema de Cuidados. Cada uno de ellos definió una lista de [temas](https://drive.google.com/drive/folders/1EIL-CGQ6GXMiX4k-Xze92s0jLibRNY8Z) a tratar en los meses que durase la Comisión y publicaron un dictamen final a ser aprobado por el Congreso de los Diputados.

En ese marco nace el proyecto **Political Watch COVID-19** con los objetivos de:

* Superar las dificultades del acceso a la información de esta nueva comisión y facilitar de manera visual la comprensión de la información abordada.
* Fortalecer las capacidades de las organizaciones de la sociedad civil a través de la vigilancia en tiempo real de los debates de la comisión con el objetivo de poder influir en las propuestas de los partidos.
* Fortalecer el acceso de los medios de comunicación a los debates de esta comisión para que puedan contribuir a generar un debate público informado.
* Ofrecer a la ciudadanía y a las organizaciones de la sociedad civil piezas de análisis  que contribuyan a sus propios análisis y a reforzar el conocimiento sobre la actividad de esta comisión.

El proyecto fue ejecutado por Political Watch (entonces CIECODE) junto a la Fundación PorCausa y estuvo activo entre el 7 de mayo de 2020 fecha de inicio de los trabajos de la Comisión, hasta el 21 de julio, fecha en la que se el dictamen final se debatió y votó en el Pleno del Congreso de los Diputados.

Se trató de un proyecto muy intenso en horas de trabajo, innovación tecnológica y toma de decisiones rápidas para ir haciendo frente a una realidad cambiante y a los propios cambios que se fueron sucediendo en la Comisión.

### La tecnología al servicio de la vigilancia ciudadana

Con el objetivo de ofrecer a la sociedad civil y a la ciudadanía toda la información relevante y de calidad fundamentalmente de lo que sucedía en el Congreso de los Diputados, Political Watch hizo un seguimiento de la actividad en la comisión **de una manera radical, aplicando las últimas técnicas informáticas** en el desarrollo del trabajo.

La realidad al iniciar el proyecto era compleja. El Congreso de los Diputados suele publicar los diarios de sesiones (las transcripciones) de las Comisiones con un decalaje de, al menos, una semana. La importancia de la inmediatez es indiscutible en la arena política, y especialmente en la labor de una Comisión que sólo iba a trabajar durante dos meses. Ese decalaje era, por tanto, una desventaja para las organizaciones que quisieran realizar campañas de incidencia y no pudieran ver todas las sesiones en vivo (cada uno de los grupos de trabajo se reunía dos veces por semana al menos con sesiones maratonianas de más de 6 horas de duración). En este sentido, la capacidad de poder analizar y dar respuesta a las intervenciones y comparecencias de las personas expertas y diputados era clave.

Por ello, en un primer momento del proyecto se construyó un **programa informático para hacer públicas las transcripciones el mismo día**, solo dos horas después de que las personas comparecientes hubieran hecho su exposición.

Este programa partía de las emisiones en vivo del Congreso de los Diputados, publicadas en una página con todas las comparecencias e intervenciones que se iban desarrollando en cada sesión.

![Captura de pantalla del Excel de seguimiento del proceso](/images/posts/un-año-covidwatch/tracking-covidwatch.png)

El primer paso para dar seguimiento a las sesiones de la Comisión para la Reconstrucción Social y Económica fue crear una hoja de cálculo colaborativa en la que llevar todo el control de avances de cada sesión. En ella aparece una primera pestaña con el registro de cada sesión (número y url) y luego una pestaña por cada día que se celebre.

![Imagen descriptiva de web scraping](/images/posts/un-año-covidwatch/web-scraping.png)

Es en esa pestaña de seguimiento diario donde se vuelcan en tiempo real todas las intervenciones que se produzcan junto con el enlace a su video en formato MP4. ¿Cómo conseguir ese tiempo real en la escaleta de intervenciones? Con una aplicación que extrae de manera automática dicha información del Congreso; la técnica que utilizamos para ello es conocida como *web scraping*.

```
ffmpeg -i intervencion.mp4 -ac 1 intervencion.flac
```

Una vez está listo el audio de la intervención, se subía a Internet para que sirva como entrada del proceso final: [Speech to Text (STT)](https://cloud.google.com/speech-to-text/). Este STT lo podemos encontrar dentro de la nube de Google como mecanismo de transcripción automática. Su funcionamiento se basa en técnicas de aprendizaje automático, más concretamente redes neuronales. Lo que viene a llamarse **Inteligencia Artificial, solo que al servicio del ciudadano**.


![Imagen descriptiva del servicio Speech to Tex de Google](/images/posts/un-año-covidwatch/google-cloud-speech-to-text.png)

Este proceso en un inicio se llevaba adelante para cada una de las reuniones de la Comisión, sin embargo, a las pocas semanas de iniciado el proceso, el propio Congreso decidió, por primera vez, acelerar el proceso de publicación de las transcripciones, lo que supuso un hito en su historia y un avance en transparencia, reduciendo los tiempos de más de una semana a poco más de uno o dos días. Ante esta mejora, desde el proyecto se decidió continuar con las transcripciones, pero solo de las comparecencias más relevantes (ministros y ministras, personalidades destacadas en cada temática, etc), con el objetivo de continuar brindando una información casi a tiempo real a las organizaciones interesadas, para quienes dos días seguía siendo una espera larga.


### Contenidos y materiales al servicio de las acciones de incidencia

Para cumplir con el objetivo propuesto de ofrecer información y contenidos de calidad a organizaciones de la sociedad civil, medios de comunicación y ciudadanía se elaboraron una serie de contenidos y materiales, en principio para cada sesión y, tras el cambio en la forma de publicación de las transcripciones, para las sesiones en las que hubieran comparecencias de ministros y ministras y personalidades destacadas de las temáticas.

Estos contenidos y materiales fueron:

1. [Resúmenes periodísticos](https://drive.google.com/drive/folders/16QXVpBwJezyIEChdIQgDnVvA28bkMfRj?usp=sharing) del contenido de la sesión analizada, elaborados por Pablo García, periodista de PorCausa. Éstos eran enviados a medios de comunicación, publicados en el microsite diseñado para contener todos los materiales mientras durase el proyecto y compartidos también por el canal de telegram del proyecto.
2. [Canal de Telegram](https://t.me/politicalwatch_covid19): para facilitar la comunicación con organizaciones de la sociedad civil, se abrió un canal de Telegram donde se compartían los resúmenes de las sesiones, infografías, transcripciones en tiempo real y visualizaciones listas para compartir y reutilizar.
3. Resumen de las propuestas más destacadas de cada uno de los partidos durante la sesión: para facilitar la comprensión de los posicionamientos de los partidos, se elaboraba una vez terminada la sesión, una tabla (imagen 1) muy sencilla con las principales propuestas presentadas en sus turnos de palabra.
4. Visualizaciones: se elaboraron tres tipos de visualizaciones por sesión, todas ellas publicadas en el microsite y compartidas por el canal de Telegram,
    * un resumen visual en formato de nube de palabras a partir de la comparecencia analizada (imagen 2);
    * un análisis de las temáticas más tratadas a partir del etiquetado automático de [TIPI Ciudadano](https://tipiciudadano.es/) (imagen 3);
    * un análisis en clave de los ODS de la Agenda 2030 elaborado a partir del etiquetado de [Parlamento 2030](https://www.parlamento2030.es/) (imagen 4).

<figure>
  <img alt="Ejemplo de cómo se rescataban las propuestas sociales y económicas de cada partido en las sesiones de la Comisión de reconstrucción" src="/images/posts/un-año-covidwatch/imagen1.png" />
  <figcaption>Imagen 1</figcaption>
</figure>
<figure>
  <img alt="Nube de palabras de la comparecencia de la Vicepresidenta Teresa Ribero" src="/images/posts/un-año-covidwatch/imagen2.png" />
  <figcaption>Imagen 2</figcaption>
</figure>
<figure>
  <img alt="Resumen gráfico temático de la comparecencia de la Ministra Irene Montero" src="/images/posts/un-año-covidwatch/imagen3.png" />
  <figcaption>Imagen 3</figcaption>
</figure>
<figure>
  <img alt="Gráfico resumen de los ODS tratados en la comparecencia del Ministro Pablo Iglesias" src="/images/posts/un-año-covidwatch/imagen4.png" />
  <figcaption>Imagen 4</figcaption>
</figure>


### Alianzas para promover y garantizar la participación ciudadana y el acceso a la información

Finalizado el primer mes de trabajo de la Comisión, se anunció un importante avance en la promoción de la participación ciudadana, cuando desde el Congreso se tomó la decisión, por primera vez en su historia, de habilitar un buzón ciudadano donde podían enviarse sugerencias y propuestas relacionadas con el trabajo de la Comisión. Sin embargo, desde Political Watch consideramos en su momento que la habilitación de este buzón no era suficiente, puesto que en un principio todas esas propuestas no iban a ser publicadas de ninguna forma.

Por ello desde Political Watch dirigimos una [carta](https://docs.google.com/document/d/1v69gG89NLNCM2eG_M_BwdToAsxWY2Zfk8eT2ezy93Yw/edit) a la presidencia de la Comisión, cargo que ocupaba en ese momento el diputado socialista Patxi López, para que todas esas propuestas ciudadanas fueran publicadas de alguna manera por el Congreso, ya que consideramos imprescindible que toda la información relativa a esta comisión se hiciera pública.

![Ilustración que muestra a dos personas participando publicamente](/images/posts/un-año-covidwatch/participa.png)

Esta carta contó con el apoyo de casi 40 organizaciones de la sociedad civil española, y recibió no solo [respuesta](https://drive.google.com/file/d/12mGxFyRINpE3fnmy56GuYlV4FWY4538v/view) de Patxi López sino que además se aceptó la demanda y las propuestas fueron publicadas en la web del Congreso, es cierto que de una manera muy poco ‘amigable’ en términos de análisis, pero fue aún así una [gran victoria](https://politicalwatch.es/blog/querida-transparencia-hoy-toca-celebrar) para todas las organizaciones que luchan desde hace años por la transparencia y el acceso a la información en España.

Además, para permitir a la ciudadanía, medios de comunicación y otras organizaciones el acceso y análisis de las propuestas enviadas, desarrollamos un [dashboard](https://politicalwatch.es/blog/propuestas-ciudadanas-claras-y-accesibles-en-el-congreso-de-los-diputados/) o panel de análisis de todas las propuestas remitidas a la Comisión, utilizando las tecnologías de etiquetado automático de TIPI Ciudadano y Parlamento 2030.


<a href="https://datastudio.google.com/reporting/1EAxsZQY5BSQJn9K-jnplJbtfD9O8AERe" target="_blank"><img src="/images/posts/stats_propuestas.png" alt="Captura de pantalla del dashboard de propuestas ciudadas" /></a>


### Coloquio: Deconstruyendo la reconstrucción: Voces desde la Sociedad Civil

Como cierre del proyecto, se realizó un Coloquio online que fue retransmitido en vivo para debatir las principales conclusiones del dictamen y los posibles resultados de su debate en el Pleno, que se realizaba ese mismo día.

Contamos en la moderación con Pablo García, periodista de PorCausa que fue parte del proyecto y entre los ponentes con:

* Irene Bernal: Advocacy Manager de Salud por Derecho
* Ricardo Ibarra: Director de la Plataforma de Infancia
* José Luis García Quiñones: Responsable de relaciones con las Cortes y Partidos políticos en OXFAM Intermón
* Nuria Díaz: Coordinadora del área de Incidencia Pública de CEAR
* Monica Vidal: Directora de Políticas Públicas y Gobernanza Climática de ECODES
* Filomena Ruggiero: Federación de Planificación Familiar Estatal, representante del sector género en Futuro en Común e integrante de Impacto de Género Ya

El cierre del evento estuvo a cargo de Irene Martín, Investigadora de Political Watch, en el debate se realizó un análisis de las conclusiones de los diferentes grupos de trabajo de la Comisión, el denominador común fue la sensación de ‘decepción’ y de oportunidad perdida que tuvieron la mayoría de las organizaciones que estuvieron dando seguimiento a la Comisión, y sobre todo la falta de concreción ante una gran cantidad de retos que ya existían y que se vieron profundizados por la pandemia.

<iframe width="560" height="315" src="https://www.youtube.com/embed/ymUCWmJzRYg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


### Conclusiones y lecciones aprendidas

Fueron casi dos meses y medio de trabajo intenso por parte del equipo de Political Watch junto a PorCausa, y sobre todo de muchos aprendizajes ya que se trataba de uno de los primeros proyectos de Political Watch centrados fuertemente en la incidencia, trabajando de manera directa y no a través de coaliciones como si lo habíamos hecho por ejemplo como miembros de la plataforma [Polétika](http://poletika.org/).

Las principales conclusiones y lecciones aprendidas de este proyecto, muchas de las cuales continuamos poniendo en práctica, fueron:

* Impulsar acciones en alianza y con objetivos claramente definidos favorece los buenos resultados: gracias al fuerte trabajo de incidencia en redes sociales y a través de contactos directos con la mesa de la Comisión, se lograron excelentes resultados en materia de transparencia y acceso a la información, el Congreso garantizó la publicación de todo el trabajo realizado en el marco de la Comisión, desde las reuniones plenarias, el trabajo de los Grupos de Trabajo y las propuestas ciudadanas recibidas. Además, ganamos relevancia al liderar la acción relativa a la publicación de las propuestas ciudadanas ya mencionada, lo cual nos ayudó a impulsar el reconocimiento de marca, dado que además nos encontrábamos inmersos en el proceso de cambio de identidad (de CIECODE a Political Watch).
* Tecnologías de vanguardia al servicio de la vigilancia: poner en marcha la herramienta de transcripción automática a partir de la tecnología desarrollada por Google nos posicionó en términos de innovación ante otras organizaciones de la sociedad civil y además nos demostró que una tecnología aparentemente compleja puede ponerse en marcha con los recursos adecuados y ser parte de un proyecto más amplio de incidencia.
* La importancia de la buena comunicación: todo el proyecto contó con una estrategia de comunicación fuerte, centrada en redes sociales y medios de comunicación, una parte central de la estrategia fue la construcción de relaciones con medios de comunicación y el uso de nuevos canales (como Telegram), ambos nos permitieron llegar a nuevas audiencias y a tener presencia en medios a los que antes no habríamos logrado acceder, lo cual nos abrió puertas y nuevos contactos para proyectos siguientes. ([Ver clipping](https://docs.google.com/spreadsheets/d/1xxkAwiLM6BQebYXKcr-iTGDZ4d1jamV56qG_Nt4zJJM/edit?usp=sharing)).

Para finalizar, tanto la tecnología como muchos de los materiales generados para este proyecto pudieron ser reutilizados para responder a necesidades particulares de distintos actores, este fue el caso de un encargo particular relacionado con la presencia de temáticas como la despoblación y el reto demográfico en el dictamen final de la Comisión, encargo realizado por el gabinete de la Ministra Teresa Ribera del Ministerio para la Transición Ecológica y el Reto Demográfico, para lo cual elaboramos un [análisis](https://docs.google.com/spreadsheets/d/1PTPR_VksDxmmret5PUqwdBy-nxicWQ78Zi-YOhEqflQ/edit?usp=sharing) del texto utilizando la tecnología de TIPI Ciudadano y visualizaciones que permitieran una mejor comprensión de la información. En la misma línea realizamos un análisis para ECODES, centrado en la presencia de palabras clave relacionadas con la transición ecológica y la crisis climática tanto en los grupos de trabajo, como en el dictamen y en las propuestas ciudadanas. Todo este análisis fue publicado tanto por [ECODES](https://ecodes.org/hacemos/la-comision-para-la-reconstruccion-necesita-hacer-suyo-el-mensaje-ecologista-demandado-por-la-sociedad) como por la plataforma [Por una Recuperación Sostenible](https://www.porunarecuperacionsostenible.net/analisis-de-los-terminos-y-palabras-claves-mencionados-en-la-comision-para-la-reconstruccion-social-y-economica/).
