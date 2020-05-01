import React, { useState, useEffect } from 'react';
import utils from "../utils";

import StarsDisplay from "./StarsDisplay";
import PlayNumber from "./PlayNumber";
import PlayButton from "./PlayButton";

const useGameState = () => {
    const [stars, setStars] = useState(utils.random(1, 9));
    const [availableNums, setAvailableNums] = useState(utils.range(1, 9));
    const [candidateNums, setCandidateNums] = useState([]);
    const [timer, setTimer] = useState(10);
    
    useEffect(() => {
      if(timer > 0 && availableNums.length > 0){
        const timerId = setTimeout(() => { setTimer(timer - 1); }, 1000);
        return () => clearTimeout(timerId);
      }
    });
    
    const play = (num, status) => {
      if(status !== "used"){
        let newCandidateNums = candidateNums;
        if(status == "available"){
          newCandidateNums = [...candidateNums, num];
          setCandidateNums(newCandidateNums);
        }
        if(utils.sum(newCandidateNums) == stars){
            const newAvailableNums = availableNums.filter(n => !newCandidateNums.includes(n));
            setAvailableNums(newAvailableNums);
            setCandidateNums([]);
            setStars(utils.randomSumIn(newAvailableNums, 9));
        }
  
        if(status == "candidate" || status == "wrong"){
            const availableNums = candidateNums.filter( n => n != num );
            setCandidateNums(availableNums);
        }
      }
    }
    
    return {stars, availableNums, candidateNums, timer, play};
  }
  
  const Game = ({restart}) => {
    const {stars, availableNums, candidateNums, timer, play} = useGameState();
    const candidatesAreWrong = utils.sum(candidateNums) > stars;
    const gameStatus = availableNums.length == 0 && timer > 0 ? "won" : timer > 0 ? "playing" : "Lost";
    
    const numberStatus = (number) => {
      if (!availableNums.includes(number)) {
        return 'used';
      }
      if (candidateNums.includes(number)) {
        return candidatesAreWrong ? 'wrong': 'candidate';
      }
      return 'available';
    };
    
    
    
    return (
      <div className="game">
        <div className="help">
          Pick 1 or more numbers that sum to the number of stars
        </div>
        <div className="body">
          <div className="left">
                      {
            gameStatus == "playing" ? 
              <StarsDisplay count={stars}/>
              : 
              <PlayButton gameStatus={gameStatus} onClick={restart}/>
            }
          </div>
          <div className="right">
            {utils.range(1, 9).map(number =>
            <PlayNumber 
                key={number} 
                status={numberStatus(number)}
                number={number}
                onClick={play}
              />
            )}
          </div>
        </div>
        <div className="timer">Time Remaining: {timer}</div>
      </div>
    );
};

export default Game;