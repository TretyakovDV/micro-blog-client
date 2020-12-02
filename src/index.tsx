import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'mobx-react';
import Router from 'views/Router';
import stores from './stores';
import 'assets/global.css';
import reportWebVitals from './reportWebVitals';
// eslint-disable-next-line import/order
// import DevTools from 'mobx-react-devtools';

ReactDOM.render(
  <React.StrictMode>
    {/* eslint-disable-next-line react/jsx-props-no-spreading */}
    <Provider {...stores}>
      {/* <DevTools /> */}
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
