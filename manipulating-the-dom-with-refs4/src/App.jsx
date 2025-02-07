import { useRef } from 'react';
import SearchButton from './SearchButton';
import SearchInput from './SearchInput';

export default function Page() {
  const inputRef = useRef();

  function handleClickSearch() {
    inputRef.current.focus();
  }

  return (
    <>
      <nav>
        <SearchButton onClick={handleClickSearch}/>
      </nav>
      <SearchInput ref={inputRef} />
    </>
  );
}
