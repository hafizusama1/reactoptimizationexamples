import React, { useState,useMemo } from "react";
import { suffixOf, calculatePrime,calculateFib,calculateOdd,calculateEven } from "./math";

export default function UseMemoExample() {
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

  const incrementEven = () => {
    setNthEven((prev) => prev + 1);
  };

  const incrementOdd = () => {
    setNthOdd((prev) => prev + 1);
  };

  const incrementPrime = () => {
    setNthPrime((prev) => prev + 1);
  };

  const incrementFib = () => {
    setNthFib((prev) => prev + 1);
  };

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

function NthPrime({ count, increment }) {
  // const prime = calculatePrime(count);
  const prime = useMemo(() => calculatePrime(count), [count]);

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

function NthFib({ count, increment }) {
  // const fib = calculateFib(count);
  const fib = useMemo(() => calculateFib(count), [count]);
  return (
    <>
      <div className="container">
        <h2>Nth Prime</h2>
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

function NthEven({ count, increment }) {
  // const even = calculateEven(count);
  const even = useMemo(() => calculateEven(count), [count]);
  return (
    <>
      <div className="container">
        <h2>Nth Prime</h2>
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

function NthOdd({ count, increment }) {
  // const odd = calculateOdd(count);
  const odd = useMemo(() => calculateOdd(count), [count]);
  return (
    <>
      <div className="container">
        <h2>Nth Prime</h2>
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

