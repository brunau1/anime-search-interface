import React, { useState } from "react";
import SearchBox from "./components/SearchBox";
import SearchResults from "./components/SearchResults";
import logo from "./images/logo.png";
import "./Styles.css";

function App() {
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (searchText, embeddingMethod, limit) => {
    const route = "http://localhost:5000/search?";

    const params = new URLSearchParams({
      text: searchText,
      limit: limit,
      embedding: embeddingMethod,
    });

    const url = route + params.toString();

    console.log("Searching... ", url);

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setSearchResults(data.ranking);

        console.log(data);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div style={{ width: "1000px" }}>
      <div style={{ display: "flex", width: "100%", justifyContent: "center" }}>
        <img className="logo-img" src={logo} alt="logo" />
      </div>
      <div>
        <h3>Enter the field values...</h3>
        <SearchBox onSearch={handleSearch} />
        <SearchResults results={searchResults} />
      </div>
    </div>
  );
}

export default App;
