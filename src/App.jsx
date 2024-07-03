import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddTodo from './components/AddTodos'
import Todo from './components/Todos'
import { useSelector } from 'react-redux'

function App() {
  const todos = useSelector(state =>state.todos)
  console.log("app",todos)

  return (
    <>
      <AddTodo/>
     {todos.map((todo) =>(

      <Todo todo={todo} key={todo.id}/>
     ))}
    </>
  )
}

export default App
