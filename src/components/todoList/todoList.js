import { useState } from "react";
import Todo from "../todo/todo";
import RemovedTodos from "../removedTodos/removedTodos";
import "./todoList.scss";

const TodoList = ({ todos, setTodos }) => {

    const [inputValue, setInputValue] = useState("");
    const [removedTodos, setRemovedTodos] = useState([]);

    const formSubmitHandler = (e) => {
        e.preventDefault()
        setInputValue("")
    }

    const onChangeHandler = (e) => {
        setInputValue(e.target.value)
    }

    const addTask = () => {
        if (inputValue) {
            const newItem = {
                id: Math.random().toString(36),
                task: inputValue,
            }
            setTodos([...todos, newItem])
        }
    }

    return (
        <div>
            <form onClick={formSubmitHandler} className="inputFormContainer">
                <input
                    type="text"
                    className="form-control"
                    value={inputValue}
                    onChange={onChangeHandler}
                    placeholder="Try Todo..."
                />
                <button
                    className="btn btn-outline-primary buttonAddTask"
                    onClick={addTask} >
                    Add Todo
                </button>
            </form>

            {todos.map((todo) => {
                return (
                    <Todo
                        key={todo.id}
                        todo={todo}
                        todos={todos}
                        setTodos={setTodos}
                        removedTodos={removedTodos}
                        setRemovedTodos={setRemovedTodos}
                    />
                )
            })}

            <hr className="hrTodoList" />
            
            {removedTodos.map((todo) => {
                return (
                    <RemovedTodos
                        key={todo.id}
                        todo={todo}
                        todos={todos}
                        setTodos={setTodos}
                        removedTodos={removedTodos}
                        setRemovedTodos={setRemovedTodos}
                    />
                )
            })}
        </div>
    )
}

export default TodoList;