import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {addTodo} from "../store/slices/todoSlice";

const AddItem: React.FC = () => {
   const [text, setText] = useState('')
    const dispatch = useDispatch()

    const handleAdd = () => {
       if (text.trim()) {
           dispatch(addTodo(text))
           setText('')
       }
    }

    return (
        <div className='add-item'>
            <input
                type="text"
                className='add-item__input'
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder='Добавьте новую задачу'
                aria-label='Добавить новую задачу'
            />
            <button
                onClick={handleAdd}
                className='add-item__button'
                aria-label='Добавить задачу'
            >
                Добавить
            </button>
        </div>
    )
};

export default AddItem;