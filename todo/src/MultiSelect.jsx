import { useEffect, useState } from "react";
import "./multiselect.css";

export default function MultiSelect() {
  const [jsonData, setJsonData] = useState([]);
  const apiURL = "https://www.anapioficeandfire.com/api/books?pageSize=30";
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        fetch(apiURL)
          .then((response) => response.json())
          .then((data) => setJsonData(data));
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);
  // Fetch data from API and store it in state

  const deleteData = () => {
    setJsonData([]);
  };

  if (isLoading) return <div> IS LOADING ... </div>;

  return (
    <div className="App">
      <h1>Game of Thrones Books</h1>
      <h2>Fetch a list from an API and display it</h2>

      {/* Fetch data from API */}
      <div>
        <button className="fetch-button">Fetch Data</button>
        <button className="fetch-button" onClick={deleteData}>
          Clear
        </button>
        <br />
      </div>

      {/* Display data from API */}
      <div className="book-list">
        {jsonData.map((book, index) => (
          <div key={index} className="book">
            <h3>Book Number: {index + 1}</h3>
            <h2>Book Name: {book.name}</h2>
            <div className="details">
              <p>👨: Author/Authors: {book.authors.join(", ")}</p>
              <p>📖: Number of pages: {book.numberOfPages}</p>
              <p>🏘️: Country: {book.country}</p>
              <p>⏰: Release date: {new Date(book.released).toDateString()}</p>
            </div>
            {/* {new Date(book.released).toDateString()} */}
          </div>
        ))}
      </div>
    </div>
  );
}
