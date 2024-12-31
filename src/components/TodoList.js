import React from 'react'

function TodoList(props) {
  return (
    
      <li className='list-item'>
        {props.item}
      <span className='icons'>
      <i class="fa-solid fa-trash-can icon-delete"
      onClick={
        props.deleteListItem
      }></i>
      </span>
      </li>
      
  )
}

export default TodoList
