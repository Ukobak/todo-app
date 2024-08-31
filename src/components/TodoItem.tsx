import React from 'react';
import {TodoItemProps} from "../types/types";
import {useDispatch} from "react-redux";
import {markImportant, removeTodo, toggleTodo} from "../store/slices/todoSlice";
import {ReactComponent as CloseIcon} from '../images/cross.svg';
import {ReactComponent as StarIcon} from '../images/star.svg';

const TodoItem: React.FC<TodoItemProps> = ({todo}) => {
    const dispatch = useDispatch()

    const handleToggle = () => {
        dispatch(toggleTodo(todo.id))
    }

    const handleMarkImportant = () => {
        dispatch(markImportant(todo.id))
    }

    const handleRemove = () => {
        dispatch(removeTodo(todo.id))
    }


    return (
        <div className='todo-item'>
            <div className='todo-item__content'>
                <button
                    onClick={handleMarkImportant}
                    className={`todo-item__important-button ${todo.important ? 'todo-item__important-button--active' : ''}`}
                    aria-label="Пометить как важное"
                >
                    <StarIcon
                        className={`todo-item__important-button-icon ${todo.important ? 'todo-item__important-button-icon--active' : ''}`}
                        width={24}
                        height={24}
                    />
                </button>
                <input
                    type='checkbox'
                    className='todo-item__checkbox'
                    checked={todo.completed}
                    onChange={handleToggle}
                    aria-label={`Задача "${todo.text}" выполнена`}
                />
                <span style={{textDecoration: todo.completed ? 'line-through' : 'none'}}>
                    {todo.text}
                </span>
            </div>
            <button
                onClick={handleRemove}
                className='todo-item__delete-button'
                aria-label="Удалить задачу"
            >
                <CloseIcon className='todo-item__delete-button-icon' width={24} height={24}/>
            </button>
        </div>
    );
};


export default TodoItem;