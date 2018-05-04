import React, { Component } from 'react';
import Header from './Header';
//Header CSS
import Form from './Form';
//form CSS
import './App.css';
import Guesses from './Guesses';

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
    this.startNewGame = this.startNewGame.bind(this);
    this.state = {
      //store currentAns
      currentAnswer: Math.floor(Math.random()*100 + 1),
      //use spread operator to copy prior state
      lastGuess: '',
      guesses: [],
      //change feedback string depending on if (e.g., within 10)
      feedback: '',
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

  // console.log(`guess is ${guess} with type ${typeof guess}`)
        //compare it to real answer
    
    if(difference===0) {
      this.setState({
        feedback: 'You win!'
      });
    } else if(difference <=10) {
      this.setState({
        feedback: 'Hot'
      });
    } else if(difference < 20 && difference > 10) {
      this.setState({
        feedback: 'Kinda hot'
      });
    } else if (difference > 20) {
      this.setState({
        feedback: 'Cold'
      });
    } 
     
    // console.log('Guess is ', guess);
    // console.log(typeof guess);
    // console.log(this.state.guesses);
  } //end of handleGuess function

  startNewGame() {
    //reset state to initial status
    this.setState({
      currentAnswer: Math.floor(Math.random()*100 + 1),
      //use spread operator to copy prior state
      lastGuess: '',
      guesses: [],
      //change feedback string depending on if (e.g., within 10)
      feedback: '',
    })
  }

  //gameStatus passes a Boolean (true if someone just won the game)
  render() {
    return (
      <div className="App">
        <div className = "appHeader">
          <Header 
            feedback={this.state.feedback} 
            startNewGame={this.startNewGame} 
            gameStatus={this.state.lastGuess === this.state.currentAnswer}
          />
        </div>
        <div className = "appForm">
          <Form 
            handleGuess={this.handleGuess} 
            gameStatus={this.state.lastGuess === this.state.currentAnswer}
          />
        </div>
        <div className = "appGuess">
          <Guesses history={this.state.guesses}/>
        </div>
      </div>
    );
  }
}

export default App;
