import React, { useState } from 'react';

//props
function NewTodoForm({ addTodo }) {
  const INITIAL_STATE = { task: ""};

  const [form, setForm] = useState(INITIAL_STATE);

  const handleSubmit = e => {
    e.preventDefault();
    addTodo(form);
    setForm(INITIAL_STATE);
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(form => ({
      ...form,
      [name]: value
    }));
  };

  return (
    <div className="container">
      <form className="NewTodoForm" onSubmit={handleSubmit}>
        <label htmlFor="task">Task:</label>
        <input
          id="task"
          name="task"
          value={form.task}
          onChange={handleChange}
        />
        <button className="NewTodoForm-button">Add new task</button>
      </form>
    </div>
  );
};

export default NewTodoForm;