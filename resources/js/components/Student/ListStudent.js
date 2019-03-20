import React, { Component } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

export class ListStudent extends Component {

constructor(){
    super();
    // this.onDelete = this.onDelete.bind(this);
    this.state = {
        students:[]
    }
}

componentDidMount(){

    axios.get('http://localhost:8000/students')
    
      .then(response => {
        this.setState({students:response.data});
    });
}

onDelete(student_id){
    // console.log(student_id.student_id);

    axios.delete('student/delete/'+student_id)
    .then(res =>{
        
        var students = this.state.students;

        for(var i = 0; i<students.length; i++){

            if(students[i].id == student_id){
                students.splice(i,1);
                this.setState({students:students});
            }

        }


    })


}

render() {
return (
<div>
   <table className="table">
      <thead>
         <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
         </tr>
      </thead>
      <tbody>
        {
            this.state.students.map( student => {
                return(
                <tr key={student.id} >
                     <th scope="row">{student.id}</th>
                    <td>{student.student_name}</td>
                    <td>{student.student_roll}</td>
                    <td>{student.student_marks}</td>

                    <td>
                        <a onClick={this.onDelete.bind(this, student.id)}  className="btn btn-danger btn-sm">Delete</a>
                        <Link  to={'/editstudent/'+student.id}><span className="btn btn-warning btn-sm" >Edit</span></Link>
                    </td>


                </tr>
                )
            })

        }
         
      </tbody>
   </table>
</div>
)
}
}