# Lab Car
Labcar es una empresa de taxis que te permite pedir un taxi cuando quieras y en donde quieras.
## La página web de Labcar esta conformada por:
- navbar
- hero
- information
- drive
- tarifa
- footer

Cada sección se desarrollo en diferentes ramas, empezando por el navbar y finalizando con footer.

El sitio web se desarrollo con CSS, HTML, JS, y uso de API de google Maps.

Al cargar la página web nos solicita permiso para localizar nuestra ubicacion, se debe permitir para encontrar nuestra ubicación y 
poder calcular la distancia.

Desarrollado por: Miriam Peralta Castañeda

**Ver web page aqui:** https://miriampc.github.io/proyecto-final-sprint4/

![LabCar](images/logo.png)

# LabCar | Servicio de Taxi

## El proyecto
Proyecto final del Sprint4 del Bootcamp de Laboratoria < l >

- El proyecto consiste en implementar una página web que ofrece el servicio de taxi, dar la ubicación actual del usuario y le permita ingresar su punto de partida y punto de destino y mostrar la tarifa del recorrido.
- Para el desarrollo del proyecto se usó el framework de css Bootstrap.

## Fuentes consultadas:
- Bootstrap: url(http://getbootstrap.com/components/)
- Google MapsAPI: url(https://developers.google.com/maps/?hl=es-419)

## LabCar: contenido

### Nav-Hero
El nav en la versión mobile aparece como una menú tipo hamburguesa.<br/>
![gif-nav](img-read/nav-hero.gif)

En la versión desktop se visualiza así:<br/>
![Navbar](img-read/nav-hero.jpg)

### Información
En esta sección tenemos una maquetado que utiliza clases de bootstrap como thumbnail entre otras<br/>
![Información](img-read/info.jpg)

### Conduce
Aquí se aplican conocimientos previos como hacer un background con color en rgba entre otros recursos<br/>
![Conduce](img-read/conduce.jpg)


### Tarifa
En esta sección aparecerá el mapa con nuestra ubicación, al permitirle al navegador que acceda a nuestros datos, para lo cual empleamos el Api de HTML5 y el Api de Google Maps<br/>
- Para usar el Api de Google Maps necesitamos colocar este script en nuestro html (En este script hay que colocar nuestra key, generada en https://developers.google.com/maps/documentation/javascript/places?hl=es-419#place_searches): <script async defer src="https://maps.googleapis.com/maps/api/js?key=YOUR-KEY&callback=FUNCION&libraries=places"
  type="text/javascript"></script> <br/>
![Función para obtener ubicación](img-read/miUbicacion.jpg)

- Para trazar la ruta se hace uso de los recursos de la Api de Google Maps:<br/>
![Función para trazar ruta](img-read/trazar.jpg)

- Para trazar la ruta como hemos visto en la función anterior se hizo uso de los objetos que nos proporciona esta api: google.maps.DirectionsService, el cual se encarga de obtener las coordenadas y con que medio te movilizas para indicarte las inflexiones;
google.maps.DirectionsRenderer, que en términos simples se encargará de traducir la ruta y plasmarlo por medio de líneas. Veamos como funciona: <br/>
![gif-tarifa](img-read/trazar.gif)


### Footer
Tiene varios links, se uso flexbox y el grid de bootstrap <br/>
![Footer](img-read/footer.jpg)

## Versión Mobile
![gif-versión-Mobile](img-read/vMobile.gif)

## Desarrollado con:

`HTML` `JavaScript` `CSS` `BOOTSTRAP` `APIs`
