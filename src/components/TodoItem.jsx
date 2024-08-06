import { useState } from "react";
import { useDispatch } from "react-redux";

import Button from "./Button.jsx";
import { completeTodo, deleteTodo, editTodo } from "./todoSlice.js";

function TodoItem({ todoData }) {
  const dispatch = useDispatch();

  const [isEditing, setIsEditing] = useState(false);
  const [todoTitle, setTodoTitle] = useState("");

  function handleSave() {
    if (!todoTitle) {
      alert("Fill the title");
      return;
    }

    dispatch(editTodo({ id: todoData.id, title: todoTitle }));

    setIsEditing((cur) => !cur);
  }

  return (
    <li className={`todo-item ${todoData.completed ? "completed" : ""}`}>
      {isEditing ? (
        <input
          type="text"
          className="edit-input"
          value={todoTitle}
          onChange={(e) => setTodoTitle(e.target.value)}
        />
      ) : (
        <span>{todoData.title}</span>
      )}

      <div>
        {isEditing ? (
          <Button className="save-button" onClick={handleSave}>
            Save
          </Button>
        ) : (
          <>
            <Button
              className="edit-button"
              onClick={() => setIsEditing((cur) => !cur)}
            >
              Edit
            </Button>

            <Button
              className="delete-button"
              onClick={() => dispatch(deleteTodo(todoData.id))}
            >
              Delete
            </Button>

            <Button
              className="complete-button"
              onClick={() => dispatch(completeTodo(todoData.id))}
            >
              Complete
            </Button>
          </>
        )}
      </div>
    </li>
  );
}

export default TodoItem;
