import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

const App = () => {
  return <HookSwitcher />
}

const HookSwitcher = () => {

  const [color, setColor] = useState('white');
  const [fontSize, setFontSize] = useState(14)

  return (
    <div style={{
      padding: "10px",
      backgroundColor: color,
      fontSize: `${fontSize}px`
    }}>
      Hello World
      <button onClick={() => setColor('black')} > Dark </button>
      <button onClick={() => setColor('grey')}>Light</button>
      <button onClick={() => setFontSize((size) => size + 2) } > + </button>
      <button onClick={() => setFontSize((size) => size - 2) } > - </button>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
