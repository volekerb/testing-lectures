import React from "react";
import axios from "axios";
import userEvent from "@testing-library/user-event";

import { render, screen, waitForElementToBeRemoved } from "./custom-render";

import App from "./App";
import { todos } from "./makeTodos";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
}));

describe("<App />", () => {
  it("Renders <App /> component correctly", async () => {
    render(<App />);
    expect(
      screen.getByText(/Getting started with React testing library/i)
    ).toBeInTheDocument();
    await waitForElementToBeRemoved(() => screen.getByText(/Fetching todos/i));
  });

  it("Renders todos, and I can click to view a todo item", async () => {
    render(<App />);

    await waitForElementToBeRemoved(() => screen.getByText(/Fetching todos/i));

    todos.slice(0, 15).forEach((td) => {
      expect(screen.getByText(td.title)).toBeInTheDocument();
    });

    const { id, title, completed, userId } = todos[0];
    axios.get.mockImplementationOnce(() =>
      Promise.resolve({
        data: { id, title, userId, completed },
      })
    );

    userEvent.click(screen.getByTestId(String(id)));
    await waitForElementToBeRemoved(() =>
      screen.getByText(`Fetching todo item ${String(id)}`)
    );

    expect(screen.getByText(title)).toBeInTheDocument();
    expect(screen.getByText(`Added by: ${userId}`)).toBeInTheDocument();

    switch (completed) {
      case true:
        expect(
          screen.getByText(/This item has been completed/)
        ).toBeInTheDocument();
        break;
      case false:
        expect(
          screen.getByText(/This item is yet to be completed/)
        ).toBeInTheDocument();
        break;
      default:
        throw new Error("No match");
    }
  });
});
