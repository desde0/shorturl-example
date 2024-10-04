# ShortURL

Este proyecto es utilizado como ejemplo para el [Taller para no programadores](https://desde0.jesusdmedinac.com/roadmap/para-no-programadores/1/).

En este simple proyecto exploramos las lógica detrás de un acortador de URLs.

## Frontend

Utilizando HTML, CSS y JavaScript básicos, generamos una aplicación web que no requiere de un servidor web para funcionar.

Sólo abre el archivo [frontend/index.html](frontend/index.html) en tu navegador.

Puedes leer más sobre cómo creamos el Frontend en la clase de [Frontend para no programadores](https://desde0.jesusdmedinac.com/roadmap/para-no-programadores/6/)

## Backend

El Frontend depende de un Backend para acortar y redirigir los URLs. Si no ejecutas el Backend en tu local, la aplicación web no funcionará.

Para crear el Backend utilizamos Node.js.

Puedes leer más sobre cómo creamos el Backend en la clase de [Backend para no programadores](https://desde0.jesusdmedinac.com/roadmap/para-no-programadores/7/)

### Instrucciones para ejecutar el Backend

Antes de ejecutar nuestro servidor web, asegúrate de tener instalado [Node.js](https://nodejs.org/en/download/).

Una vez instalado Node.js, podemos ejecutar el siguiente comando desde nuestro poyecto:

```shell
node backend/server.js
```

Este comando ejecuta nuestro servidor web, así que deberíamos ver el siguiente mensaje en nuestra terminal:

```shell
Server running on port 3000
```