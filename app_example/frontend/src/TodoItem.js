import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

import "./App.css";

import { AppContext } from "./AppContext";

export const TodoItem = () => {
  const { id } = useParams();

  const [loading, setLoading] = React.useState(true);

  const {
    appData: { activeToDoItem },
    appDispatch,
  } = React.useContext(AppContext);

  const { title, completed, userId } = activeToDoItem;

  React.useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then((resp) => {
        const { data } = resp;
        appDispatch({ type: "LOAD_SINGLE_TODO", todo: data });
        setLoading(false);
      });
  }, [id, appDispatch]);

  return (
    <div className="single-todo-item">
      {loading ? (
        <p>Fetching todo item {id}</p>
      ) : (
        <div>
          <h2 className="todo-title">{title}</h2>
          <h4>Added by: {userId}</h4>
          {completed ? (
            <p className="completed">This item has been completed</p>
          ) : (
            <p className="not-completed">This item is yet to be completed</p>
          )}

        </div>
      )}
    </div>
  );
};
