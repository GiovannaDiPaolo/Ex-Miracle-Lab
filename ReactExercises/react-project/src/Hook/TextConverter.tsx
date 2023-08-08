import React, { useState } from 'react';

interface TextConverterProps {
  initialText: string;
}
export function TextConverter (props: TextConverterProps): JSX.Element {
  const [text, setText] = useState<string>(props.initialText);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newText = event.target.value.replace(/a/g, 'b');
    setText(newText);
  };

  return <input type="text" value={text} onChange={handleChange} />;
};


