import React from "react";
// import { useMemo } from "react";
import { suffixOf, calculatePrime } from "./math";

function NthPrime({ count, increment }) {
  const prime = calculatePrime(count);
  //   const prime = useMemo(() => calculatePrime(count), [count]);

  return (
    <>
      <div className="container">
        <h2>Nth Prime</h2>
        <p>
          The <b>{suffixOf(count)}</b> prime number is <b>{prime}</b>
        </p>
        <button className="btn btn-secondary" onClick={increment}>
          Next Number
        </button>
      </div>
    </>
  );
}

export default React.memo(NthPrime);

// export default NthPrime;
