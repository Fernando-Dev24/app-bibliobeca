import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import {GetDataProvider} from './contexts/GetDataContext';

ReactDOM.render(
  <BrowserRouter>
    <GetDataProvider>
      <App />
    </GetDataProvider>
  </BrowserRouter>,
  document.getElementById('root')
);