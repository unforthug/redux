
import { useState } from 'react';
import './App.css';
import Todo from './Components/Todo';
import {useSelector} from 'react-redux'

function App() {
   const {todos} = useSelector((state)=> state.todo)

  return (
    <div className="App">
      <Todo todos={todos}/>
      {todos.map((el) => <h4 className='todo'>{el.task}</h4>)}
    </div>
  );
}

export default App;
