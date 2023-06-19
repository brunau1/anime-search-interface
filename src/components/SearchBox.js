import React, { useState } from "react";

function SearchBox({ onSearch }) {
  const [searchText, setSearchText] = useState("");
  const [embeddingMethod, setEmbeddingMethod] = useState("");
  const [limit, setLimit] = useState("");

  const handleInputChange = (event) => {
    setSearchText(event.target.value);
  };

  const handleSelectChange = (event) => {
    setEmbeddingMethod(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("Searching for: ", searchText);

    onSearch(searchText, embeddingMethod, limit);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Type your search..."
        value={searchText}
        onChange={handleInputChange}
      />
      <div>
        <input
          type="number"
          placeholder="n° of results"
          value={limit}
          onChange={(event) => setLimit(event.target.value)}
          style={{ width: "100px", height: "30px", marginRight: "10px" }}
        />
      </div>
      <select value={embeddingMethod} onChange={handleSelectChange}>
        <option value="">Embedding method</option>
        <option value="w2v">Word2vec</option>
        <option value="tfidf">TF-IDF</option>
      </select>

      <button type="submit" style={{ marginLeft: '15px' }}>Search</button>
    </form>
  );
}

export default SearchBox;
