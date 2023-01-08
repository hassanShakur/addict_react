import React from 'react';

const ErrorExample = () => {
  let title = 'Random Title';
  const handleClick = () => {
    title = 'Hello world';
    console.log(title);
  };

  return (
    <React.Fragment>
      <h2>useState error example</h2>
      <h3>{title}</h3>
      <button className='btn' onClick={handleClick}>
        Change title
      </button>
    </React.Fragment>
  );
};

export default ErrorExample;
