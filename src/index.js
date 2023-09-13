import React from 'react';
import ReactDOM from 'react-dom';
import './styles/global-styles.css';
import App from './Pages/Home';
import { BrowserRouter, Route } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

