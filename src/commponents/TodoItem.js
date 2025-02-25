import React from 'react';

export default function TodoItem({ todo, removeTodo,editTodo}) {
  return (
    <div>
      <span>{todo.text}</span>
      <button onClick={() => removeTodo(todo.id)}>Delete</button>
      <button onClick={() => editTodo(todo)}>Edit</button>
    </div>
  );
}
