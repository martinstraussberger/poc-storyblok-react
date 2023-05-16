import React, { useState } from 'react';

import { StoryblokComponent } from './components/StoryblokComponent';
import { Hero } from './components/Hero';
import { JsonDataExample } from './dynamic-components/JsonDataExample';

// Tailwind Example
import './styles/index.css';


export const App = () => {
  const [change, setOnChange] = useState('');

  const handleChange = (event) => {
    setOnChange(event.target.value);
  };

  return (
    <div>
      <StoryblokComponent onChange={handleChange} value={change} />
      <Hero />
      <JsonDataExample />
    </div>
  );
};
