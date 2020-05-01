import React from 'react';

const PlayButton = (props) => {
    return (
      <div className="game-done">
        <p className="message" style={{ color: props.gameStatus == "won" ? "green" : "red" }}>{ props.gameStatus == "won" ? "You Won!" : "Game Over!" }</p>
        <button onClick={props.onClick}>Play Again</button>
      </div>
    );
}

export default PlayButton;