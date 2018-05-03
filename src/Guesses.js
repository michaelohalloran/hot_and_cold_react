import React, { Component } from 'react';
import './Guesses.css';

class Guesses extends Component {
    render() {
        return (
            <div className="guessCount">
                <p >Guess # {this.props.history.length}</p>
                <ul>
                    {this.props.history.map((guess, index)=> {
                        return <li key={index}>{guess}</li>
                    })}
                </ul>
            </div>
        );
    }
}
export default Guesses;