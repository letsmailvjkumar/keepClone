import React, { useContext, useState, useEffect } from "react";
import NavBar from "./NavBar";
import TodoContext from "../contexts/TodoContext";

const Note = () => {
  const [title, setTitle] = useState("");
  const [detail, setDetail] = useState("");

  const {addTodo, selectedTodoIndex, todos, updateTodo} = useContext(TodoContext)

  const handleChange = () => {
    if(title==="" && description==="") return;
    
    if(selectedTodoIndex != null) {
        updateTodo(title, detail, selectedTodoIndex)
        reset();
        return;
    }
    addTodo(title, detail)
    reset();
  };

  const reset = () => {
    setTitle("");
    setDetail("");
  };

  useEffect(() => {
    if (selectedTodoIndex != null) {
      const todo = todos[selectedTodoIndex];
      setTitle(todo.title);
      setDetail(todo.detail);
    }
  }, [selectedTodoIndex]);

  return (
    <div className="flex flex-wrap ">
      <div className="w-full">
        <NavBar />
      </div>
      <div className="ms-20 w-full max-sm:m-0">
        <div className="flex flex-col justify-center items-center gap-5">
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Take a note..."
            className="w-72 h-10 ps-2 shadow-lg outline-none"
          />
          <textarea
            name=""
            id=""
            cols="10"
            rows="2"
            value={detail}
            onChange={(e) => setDetail(e.target.value)}
            placeholder="Details"
            className="w-72 h-10 ps-2 shadow-lg outline-none overflow-hidden"
          ></textarea>
          <button className="w-72 border" onClick={handleChange}>
            {
                selectedTodoIndex != null ? "Edit Todo" : "Add Todo"
            }
          </button>
        </div>
      </div>
    </div>
  );
};

export default Note;
