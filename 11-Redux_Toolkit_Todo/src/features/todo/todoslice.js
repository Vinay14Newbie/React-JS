import { createSlice, nanoid } from "@reduxjs/toolkit";
// nanoid provides unique ids'

const initialState = {
    todos: [{id: 1, text: "Study"}]
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        // here in redux we have to declare the definatation of it 
        // state: current state
        addTodo: (state, action)=>{
            const todo = {
                id: nanoid(), 
                text: action.payload
            }
            state.todos.push(todo)
        },  
        removeTodo: (state, action)=>{
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        }
    }
})

export const {addTodo, removeTodo} = todoSlice.actions

export default todoSlice.reducer