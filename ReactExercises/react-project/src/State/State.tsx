import React from 'react';
import Counter from './Components/Counter';
import StringManipulator from './Components/StringManipulator';
import CounterRefactored from './Components/CounterRefactored';
import './App.css';

function StateApp() {
  return (
    <div>
      <Counter counter={0} />
      <StringManipulator />
      <CounterRefactored />
    </div>
  );
}

export default StateApp;
