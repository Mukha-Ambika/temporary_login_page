import React, { useState } from "react";
import "./App.css";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === "" || password === "") {
      setError("Username and password are required.");
    } else {
      setError("");
      // Handle login logic here
      console.log("Username:", username);
      console.log("Password:", password);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Username:</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {error && <p className="error">{error}</p>}
          <button type="submit">Login</button>
        </form>
      </header>
    </div>
  );
}

export default App;
