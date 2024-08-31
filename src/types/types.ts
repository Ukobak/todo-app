export interface Todo {
    id: number;
    text: string;
    completed: boolean;
    important: boolean;
}

export interface TodoState {
    todos: Todo[];
}

export interface TodoItemProps {
    todo: Todo;
}