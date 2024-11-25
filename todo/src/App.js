import React, { useState } from 'react';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import './styles.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [edit, setEdit] = useState(null);
  const [editValue, setEditValue] = useState('');

  const addTodo = (todo) => {
    setTodos([...todos, { text: todo, id: Date.now() }]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const startEdit = (todo) => {
    setEdit(todo.id);
    setEditValue(todo.text);
  };

  const updateTodo = () => {
    setTodos(todos.map(todo => (todo.id === edit ? { ...todo, text: editValue } : todo)));
    setEdit(null);
    setEditValue('');
  };

  return (
    <div className="App">
      <h1>To-Do List</h1>
      <TodoForm addTodo={addTodo} />
      <TodoList 
        todos={todos} 
        deleteTodo={deleteTodo} 
        startEdit={startEdit} 
      />
      {edit !== null && (
        <div>
          <input 
            type="text" 
            value={editValue} 
            onChange={(e) => setEditValue(e.target.value)} 
          />
          <button onClick={updateTodo}>Update</button>
        </div>
      )}
    </div>
  );
}

export default App;
