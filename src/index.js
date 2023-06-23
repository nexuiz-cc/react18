/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import AntdMobileConfig from './AntdMobileConfig';

const root = createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <AntdMobileConfig>
      <App />
    </AntdMobileConfig>
  </React.StrictMode>,
);
