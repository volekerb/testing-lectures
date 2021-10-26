import { todos } from "../makeTodos";

export default {
  get: jest.fn().mockImplementation((url) => {
    switch (url) {
      case "https://jsonplaceholder.typicode.com/todos":
        return Promise.resolve({ data: todos });
      case "https://jsonplaceholder.typicode.com/todos/1":
        return Promise.resolve({
          data: { id: 1, title: "todo item 1", userId: 1, completed: true },
        });
      case "https://jsonplaceholder.typicode.com/todos/2":
        return Promise.resolve({
          data: { id: 2, title: "todo item 2", userId: 2, completed: false },
        });

      default:
        throw new Error(`UNMATCHED URL: ${url}`);
    }
  }),
};
