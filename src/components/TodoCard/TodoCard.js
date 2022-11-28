import "./TodoCard.scss";

import { useState } from "react";
const TodoCard = () => {
  const [input, setInputs] = useState({});

  function handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    // setInputs(values => ({...values, [name]: value}))
    setInputs(function (values) {
      return {
        ...values,
        [name]: value,
      };
    });
  }

  function formSubmit(event) {
    event.preventDefault();
  }

  return (
    <div className="todo-card">
      <div className="todo-list-wrap">
        <div className="card todo-list bg-white p-3">
          <form onSubmit={formSubmit}>
            <input
              type="text"
              name="todoName"
              className="form-control"
              placeholder="Add Todo"
              value={input.todoName || ""}
              onChange={handleChange}
            />
            <input
              type="text"
              name="todoDesc"
              className="form-control"
              placeholder="Description"
              value={input.todoDesc || ""}
              onChange={handleChange}
            />
            <button type="submit" className="btn btn-primary">
              Add
            </button>
          </form>
          <div className="list-items mt-3">
            <ol className="list-group"></ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoCard;
