import React, { useState } from 'react';

function EditTodoForm({ editTodo, id, task }) {
  const [form, setForm] = useState(task);

  const handleSubmit = e => {
    e.preventDefault();
    editTodo(form);
    setForm(form);
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
      <form className="EditTodoForm" onSubmit={handleSubmit}>
        <label htmlFor="task">Task:</label>
        <input
          id="task"
          name="task"
          value={form.task}
          onChange={handleChange}
        />
        <button className="EditTodoForm-button">Update</button>
      </form>
    </div>
  );
};

export default EditTodoForm;