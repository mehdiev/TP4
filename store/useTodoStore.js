import { create } from "zustand";

/* ===== ZUSTAND (UTILISÉ) ===== */
export const useTodoStore = create((set) => ({
  todos: [],
  addTodo: (todo) =>
    set((state) => ({ todos: [...state.todos, todo] })),
  removeTodo: (id) =>
    set((state) => ({
      todos: state.todos.filter((t) => t.id !== id),
    })),
}));

/* ===== REDUX TOOLKIT (COMMENTAIRE) ===== */
/*
import { createSlice } from "@reduxjs/toolkit";

const todosSlice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
    },
    removeTodo: (state, action) => {
      return state.filter(t => t.id !== action.payload);
    },
  },
});

export const { addTodo, removeTodo } = todosSlice.actions;
export default todosSlice.reducer;
*/
