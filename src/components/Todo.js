import React from "react";
import TodoForm from "./TodoForm";

//todos props to display all the todos that are added in the TodoList.js
//use className="todo-row" when displaying todos for design

const Todo = ({ todos }) => {

  return(
  <>
    {todos.map((todo, index) => (
      <div className="todo-row" key={index}>{todo}</div>
    ))}
  </>);
};

export default Todo;
