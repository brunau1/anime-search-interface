import React from "react";

function SearchResults({ results }) {
  return (
    <div>
      {results.map((result, index) => (
        <div className="list-item" key={index}>
          <img className="anime-img" src={result.imageUrl} alt={result.title} />
          <div>
            <h3>{result.title}</h3>
            <p>{result.synopsis}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default SearchResults;
