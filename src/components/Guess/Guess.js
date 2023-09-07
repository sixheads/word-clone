import React from 'react';
import { range } from '../../utils';
import { checkGuess } from '../../game-helpers';
// we use range here to make our 5 boxes initially

function Cell({ letter, status }) {
  // each cell has a Letter and Status returned from result
  // we use the status to set the className
  const className = status ? `cell ${status}` : 'cell';
  return <span className={className}>{letter}</span>;
}

function Guess({ value, answer }) {
  const result = checkGuess(value, answer);
  // we use checkGuess to get the result of the guess
  // we pass in the value and the answer
  // we get back an object with the correct and incorrect values
  console.log(result);
  return (
    <p className="guess">
      {range(5).map((num) => (
        // we map over the range and check if there is a value
        // if not we return undefined
        // if there is a value we return the value at the index
        <Cell
          key={num}
          letter={result ? result[num].letter : undefined}
          status={result ? result[num].status : undefined}
        />
      ))}
    </p>
  );
}

export default Guess;
