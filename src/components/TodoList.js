import React from "react";
import { useState } from "react";
function TodoList({ todos, Complete,index }) {
  
  const [clicked,setClicked] = useState(true)

  function myfun(e){
    
    setClicked(!clicked)
    Complete(index)
    console.log(e.target.id)
  }
    return (
      <>
      
        <ul>
         
            <li>
              {todos.text} {!todos.Complete && clicked?(
                <button id={todos.id} onClick={myfun}>Complete</button>
              ):''}
            </li>
          
        </ul>
      </>
    );
  }
  export default TodoList