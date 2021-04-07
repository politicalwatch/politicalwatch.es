---
title: 'La Asamblea de Madrid a vista de pájaro: análisis de la XI legislatura'
image:  '/images/posts/Asamblea_de_Madrid.jpg'
description: 'Se aproximan las nuevas elecciones en la Comunidad de Madrid, y antes de que llegue el momento de acudir a las urnas toca hacer balance de la legislatura que llegó a su fin tras menos de dos años de gobierno.'
author: belen-aguero
createdAt: 2021-04-07
related:
  - tipi-se-hace-mayor
  - comparativa-de-programas-electorales-con-tipi-ciudadano
  - breve-análisis-sobre-el-abordaje-de-la-calidad-democrática-por-los-partidos-políticos-en-españa
lineOfWork: democracy
---

Se aproximan las nuevas elecciones en la Comunidad de Madrid, y antes de que llegue el momento de acudir a las urnas toca hacer balance de la legislatura que llegó a su fin tras menos de dos años de gobierno.

Para hacer ese balance hemos acudido al [portal de datos abiertos](https://www.asambleamadrid.es/servicios/datos-abiertos) de la Asamblea de Madrid y descargado la base de datos que contiene todas las iniciativas presentadas por los diversos partidos durante el periodo legislativo. Aquí el primer reto ha sido que la base de datos no está completamente actualizada, ya que contiene datos hasta septiembre de 2020. Además, no hay en la web del portal de datos abiertos ningún tipo de información en relación a las fechas de actualización de estos datos.

Una vez descargada la base de datos, el siguiente paso para facilitar el análisis fue pasar todos los títulos de las iniciativas (puesto que la base de datos no ofrece el texto completo ni tampoco enlaces a las iniciativas) por el escáner de la herramienta [TIPI Ciudadano](https://tipiciudadano.es/). Para quienes no la conozcan, TIPI Ciudadano es una herramienta online totalmente gratuita desarrollada por Political Watch que permite etiquetar y clasificar las iniciativas parlamentarias presentadas en el Congreso de los Diputados en torno a [23 temáticas sociales](https://tipiciudadano.es/topics). La herramienta ofrece información actualizada sobre las iniciativas presentadas en el Congreso en torno a dichas temáticas. Además cuenta con una función de ‘escáner’ que permite etiquetar cualquier tipo de texto en clave de esas 23 temáticas. Dicha función es la que hemos utilizado para etiquetar y clasificar temáticamente las iniciativas presentadas a la Asamblea de Madrid.

![Gráfica que muestra la actividad parlamentaria de la XI legislatura de la Asamblea de Madrid](/images/posts/Asamblea_de_Madrid_XI_Legislatura.png)

[Con toda esta información](https://docs.google.com/spreadsheets/d/13cTb4FdbxtTwfCgm1wpFXLcsJyQgvSDZ1tKimVwTpd0/edit?usp=sharing) hemos generado un [dashboard](https://datastudio.google.com/reporting/c9edc071-c58b-4ff4-a4a2-c568ce2dd704/page/ckk7B) (o tablero dinámico) utilizando la herramienta Data Studio de Google que permite, a través de una serie de filtros, ver y analizar la actividad de cada partido en cada temática a lo largo de la recién finalizada legislatura.

Algunos datos que nos parece relevante resaltar:
* Se han presentado 22.212 iniciativas a lo largo de la legislatura.
* El PSOE es el partido con mayor número de iniciativas presentadas (9.228 iniciativas), seguido por VOX (5.537 iniciativas)  y en tercer lugar Más Madrid (5.039 iniciativas).
La temática con mayor número de iniciativas es Sanidad (4.086 iniciativas), que además es la temática con mayor número de iniciativas en todos los partidos, lo cual tiene mucho sentido debido al contexto de pandemia que ha marcado gran parte de la legislatura.
* El pico de iniciativas relacionadas con Sanidad se dio entre marzo y agosto de 2020, con el mayor pico durante el mes de julio.
* Otras temáticas con un amplio número de iniciativas presentadas son Infancia (980 iniciativas) e Igualdad de género (934 iniciativas).
* En total se han propuesto solamente 9 proposiciones de ley. De las cuales 2 están relacionadas con algunas temáticas de TIPI Ciudadano, una de ellas presentada por Unidas Podemos para promover la igualdad real o efectiva de las familias monoparentales en la Comunidad. Otra fue presentada por Más Madrid para la homogeneización presupuestaria de los centros sanitarios de la Comunidad.
* La mayor parte de las iniciativas (un 63%) han sido Peticiones de Información al Consejo de Gobierno. La mayoría de éstas (un 48%) han sido presentadas por el PSOE.
* Las preguntas, ya sea para respuesta oral en pleno o en comisión o para respuesta escrita, representan un 37% del total de iniciativas. Los mayores picos de actividad se dieron en preguntas relacionadas con la temática de Sanidad entre marzo y julio de 2020
* Un 8% de las iniciativas han sido peticiones de Comparecencias ante el Pleno relacionadas con Sanidad, concentradas a finales de 2019 y durante los primeros meses de pandemia (abril a junio de 2020).

Os compartimos el dashboard para su uso y reutilización en la elaboración de análisis relativos al desempeño de la Asamblea de Madrid en la legislatura que acaba de finalizar. Resaltamos que la información no es completa debido a que el portal de datos abiertos no ofrece información a partir de septiembre de 2020. En cuanto se publiquen dichos datos actualizaremos la base de datos y el dashboard.

<iframe width="100%" height="1100px" src="https://datastudio.google.com/embed/reporting/c9edc071-c58b-4ff4-a4a2-c568ce2dd704/page/ckk7B" frameborder="0" style="border:0" allowfullscreen></iframe>

<small>[Imagen de la Asamblea de Madrid](https://commons.wikimedia.org/wiki/File:Moci%C3%B3n_de_Censura_en_la_Asamblea_de_Madrid_(34453184973).jpg), CC BY 2.0 <https://creativecommons.org/licenses/by/2.0>, via Wikimedia Commons</small>
