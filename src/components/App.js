
import React, { useState } from "react";
import TodoList from "./TodoList";

function App() {
  const [todos, setTodos] = useState([
    { text: 'Learn React', Complete: false },
    { text: 'Build a React app', Complete: false },
    { text: 'Deploy the React app', Complete: false }
  ]);

  function handleComplete(index) {
    const updatedTodos = [...todos];
    updatedTodos[index].Complete = true;
    setTodos(updatedTodos);
    
  }

  return (
    <div>
      <TodoList todos={todos} Complete={handleComplete} />
    </div>
  );
}

export default App;
