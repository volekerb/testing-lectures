import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import "./App.css";

import { AppContext } from "./AppContext";

export const TodoList = () => {
  const [loading, setLoading] = React.useState(true);
  const { appData, appDispatch } = React.useContext(AppContext);

  React.useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/todos").then((resp) => {
      const { data } = resp;
      appDispatch({ type: "LOAD_TODOLIST", todoList: data });
      setLoading(false);
    });
  }, [appDispatch, setLoading]);

  return (
    <div>
      {loading ? (
        <p>Fetching todos</p>
      ) : (
        <ul>
          {appData.todoList.slice(0, 15).map((item) => {
            const { id, title } = item;
            return (
              <li key={id}>
                <Link to={`/item/${id}`} data-testid={id}>
                  {title}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};
