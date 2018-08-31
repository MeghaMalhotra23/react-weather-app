import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';
import {centralStore} from '../src/models/store';

ReactDOM.render(<Provider store={centralStore}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
