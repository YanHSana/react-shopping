import React from 'react';
import './index..css'
import {BrowserRouter as Router, Link, NavLink } from "react-router-dom"

function menu(props:any){
  return(
    <div className='menu'>
      <Router>
      <ul>
        <li>
          <Link to='/first'>首页</Link>
        </li>
        <li>分类</li>
        <li>购物车</li>
        <li>
          <NavLink to='/my'>我的</NavLink>   
        </li>
      </ul>
      </Router>
    </div>
  )
}
export default menu;