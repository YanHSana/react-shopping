import React from 'react';
import './App.css';
import { Button } from 'antd';
import {BrowserRouter as Router, Route, Switch } from "react-router-dom"
import First from './view/first/index';
import My from './view/my/index'

function App(props:any) {
  return (
    <div className="App">
      <Router>
      <header className="App-header">    
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Button type="primary" onClick={() => console.log(props)
        }>Button-app</Button>
      </header>
      <Switch>
        <Route path='/my' exact component={My}></Route>
        <Route path='/first' exact component={First}></Route>
        <Route path='/' exact component={My}></Route>
      </Switch>

      </Router>
    </div>
  );
}

export default App;
