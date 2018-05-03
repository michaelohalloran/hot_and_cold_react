import React, { Component } from 'react';

class Header extends React.Component {
    render() {
        return(
            <div>
                <h2>Hot and Cold</h2>
                <h3>{this.props.feedback}</h3>
                {this.props.gameStatus && <button onClick={this.props.startNewGame}>New Game?</button>}
            </div>
        );
    }
}
export default Header;