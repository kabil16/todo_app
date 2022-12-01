import React from 'react'

const TodoItem = ({text,onClick,index}) => {
  return (
    <>
    <li onClick={onClick}>{text}</li>
    </>
  )
}

export default TodoItem