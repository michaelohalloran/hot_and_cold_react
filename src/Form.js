import React, { Component } from 'react';

class Form extends Component {
    guessRef = React.createRef();

    makeGuess = event=> {
        //prevent page refresh
        event.preventDefault();
        //grab guess value and turn into number
        const guess = parseInt(this.guessRef.current.value);
        //pass guess to App's handleGuess function
        this.props.handleGuess(guess);
        //clear input after submitting guess
        event.currentTarget.reset();
    }

    render() {
        return (
            <div>
                <form onSubmit={this.makeGuess}>
                    <h2>Hot or Cold</h2>
                    <div>
                        <input type="text" name="guess" ref={this.guessRef} placeholder="Enter your guess"/>
                        {/* //need name to use e.target.banana */}
                        {/* //alternative: use ref to grab  */}
                        <button>Guess</button>
                    </div>
                </form>
            </div>
        );
    }
}


export default Form;