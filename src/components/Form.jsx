import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "./todoSlice";

function Form({ handleAdd }) {
  const dispatch = useDispatch();

  const [todoTitle, setTodoTitle] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (todoTitle === "") {
      alert("put something in the todo field");
      return;
    }

    dispatch(addTodo({ title: todoTitle }));

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
