import React, { useState } from 'react';
import Data from './Data';
import './App.css';

function App() {
  const [suggestions, setsuggestions] = useState([]);
  const [input, setinput] = useState('');

  const onInputChange = (e) => {
    const val = e.target.value;
    let suggestions = [];
    if (val.length > 0) {
      const regexp = new RegExp(`^${val}`, 'i');
      suggestions = Data.sort().filter(country => regexp.test(country))
    }
    setsuggestions(suggestions);
    setinput(val)
  }

  const renderSuggestions = () => {
    if (suggestions.length === 0) {
      return null
    }
    return (
      <ul>
        {
          suggestions.map((suggestion, index) => (
            <li key={index} onClick={() => {selected(suggestion)}}>{suggestion}</li>
          ))
        }
      </ul>
    )
  }

  const selected = (val) => {
    setinput(val)
    setsuggestions([]);
  }
  return (
    <div className="App">
      <h2>Auto Complete</h2>
      <input id="query" type="text" onChange={onInputChange} value={input} />
      {renderSuggestions()}
      <span>Suggestions: {suggestions.length}</span>
    </div>
  );
}

export default App;
