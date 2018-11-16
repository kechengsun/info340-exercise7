import React, { Component } from 'react';
// import { Jumbotron } from 'reactstrap';
import './style.css';

export class More extends Component {
    render() {
        let social="https://www.instagram.com/_kcsun__/"
        let work="www.linkedin.com/in/kechengsun"
        
        return (
        <div className="info">
            <h1>More info</h1>
            <p>Follow my <a href={social}>Instagram</a> and <a href={work}>Linkedln</a></p>
        </div>
        );
    }
}