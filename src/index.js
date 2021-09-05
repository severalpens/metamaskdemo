import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import NoMetamask from './NoMetamask';

if(typeof window.ethereum !== 'undefined'){
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  );
}
else{
  ReactDOM.render(
    <React.StrictMode>
      <NoMetamask />
    </React.StrictMode>,
    document.getElementById('root')
  );

}

reportWebVitals();
