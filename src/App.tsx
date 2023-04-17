import { useState } from 'react'
import './App.css'
import AddTodo from './component/AddTodo'
import { rootReducerType } from './redux/store'
import { useSelector } from 'react-redux'
import Listtodo from './component/Listtodo'
import { TodoTask } from './type'

function App() {
  const {
    iserror,
    isloading,
    todoList
  } = useSelector((store: rootReducerType) => store.todolist)


  return (
    <div className="App">
      <h2> Todo App with typescript</h2>
      <div className='contentBox'>
        <AddTodo />
        {
          todoList.map((todo: TodoTask, index :number) => {
            return <Listtodo key={index} todo={todo} />
          })
        }
      </div>
    </div>
  )
}

export default App
