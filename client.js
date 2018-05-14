import client from './example-app/client';
import React from 'react';
import { hydrate } from 'react-dom';

hydrate(
  React.createElement(client),
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept();
}