---
title: 'Más ágiles y más resilientes'
slug: 'más-ágiles-y-más-resilientes'
image:  '/images/posts/mesaredonda.jpeg'
description: 'TIPI (Transparencia, Información, Participación e Incidencia) ha sido en los últimos tres años la principal línea de innovación en el trabajo de CIECODE, así como su proyecto de incidencia política más ambicioso.'
author: pablo-martin
createdAt: 2019-01-22
related:
  - vigila-con-tipi-ciudadano-el-debate-político-sobre-democracia-y-derechos-en-la-era-digital
  - tipi-se-hace-mayor
lineOfWork: democracy
---

**TIPI** *(Transparencia, Información, Participación e Incidencia)* **ha sido en los últimos tres años la principal línea de innovación en el trabajo de CIECODE**, así como su proyecto de incidencia política más ambicioso. No son pocos los proyectos que empiezan con mucha fuerza, pero cuya sostenibilidad se hace imposible en el medio y largo plazo. Por eso valoramos mucho el haber consolidado esta línea de trabajo y hemos decidido seguir apostando por el proyecto, renovando su base tecnológica, para resistir el paso del tiempo y evolucionar de forma ágil y dinámica.

Para nosotros **TIPI siempre ha sido especial**. En CIECODE no sobran manos y su desarrollo ha sido todo un reto. Viéndolo en perspectiva, creemos que hemos cumplido con nuestros objetivos. O al menos hemos abierto el camino hacia una verdadera vigilancia de la actividad del Congreso de los Diputados, con una clara vocación de promover el desarrollo sostenible y la justicia social. Aún nos queda por hacer, pero estamos recorriendo este camino convencidas de que llegaremos a donde nos habíamos propuesto.

Desde su diseño inicial, hemos buscado que responda a las últimas tendencias, que sea una herramienta actual y basada en una tecnología potente. Por ello, en un principio apostamos por Meteor, un framework de desarrollo basado en NodeJS que posibilitaba que el prototipado de proyectos basados en datos y tiempo real fuese lo más rápido posible. Durante un tiempo bastante razonable todo nos fue bien, pero empezamos a encontrar problemas:

* Las necesidades técnicas que la tecnología requería para una eficiencia razonable.

* La escasa comunidad de personas programadoras que utilizan Meteor.

* La web del Congreso de los Diputados no funcionaba ni funciona en tiempo real.

* Otros problemas relacionados con el mantenimiento y el despliegue de la aplicación.

Aun así, y con todas estas vicisitudes, hemos seguido hacia adelante de la mejor forma posible, intentando hacer cambios tecnológicos no muy drásticos. Pero recientemente nos hemos dado cuenta de que, en un mundo tan dinámico como en el que trabajamos, no nos podíamos permitir mantenernos en esa zona de confort.

## Qué son TIPI y sus proyectos

Me gustaría hacer un inciso para explicar algo que internamente en CIECODE hemos interiorizado, pero que es posible que no hayamos explicado lo suficiente hacia el exterior. Toda la visión que inicialmente se trabajó en el proyecto TIPI (transparencia, información, participación e incidencia) y se plasmó en TIPI Ciudadano nos ha servido, no sólo para tratar temas relacionados con la pobreza y la desigualdad en España desde una perspectiva más tradicional, sino también para buscar nuevos enfoques donde nuestra tecnología pueda aportar avances en la vigilancia y el seguimiento de la actividad política. Ejemplo de ello es Parlamento 2030, un proyecto desde el que vinculamos la actividad habitual del Congreso con la Agenda 2030 y sus Objetivos de Desarrollo Sostenible. Para cumplir nuestra aspiración de trabajar con diferentes enfoques de forma muy ágil nos hemos preocupado en los últimos meses de consolidar la **tecnología TIPI**. Esto nos permite implementar proyectos como **TIPI Ciudadano** o **Parlamento 2030** en cuanto surge la oportunidad, con la idea de que estas herramientas sean sólo el comienzo de un gran número de proyectos de vigilancia ciudadana de la actividad política.

Por todo lo anterior, **en 2018 nos hemos dedicado a organizar toda la arquitectura software de TIPI para hacerla fácilmente escalable, adaptable y liviana** en sus requerimientos hardware. El objetivo es que la tecnología no sea un problema, sino una solución.

Desde un punto de vista tecnológico, la arquitectura original contaba con los siguientes elementos:

* **TIPI Engine**, que era el encargado de obtener la información de la web del Congreso, etiquetar las iniciativas, enviar las alertas y generar estadísticas básicas. Este motor estaba desarrollado en Python.

* **TIPI Plataforma**, que se encargaba de hacer las veces de *frontend* (o capa más cercana al usuario) y *backend* (capa más cercana a los datos y a la lógica de la aplicación). Además disponía de una API tremendamente básica pero 100% funcional. Toda esta plataforma estaba desarrollada en Meteor (basado en NodeJS).

* **Base de datos no relacional MongoDB**, que inicialmente se eligió por su completa integración con el framework Meteor.

Ahora hemos modificado bastantes piezas de esta estructura, quedando de la siguiente forma:

* [**TIPI Engine](https://github.com/politicalwatch/tipi-engine)**, que sigue realizando las mismas funciones principales pero con una gran mejora a la hora de obtener las iniciativas, de etiquetarlas y, además, de ejecutar procesos de limpieza y transformación de datos.

* [**TIPI Alerts](https://github.com/politicalwatch/tipi-alerts)**, que se ha extraído del TIPi Engine y que se explicará en el apartado siguiente.

* [**TIPI Backend](https://github.com/politicalwatch/tipi-backend)**, en el que hemos desarrollado desde cero una API bastante completa y tremendamente documentada (usando Swagger) y que será el núcleo fundamental de nuestra web. Una API pública para nosotros y la misma API abierta a la ciudadanía con una intención 100% reutilizadora sobre nuestros datos (API de [TIPI Ciudadano](http://api.tipiciudadano.es) y [Parlamento2030](http://api.parlamento2030.es)). Todo ha sido desarrollado en Python, haciendo uso del framework Flask y del paquete Flask-RESTPlus.

* [**TIPI Frontend](https://github.com/politicalwatch/tipi-frontend)**, que se convierte en una web liviana, desacoplada del servidor y que sólo se comunica con él para la obtención de los datos a través de llamadas a su API. Todo esta parte ha sido desarrollada con VueJS.

* **Base de datos no relacional MongoDB**, que se conserva por su facilidad de uso y por su velocidad sobre todo a la hora de leer datos (gran parte de las operaciones que se realizan sobre ella son de lectura).

## Cómo hemos mejorado el sistema de alertas

Para CIECODE, la misión principal cuando ideamos TIPI Ciudadano fue pensar en que la ciudadanía activa e involucrada en la incidencia política no podía permanecer todo el día sentada delante del ordenador consultando la web del Congreso de los Diputados para monitorizar toda la actividad de la Cámara. Por ello generamos un sistema de alertas.

Este sistema lleva funcionando tres años con más de 500 personas y organizaciones sociales suscritas a las temáticas que ofrecemos. Desde luego es un alto volumen de correos y cada uno de ellos contiene un gran número de iniciativas, debido también a la amplia actividad parlamentaria que tiene lugar en el Congreso.

Pero **hasta ahora sólo era posible suscribirse a las temáticas** que ofrecemos, sin mayor nivel de desagregación, lo cual hacía que el número de alertas en determinadas épocas del año fuese desproporcionado y difícil de gestionar. Desde el principio sabíamos que el poder elegir sólo entre temáticas, sin poder ir más al detalle, era una limitación. Una limitación que cuando empezamos hace tres años nos podíamos permitir. Pero ahora, no. Queremos seguir mejorando. No solo la herramienta, sino la forma en la que facilitamos a los usuarios su labor.

Por todo lo anterior **hemos lanzado nuestro nuevo sistema de alertas** que, **sin registro** previo y **de una forma más sencilla**, **te permite guardar cada una de las búsquedas que hagas en la herramienta** con todos los filtros disponibles. De esta manera, el nivel de detalle se amplía y la labor de vigilancia se vuelve más eficaz.

## Próximos pasos

Para nosotros, TIPI Ciudadano y sus políticas sociales clásicas es un enfoque, la Agenda 2030 es otro y seguimos buscando más enfoques para no dejar ningún tema con repercusión social sin vigilar en el Congreso de los Diputados.

El Congreso fue el primer paso, pero no queremos quedarnos ahí. Sabemos que la realidad descentralizada española requiere de más esfuerzos en la vigilancia a la hora de dar respuesta a todas las necesidades de la ciudadanía en el seguimiento a las políticas autonómicas y locales. Ya hemos empezado a trabajar en ello, pero seguiremos profundizando en esta labor.

También somos conscientes de que la política no es sólo lo que ocurre en el Congreso de los Diputados y por ello tenemos la responsabilidad de avanzar en la vigilancia multimedio y transmedia.

Por último, queremos seguir contribuyendo a abrir nuestro conocimiento para que actores y actrices similares a nosotras a nivel nacional e internacional puedan usar nuestras herramientas y apropiarse de ellas con el objetivo de producir una transformación social distribuida.
