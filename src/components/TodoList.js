import React from "react";

function TodoList({ todos, Complete }) {
    return (
      <>
      
        <ul>
          {todos.map((todo, index) => (
            <li key={index}>
              {todo.text} {!todo.Complete && (
                <button onClick={() => Complete(index)}>Complete</button>
              )}
            </li>
          ))}
        </ul>
      </>
    );
  }
  export default TodoList