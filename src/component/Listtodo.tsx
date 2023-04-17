import React, { ChangeEvent, useState } from 'react'
import { TodoTask } from '../type'
import "../assets/style/listTodo.css"
import { useDispatch } from 'react-redux'
import { deleteTodoTask } from '../redux/TodoReducer/todoActions'

interface ListTodoType {
    todo: TodoTask
}

const Listtodo: React.FC<ListTodoType> = ({ todo }) => {
    console.log('Listtodo', todo)
    const dispatch = useDispatch()
    const deletetask = (id: number) => {
        deleteTodoTask(id)(dispatch)
    }
    const [isedit, setIsedit] = useState<Boolean>(false)
    const [value, setValue] = useState(todo.context)
    const handleeditvalue = (event: ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value)
    }
    const handleEdit = (id: number) => { }
    return (
        <div className='listbar'>
            {
                isedit ? <input type="text" value={value} onChange={handleeditvalue} /> :
                    <p key={todo.id} onClick={() => setIsedit((prev) => !prev)}>{todo.context}</p>
            }
            <button onClick={() => handleEdit(todo.id)}>Edit</button>
            <button onClick={() => deletetask(todo.id)}>delete</button>
        </div>
    )
}

export default Listtodo