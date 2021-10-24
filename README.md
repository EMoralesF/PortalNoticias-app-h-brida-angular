# Portal de noticias GlobalNews: aplicación híbrida con Ionic
Aplicación híbrida desarrollada con framerwork Ionic sobre Angular 11 y API externa NewsApi.

# Frontend

La interfaz se ha desarollado con el uso del componente <b>tabs</b> disponible en Ionic.

Interfaz en resolución de Iphone X:

[![1-USNews-vista.png](https://i.postimg.cc/15DvMxmL/1-USNews-vista.png)](https://postimg.cc/4mNvNSh5)[![2-Categorias-vista.png](https://i.postimg.cc/66kHd6Xr/2-Categorias-vista.png)](https://postimg.cc/t7ztbj7J)[![3-Idiomas-vistas.png](https://i.postimg.cc/mgR85dhh/3-Idiomas-vistas.png)](https://postimg.cc/F7WyfVyQ)

US News:

[![1-USNews-vista.png](https://i.postimg.cc/15DvMxmL/1-USNews-vista.png)](https://postimg.cc/4mNvNSh5)

Categorías:

[![2-Categorias-vista.png](https://i.postimg.cc/66kHd6Xr/2-Categorias-vista.png)](https://postimg.cc/t7ztbj7J)

Idiomas:

[![3-Idiomas-vistas.png](https://i.postimg.cc/mgR85dhh/3-Idiomas-vistas.png)](https://postimg.cc/F7WyfVyQ)

# Acceso a servicios

Con el uso de la api externa <a href="https://newsapi.org/">NewsApi</a> se han obtenido los datos expuestos en el frontend de la aplicación. 
A través del servicio noticias se han hecho las llamadas necerias.

[![4-servicios.png](https://i.postimg.cc/nV6JCQhp/4-servicios.png)](https://postimg.cc/Hj4KNnMh)

Para acceder las propiedades de las noticias debemos disponer de interfaces que nos permitan obtener esos datos. Con ayuda de la extensión <b>JSON to TS</b> se ha cambiado el formato de los datos de la Api para que puedan usarse en la interfaz de la aplicación.
