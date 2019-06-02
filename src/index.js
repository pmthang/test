import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Provider} from 'react-redux'
import thunk from 'redux-thunk';
import Hello from './Hello';
import './style.css';
import App from './App'
import store from './store'


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

