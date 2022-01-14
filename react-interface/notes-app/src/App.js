import './App.css';
import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import login from './components/login';
import MainPage from './components/mainPage';
import { Container, Row, Col } from "react-bootstrap";
import Sidebar from './components/sidebar';


function App() {
    return (
      <Container fluid>
        <Row>
          <Col lg={2} id="sidebar-wrapper" className="d-none d-sm-block">
          <Sidebar/>
          </Col>
          <Col lg={10} xs={12} id="page-content-wrapper">
          <BrowserRouter>
          <div className="App">
          <Switch>
            <Route path="/" render={(props)=><MainPage/>}/>
            <Route path="/login" exact strict component={login} />
          </Switch>
          </div>
          </BrowserRouter>
        </Col>
        </Row>
        </Container>
    );
  }


export default App;
