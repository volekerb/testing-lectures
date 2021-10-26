import React from "react";
import axios from "axios";

import { render, screen, waitForElementToBeRemoved } from "./custom-render";
import { useParams, MemoryRouter } from "react-router-dom";

import { TodoItem } from "./TodoItem";

describe("<TodoItem />", () => {
  it("can tell mocked from unmocked functions", () => {
    expect(jest.isMockFunction(useParams)).toBe(true);
    expect(jest.isMockFunction(MemoryRouter)).toBe(false);
  });

  it("Renders <TodoItem /> correctly for a completed item", async () => {
    useParams.mockReturnValue({ id: 1 });

    render(<TodoItem />);

    await waitForElementToBeRemoved(() =>
      screen.getByText(/Fetching todo item 1/i)
    );
    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(screen.getByText(/todo item 1/)).toBeInTheDocument();
    expect(screen.getByText(/Added by: 1/)).toBeInTheDocument();
    expect(
      screen.getByText(/This item has been completed/)
    ).toBeInTheDocument();
  });

  it("Renders <TodoItem /> correctly for an uncompleted item", async () => {
    useParams.mockReturnValue({ id: 2 });

    render(<TodoItem />);
    await waitForElementToBeRemoved(() =>
      screen.getByText(/Fetching todo item 2/i)
    );
    expect(axios.get).toHaveBeenCalledTimes(2);
    expect(screen.getByText(/todo item 2/)).toBeInTheDocument();
    expect(screen.getByText(/Added by: 2/)).toBeInTheDocument();
    expect(
      screen.getByText(/This item is yet to be completed/)
    ).toBeInTheDocument();
  });
});
