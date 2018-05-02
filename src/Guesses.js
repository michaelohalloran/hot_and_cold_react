import React, { Component } from 'react';

class Guesses extends Component {
    render() {
        return (
            <div>
                <p>Guess # </p>
                {/* <p>Guess #{this.state.guesses.length}</p> */}
                {/*show guesses array here*/}
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