import React from 'react';

function Todo({ task, removeTodo, id }) {
  const handleRemove = () => {
    removeTodo(id);
  }
  return (
    <div> 
      <div className="Todo">{task}</div>
      <div className="Todo-button">
        <button onClick={handleRemove}>X</button>
      </div>
    </div>
  );

};

export default Todo;