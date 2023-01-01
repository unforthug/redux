import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';

const TodoSlice = createSlice({
  name : "todo",
  initialState : {todos : []},
  reducers:{
    AddTodo : (state,action) =>{
        state.todos.push(action.payload)
    }
  }

})

export default TodoSlice.reducer;
export const {AddTodo} = TodoSlice.actions;