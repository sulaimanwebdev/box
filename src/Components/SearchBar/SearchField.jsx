import SearchBar from "material-ui-search-bar";
import { useState } from "react";

const SearchField = () => {
  const [results, setResults] = useState();

  return (
    <SearchBar
      className="search"
      value={results}
      onChange={(value) => setResults(value)}
      placeholder="Search..."
    />
  );
};

export default SearchField;
