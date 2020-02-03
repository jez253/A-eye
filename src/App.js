import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Homepage from './Pages/Homepage'
import NavBar from './Components/NavBar'
import Lessons from './Pages/Lessons'
import MLModels from './Pages/MLModels'
import Python from './Pages/Python'
import R from './Pages/R'
import SQL from './Pages/SQL'
import Stats from './Pages/Stats'
import Tensorflow from './Pages/Tensorflow'
import Regression from './Pages/Regression'
import { BrowserRouter as Router} from 'react-router-dom'
import { Route, Switch } from 'react-router-dom'
// import {Component }  from 'react';


function App() {
  return (
    <>
      <Router>
        <NavBar/>
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route exact path="/Homepage" component={Homepage} />
            <Route exact path="/lessons" component={Lessons} />
            <Route exact path="/MLModels" component={MLModels} />
            <Route exact path="/Python" component={Python} />
            <Route exact path="/R" component={R} />
            <Route exact path="/SQL" component={SQL} />
            <Route exact path="/Stats" component={Stats} />
            <Route exact path="/Tensorflow" component={Tensorflow} />
            <Route exact path="/Regression" component={Regression} />
          </Switch>
      </Router>
    </>
  );
}

export default App;
