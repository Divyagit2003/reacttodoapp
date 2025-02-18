import React, { useState } from "react";
import TodoItem from "./TodoItem";

export default function TodoList() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const addTodo = (e) => {
    const newTodo = { id: Math.random(), text: inputValue };
    setTodos((values) => [...values, newTodo]);
    setInputValue("");
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="todo-container">
      <h1 className="title">My Todo List</h1>
      <form className="todo-form" onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          value={inputValue}
          placeholder="Add a new task"
          onChange={(e) => setInputValue(e.target.value)}
          className="todo-input"
        />
        <button
          type="button"
          onClick={addTodo}
          className="add-button"
        >
          Add
        </button>
      </form>
      <div className="todo-list">
        {todos.map((t) => (
          <TodoItem key={t.id} todo={t} removeTodo={removeTodo} />
        ))}
      </div>
    </div>
  );
} 