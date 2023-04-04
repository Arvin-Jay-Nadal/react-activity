import React, { useState } from "react";

//get the inputted data from the input tag by using the button onClick handleSubmit
// use the handleChange to get the value in input tag
// and use the props to pass the input data to TodoList on submit

function TodoForm(props) {
  const [input, setInput] = useState(" ");

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    props.addTodo(input);
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input placeholder="Add a todo" name="text" className="todo-input" onChange={handleChange} required/>
      <button type="submit" className="todo-button" > 
        Add todo
      </button>
    </form>
  );
}

export default TodoForm;
