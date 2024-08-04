import { createContext, useContext, useReducer } from "react";

const TodoContext = createContext();

const initialState = {
  todoList: [
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
  ],
};

function reducer(state, action) {
  switch (action.type) {
    case "add":
      return {
        ...state,
        todoList: [
          ...state.todoList,
          { id: crypto.randomUUID(), title: action.payload, complited: false },
        ],
      };

    case "delete":
      return {
        ...state,
        todoList: state.todoList.filter((item) => item.id !== action.payload),
      };

    case "edit":
      return {
        ...state,

        todoList: [
          ...state.todoList,
          {
            ...state.todoList.find((item) => item.id === action.payload.id),
            title: action.payload.title,
          },
        ],
      };

    case "complite":
      return {
        ...state,

        todoList: [
          ...state.todoList,
          {
            ...state.todoList.map((item) => {
              if (item.id === action.payload.id)
                return { ...item, complited: !item.complited };
            }),
          },
        ],
      };

    default:
      throw new Error("unknown action type");
  }
}

function TodoProvider({ children }) {
  const [{ todoList }, dispatch] = useReducer(reducer, initialState);

  console.log(todoList);

  return (
    <TodoContext.Provider value={{ todoList, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
}

function useTodo() {
  const state = useContext(TodoContext);
  if (state === undefined)
    throw new Error("TodoContext used outside of TodoProvider");
  return state;
}

export { TodoProvider, useTodo };
