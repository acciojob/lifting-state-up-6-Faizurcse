
import React, { useState } from "react";
import TodoList from "./TodoList";

function App() {
  const [todos, setTodos] = useState([
    { text: 'Learn React', complete: false },
    { text: 'Build a React app', complete: false },
    { text: 'Deploy the React app', complete: false }
  ]);

  function handleComplete(index) {
    const updatedTodos = [...todos];
    updatedTodos[index].complete = true;
    setTodos(updatedTodos);
    console.log(updatedTodos)
  }

  return (
    <div>
      <TodoList todos={todos} complete={handleComplete} />
    </div>
  );
}

export default App;
