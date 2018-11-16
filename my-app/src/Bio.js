import React, { Component } from 'react';
// import { Jumbotron } from 'reactstrap';
import * as d3 from 'd3';
import './style.css';

export class Bio extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
      }
    
    componentDidMount() {
        d3.csv("data.csv").then((d) => {
            this.setState({ data: d });
        });
    }

    render() {
        console.log(this.state.data)
        let url="https://www.mccallie.org/"
        let sz="https://www.lonelyplanet.com/china/guangdong/shenzhen"
        return (
            <div>
                <h1>Short Bio</h1>
                {this.state.data.map((d, i) => {
                    return <p key={"person-" + i}>Year: {d.time} I lived in: {d.location}</p>
                })}
                <p className="long">I was born in coastal city in southern China called 
                <a href={sz}>Shenzhen</a>, where
                I spent most of my childhood in. In order to get better education, I 
                came to U.S. at 2013 and attended <a href={url}>McCallie School</a>, a 
                top private bording school in the nation. At McCallie, I was not only 
                immersed into rigorous academic environment, my experience as a varsity 
                rower also transformed me into a mentally tough and self-disciplined person.
                Upon graduation, I chose 
                University of Washington due to its high reputation in IT industry and 
                resources available to Seattle. At UW, I am fascinated by the interaction 
                among technology, people, and design. I am still exploring different options 
                within the field of information technology, but I envision myself to be a 
                creative, detail-oriented, and aspiring UX designer in my early career. 
                Preferrably, I can work in a sunny place like SoCal. Outside the classroom, my 
                current main focuses are build an effective and visually appealing portfolio and 
                finding opportunities to practice my skills. Other personal interests include 
                sports, baking, and traveling.
                </p>
            </div>
        );
    }
}