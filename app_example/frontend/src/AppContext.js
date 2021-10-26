import React from "react";

export const AppContext = React.createContext({});

export const AppProvider = ({ children }) => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "LOAD_TODOLIST":
        return { ...state, todoList: action.todoList };
      case "LOAD_SINGLE_TODO":
        return { ...state, activeToDoItem: action.todo };
      default:
        return state;
    }
  };

  const [appData, appDispatch] = React.useReducer(reducer, {
    todoList: [],
    activeToDoItem: { id: 0 },
  });

  return (
    <AppContext.Provider value={{ appData, appDispatch }}>
      {children}
    </AppContext.Provider>
  );
};
