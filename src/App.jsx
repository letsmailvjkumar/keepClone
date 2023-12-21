import React from "react"
import { TodoProvider } from "./contexts/TodoContext"
import Note from "./sections/Note"
import List from "./sections/List"

function App() {
  return (
    <>
    
      <TodoProvider>
        <Note />
        <List />
      </TodoProvider>
    </>
      
  )
}

export default App
