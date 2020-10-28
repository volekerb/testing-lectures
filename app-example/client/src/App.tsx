import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'rsuite/dist/styles/rsuite-default.css';
import { Button } from 'rsuite';
import SomeService from "./someService";

function App() {

  let service = SomeService

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Button primary data-testid="id" onClick={service.getAll}>Hello world!</Button>
      </header>
    </div>
  );
}

export default App;
