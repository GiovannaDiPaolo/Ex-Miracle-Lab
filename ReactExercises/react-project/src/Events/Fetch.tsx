import {useState} from 'react';

interface jsonResponse {
  userId: number,
  title: string,
  completed: boolean
}

export function Fetch () : JSX.Element {
  const [response, setResponse] = useState<jsonResponse | null>(null);
;
  const url = 'https://jsonplaceholder.typicode.com/todos/1';

  const makeRequest = async () => {
    try {
      const resp = await fetch(url);
      const json = await resp.json();
      setResponse(json);
    } catch (error) {
      console.log('Error data:', error);
    }
  };

  return (
    <div className="petition">
      <button onClick={makeRequest}>Petición</button>
      {response && <code>{JSON.stringify(response)}</code>}
    </div>
  );
};
