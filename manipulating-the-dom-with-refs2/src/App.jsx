import { useRef } from 'react';
export default function Page() {
  const inputRef = useRef();

  function handleSearchClick() {
    inputRef.current.focus();
  }
  return (
    <>
      <nav>
        <button onClick={handleSearchClick}>Search</button>
      </nav>
      <input ref={inputRef} placeholder="Looking for something?" />
    </>
  );
}
