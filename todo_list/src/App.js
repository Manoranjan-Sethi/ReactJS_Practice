import "./App.css";
import react, { useState } from "react";
import TodoForm from "./components/TodoForm";
import Todos from "./components/Todos";

function App() {
  const [todo, setTodo] = useState(""); //for single todo
  const [todos, setTodos] = useState([]); //for multiple todo
  const [editId, setEditId] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();

    //for editing a single to and replacing it with a new one

    if (editId) {
      const editTodo = todos.find((t) => t.id === editId);
      const updateTodo = todos.map((t) =>
        t.id === editTodo.id
          ? (t = { id: t.id, todo })
          : { id: t.id, todo: t.todo }
      );
      setTodos(updateTodo);
      setEditId(0);
      setTodo("");
      return;
    }

    if (todo !== "") {
      setTodos([{ id: `${todo}-${Date.now()}`, todo }, ...todos]);
      setTodo(""); //each time the page refreshes input box is empty
    }
  };

  const handleDelete = (id) => {
    const deleteTodo = todos.filter((t) => t.id !== id);
    setTodos([...deleteTodo]);
  };

  const handleEdit = (id) => {
    const editTodo = todos.find((i) => i.id === id);
    setTodo(editTodo.todo);
    setEditId(id);
  };

  return (
    <div className="App">
      <div className="container">
        <h1>Todo List App</h1>

        <TodoForm
          handleSubmit={handleSubmit}
          todo={todo}
          setTodo={setTodo}
          editId={editId}
        />

        <Todos
          handleEdit={handleEdit}
          handleDelete={handleDelete}
          todos={todos}
        />
      </div>
    </div>
  );
}

export default App;
