import React from 'react';
import { range } from '../../utils';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
// We use range and NUM_OF_GUESSES_ALLOWED to generate our boxes.
// So we end up with 6 rows of 5 boxes each

import Guess from '../Guess/Guess';

function GuessResults({ guesses, answer }) {
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((num) => (
        <Guess key={num} value={guesses[num]} answer={answer} />
        // We still pass the guesses in related to the row number
      ))}
    </div>
  );
}

export default GuessResults;
