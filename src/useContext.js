import React, { useContext } from 'react';
import ReactDOM from 'react-dom/client';

const MyContext = React.createContext();

const App = () => {
    const string = () => {
        return (
            <p> "hello world" </p>
        )
    }
    return (
        <MyContext.Provider value = {string()} >
            <Child />
        </MyContext.Provider>
    )
}

const Child = () => {
    const brbr = useContext(MyContext)
    return (
   <div>
        {brbr}
   </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);