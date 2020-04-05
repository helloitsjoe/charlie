import fs from 'fs';
import path from 'path';
import express from 'express';

import React from 'react';
import { renderToString } from 'react-dom/server';

// FIXME Haven't been able to get preact SSR working - I keep getting Invalid Hooks
// errors from React, but React shouldn't be referenced at all...

// import renderToString from 'preact-render-to-string';
// import { h } from 'preact';
// Add [at]jsx h to enable JSX

import App from './app';

const app = express();

const PORT = 3000;

app.get('/', (req, res) => {
  const indexFile = path.resolve('./dist/index.html');
  fs.readFile(indexFile, 'utf-8', (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).send({ message: err.message });
    }

    const jsx = renderToString(<App />);
    const html = data.replace('<div id="main" />', `<div id="main">${jsx}</div>`);
    // console.log(`html:`, html);
    return res.status(200).send(html);
  });
});

// This needs to be after app.get('/' ...), which serves the SSRed index.html.
// We still need this to serve JS, css, etc
app.use(express.static('./dist'));

app.listen(PORT, () => {
  console.log(`App listening at http://localhost:${PORT}`);
});
