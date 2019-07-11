import React from 'react';
import logo from './logo.svg';
import './App.css';
import useState from 'react';
function App() {
    const [todos, setTodos] = useState([
      {text: "Learn about React" },
      { text: "Meet Friend for lunch" },
      { text: "Build really colol todo app" }
    ]);

    const Todo = ({ todo }) =><div classname="todo">{todo.text}</div>
      
    return (
      <div className="app">
        <div className="todo-list">
          {todos.map((todo, index) => (
            <Todo
            key={index}
            index={index}
            todo={todo}
            />
          ))}
          </div>
          </div>
    );
  
}

export default App;
