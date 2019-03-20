import React, { Component } from 'react'
import axios from 'axios'

export class AddStudent extends Component {

    constructor(){
        super();
        this.onChangeStudentName = this.onChangeStudentName.bind(this);
        this.onChangeStudentRoll = this.onChangeStudentRoll.bind(this);
        this.onChangeStudentMarks = this.onChangeStudentMarks.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            student_name:'',
            student_roll:'',
            student_marks:''
        }
    }

    onChangeStudentName(e){
        this.setState({student_name:e.target.value})
    }

    onChangeStudentRoll(e){
        this.setState({student_roll:e.target.value})
    }

    onChangeStudentMarks(e){
        this.setState({student_marks:e.target.value})
    }

    onSubmit(e){
        e.preventDefault();
        const { history } = this.props
        const student = {
            student_name: this.state.student_name,
            student_roll: this.state.student_roll,
            student_marks: this.state.student_marks
        }

        axios.post('http://localhost:8000/student/store', student)
        .then(response => {
            console.log(response);
            history.push('/liststudent')
        });

    }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
            <div className="form-group">
                <label htmlFor="student_name">Student Name</label>
                <input type="text" 
                name="student_name"
                className="form-control" 
                id="student_name" 
                aria-describedby="emailHelp" 
                placeholder="Enter Student name" 
                value={this.state.student_name}
                onChange={this.onChangeStudentName}
                />
            </div>

            <div className="form-group">
                <label htmlFor="student_roll">Student Roll Number</label>
                <input type="text" 
                name="student_roll"
                className="form-control" 
                id="student_roll" 
                aria-describedby="emailHelp" 
                placeholder="Enter Student name" 
                value={this.state.student_roll}
                onChange={this.onChangeStudentRoll}
                />
            </div>

            <div className="form-group">
                <label htmlFor="student_marks">Student Marks</label>
                <input type="text" 
                name="student_marks"
                className="form-control" 
                id="student_marks" 
                aria-describedby="emailHelp" 
                placeholder="Enter Student name" 
                value={this.state.student_marks}
                onChange={this.onChangeStudentMarks}
                />
            </div>
  
            <button type="submit" className="btn btn-primary">Submit</button>

        </form>
      </div>
    )
  }
}