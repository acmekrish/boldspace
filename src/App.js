import logo from './logo.png';
import './App.css';
import Items from "./work"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to Bold Space
        </p>
        <Items id={1} name ="laptop"/>
     
      </header>
    </div>
  );
}

export default App;
