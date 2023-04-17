import React, { FormEvent, ChangeEvent, useState, Dispatch, useRef } from 'react'
import '../assets/style/addTodo.css'
import { useDispatch } from 'react-redux'
import { addTodo } from '../redux/TodoReducer/todoActions'

const AddTodo: React.FC = () => {
    const [context, setContext] = useState<string>('')
    const dispatch = useDispatch()
    const focus = useRef<HTMLInputElement>(null)
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setContext(event.target.value)
    }

    const handleadd = (event: FormEvent<HTMLDivElement>) => {
        event.preventDefault()
        addTodo(context)(dispatch)
        setContext('')
        focus.current?.focus()
    }
    return (
        <div className='addBox' onSubmit={(event) => handleadd(event)}>
            <form action="" className='form'>
                <input ref={focus} value={context} type="text" onChange={(event) => handleChange(event)} required />
                <button type='submit'>add</button>
            </form>
        </div>
    )
}

export default AddTodo
