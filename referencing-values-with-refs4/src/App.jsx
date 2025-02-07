
import { useState, useRef } from 'react';

export default function Chat() {
  const [text, setText] = useState('');
  const textRef = useRef("");

  function handleSend() {
    setTimeout(() => {
      alert('Sending: ' + textRef.current);
    }, 3000);
  }

  return (
    <>
      <input
        value={text}
        onChange={e => {textRef.current = e.target.value; setText(e.target.value)}}
      />
      <button
        onClick={handleSend}>
        Send
      </button>
    </>
  );
}

