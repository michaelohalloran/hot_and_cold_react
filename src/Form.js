import React, { Component } from 'react';
import './Form.css';

class Form extends Component {
    guessRef = React.createRef();

    //capture user guess, pass to handleGuess and reset form
    makeGuess = event=> {
        //prevent page refresh
        event.preventDefault();
        //grab guess value and turn into number, if it can be
        // if(!isNaN(parseInt(this.guessRef.current.value))) {
            const guess = parseInt(this.guessRef.current.value);
            //pass guess to App's handleGuess function
            this.props.handleGuess(guess);
            //clear input after submitting guess
            event.currentTarget.reset();
        // } else {
        //     alert('Please input a number');
        //     event.currentTarget.reset();
        // }
    }

    render() {
        return (
            <div>
                <form onSubmit={this.makeGuess}>
                    <div>
                        <input type="number" name="guess" ref={this.guessRef} placeholder="Enter your guess"/><br/>
                        <button disabled=
                            {this.props.gameStatus}
                        >
                            Guess
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}


export default Form;