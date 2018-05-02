import React, { Component } from 'react';
import Form from './Form';
//form CSS
import './App.css';
import Guesses from './Guesses';
//Guesses CSS

// The current number which the user is trying to guess.
// The user's most recent guess.
// A history of the user's guesses.
// The feedback currently being displayed to the user.
// The different options for feedback that the user can be given.


//App Component
//Guesses Component
//Form Component
//Header/Feedback Component

class App extends Component {
  constructor(props) {
    super(props);
    this.handleGuess = this.handleGuess.bind(this);
    this.state = {
      //store currentAns
      currentAnswer: Math.floor(Math.random()*100 + 1),
      //use spread operator to copy prior state
      lastGuess: '',
      guesses: [],
      //change feedback string depending on if (e.g., within 10)
      feedback: '',
      feedbackOptions: ['Hot', 'Cold', 'Kinda hot']
    }
  }

  handleGuess = guess=> {
    const difference = Math.abs(guess-this.state.currentAnswer);
    //push guess into guesses state, using setState (because we're updating guesses array)
    this.setState({
      //push this guess into guesses array
      //this copies prior guesses, adds most recent to it
      guesses: [...this.state.guesses, guess],
      lastGuess: guess, 
    })
    //compare it to real answer
    if(difference > 20) {
      this.setState({
        feedback: 'Cold'
      });
    } else if(difference < 20 && difference > 10) {
      this.setState({
        feedback: 'Kinda hot'
      });
    } else if(difference <=10) {
      this.setState({
        feedback: 'Hot'
      });
    }
    
    //update UI component showing their guess
    console.log('Guess is ', guess);
    console.log(typeof guess);
    console.log(this.state.guesses);
  }


  render() {
    return (
      <div className="App">
        <Form handleGuess={this.handleGuess}/>
        <Guesses history={this.state.guesses}/>
      </div>
    );
  }
}

export default App;
