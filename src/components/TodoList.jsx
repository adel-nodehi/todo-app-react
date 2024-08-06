import { useSelector } from "react-redux";
import TodoItem from "./TodoItem.jsx";

function TodoList() {
  const todoDatas = useSelector((state) => state.todo.todoList);

  return (
    <ul className="todo-list">
      {todoDatas.map((todoData) => (
        <TodoItem key={todoData.id} todoData={todoData} />
      ))}
    </ul>
  );
}

export default TodoList;
