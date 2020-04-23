import React, { useState } from 'react';
import Hello from './components/Hello'

const App = () => {
  const [name, setName] = useState<string | null>('Peter');
  return (
    <div>
      <Hello message={`I am ${name}!`}></Hello>
    </div>
  );
}

export default App;