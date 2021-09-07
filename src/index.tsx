import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import Menus from './component/menu/index'
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router, Route } from "react-router-dom"
// import First from './view/first/index';
// import My from './view/my/index'
import Login from './view/login/index'
ReactDOM.render(
  <React.StrictMode>
    <Router>
    <App />
        {/* <Route path='/' exact component={App}></Route> */}
        <Route path='/my/login' exact component={Login}></Route>
    </Router>
    {/* <Menus></Menus> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
