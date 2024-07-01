import logo from './logo.svg';
import './App.css';

function Apps() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload. It is reloaded.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React from here now on
        </a>
      </header>
    </div>
  );
}

function FunctionalComponent() {
  return (
    <div>
      <h2>This is a Functional Component!!!!!</h2>
    </div>
  );
}

export default function App(){

  return(
    <div>
      <h2>
        <Apps />
        <FunctionalComponent />
      </h2>
    </div>  
  );
}
