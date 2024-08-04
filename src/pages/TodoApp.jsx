import { useState } from "react";
import Form from "../components/Form.jsx";
import TodoList from "../components/TodoList.jsx";

const initialState = [
  {
    id: 615614,
    title: "adelllllllll",
    complited: false,
  },
  {
    id: 615544,
    title: "ddddddddddddddd",
    complited: true,
  },
  {
    id: 615554,
    title: "sss",
    complited: false,
  },
  {
    id: 615854,
    title: "cccc",
    complited: false,
  },
];

function TodoApp() {
  const [todoDatas, setTodoDatas] = useState([]);

  function handleAdd(title) {
    setTodoDatas((cur) => [
      {
        id: crypto.randomUUID(),
        title,
        complited: false,
      },
      ...cur,
    ]);
  }

  function handleDelete(id) {
    setTodoDatas((cur) => cur.filter((data) => data.id !== id));
  }

  function handleEdit(id, title) {
    setTodoDatas((cur) =>
      cur.map((data) => {
        if (data.id === id)
          return {
            ...data,
            title,
          };

        return data;
      })
    );
  }

  function handleComplite(id) {
    setTodoDatas((cur) =>
      cur.map((data) => {
        if (data.id === id)
          return {
            ...data,
            complited: !data.complited,
          };

        return data;
      })
    );
  }

  return (
    <div>
      <h1>Todo List</h1>
      <Form handleAdd={handleAdd} />
      <TodoList
        todoDatas={todoDatas}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
        handleComplite={handleComplite}
      />
    </div>
  );
}

export default TodoApp;
