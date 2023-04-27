import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [user, setUser] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  function toggleLogin(e) {
    e.preventDefault();
    setLoggedIn(!loggedIn);
  }
  function handleChangeUser(e) {
    setUser(e.target.value);
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Dojo Bank - {loggedIn ? `Überweisungsübersicht von ${user}` : "Hauptseite"}
        </p>
        {!loggedIn &&
          <div>
            <input type="text" onChange={handleChangeUser} placeholder='Name'></input>
          </div>
        }
        {loggedIn &&
          <div>
            TODO
          </div>
        }
        <div>
          <button onClick={toggleLogin}>{loggedIn ? "Logout" : "Login"}</button>
        </div>
      </header>
    </div>
  );
}

export default App;
