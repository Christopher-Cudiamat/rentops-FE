import "react-app-polyfill/ie9";
import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux";
import store from "./configs/store.config";

// if (window.fetch()) {
//   // Check whether ES6 is supported in Modern Browsers
//   import("./App").then(function (module) {
//     module.default();
//   });
// } else {
//   // For legacy or old browsers
//   import("./polyfills").then(() => {
//     import("./App").then(function (module) {
//       module.default();
//     });
//   });
// }

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
