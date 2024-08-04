import TodoItem from "./TodoItem.jsx";

function TodoList({ todoDatas, handleDelete, handleEdit, handleComplite }) {
  console.log(todoDatas);
  return (
    <ul className="todo-list">
      {todoDatas.map((todoData) => (
        <TodoItem
          key={todoData.id}
          todoData={todoData}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
          handleComplite={handleComplite}
        />
      ))}
    </ul>
  );
}

export default TodoList;
