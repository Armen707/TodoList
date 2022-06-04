import { useState } from "react";
import "./todo.scss";

const Todo = ({ todo, todos, setTodos, removedTodos, setRemovedTodos }) => {

    const [isCompleted, setIsCompleted] = useState(false)
    const [isEdit, setIsEdit] = useState(false)
    const [editValue, setEditValue] = useState(todo.task)

    const isComletedStyle = isCompleted ? "todoTaskImportant" : "todoTask"

    const onToogleHandler = () => {
        setIsCompleted(!isCompleted)
    }

    const editHandler = () => {
        setIsEdit(true)
    }

    const removeHandler = (id) => {
        let newItem = {};
        todos.forEach((todo) => {
            if (todo.id === id) {
                newItem = todo
            }
        })

        setRemovedTodos([...removedTodos, newItem])
        setTodos(todos.filter(i => i.id !== id))
    }

    const editSubmitHandler = (e) => {
        e.preventDefault()
    }

    const changedValue = (e) => {
        setEditValue(e.target.value)
    }

    const saveHandler = (id) => {
        todos.map(todo => todo.id === id ? todo.task = editValue : null)
        setIsEdit(false)
    }

    return (
        <div>
            {
                isEdit ?
                    <>
                        <form onClick={editSubmitHandler} className="formContainer">
                            <input value={editValue} onChange={changedValue} className="form-control" />
                            <button
                                className="btn btn-outline-primary buttonsTodo"
                                onClick={() => saveHandler(todo.id)} >
                                Save
                            </button>
                        </form>
                    </>
                    :
                    <>
                        <span className={isComletedStyle} >
                            {todo.task}
                        </span>
                        <button className="btn btn-outline-success buttonsTodo" 
                            onClick={onToogleHandler} >
                            <i className="fa fa-exclamation" />
                        </button>
                        <button className="btn btn-outline-primary buttonsTodo"
                             onClick={() => editHandler(todo.id)} >
                            <i className="fa fa-pencil-square-o" />
                        </button>
                        <button className="btn btn-outline-danger buttonsTodo" 
                            onClick={() => removeHandler(todo.id)}>
                            <i className="fa fa-trash-o" />
                        </button>
                    </>
            }
        </div>
    )
}

export default Todo;