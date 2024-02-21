import React from "react";
import "./style.css";

function EditTodoForm({
  updateTodo,
  setCurrentTodo,
  currentTodo,
  setIsEditing,
}) {
  return (
    <div>
      <form onSubmit={updateTodo}>
        <input
          placeholder="Enter todos here"
          onChange={(e) => {
            setCurrentTodo(e.target.value);
          }}
          type="text"
          value={currentTodo}
        />
        <button className="btn" type="submit" onClick={updateTodo}>
          Save Todo
        </button>
        <button
          className="btn"
          type="submit"
          onClick={() => {
            setCurrentTodo("");
            setIsEditing(false);
          }}
        >
          Cancel
        </button>
      </form>
    </div>
  );
}

export default EditTodoForm;

