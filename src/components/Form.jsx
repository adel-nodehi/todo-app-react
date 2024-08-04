import { useState } from "react";

function Form({ handleAdd }) {
  const [todoTitle, setTodoTitle] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (todoTitle === "") return;

    handleAdd(todoTitle);
    setTodoTitle("");
  }

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        className="todo-input"
        type="text"
        placeholder="Add a todo"
        value={todoTitle}
        onChange={(e) => setTodoTitle(e.target.value)}
      />

      <button className="todo-button">Add</button>
    </form>
  );
}

export default Form;
