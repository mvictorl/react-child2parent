import React, { useState } from 'react';
import { Child } from './Child';

export const Parent = () => {
  const [name, setName] = useState('');

  const handleNameChange = (newName) => {
    setName(newName)
  }

  return (
    <div className="parent-box">
      <h3>Parent component</h3>
      <span>Name is: {name}</span>
      
      <Child onChangeName={handleNameChange} />
    </div>
    
  );
};
