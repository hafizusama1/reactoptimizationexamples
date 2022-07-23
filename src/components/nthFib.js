import React from "react";
// import { useMemo } from "react";
import { suffixOf, calculateFib } from "./math";

function NthFib({ count, increment }) {
  const fib = calculateFib(count);
  //   const fib = useMemo(() => calculateFib(count), [count]);
  return (
    <>
      <div className="container">
        <h2>Nth Fib</h2>
        <p>
          The <b>{suffixOf(count)}</b> prime number is <b>{fib}</b>
        </p>
        <button className="btn btn-secondary" onClick={increment}>
          Next Number
        </button>
      </div>
    </>
  );
}

export default React.memo(NthFib);

// export default NthFib;
