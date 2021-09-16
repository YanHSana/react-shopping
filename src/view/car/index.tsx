import React from 'react'

export default class Car extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      numContent: 1000,
    }
  }

  getData = () => {
    console.log('hello-react');
    
  }
  componentDidMount(){
    this.getData();
  }
  render(){
    return(
      <div>
            CAR
      </div>
    )
  }
}

