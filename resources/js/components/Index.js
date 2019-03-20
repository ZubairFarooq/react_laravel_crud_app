import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import {Header} from './Header'
import {Footer} from './Footer'

export default class Index extends Component {
    render() {
        return (
           <div>
               
               <div className="container">
                    <Header />
                   
                    <Footer />
                </div>    
           </div>
        );
    }
}

if (document.getElementById('index')) {
    ReactDOM.render(<Index />, document.getElementById('index'));
}
