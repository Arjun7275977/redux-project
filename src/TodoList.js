import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, toggleTodoStatus } from './todosSlice';
import './TodoList.css'
const TodoList = () => {
  const [newTodoName, setNewTodoName] = useState('');
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.todos);

  const handleAddTodo = () => {
    if (newTodoName.trim() !== '') {
      const newTodoId = Date.now().toString();
      dispatch(addTodo({ name: newTodoName, id: newTodoId }));
      setNewTodoName('');
    }
  };

  const handleToggleTodoStatus = (id) => {
    dispatch(toggleTodoStatus({ id }));
  };

  return (
    <div className="todo-container">
      <div className="input-container">
        <input
          type="text"
          value={newTodoName}
          onChange={(e) => setNewTodoName(e.target.value)}
          placeholder="Enter a new task..."
        />
        <button onClick={handleAddTodo}>Add</button>
      </div>

      <ul className="todo-list">
        {todos.map((todo) => (
          <li key={todo.id} className={`todo-item ${todo.status}`}>
            <span className="todo-name">{todo.name}</span>
            <span className="todo-status">{todo.status}</span>
            <button
              onClick={() => handleToggleTodoStatus(todo.id)}
              className="toggle-button"
            >
              Toggle
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
