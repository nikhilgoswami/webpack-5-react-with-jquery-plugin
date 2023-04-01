import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from '../client/App';
import { StaticRouter } from 'react-router-dom/server';

const app = express();

app.get('/', (req, res) => {
  const appMarkup = ReactDOMServer.renderToString(<App Router={StaticRouter} routerProps={{
    location: req.originalUrl,
  }}/>);
  res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>My SSR App</title>
      </head>
      <body>
        <div id="root">${appMarkup}</div>
        <script src="/client.bundle.js"></script>
      </body>
    </html>
  `);
});

app.use(express.static('public'));

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
