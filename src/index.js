import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'App';
import './index.css';
import data from './data.json';
import GetArrElem from './GetArrElem';

ReactDOM.createRoot(document.getElementById('root')).render(<App />);

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
