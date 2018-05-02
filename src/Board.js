import React, {Component} from 'react';

class Board extends Component {
    render() {
        return (
            <div>
                <h2>Hot or Cold</h2>
                <div>
                    <input type="text" placeholder="Enter your guess"/>
                    <button onClick={this.props.handleGuess}>Guess</button>
                    <p>Guess#</p>
                </div>
            </div>
        );
    }
}
export default Board;