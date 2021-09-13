import React from 'react'
import { Link} from "react-router-dom"
import option from './config'
function my(){
  return(
    <div className='my-com'>
      <Link to='/my/login'>去登录</Link>
    </div>
  )
}
export default my;