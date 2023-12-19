import React from "react";

import ToDo from "./ToDo";

const TodoList= ({todos,setTodos}) =>{
    return(
        <div className="todo-container">
        <ul className="todo-list">
     
        {todos.map(todo =>(

<ToDo setTodos={ setTodos }
todo={todo}
todos={todos}
 key={todo.id}
  text={todo.text}  />
))}
        </ul>
        
      </div>
    )

};
export default TodoList;