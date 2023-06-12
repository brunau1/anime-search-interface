import React from 'react';

function SearchResults({ results }) {
  return (
    <ul>
      {results.map((result, index) => (
        <li key={index}>
          <img src={result.imageUrl} alt={result.title} />
          <h3>{result.title}</h3>
          <p>{result.description}</p>
        </li>
      ))}
    </ul>
  );
}

export default SearchResults;
