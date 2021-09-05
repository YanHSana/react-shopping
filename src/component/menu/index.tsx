import React from 'react';
import './index..css'
import {BrowserRouter as Router, Link } from "react-router-dom"

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
          <Link to='/my'>我的</Link>   
        </li>
      </ul>
      </Router>
    </div>
  )
}
export default menu;