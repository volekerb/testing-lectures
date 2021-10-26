import React from "react";
import axios from "axios";

import { render, screen, waitForElementToBeRemoved } from "./custom-render";

import { TodoList } from "./TodoList";

import { todos } from "./makeTodos";

describe("<App />", () => {
  it("Renders <TodoList /> component", async () => {
    render(<TodoList />);
    await waitForElementToBeRemoved(() => screen.getByText(/Fetching todos/i));

    expect(axios.get).toHaveBeenCalledTimes(1);
    todos.slice(0, 15).forEach((td) => {
      expect(screen.getByText(td.title)).toBeInTheDocument();
    });
  });
});
