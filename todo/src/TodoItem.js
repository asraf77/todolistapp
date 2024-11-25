import React from 'react';

function TodoItem({ todo, deleteTodo, startEdit }) {
  return (
    <li>
      {todo.text}
      <button onClick={() => startEdit(todo)}>Edit</button>
      <button onClick={() => deleteTodo(todo.id)}>Delete</button>
    </li>
  );
}

export default TodoItem;

