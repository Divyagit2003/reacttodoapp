import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

export default function TodoItem({ todo, removeTodo }) {
  return (
    <div>
      <span>{todo.text}</span>
      <button onClick={() => removeTodo(todo.id)}>
        <FontAwesomeIcon icon={faTrash}
         />
      </button>
    </div>
  );
}
