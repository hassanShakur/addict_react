import React, { useState, useEffect } from 'react';
const url = 'https://api.github.com/users/QuincyLarson';
const MultipleReturns = () => {
  const [isLoading, setLoading] = useState(true);
  const [isError, setError] = useState(false);
  const [user, setUser] = useState('default user');

  useEffect(() => {
    fetch(url)
      .then((response) => {
        // Catching all errors including network error
        if (response.status >= 200 && response.status <= 299) {
          return response.json();
        } else {
          setLoading(false);
          setError(true);
          throw new Error(response.statusText);
        }
      })
      .then((user) => {
        const { login } = user;
        setUser(login);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  if (isLoading) {
    return (
      <div>
        <h3>loading...</h3>
      </div>
    );
  }

  if (isError) {
    return (
      <div>
        <h3>error...</h3>
      </div>
    );
  }

  return (
    <div>
      <h3>{user}</h3>
    </div>
  );
};

export default MultipleReturns;
