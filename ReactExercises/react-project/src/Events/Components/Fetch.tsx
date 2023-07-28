import React, { useState } from 'react';

const Fetch: React.FC = () => {
  const [response, setResponse] = useState<string>('');
  const [error, setError] = useState<string>('');

  const url = 'https://jsonplaceholder.typicode.com/todos/1';

  const makeRequest = async () => {
    try {
      const resp = await fetch(url);
      const json = await resp.json();
      const data = JSON.stringify(json);
      setResponse(data);
      setError('');
    } catch (error) {
      setResponse('');
      setError('Hubo un error');
    }
  };

  return (
    <div className="petition">
      <button onClick={makeRequest}>Petición</button>
      {error && <div>{error}</div>}
      {response && <code>{response}</code>}
    </div>
  );
};
export default Fetch;

