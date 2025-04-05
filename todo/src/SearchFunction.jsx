import React, { useState } from "react";
import SearchBar from "./SearchBar";

export default function SearchFunction() {
  const [results, setResults] = useState([]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <SearchBar setResults={setResults} />

      <div className="SearchResults">
        {results.map((result, resultID) => {
          return <div key={resultID}>{result.name}</div>;
        })}
      </div>
    </div>
  );
}



function debounce(func, wait) {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), wait);
  };
}