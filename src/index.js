import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App';

ReactDOM.render(
  // remove basename prop when switching to CNAME
  <BrowserRouter basename="/dance" >
    <App />
  </BrowserRouter>,
  document.getElementById('root'),
);
