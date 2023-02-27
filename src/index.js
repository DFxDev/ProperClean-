import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AppProvider } from './component/context';
import './index.css';
import App from './App';
import React from 'react';


ReactDOM.render(
    <React.StrictMode>
      <AppProvider>   
        <App />
      </AppProvider>
    </React.StrictMode>,
 document.getElementById('root')
 );
