import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import GuessInput from '../GuessInput';
import GuessResults from '../GuessResults/GuessResults';
import WonBanner from '../WonBanner/WonBanner';
import LostBanner from '../LostBanner/LostBanner';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });
console.log(NUM_OF_GUESSES_ALLOWED);

function Game() {
  const [gameStatus, setGameStatus] = React.useState('running');
  const [guesses, setGuesses] = React.useState([]);

  function handleSubmitGuess(guess) {
    // we create a new array here called nextGuesses
    // this new array updates automatically so now our length
    // is always correct
    const nextGuesses = [...guesses, guess];
    setGuesses(nextGuesses);

    if (guess === answer) {
      setGameStatus('won');
    } else if (nextGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameStatus('lost');
    }
  }

  return (
    <>
      {gameStatus === 'won' && (
        <WonBanner numOfGuesses={guesses.length} />
      )}
      {gameStatus === 'lost' && <LostBanner answer={answer} />}

      <GuessResults guesses={guesses} answer={answer} />
      {/* My version */}
      {/* <GuessInput guesses={guesses} setGuesses={setGuesses} /> */}
      <GuessInput
        handleSubmitGuess={handleSubmitGuess}
        gameStatus={gameStatus}
      />
    </>
  );
}

export default Game;
