const urlToShortenInput = document.getElementById('url-to-shorten');
const shortenButton = document.getElementById('shorten-button');
const shortenedUrlsList = document.getElementById('shortened-urls');

const shortenedUrls = [];

shortenButton.addEventListener('click', () => {
  shortURL();
});

function shortURL() {
  const urlToShorten = urlToShortenInput.value;

  if (urlToShorten) {
    // Fetch nos permite hacer una solicitud http a nuestro backend
    fetch('http://localhost:3000/api/shorturl?urlToShorten=' + urlToShorten)
      // La función then nos responde con un objeto que convertiremos en JSON utilizando la función `json`
      .then(response => response.json())
      // Después podemos agregar el URL acortado a nuestro arreglo y renderizar nuestra lista
      .then(json => {
        shortenedUrls.push(json.shortenURL.shortenedUrl);
        renderShortenedUrls();
      })
      // En caso de error podemos mostrarlo en la consola
      .catch(error => console.error(error));
  }
}

function renderShortenedUrls() {
  shortenedUrlsList.innerHTML = '';
  for (let shortenedUrl of shortenedUrls) {
    shortenedUrlsList.innerHTML += `<li><a href="${shortenedUrl}" target="_blank">${shortenedUrl}</a></li>`;
  }
  urlToShortenInput.value = '';
}