import React, { useState, useEffect } from 'react';
// by default runs after every re-render
// cleanup function
// second parameter

// Second parameter of useeffect hook is a dependency array or value. If an empty array, the useEffect will only be called once and not after each re-rendering. If a valid dependency is used, then the useeffect will only run when the dependency is altered

const UseEffectBasics = () => {
  const [value, setValue] = useState(0);
  useEffect(() => {
    console.log('useEffect called');
    if (value > 0) {
      document.title = `Messages(${value})`;
    }
  }, [value]);
  console.log('render component');

  return (
    <>
      <h1>{value}</h1>
      <button
        className='btn'
        onClick={() => {
          setValue(value + 1);
        }}
      >
        Click me
      </button>
    </>
  );
};

export default UseEffectBasics;
