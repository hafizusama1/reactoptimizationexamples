import React from "react";
// import { useMemo } from "react";
import { suffixOf, calculateOdd } from "./math";

function NthOdd({ count, increment }) {
  const odd = calculateOdd(count);
  //   const odd = useMemo(() => calculateOdd(count), [count]);
  return (
    <>
      <div className="container">
        <h2>Nth Odd</h2>
        <p>
          The <b>{suffixOf(count)}</b> prime number is <b>{odd}</b>
        </p>
        <button className="btn btn-secondary" onClick={increment}>
          Next Number
        </button>
      </div>
    </>
  );
}

export default React.memo(NthOdd);

// export default NthOdd;
