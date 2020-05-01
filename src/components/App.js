import React, { useState } from 'react';

import Game from "./Game";
// STAR MATCH - V4

const StarMatch = () => {
  const [ gameId, setGameId ] = useState(1);
  return <Game key={gameId} restart={() => setGameId(gameId + 1)}/>;
}

export default function App() {
  return (
    <StarMatch />
  );
}
