import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Link} from "react-router-dom"
import {Home} from './Home'
import {About} from './About'
import {Student} from './Student'
export class Header extends Component {
render() {
return (
<Router>
   <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-dark">
         CRUD APP
         <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
         <span className="navbar-toggler-icon"></span>
         </button>
         <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
               <li className="nav-item">
                  <Link to="/" >Home</Link>
               </li>
               <li className="nav-item">
                  <Link to="/about">About</Link>
               </li>
               <li className="nav-item">
                  <Link to="/student">Student</Link>
               </li>
            </ul>
         </div>
      </nav>
      <Route exact path='/' component = {Home} />
      <Route path='/about' component = {About} />
      <Route path='/student' component = {Student} />
   </div>
</Router>
)
}
}