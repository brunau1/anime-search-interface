import React, { useState } from "react";

function SearchBox({ onSearch }) {
  const [searchText, setSearchText] = useState("");

  const handleInputChange = (event) => {
    setSearchText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(searchText);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Digite o texto de busca"
        value={searchText}
        onChange={handleInputChange}
      />
      <button type="submit">Buscar</button>
    </form>
  );
}

export default SearchBox;
