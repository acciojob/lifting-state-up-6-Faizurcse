
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
      {todos.map((item,index)=><TodoList key={index} todos={item} Complete={handleComplete} index={index}/> 
         
      )}
      
    </div>
  );
}

export default App;
