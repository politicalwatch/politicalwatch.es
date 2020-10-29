---
title: 'TiPi se hace mayor'
image:  '/images/posts/tipi.jpeg'
description: 'Cuando una tecnología cívica alcanza la madurez'
author: pablo-martin
createdAt: 2020-09-03
related:
  - vitae-elementum-arcu-integer-eu
  - vitae-elementum-arcu-integer-eu-2
  - hola-mundo
lineOfWork: democracy
---

Dos años han pasado ya desde que en 2018 escribiéramos [Más ágiles y más resilientes](más-ágiles-y-más-resilientes), un artículo en el que mostrábamos el gran número de avances introducidos en la plataforma TiPi, el que ha sido buque insignia de CIECODE durante los últimos años.

Aun así, dos años en el siglo XXI es una eternidad. En los últimos meses hemos estado trabajando intensamente en dos proyectos muy ilusionantes para nosotros: la adaptación de [Parlamento2030](https://www.parlamento2030.es/) al [Congreso de la Nación de Paraguay](http://ods.congreso.gov.py/) y al Consell General de Andorra. Además, hemos podido compartir todos nuestros avances en vigilancia ciudadana y seguimiento parlamentario con organizaciones sociales de Jordania dentro del [programa Qararuna](qararuna-sociedad-civil-jordania).

En términos tecnológicos, estos nuevos proyectos han servido para poner a prueba nuestra plataforma: trabajar en diferentes países, en diferentes idiomas y, por primera vez, con encargos desde las cámaras de representantes y no desde la sociedad civil. Todo ello nos ha obligado a repensar nuestro modelo y a adaptarlo al máximo para dar respuesta a los retos planteados.

## Un modelo global de datos parlamentarios

¿Os imagináis que eso pudiera existir?

Hackers cívicos, documentalistas y resto de reutilizadores, dejad de soñar.

La primera tarea que realizamos cuando empezamos a realizar la adaptación de [Parlamento2030](https://www.parlamento2030.es/) a Paraguay fue realizar un estudio (tiempo antes ya deseado) en búsqueda de un modelo unificado de datos parlamentarios que nos sirviera de esquema base para nuestra plataforma y así poder llevar a cabo integraciones más rápidas en otros países o regiones en el futuro.

La pena de todo esto es que no encontramos nada (y conste que aún seguimos deseando equivocarnos). Proyectos ilusionantes como [Akoma Ntoso](http://www.akomantoso.org/) están poco actualizados o discontinuados, además de vagamente documentados para un potencial usuario (ver la [documentación para usuarios](http://www.akomantoso.org/?page_id=57) o los [ejemplos de documentos](http://www.akomantoso.org/?page_id=55)). Nada apunta, más allá quizás de alguna investigación académica, a que este problema vaya a ser solucionarlo en el corto plazo. No es solo ya que exista sino que sea accesible para que pueda ser ampliamente utilizado.

Con este panorama, en CIECODE hicimos una adaptación del modelo de datos que siempre hemos usado en [TiPi Ciudadano](https://tipiciudadano.es/) y [Parlamento2030](https://www.parlamento2030.es/) para ampliarlo a nuevos requisitos. Nótese que no pretende ser un modelo global sino una adaptación funcional para la sociedad civil. Se puede consultar en nuestro [Github](https://github.com/politicalwatch/tipi-data/tree/master/tipi_data/models).

Además, y conforme fuimos desacoplando componentes en TiPi, vimos cómo los accesos a datos se realizaban desde diferentes partes de la plataforma. Para ello, hemos desarrollado un módulo en Python llamado [**tipi-data](https://github.com/politicalwatch/tipi-data)** que servirá de punto común para conectar con la base de datos y que contenga de manera centralizada los modelos de información parlamentaria y las operaciones disponibles sobre los datos.

## Más madera para nuestro motor

Para los que no lo conozcáis aún, nuestro módulo [**tipi-engine](https://github.com/politicalwatch/tipi-engine)** se encarga de hacer todo el trabajo sucio: extracción y limpieza de datos, etiquetado masivo usando la base de conocimiento de expresiones regulares, petición del envío de alertas a los usuarios y cálculo de estadísticas.

Centrándonos en el extractor, la recuperación de datos del Congreso de los Diputados de España se realiza a través de un *web scraper* desarrollado con [Scrapy](https://scrapy.org/). Hasta ahí nada nuevo. Los retos llegaron con los nuevos proyectos de Andorra y Paraguay. Para ellos hemos parametrizado la capa extractora para elegir el país (o ámbito) y hemos preparado unas plantillas para que la integración de un nuevo extractor sea lo más sencilla posible. Con ello permitimos que cada uno pueda ser independiente tecnológicamente, pudiendo tener web scrapers, acceso a APIs, a ficheros en portales de datos o a sistemas FTP. Un mismo módulo con diferentes configuraciones adaptadas a la realidad de cada país o región.

## Instalación simple, rápida y común

![](/images/posts/docker.jpeg)

En los últimos años han pasado por nuestro equipo diversas personas colaboradoras que nos han ayudado a hacer crecer nuestra plataforma. Diversas personas con diversos sistemas operativos y diversas versiones de software y configuraciones. Y eso al final es un quebradero de cabeza si se pretende que todo funcione correctamente y no tener que oír la típica frase de: “En mi ordenador a mí me funciona”.

Pensando en el desarrollo, hemos creado un módulo llamado [**tipi-infra](https://github.com/politicalwatch/tipi-infra)** que facilita la preparación de los entornos para las personas que participen en el mismo. Con ello, conseguimos un sistema con configuraciones comunes y que ayudan a mantener los sistemas distribuidos actualizados a la última versión de código.

Pero también hemos pensado en los servidores de producción y para ello creamos y actualizamos automáticamente (con sincronización con Github) un conjunto de imágenes Docker en la web [Dockerhub](https://hub.docker.com/search?q=politicalwatch&type=image) que nos permiten una instalación simple y rápida en cualquier servidor compatible con Docker.

## Mismos estilos para similares interfaces

La familia de proyectos de vigilancia parlamentaria que se basan en la tecnología TiPi sigue creciendo. Con ellos han aflorado retos impensables cuando en 2014 empezamos con TiPi Ciudadano, lo cual nos llena de alegría.

Cuando nos referimos a las interfaces hablamos básicamente de la web de cada proyecto, la parte más cercana al usuario. Y con estilos nos referimos a los colores, las tipografías, los iconos, la distribución de elementos y suma y sigue… Todo ello se complicó cuando pasamos a tener muchos proyectos usando la misma hoja de estilos (el llamado CSS en desarrollo web), ya que un mínimo cambio debería replicarse en todos ellos (con un coste no despreciable).

Para solucionar este problema hemos creado [**tipi-uikit](https://tipiui.politicalwatch.es/),** un conjunto de componentes, elementos y estilos basados en VueJS + CSS que nos permiten realizar una única modificación, que de manera casi instantánea puede replicarse en todas las instancias de nuestra plataforma. Pero esto no obliga a usar exclusivamente nuestros estilos sino que los mismos pueden ser personalizados o completamente re-escritos para solventar una cuestión concreta de adaptación.

![Una de las secciones de la documentación de TIPIUI](/images/posts/docutipi.png)*Una de las secciones de la documentación de TIPIUI*

## Asíncrono y unificado

Con todo lo que ya teníamos y lo nuevo os podéis imaginar la cantidad de tareas que tiene que hacer nuestro sistema para poder disponer de los datos de actividad parlamentaria en nuestras webs, además del creciente número de funcionalidades proporcionadas.

De una forma orgánica y responsable nos hemos ido dando cuenta de que teníamos código repetido, una mala arquitectura de componentes y servicios infrautilizados. Es por ello que hemos creado [**tipi-tasks](https://github.com/politicalwatch/tipi-tasks)**, que no es otro que nuestro antiguo componente ***tipi-alerts*** reconvertido a algo más que la mera gestión de alertas. Haciendo uso de [Celery](https://pypi.org/project/celery/) como gestor de tareas asíncronas y de Redis como broker, podemos tener en este nuevo componente todas las acciones relacionadas con los etiquetados automáticos y la gestión de alertas a un nivel alto de disponibilidad y de rapidez en la ejecución.

Lo positivo a futuro es que podríamos ampliar (duplicar/triplicar) el servicio tipi-tasks según la demanda del resto de servicios y obtener con ello un rendimiento de la herramienta impensable hace algunos años.

Como veréis no son pocos los cambios introducidos en la plataforma TiPi. Gracias a nuestra decisión de que el proyecto sea libre, con cada nuevo cliente intentamos mejorar algún aspecto para que todos se vean favorecidos. Por ahora consideramos que, a todos, no nos ha ido nada mal con esta estrategia. Otra vez se demuestra que lo colaborativo además de más justo es más eficiente.

Queremos seguir simplificando la capa de usuario de nuestra plataforma (nuestra web) para con ello facilitar y ampliar la vigilancia ciudadana de lo que ocurre, no sólo en el Congreso de los Diputados español, sino ahora también en otros parlamentos nacionales por todo el mundo.

En estos tiempos duros y diferentes necesitamos un tercer sector fuerte. Un sector que, para subsistir, haga uso de herramientas digitales de una forma responsable y efectiva. Nuestro objetivo está cada vez más presente: **que la tecnología no sea un problema, sino una solución**. Seguiremos desde la humildad contribuyendo a conseguirlo.
