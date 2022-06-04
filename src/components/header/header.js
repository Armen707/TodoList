import "./header.scss";

const Header = ({todos}) => {

    return (
        <div>
            <h1> TODOS: {todos.length} </h1>
        </div>
    )
}

export default Header;