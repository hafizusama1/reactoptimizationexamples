import React, { useState, useCallback } from "react";
import NthPrime from "./nthPrime";
import NthFib from "./nthFib";
import NthOdd from "./nthOdd";
import NthEven from "./nthEven";

export default function UseCallBackExample() {
  const [nthEven, setNthEven] = useState(1);
  const [nthOdd, setNthOdd] = useState(1);
  const [nthPrime, setNthPrime] = useState(1);
  const [nthFib, setNthFib] = useState(1);

  const reset = () => {
    setNthEven(1);
    setNthFib(1);
    setNthOdd(1);
    setNthPrime(1);
  };

  const incrementByTen = () => {
    setNthEven((prev) => prev + 10);
    setNthFib((prev) => prev + 10);
    setNthOdd((prev) => prev + 10);
    setNthPrime((prev) => prev + 10);
  };

  const incrementEven = useCallback(() => {
    setNthEven((prev) => prev + 1);
  }, []);

  const incrementOdd = useCallback(() => {
    setNthOdd((prev) => prev + 1);
  }, []);

  const incrementPrime = useCallback(() => {
    setNthPrime((prev) => prev + 1);
  }, []);

  const incrementFib = useCallback(() => {
    setNthFib((prev) => prev + 1);
  }, []);

  return (
    <>
      <div className="container mt-4">
        <button className="btn btn-primary" onClick={incrementByTen}>
          Add 10
        </button>
        <button
          className="btn btn-primary"
          style={{ marginLeft: "20px" }}
          onClick={reset}
        >
          Reset
        </button>
      </div>
      <hr />
      <NthFib count={nthFib} increment={incrementFib} />
      <hr />
      <NthPrime count={nthPrime} increment={incrementPrime} />
      <hr />
      <NthEven count={nthEven} increment={incrementEven} />
      <hr />
      <NthOdd count={nthOdd} increment={incrementOdd} />
    </>
  );
}
