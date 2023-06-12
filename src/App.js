import React, { useState } from "react";
import SearchBox from "./components/SearchBox";
import SearchResults from "./components/SearchResults";
import "./Styles.css";

function App() {
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (searchText) => {
    // Aqui você deve fazer a chamada para a API de busca e atualizar os resultados
    // Substitua a URL pela correta de acordo com o serviço que você estiver utilizando
    fetch(`https://api.example.com/search?text=${searchText}`)
      .then((response) => response.json())
      .then((data) => setSearchResults(data.results))
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <h1>Exemplo de Busca</h1>
      <SearchBox onSearch={handleSearch} />
      <SearchResults results={searchResults} />
    </div>
  );
}

export default App;
