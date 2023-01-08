import React, { useState, useEffect } from 'react';

// cleanup function
// second argument

const UseEffectCleanup = () => {
  const [size, setSize] = useState(window.innerWidth);
  console.log(size);

  const displayWindowSize = () => {
    setSize(window.innerWidth);
  };

  useEffect(() => {
    console.log('useEffect');
    window.addEventListener('resize', displayWindowSize);

    // Cleanup function written as a return statement
    return () => {
      console.log('cleanup');
      window.removeEventListener('resize', displayWindowSize);
    };
  });

  return (
    <>
      <h2>window</h2>
      <h3>{size} px</h3>;
    </>
  );
};

export default UseEffectCleanup;
