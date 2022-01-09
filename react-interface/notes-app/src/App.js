import './App.css';
import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import login from './components/login';


var sectionStyle = {
  width: "100vw",
  height: "100vh",
};

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App" style={sectionStyle}>
          <Switch>
            <Route path="/" exact strict component={login} />
            <Route path="/login" exact strict component={login} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
