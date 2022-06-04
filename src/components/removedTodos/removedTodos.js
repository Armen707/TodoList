import "./removedTodos.scss";

const RemovedTodos = ({ todo, todos, setTodos, removedTodos, setRemovedTodos }) => {

    const undoHandler = (id) => {
        let newItem = {};
        removedTodos.forEach((todo) => {
            if (todo.id === id) {
                newItem = todo
            }
        })
        setTodos([...todos, newItem])
        setRemovedTodos(removedTodos.filter(i => i.id !== id))
    }

    const deleteHandler = (id) => {
        setRemovedTodos(removedTodos.filter(i => i.id !== id))
    }

    return (
        <div>
            <span className="todoTask">
                {todo.task}
            </span>
            <button className="btn btn-outline-success buttonsTodo"
                onClick={() => undoHandler(todo.id)} >
                <i className="fa fa-undo" aria-hidden="true" />
            </button>
            <button className="btn btn btn-outline-danger buttonsTodo"
                onClick={() => deleteHandler(todo.id)} >
                <i className="fa fa-trash-o" />
            </button>
        </div>
    )
}

export default RemovedTodos;