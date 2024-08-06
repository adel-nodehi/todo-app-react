import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todoList: [],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: {
      prepare(action) {
        return {
          payload: {
            title: action.title,
            id: crypto.randomUUID(),
            completed: false,
          },
        };
      },

      reducer(state, action) {
        state.todoList.unshift({ ...action.payload });
      },
    },

    deleteTodo(state, action) {
      state.todoList = state.todoList.filter(
        (item) => item.id !== action.payload
      );
    },

    editTodo: {
      prepare(action) {
        return {
          payload: {
            title: action.title,
            id: action.id,
          },
        };
      },

      reducer(state, action) {
        state.todoList.forEach((item) => {
          if (item.id !== action.payload.id) return;

          item.title = action.payload.title;
        });
      },
    },

    completeTodo(state, action) {
      state.todoList.forEach((item) => {
        if (item.id !== action.payload) return;

        item.completed = !item.completed;
      });
    },
  },
});

export const { addTodo, deleteTodo, editTodo, completeTodo } =
  todoSlice.actions;

export default todoSlice.reducer;
