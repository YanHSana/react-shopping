import React, {useState, useEffect} from 'react'
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
// function getDate(){
//   axios.get('/community').then(res => {
//     console.log(res);  
//   })
// }
function methostest1(a, b){
  console.log(a + b);
  return a+b;
}

function Acom(props){
  const [title, settitle] = useState(props.title)
  useEffect(() => {
    console.log(title);
    console.log(props);
  },[title])
  return(
    <div>
      {title}
      <Button onClick={() => settitle(title + 'e')}>Click</Button>
    </div>
  )
}

function NumTest(props){
  return <><span>{props.numContent}</span></>
}

function NumNone(props){
  return <><span>{props.numContent}</span></>
}
function NumChange(props){
  const {numContent, numClor} = props.dataSource;
  if(numContent == '1000'){
    return <NumTest numContent={numContent} />
  }else{
    return <NumNone numContent={numContent} />
  }
}
function first(){
  let dataSource = {
    numContent: '1000',
    numColor: 'successColor'
  }

  let testA = methostest1(5,7);
  console.log(testA);
  
  return(
    <div className='first-com'>
     <h1>First-Component</h1>
     <p>{testA}</p>
      <Acom title='helloReactsss...'></Acom>
      <NumChange dataSource={dataSource}></NumChange>
    </div>
  )
}
export default withRouter(first);


