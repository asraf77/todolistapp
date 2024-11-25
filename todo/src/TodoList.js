import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ todos, deleteTodo, startEdit }) {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem 
          key={todo.id} 
          todo={todo} 
          deleteTodo={deleteTodo} 
          startEdit={startEdit} 
        />
      ))}
    </ul>
  );
}

export default TodoList;
