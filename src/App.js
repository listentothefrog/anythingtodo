import React, { useState } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([
    "Take the Dog for a walk",
    "Take the garabage out",
  ]);
  return (
    <div className="App">
      <h1>Get Started by adding your todos for the the day 🚀</h1>
      <input />
      <button>Add Todo</button>
      <ul>
        {todos.map((todo) => (
          <li>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
