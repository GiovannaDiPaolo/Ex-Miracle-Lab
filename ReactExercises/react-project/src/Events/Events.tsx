import React, { useState } from 'react';
import Fetch from './Components/Fetch';
import JsonViewer from './Components/JsonViewer';
import TextInput from './Components/TextInput';
import SelectInput from './Components/SelectInput';

const Events: React.FC = () => {
  const [inputText, setInputText] = useState<string>('');
  const [selectedValue, setSelectedValue] = useState<string>('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(event.target.value);
  };

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedValue(event.target.value);
  };

  return (
    <div>
      <Fetch />
      <JsonViewer json={null} />
      <TextInput value={inputText} onChange={handleInputChange} />
      <SelectInput value={selectedValue} onChange={handleSelectChange} />
    </div>
  );
};

export default Events;
