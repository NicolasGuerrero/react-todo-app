import React, { useState } from 'react';
import NewTodoForm from './NewTodoForm';
import Todo from './Todo'
import { v4 as uuid } from 'uuid';

function TodoList() {
  const [todos, setTodos] = useState([]);

  //render Todo items
  const renderTodoList = () => {
    return (
      <div>
        {todos.map(todo => (
          <Todo key={todo.id}
            id={todo.id}
            task={todo.task}
            removeTodo={removeTodo}
          />
        ))}
      </div>
    );
  };
  // add Todo item
  const addTodo = todo => {
    let newTodo = { ...todo, id: uuid() };
    setTodos(todos => [...todos, newTodo]);
  }

  // remove Todo item
  const removeTodo = id => {
    setTodos(todos.filter(todo => todo.id !== id));
  }

  // return 
  return (
    <div className="TodoList">
      <NewTodoForm addTodo={addTodo} />
      {renderTodoList()}
    </div>
  )
};


export default TodoList;