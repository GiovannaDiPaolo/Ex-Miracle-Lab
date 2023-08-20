import { useRef } from 'react';

function Form() {
  const inputRef1 = useRef<HTMLInputElement>(null);
  const inputRef2 = useRef<HTMLInputElement>(null);

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    if (inputRef1.current && inputRef2.current) {
      const value1 = inputRef1.current.value;
      const value2 = inputRef2.current.value;
      console.log('Valor del campo 1:', value1);
      console.log('Valor del campo 2:', value2);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="campo1">Campo 1:</label>
        <input id="campo1" type="text" ref={inputRef1} />
      </div>
      <div>
        <label htmlFor="campo2">Campo 2:</label>
        <input id="campo2" type="text" ref={inputRef2} />
      </div>
      <button type="submit">Enviar</button>
    </form>
  );
}

export default Form;