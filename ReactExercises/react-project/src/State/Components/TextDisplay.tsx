import React from 'react';

interface TextDisplayProps {
  text: string;
}

function TextDisplay(props: TextDisplayProps) {
  return <p>{props.text}</p>;
}

export default TextDisplay;
