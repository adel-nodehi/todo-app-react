import Title from "../components/Title.jsx";
import Form from "../components/Form.jsx";
import TodoList from "../components/TodoList.jsx";

function TodoApp() {
  return (
    <div>
      <Title>Todo List</Title>
      <Form />
      <TodoList />
    </div>
  );
}

export default TodoApp;
