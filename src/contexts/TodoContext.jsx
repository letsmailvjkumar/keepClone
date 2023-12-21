import React, { useEffect } from "react";
import { createContext, useState } from "react";

const TodoContext = createContext()

export const TodoProvider = ({ children }) => {
    
    const storedTodos = JSON.parse(localStorage.getItem("todos")) || [];
    const [todos, setTodos] = useState(storedTodos);
    const [selectedTodoIndex, setSelectedTodoIndex] = useState(null);
    
    // update localStorage whenever todo changes
    useEffect(()=> {
        localStorage.setItem(todos, JSON.stringify(todos))
    }, [todos])

    const addTodo = (title, detail) => {
        const newTodo = {
            title,
            detail,
            color: '#ccc',
          };
          // Add new todo at the beginning of the array
          const updatedTodos = [newTodo, ...todos]
          setTodos(updatedTodos);
          localStorage.setItem("todos", JSON.stringify(updatedTodos));
    };

    const updateTodo = (title, detail, index) => {
        const temp = [...todos]
        temp[index] = {
            title,
            detail,
        }
        setTodos(temp)
        setSelectedTodoIndex(null)
        localStorage.setItem('todos', JSON.stringify(temp))
    };

    const removeTodo = (index) => {
        const temp = [...todos]
        temp.splice(index, 1)
        setTodos(temp)
        localStorage.setItem('todos', JSON.stringify(temp));
    }

    return (
        <TodoContext.Provider
        value={{
            todos,
            selectedTodoIndex,
            setSelectedTodoIndex,
            addTodo,
            updateTodo,
            removeTodo,
        }}
        >
            {children}
        </TodoContext.Provider>
    )
}

export default TodoContext