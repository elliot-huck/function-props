import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Kennel from './Kennel';

ReactDOM.render(<Kennel />, document.getElementById('root'));
registerServiceWorker();
