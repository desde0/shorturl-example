const url = require('url');
const { shortenedUrls } = require('./data.js');

function onRequest(req, res) {
  const {
    headers,
    parsedUrl,
    pathname,
    method,
  } = initResponse(req, res);

  if (method === 'GET' && pathname.startsWith('/api/shorturl')) {
    shortenURL(parsedUrl, headers, res);
  } else if (method === 'GET' && pathname.startsWith('/api/redirect')) {
    redirectURL(parsedUrl, res);
  } else {
    defaultResponse(headers, res);
  }
}

function initResponse(req, res) {
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET',
  };

  const parsedUrl = url.parse(req.url, true);
  const pathname = parsedUrl.pathname;
  const method = req.method;

  res.setHeader('Content-Type', 'application/json');

  return {
    headers,
    parsedUrl,
    pathname,
    method,
  }
}

function shortenURL(parsedUrl, headers, res) {
  const urlToShorten = parsedUrl.query.urlToShorten;
  const shortenURL = { 
    urlToShorten, 
    shortenedUrl: `http://localhost:3000/api/redirect?shortenedUrlIndex=${shortenedUrls.length + 1}`
  };
  shortenedUrls.push(shortenURL);
  shortenURL(urlToShorten);
  res.writeHead(200, headers);
  res.end(JSON.stringify({ 
    message: 'GET request to /api/shorturl', 
    shortenURL
  }));
}

function redirectURL(parsedUrl, res) {
  const shortenedUrlIndex = parsedUrl.query.shortenedUrlIndex
  res.writeHead(302, { Location: shortenedUrls[shortenedUrlIndex - 1].urlToShorten });
  res.end();
}

function defaultResponse(headers, res) {
  res.writeHead(404, headers);
  res.end(JSON.stringify({ message: 'Not found' }));
}

module.exports = {
  onRequest,
};