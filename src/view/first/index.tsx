import React from 'react'
import {withRouter} from 'react-router-dom'
import { Button } from 'antd';
import axios from 'axios'
// 请求数据
// axios.defaults.baseURL="https://api-hmugo-web.itheima.net/api/public/v1"
axios.defaults.baseURL = 'http://localhost:9000';
// function getDate():void{
//   axios.get('/community').then((res) => {
//     console.log(res);
//   })
// }
function getDate(){
  axios.get('/community').then(res => {
    console.log(res);  
  })
}

function first(props:any){
  return(
    <div className='first-com' key={props.location.key}>
      first
      {/* <Button type="primary" onClick={getDate}>Button-First</Button> */}
    </div>
  )
}
export default withRouter(first);