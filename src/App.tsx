import React from 'react';
import './styles/App.css';
import {Provider} from "react-redux";
import store from "./store/store";
import AddItem from "./components/AddItem";
import TodoList from "./components/TodoList";

function App() {
    return (
        <Provider store={store}>
            <div className="todo-app">
                <div className="todo-app__wrapper">
                    <h1>Список задач</h1>
                    <AddItem/>
                    <div className="todo-app__list">
                        <TodoList/>
                    </div>
                </div>
            </div>
        </Provider>
    );
}

export default App;
