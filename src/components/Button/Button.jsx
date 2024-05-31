import './Button.css';
import { useState } from 'react';

function Button() {
  //useState
  const [text, setText] = useState('Save');

  console.log('Rerendered');
  const handleClick = () => {
    setText((t) => (t === 'Save' ? 'Saved' : 'Save'));
    console.log(text);
  };

  return (
    <button onClick={handleClick} className="button accent">
      {text}
    </button>
  );
}

export default Button;
