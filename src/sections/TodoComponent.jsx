import React, { useState } from "react";
import { useContext } from "react";
import { TwitterPicker } from "react-color";
import Tippy from "@tippyjs/react";
import TodoContext from "../contexts/TodoContext";
import { pencil } from "../assets/images";

const TodoComponent = ({ title, detail, index }) => {
  const { removeTodo, setSelectedTodoIndex, updateTodo } =
    useContext(TodoContext);
  const [selectedColor, setSelectedColor] = useState("#ccc");

  const handleDelete = (index) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this todo?"
    );
    if (confirmDelete) {
      removeTodo(index);
    }
  };

  const handleEdit = () => {
    setSelectedTodoIndex(index);
  };

  const handleColorChange = (color) => {
    setSelectedColor(color.hex);
    updateTodo(todo.title, todo.detail, color.hex, index);
  };
  return (
    <div className="shadow-lg p-5" style={{ backgroundColor: selectedColor }}>
      <h2 className="font-semibold text-lg">{title ?? "Title"}</h2>
      <p>{detail ?? "Description"}</p>
      <div className="buttons flex gap-5">
        <button className="border w-20" onClick={handleEdit}>
          Edit
        </button>
        <button className="border w-20" onClick={handleDelete}>
          Delete
        </button>
        <Tippy
          interactive={true}
          content={
            <TwitterPicker
              color={selectedColor}
              onChangeComplete={(color) => setSelectedColor(color.hex)}
            />
          }
        >
          <div>
            <img src={pencil}  className="w-5"/>
          </div>
        </Tippy>
      </div>
    </div>
  );
};

export default TodoComponent;
