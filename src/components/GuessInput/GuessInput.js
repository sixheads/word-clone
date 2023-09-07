import React from 'react';

function GuessInput({ handleSubmitGuess, gameStatus }) {
  // const [guess, setGuess] = React.useState('');
  // Josh's version - clearer variable name as
  // this is a tentative guess
  const [tentativeGuess, setTentativeGuess] = React.useState('');

  function handleSubmit(event) {
    event.preventDefault();
    // My version which works but not as nice
    // const newGuesses = [...guesses, guess];
    // setGuesses(newGuesses);

    // Josh's version
    handleSubmitGuess(tentativeGuess);
    setTentativeGuess('');
  }

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        required={true}
        // disable input if game is not running
        disabled={gameStatus !== 'running'}
        type="text"
        id="guess-input"
        minLength={5}
        maxLength={5}
        title="5 letter word"
        pattern="[A-Za-z]{5}"
        value={tentativeGuess}
        onChange={(event) => {
          let newGuess = event.target.value.toUpperCase();
          setTentativeGuess(newGuess);
        }}
      />
    </form>
  );
}

export default GuessInput;
