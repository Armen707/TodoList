import React, { useState } from "react";
import Header from "../components/header/header";
import TodoList from "../components/todoList/todoList";
import "./app.scss";

const App = () => {
    const [todos, setTodos] = useState([]);

    return (
        <div className="appContainer">
            <Header todos={todos} />
            <hr className="hrTodoList" />
            <TodoList todos={todos} setTodos={setTodos} />
        </div>
    )
}

export default App;