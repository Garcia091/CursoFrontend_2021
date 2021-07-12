import React from 'react';
import ReactDOM from 'react-dom';
import BurgerApp from './BurgerApp';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';


ReactDOM.render(
  <React.StrictMode>
    <BurgerApp />
  </React.StrictMode>,
  document.getElementById('root')
);
