import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import api from './api/api';

function App() {
  const [fontendText, setFontendText] = useState('HElOooOOO');

  useEffect(() => {
    getText();
  }, []);

  const getText = async () => {
    const response = await api.get('/');
    setFontendText(response.data);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{fontendText}</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
