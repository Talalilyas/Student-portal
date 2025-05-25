import React from 'react';
import ReactDOM from 'react-dom/client';

import { BrowserRouter } from 'react-router-dom';


import { BrowserRouter, Route } from 'react-router-dom';
import Pagerouting from './Pagerouting';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>

    <Pagerouting/>

  </BrowserRouter>
);
