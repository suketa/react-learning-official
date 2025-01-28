import { useState } from 'react';

export default function App() {
  const [showHint, setShowHint] = useState(false);
  const label = showHint ? 'Hide hint' : 'Show hint';
  return (
    <div>
      {showHint && <p><i>Hint: Your favorite city?</i></p>}
      <Form />
      <button onClick={() => {
        setShowHint(!showHint);
      }}>{label}</button>
    </div>
  );
}

function Form() {
  const [text, setText] = useState('');
  return (
    <textarea
      value={text}
      onChange={e => setText(e.target.value)}
    />
  );
}
