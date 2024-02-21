import { useState, useEffect } from "react";
import TodoItem from "./TodoItem";
import "./style.css";
import AddTodoForm from "./AddTodoForm";
import EditTodoForm from "./EditTodoForm";

function App() {
  // { id: 1, title: 'Task 1'}

  const [todos, setTodos] = useState([]);
  const [currentTodo, setCurrentTodo] = useState(""); // stores the text of the currentTodo
  const [currentTodoIndex, setCurrentTodoIndex] = useState(null); // stores the text of the currentTodo
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    let todosFromLocalStorage = JSON.parse(
      window.localStorage.getItem("todos")
    );
    if (todosFromLocalStorage) {
      setTodos(todosFromLocalStorage);
    } else {
      setTodos([]);
    }
  }, []);

  // Prevent page refresh and add a new Todo
  function addTodo(e) {
    e.preventDefault();
    // Create a new id
    let id = new Date().getTime();

    if (currentTodo === "") {
      alert("Please enter a valid todo");
      return;
    }
    // The below code does not work since setTodos is async and localStorage.set is synchronous
    // setTodos([...todos, { id: id, title: currentTodo }]);
    // window.localStorage.setItem("todos", JSON.stringify(todos));

    setTodos((prevTodos) => {
      const updatedTodos = [...prevTodos, { id: id, title: currentTodo }];
      window.localStorage.setItem("todos", JSON.stringify(updatedTodos));
      return updatedTodos;
    });

    setCurrentTodo("");
  }

  function deleteTodo(todoId) {
    // The below code does not work since setTodos is async and localStorage.set is synchronous
    // setTodos(todos.filter((todoItem) => todoItem.id !== todoId));
    // window.localStorage.setItem("todos", JSON.stringify(todos));

    setTodos((prevTodos) => {
      const updatedTodos = todos.filter((todoItem) => todoItem.id !== todoId);
      window.localStorage.setItem("todos", JSON.stringify(updatedTodos));
      return updatedTodos;
    });
  }

  // Updates a Todo
  function handleEditButton(todoId) {
    // console.log(todoId);
    setIsEditing(true);
    let currentEditTodo = todos.filter((todoItem) => todoItem.id === todoId);
    // console.log(currentEditTodo[0].title); // current Todo
    setCurrentTodo(currentEditTodo[0].title);
    setCurrentTodoIndex(currentEditTodo[0].id);
    // let updatedTodoText = currentEditTodo;
    // console.log('updatedTodoText', updatedTodoText);
  }

  function updateTodo(e) {
    e.preventDefault();
    console.log(currentTodoIndex);
    console.log("updated text", currentTodo);
    let updatedTodos = todos.map((todoItem) => {
      if (todoItem.id === currentTodoIndex) {
        todoItem.title = currentTodo;
      }
      return todoItem;
    });
    // let updatedTodo = { id: currentTodoIndex, title: currentTodo };
    // let updatedTodos = [...todos, updatedTodo];
    setTodos([...updatedTodos]);
    window.localStorage.setItem("todos", JSON.stringify(updatedTodos));

    // alert('UpdateTodo');
  }

  return (
    <>
      <h2>React Todo App</h2>
      <div>
        {!isEditing && (
          <AddTodoForm
            currentTodo={currentTodo}
            setCurrentTodo={setCurrentTodo}
            addTodo={addTodo}
          />
        )}

        {isEditing && (
          <EditTodoForm
            currentTodo={currentTodo}
            setCurrentTodo={setCurrentTodo}
            updateTodo={updateTodo}
            setIsEditing={setIsEditing}
          />
        )}

        <ul>
          {todos.map((item) => {
            return (
              <TodoItem
                key={item.id}
                index={item.id}
                title={item.title}
                deleteTodo={deleteTodo}
                editTodo={handleEditButton}
              />
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default App;

