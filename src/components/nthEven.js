import React from "react";
// import { useMemo } from "react";
import { suffixOf, calculateEven } from "./math";

function NthEven({ count, increment }) {
  const even = calculateEven(count);
  //   const even = useMemo(() => calculateEven(count), [count]);
  return (
    <>
      <div className="container">
        <h2>Nth Even</h2>
        <p>
          The <b>{suffixOf(count)}</b> prime number is <b>{even}</b>
        </p>
        <button className="btn btn-secondary" onClick={increment}>
          Next Number
        </button>
      </div>
    </>
  );
}

export default React.memo(NthEven);

// export default NthEven;
