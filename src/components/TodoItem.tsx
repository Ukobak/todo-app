import React from 'react';
import { TodoItemProps } from "../types/types";
import { useDispatch } from "react-redux";
import { markImportant, removeTodo, toggleTodo } from "../store/slices/todoSlice";
import { ReactComponent as CloseIcon } from '../images/cross.svg';
import { ReactComponent as StarIcon } from '../images/star.svg';
import { Checkbox, Button, Tooltip } from 'antd';

const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
    const dispatch = useDispatch();

    const handleToggle = () => {
        dispatch(toggleTodo(todo.id));
    };

    const handleMarkImportant = () => {
        dispatch(markImportant(todo.id));
    };

    const handleRemove = () => {
        dispatch(removeTodo(todo.id));
    };

    return (
        <div className='todo-item'>
            <div className='todo-item__content'>
                <Tooltip title="Пометить как важное">
                    <Button
                        onClick={handleMarkImportant}
                        className={`todo-item__important-button ${todo.important ? 'todo-item__important-button--active' : ''}`}
                        aria-label="Пометить как важное"
                        icon={<StarIcon className={`todo-item__important-button-icon ${todo.important ? 'todo-item__important-button-icon--active' : ''}`} width={24} height={24} />}
                    />
                </Tooltip>
                <Checkbox
                    checked={todo.completed}
                    onChange={handleToggle}
                    aria-label={`Задача "${todo.text}" выполнена`}
                />
                <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
                    {todo.text}
                </span>
            </div>
            <Tooltip title="Удалить задачу">
                <Button
                    onClick={handleRemove}
                    className='todo-item__delete-button'
                    aria-label="Удалить задачу"
                    icon={<CloseIcon className='todo-item__delete-button-icon' width={24} height={24} />}
                />
            </Tooltip>
        </div>
    );
};

export default TodoItem;
