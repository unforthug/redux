import React from 'react'
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import {useDispatch} from 'react-redux'
import {AddTodo} from '../store/TodoSlice'
import './todo.css'

function Todo({todos}) {

const [todo,setTodo] = useState("")
const dispatch = useDispatch()   

const handleChange = (e) => {
    setTodo(e.target.value);
}
const handleAddTodo =(e)=> {
    dispatch(AddTodo({id : uuidv4() , task : todo}))
    e.preventDefault();
    setTodo('')
}

  return (
    <div className='low'>
        <form onSubmit={handleAddTodo} className="todo">
           <input name='todo' value={todo} type="text" placeholder='Enter your Todo' onChange={handleChange} />
           <button type='submit'>Add</button>
        </form>
    </div>
  )
}

export default Todo