import React from 'react';
import {useSelector} from "react-redux";
import {RootState} from "../store/store";
import TodoItem from "./TodoItem";

const TodoList: React.FC = () => {
    const todos = useSelector((state: RootState) => state.todos.todos)

    const sortedTodos = [...todos].sort((a, b) => {
        if (a.important === b.important) return 0;
        return a.important ? -1 : 1;
    });

    return (
        <div role="list" aria-label="Список задач">
            {sortedTodos && sortedTodos.length > 0 ? (
                sortedTodos.map((todo) => (
                    <TodoItem key={todo.id} todo={todo}/>
                ))
            ) : (
                <p>Список задач пуст</p>
            )}
        </div>
    )
};

export default TodoList;