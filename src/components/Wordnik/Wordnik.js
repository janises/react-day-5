import React, {Component} from "react";
import "./Wordnik.css";
import axios from "axios";

export default class Wordnik extends Component {
    constructor() {
        super();

        this.state = {
            word: "",
            definitions: []
        };

    }



    define(event) {
        event.preventDefault();
        axios.get("http://api.wordnik.com:80/v4/word.json/"+ this.state.word +"/definitions?&includeRelated=true&useCanonical=true&includeTags=false&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5")
            .then((response) => {
                console.log(response);
                this.setState({
                    definitions: response.data
                })
            })
    }

    handleInput(event) {
        this.setState({
            word: event.target.value,
            definitions: []
        })
    }

    render() {
      const definitions = !this.state.definitions.length ? null : (
      <div> 
          <h2> {this.state.word} </h2>
          <ul className="entries">
            {
                this.state.definitions.map((element, index)=> (
                    <li key={index}>
                        <p>{element.partOfSpeech}</p>
                        <p>{element.text}</p>
                        <p>{element.attributution}</p>
                    </li>
                ))
            }
          </ul>    
      </div>);  

        return (
            <div className="wordnik">
                <form className="word-form" onSubmit={(e) => this.define(e) }>
                    <input value={this.state.word} className="word-input" onChange={(e)=> this.handleInput(e) }/>    
                </form> 
                {definitions}
            </div>
        )
    }
}