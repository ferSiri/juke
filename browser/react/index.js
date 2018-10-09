console.log('Hello React');

import React from 'react';

import ReactDOM from 'react-dom';

import Main from './Main.jsx'

import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { render } from 'react-dom';


ReactDOM.render(<BrowserRouter><Route path="/" component={Main} /></BrowserRouter>, document.getElementById('app'));



