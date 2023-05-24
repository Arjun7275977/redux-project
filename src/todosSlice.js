import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  todos: [],
};

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const { name, id } = action.payload;
      const newTodo = {
        name,
        id,
        status: 'pending',
      };
      state.todos.push(newTodo);
    },
    toggleTodoStatus: (state, action) => {
      const { id } = action.payload;
      const todo = state.todos.find((todo) => todo.id === id);
      if (todo) {
        todo.status = todo.status === 'pending' ? 'completed' : 'pending';
      }
    },
  },
});

export const { addTodo, toggleTodoStatus } = todosSlice.actions;

export default todosSlice.reducer;
