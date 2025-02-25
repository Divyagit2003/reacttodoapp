import React, { useState } from "react";
import TodoItem from "./TodoItem";
import "./style.css";

export default function TodoList() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [updateTodo, setUpdateTodo] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputValue.trim() === "") return; 

    if (updateTodo) {
      setTodos(todos.map((todo) =>
        todo.id === updateTodo.id ? { ...todo, text: inputValue } : todo
      ));
      setUpdateTodo(null);
    } else {
      const newTodo = { id: Math.random(), text: inputValue };
      setTodos([...todos, newTodo]);
    }

    setInputValue("");  };

  const editTodo = (todo) => {
    setInputValue(todo.text); 
    setUpdateTodo(todo);
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
    if (updateTodo && updateTodo.id === id) {
      setUpdateTodo(null);
      setInputValue("");
    }
  };

  return (
    <div className="todo-container">
      <h1 className="title" id="titleId">TODO LIST</h1>
      <form className="todo-form" onSubmit={handleSubmit}>
        <input
          id="inputId"
          type="text"
          value={inputValue}
          placeholder="Add a new task"
          onChange={(e) => setInputValue(e.target.value)}
          className="todo-input"
        />
        <button type="submit" className="add-button">
          {updateTodo ? "Update" : "Add"}
        </button>
      </form>
      <div className="todo-list">
        {todos.map((t) => (
          <TodoItem key={t.id} todo={t} removeTodo={removeTodo} editTodo={editTodo} />
        ))}
      </div>
    </div>
  );
}
