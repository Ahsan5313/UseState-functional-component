import React, {Component} from 'react'
import './style.css'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

import { BrowserRouter as Router,Switch,Route,Link, NavLink} from "react-router-dom";


import Home from '../Components/home'
import Contact from '../Components/contact'

import Write from '../Components/write'


import Navbar from 'react-bootstrap/Navbar'
import  Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'



class Welcome extends Component{


  render(){

    

    return(

      <Router>
          <div>   

            <Navbar bg="light" expand="lg">
              <Container>
                <Navbar.Brand > <NavLink exact activeStyle={{color: 'red'}}   to="/home">Ahsan_tHe_iGo_Moon</NavLink></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="me-auto">
                    <Nav.Link > <NavLink activeStyle={{color: 'green'}}  to="/home">Home</NavLink></Nav.Link>
                    <Nav.Link > <NavLink activeStyle={{color: '#23ade1'}}  to="/contact">Contact</NavLink></Nav.Link>              
                              
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>

      </div>

      <Switch>
    
      <Route path="/write">
            <Write />

          </Route>

      <Route path="/home">
            <Home />
          </Route>

          <Route path="/contact">
            <Contact />
          </Route>   

        </Switch>

          
      </Router>
    )
  }

}

export default Welcome;

