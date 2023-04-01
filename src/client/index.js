import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';



ReactDOM.hydrate(<App Router={BrowserRouter}/>, document.getElementById('root'));
