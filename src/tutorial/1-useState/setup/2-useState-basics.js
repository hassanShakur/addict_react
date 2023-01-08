import React, { useState } from 'react';

// Hooks properties
// All start with the word use
// Components containing the hook must start with an uppercase
// The hook must be in function/component body
// The hook cant be called coditionally - not the setValue func but the hook function eg if(hook...)

// useState (useState hooks) is a function that accepts any data type and has 2 parameters ie the value to render and the function that controls the entered value
// The usestate function returns an array of values first the input value and the other is the function itself

const UseStateBasics = () => {
  // const value = useState(1)[0]
  // const handler = useState(1)[1]
  // console.log(value, handler);

  const [value, setValue] = useState('random title');

  const handleClick = () => {
    if (value === 'random title') {
      setValue('hello world');
    } else {
      setValue('random title');
    }
  };

  return (
    <React.Fragment>
      <h2>{value}</h2>
      <button className='btn' onClick={handleClick}>
        change title
      </button>
    </React.Fragment>
  );
};

export default UseStateBasics;
