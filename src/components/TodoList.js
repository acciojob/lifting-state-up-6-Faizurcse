import React from "react";

function TodoList({ todos, complete }) {
    return (
      <>
        <ul>
          {todos.map((todo, index) => (
            <li key={index}>
              {todo.text} {!todo.complete && (
                <button onClick={() => complete(index)}>complete</button>
              )}
            </li>
          ))}
        </ul>
      </>
    );
  }
  export default TodoList