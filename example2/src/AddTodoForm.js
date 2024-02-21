import React from "react";
import "./style.css";

function AddTodoForm({ addTodo, setCurrentTodo, currentTodo }) {
  return (
    <div>
      <form onSubmit={addTodo}>
        <input
          placeholder="Enter todos here"
          onChange={(e) => setCurrentTodo(e.target.value)}
          type="text"
          value={currentTodo}
        />
        <button className="btn" type="submit">
          Add Todo
        </button>
      </form>
    </div>
  );
}

export default AddTodoForm;

