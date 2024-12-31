import React, { useState } from 'react'
import "./App.css"
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList';

function App() {
  const[listTodo,setlistTodo]=useState([]);

  let addlist=(InputText)=>{
    if(InputText!==''){
    setlistTodo([...listTodo,InputText]);
    }
  }

  const deleteListItem=(key)=>{
    let newListTodo=[...listTodo];
    newListTodo.splice(key,1);
    setlistTodo([...newListTodo]);
  }
  return (
    <div className='main-container'>
      <div className='center-container'>
      <TodoInput addlist={addlist}/>
      <h1 className='app-heading'>Todo</h1>
      <hr/>
      <p className='task-count'>Number of tasks: {listTodo.length}</p>
      {listTodo.map((listItem,i)=>{
        return(
          <TodoList key={i} index={i} item={listItem} deleteListItem={deleteListItem}/>
        )
      })}
      </div>
    </div>
  )
}

export default App
