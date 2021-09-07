import React from 'react'
// import {Button} from 'antd';
import { Link} from "react-router-dom"
import Pie from '../../component/pie/index'
import option from './config'
function my(){
  return(
    <div className='my-com'>
      <Link to='/my/login'>去登录</Link>
      <Pie option={option}></Pie>
    </div>
  )
}
export default my;