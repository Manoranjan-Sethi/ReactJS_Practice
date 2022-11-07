import React from "react";

function Todos({ handleEdit, handleDelete, todos }) {
  return (
    <ul className="list">
      {todos.map((t) => (
        <li className="single">
          <span className="text" key={t.id}>
            {t.todo}
          </span>
          <button onClick={() => handleEdit(t.id)}>Edit</button>
          <button onClick={() => handleDelete(t.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default Todos;
