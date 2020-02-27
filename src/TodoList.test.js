import React from "react";
import { render, fireEvent } from "@testing-library/react";
import TodoList from "./TodoList";

function addTodo(todoList, task = "Buy Groceries") {
  const taskInput = todoList.getByLabelText("Task:");

  fireEvent.change(taskInput, { target: { value: task}});

  const button = todoList.getByText("Add new task");
  fireEvent.click(button);
}

it("renders without crashing", function () {
  render(<TodoList />);
});

it("matches snapshot - new TodoList", function() {
  const { asFragment } = render(<TodoList />);
  expect(asFragment()).toMatchSnapshot();
});

it("it can add a new todo item", function() {
  const todoList = render(<TodoList />);

  expect(todoList.queryByText("X")).not.toBeInTheDocument();

  addTodo(todoList);

  expect(todoList.queryByText("X")).toBeInTheDocument();
});

it("it can delete a box", function() {
  const todoList = render(<TodoList />);

  addTodo(todoList);

  expect(todoList.queryByText("X")).toBeInTheDocument();

  const removeButton = todoList.queryByText("X");

  fireEvent.click(removeButton);

  expect(todoList.queryByText("X")).not.toBeInTheDocument();
});
