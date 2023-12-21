import React from 'react'
import { useContext } from 'react'
import TodoComponent from './TodoComponent'
import TodoContext from '../contexts/TodoContext'

const List = () => {
    const {todos}  = useContext(TodoContext)
  return (
    <div className='flex justify-center mt-20 gap-10 flex-wrap'>
      {todos === null || todos === undefined ? (
        <p>Loading...</p>
      ) : todos.length === 0 ? (
        <p>No data present</p>
      ) : (
        todos.map((todo, i) => (
          <TodoComponent key={i} title={todo.title} detail={todo.detail} index={i} />
        ))
      )}
    </div>
  )
}

export default List