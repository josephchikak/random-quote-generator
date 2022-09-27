
import React from "react";
import './ransomQ.css'


class RandomQ extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            quote: '',
            author: ''
        }

        this.componentDidMount = this.componentDidMount.bind(this);
     };
    //  fetch data from API and set it to state
    componentDidMount() {
        let currentComp = this;
        fetch("https://type.fit/api/quotes")
            .then(function(response) {
                return response.json();
             })
            .then(function(data) {
                let random = Math.floor(Math.random()*500)
              currentComp.setState({
                    quote: data[random].text,
                    author: data[random].author
                })
     });
    }
    
     render() {
        // created a random number for random colors
        const rnd = (min, max) => {
            return Math.floor(Math.random() * (max - min + 1) + min);
          };
         const textColor =`hsl(${rnd(0,360)},${rnd(10,100)}%,${rnd(0,50)}%)`
     
        return(
            <div id="quote-box">
                <h1 style={{color:textColor}} id="text">"{this.state.quote}"</h1>
                <p style={{color:textColor}} id="author">- Author: {this.state.author}</p>
                <div className='btn'>
                <button id="new-qoute"  onClick={this.componentDidMount}>New qoute</button>
                <a class="twitter-share-button" href="https://twitter.com/intent/tweet"> <button className="btn2"></button> </a>
                </div>
            </div>
        );
        }
}

export default RandomQ;