import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, NavLink, Switch } from "react-router-dom"

import First from './view/first/index';
import My from './view/my/index'
import Car from './view/car/index'
import Category from './view/category/index'
import errPage from './view/err/index'
function App(props: any) {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/' exact component={First}></Route>
          <Route path='/my' exact component={My}></Route>
          <Route path='/category' exact component={Category}></Route>
          <Route path='/car' exact component={Car}></Route>
          <Route path='/first' exact component={First}></Route>
          <Route component={errPage}></Route>
        </Switch>
        <ul>
          <li><Link to='/first'>首页</Link></li>
          <li><Link to='/category'>分类</Link></li>
          <li><NavLink to='/car'>购物车</NavLink></li>
          <li><NavLink to='/my'>我的</NavLink></li>
        </ul>
      </Router>
    </div>
  );
}

export default App;

