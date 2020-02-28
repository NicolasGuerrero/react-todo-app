import React, { useState } from 'react';

function Todo({ task, removeTodo, id }) {
  const [todo, setTodo] = useState(task);

  // edit form
  const editTodo = formTodo => {
    let editedTodo = { ...formTodo };
    setTodo(editedTodo);
  }
  return (
    <div>
      <div className="Todo">{task}</div>
      <div className="Todo-button">
        <button onClick={() => removeTodo(id)}>X</button>
        <button onClick={() => editTodo(id)}>Edit</button>
      </div>
    </div>
  );

};

export default Todo;