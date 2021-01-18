import React, { useState, useEffect } from "react";
import "./App.css";
import Button from "@material-ui/core/Button";
import {
  FormControl,
  Input,
  InputLabel,
  FormHelperText,
} from "@material-ui/core";
import Todo from "./Todo";
import db from "./firebase";
import firebase from "firebase";

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  useEffect(() => {
    // code runs when when app.js loads
    db.collection("todos")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setTodos(snapshot.docs.map((doc) => doc.data().todo));
      });
  }, []);
  console.log("💪", input);
  // 👇 Adds the todo when the button is clicked or when the enter key is pressed
  const addTodo = (event) => {
    console.log("👽", "I am wurking!");
    event.preventDefault(); // Prevents the page from being reloaded
    // 👇 adds the value to the database
    db.collection("todos").add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setTodos([...todos, input]);
    setInput(""); // clears up the input form when the user clicks on the button
    console.log(todos);
  };
  return (
    <div className="App">
      <h1>Get Started by adding your todos for the the day 🚀</h1>
      <form>
        <FormControl>
          <InputLabel htmlFor="my-input">What is in your mind?</InputLabel>
          <Input
            value={input}
            onChange={(event) => setInput(event.target.value)}
            id="my-input"
            aria-describedby="my-helper-text"
          />
        </FormControl>
        <Button
          disabled={!input}
          type="submit"
          onClick={addTodo}
          variant="contained"
          color="primary"
        >
          Add Todo
        </Button>
      </form>
      <ul>
        {todos.map((todo) => (
          <Todo text={todo} />
        ))}
      </ul>
    </div>
  );
}

export default App;
