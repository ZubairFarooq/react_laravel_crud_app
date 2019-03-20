import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Link} from "react-router-dom"
import {AddStudent} from './Student/AddStudent'
import {ListStudent} from './Student/ListStudent'
import {EditStudent} from './Student/EditStudent'
export class Student extends Component {
render() {

const sPadding = {
    padding:5
}

return (
<Router>
   <div>
      <Link to="/addstudent" ><span style={sPadding}  >Add Student</span></Link>
      <Link to="/liststudent"><span style={sPadding}  >List Student</span></Link>
      <Route path='/addstudent' component = {AddStudent} />
      <Route path='/liststudent' component = {ListStudent} />
      <Route path='/editstudent/:id' component = {EditStudent} />
   </div>
</Router>
)
}
}
export default Student