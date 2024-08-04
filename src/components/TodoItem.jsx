import { useState } from "react";
import Button from "./Button.jsx";

function TodoItem({ todoData, handleDelete, handleEdit, handleComplite }) {
  const [isEditing, setIsEditing] = useState(false);
  const [todoTitle, setTodoTitle] = useState("");

  function handleSave() {
    if (!todoTitle) {
      alert("Fill the title");
      return;
    }

    handleEdit(todoData.id, todoTitle);

    setIsEditing((cur) => !cur);
  }

  return (
    <li className={`todo-item ${todoData.complited ? "completed" : ""}`}>
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
              onClick={() => handleDelete(todoData.id)}
            >
              Delete
            </Button>

            <Button
              className="complete-button"
              onClick={() => handleComplite(todoData.id)}
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
