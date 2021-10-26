const makeTodos = (n) => {
  // returns n number of to-do items
  // default is 15

  const num = n || 15;
  const todos = [];
  for (let i = 0; i < num; i++) {
    todos.push({
      id: i,
      userId: i,
      title: `Todo item ${i}`,
      completed: [true, false][Math.floor(Math.random() * 2)],
    });
  }
  return todos;
};

export const todos = makeTodos(200);
