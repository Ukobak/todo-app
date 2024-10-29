import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { addTodo } from "../store/slices/todoSlice";
import { Input, Button } from 'antd';

const AddItem: React.FC = () => {
    const [text, setText] = useState('');
    const dispatch = useDispatch();

    const handleAdd = () => {
        if (text.trim()) {
            dispatch(addTodo(text));
            setText('');
        }
    };

    return (
        <div className='add-item'>
            <Input
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder='Добавьте новую задачу'
                aria-label='Добавить новую задачу'
                style={{ marginRight: '8px' }}
            />
            <Button
                onClick={handleAdd}
                type="primary"
                aria-label='Добавить задачу'
            >
                Добавить
            </Button>
        </div>
    );
};

export default AddItem;
