import React, { useState } from 'react'
import '../App.css';
import { useDispatch } from 'react-redux';
import { createTodo } from '../redux/TodoSlice';
import { TodoType } from '../types/Types';
function TodoCreate() {
    const dispatch = useDispatch();
    const [newTodo, setNewTodo] = useState<string>('');
    const handleCreateTodo = () => {
        if (newTodo.trim().length == 0) {
            alert("todo girin")
            return;
        }
        const payload: TodoType = {
            id: Math.floor(Math.random() * 99999999),
            content: newTodo
        }
        dispatch(createTodo(payload))
        setNewTodo('')
    }
    return (
        <div className='todo-create'>
            <input value={newTodo} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNewTodo(e.target.value)} placeholder='Todo girin' className='todo-input' type="text" />
            <button onClick={handleCreateTodo} className='todo-create-button'>Oluştur</button>
        </div>
    )
}

export default TodoCreate