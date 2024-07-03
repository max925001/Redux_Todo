import {createSlice ,nanoid} from '@reduxjs/toolkit'
//nanoid use for generate unique id

const initialState ={

    todos: [{id:1 ,text:"hello world"}]

}
console.log(initialState)

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers:{ // ye reducers hai jisme property aur function aayega
        addTodo: (state,action) =>{
// here addtodo is property and state and action isme har bar milta hai jab hum koi property bnate hai
// state is use for for access of initial state
console.log(action.payload)
           const todo ={
            id:nanoid() ,
            text:action.payload,
           
            
           }

           state.todos.push(todo)//ye line todos me value add kar rha hai todo wali

        },
        removeTodo: (state,action) =>{
            console.log("delete" ,action.payload)
            state.todos =state.todos.filter((todo) =>todo.id!==action.payload) //isme koi ek id match nhi hoga jo filter gayab kar dega
        },
        editTodo: (state ,action) =>{
state.todos = state.todos.map((todo) =>todo.id===action.payload.id?{...todo ,text:action.payload.text}:todo)


        }
      
        
    }
})




export const {addTodo,removeTodo ,editTodo}  =todoSlice.actions 
//ye functionality to export karta hai

export default todoSlice.reducer