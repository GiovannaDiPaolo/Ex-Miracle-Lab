import React from 'react';

interface CounterTextProps {
  count: number;
}

function CounterText(props: CounterTextProps) {
  return <p>{props.count}</p>;
}

export default CounterText;
