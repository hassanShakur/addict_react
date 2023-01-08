import React from 'react';
import { data } from '../../../data';

const UseStateArray = () => {
  // You can also import useState as below
  const [peope, setPeople] = React.useState(data);

  const removeItem = (id) => {
    let newPeople = peope.filter((person) => person.id !== id);
    setPeople(newPeople);
  };
  return (
    <>
      {peope.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className='item'>
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>remove</button>
          </div>
        );
      })}

      <button className='btn' onClick={() => setPeople([])}>
        clear items
      </button>
    </>
  );
};

export default UseStateArray;
