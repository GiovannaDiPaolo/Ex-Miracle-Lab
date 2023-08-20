import React from 'react';

interface CounterButtonProps {
  onClick: () => void;
  text: string;
}

function CounterButton(props: CounterButtonProps) {
  return <button onClick={props.onClick}>{props.text}</button>;
}

export default CounterButton;
