import React, { useCallback, useState } from "react";

export default function SearchBar({ setResults }) {
  const [input, setInput] = useState("");

  const fetchData = async (value) => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const json = await response.json();

    const results = json.filter((user) => {
      return (
        value &&
        user && // Ensure user exists
        user.name && // Ensure user.name exists
        user.name.toLowerCase().includes(value.toLowerCase()) // Case-insensitive comparison
      );
    });

    setResults(results);
  };

  function debounce(func, wait) {
    let timeout;

    return function (arg) {
      clearTimeout(timeout);
      timeout = setTimeout(() => func(arg), wait);
    };
  }

  const handleChange = (value) => {
    setInput(value);
    debounceFetch(value);
  };

  // Use debounce to delay the API call until the user stops typing
  const debounceFetch = useCallback(
    debounce((value) => fetchData(value), 500),
    [] // This ensures debounce is only created once
  );

  return (
    <div className="inputWrapper">
      <input
        type="text"
        value={input}
        placeholder="Type to Search..."
        onChange={(e) => {
          handleChange(e.target.value);
        }}
      />
    </div>
  );
}
