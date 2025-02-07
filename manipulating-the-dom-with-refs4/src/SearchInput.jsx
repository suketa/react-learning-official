import { forwardRef } from "react";
const SearchInput = forwardRef(function SearchInput(_props, ref) {
  return <input ref={ref} placeholder="Looking for something?" />;
});

export default SearchInput;
