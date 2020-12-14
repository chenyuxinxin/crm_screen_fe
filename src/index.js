import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'antd/dist/antd.css';
import App from './App';
import { HashRouter as Router } from 'react-router-dom'
import { Store } from 'components_fe'

ReactDOM.render(
    <Router>
        {
            Store.withGlobalStore(App)
        }
    </Router>,
    document.getElementById('root')
);