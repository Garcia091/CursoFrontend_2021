import React from 'react';
import ReactDOM from 'react-dom';


import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import AgendaApp from './container/AgendaApp';
import './style/main.css'

ReactDOM.render(
  <React.StrictMode>
    <AgendaApp />
  </React.StrictMode>,
  document.getElementById('root')
);


