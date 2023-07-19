import React from 'react';

function GuessInput() {
  const [guess, setGuess] = React.useState('');

  function handleSubmit(event) {
    event.preventDefault();
    console.info({ guess });
    setGuess('');
  }

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        required={true}
        type="text"
        id="guess-input"
        minLength={5}
        maxLength={5}
        title="5 letter word"
        pattern="[A-Za-z]{5}"
        value={guess}
        onChange={(event) => {
          let newGuess = event.target.value.toUpperCase();
          setGuess(newGuess);
        }}
      />
    </form>
  );
}

export default GuessInput;
