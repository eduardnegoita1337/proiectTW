import './App.css';
import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import login from './components/login';
import Home from './components/Home';
import Labs from './components/Labs';
import Courses from './components/Courses';
import Navbar from './components/navbar'
import Subjects from './components/Subjects';


function App() {
    return (
        <>
          <Router>
          <Navbar/>
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/labs"  component={Labs}/>
            <Route path="/login" exact strict component={login} />
            <Route path="/courses"  component={Courses}/>
            <Route path="/subjects"  component={Subjects}/>


          </Switch>
          </Router>
          </>
    );
  }


export default App;
