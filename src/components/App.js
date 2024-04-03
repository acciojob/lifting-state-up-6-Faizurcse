
import React, { useState } from "react";
import TodoList from "./TodoList";

function App() {
  const [todos, setTodos] = useState([
    { id:'1', text: 'Learn React', Complete: false },
    {id:'2', text: 'Build a React app', Complete: false },
    {id:'3', text: 'Deploy the React app', Complete: false }
  ]);

  function handleComplete(index) {
    const updatedTodos = [...todos];
    updatedTodos[index].Complete = true;
    setTodos(updatedTodos);
    
  }

  return (
    <div>
      {todos.map((item,index)=>{
        return  <TodoList key={index} todos={item} Complete={handleComplete} index={index}/> 
      })}
      
    </div>
  );
}

export default App;
