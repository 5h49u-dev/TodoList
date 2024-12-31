import React, { useState } from 'react'


function TodoInput(props) {
    const[InputText,setInputText]=useState('')
  return (
    <div className='input-container'>
      <input type="text" className='input-box-todo' 
      placeholder='Enter your todo'
      value={InputText}
      onChange={e=>{
        setInputText(e.target.value)
      }}/>
      <button className='add-btn'
      onClick={()=>{
        props.addlist(InputText)
        setInputText("")
      }}>+</button>
     
    </div>
  )
}

export default TodoInput
