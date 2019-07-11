import React from 'react';
import './App.css';
import {useState} from 'react';



function TodoForm( { addTodo }) {
  const [ value, setValue ] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
      type="text"
      className="input"
      value={value}
      onChange={e => setValue(e.target.value)} />
    </form>
    
  );
}

function Todo({ todo, index, completeTodo, removeTodo}) {
  return (
    <div
    className="todo"
    style={{ textDecoration: todo.isCompleted ? "line-through" : ""}}
    >
      {todo.text}
      <div>
        
        <button onClick={() => completeTodo(index)}>Complete</button>
        <button onClick={() => removeTodo(index)}>Delete</button>
      </div>
    </div>
  )
}
function App() {
    const [todos, setTodos] = useState([
      {
        text: "Learn about React",
      isCompleted: false
     },
      { 
        text: "Meet Friend for lunch",
      isCompleted: false
     },
      { 
        text: "Build really cool todo app",
      isCompleted: false
     }
    ]);

    /// ADD ITEM 
    const addTodo = text => {
      const newTodos = [...todos, {text}];
      setTodos(newTodos);
    };

    /// UPDATE ITEM As Complete
    const completeTodo = index => {
      const newTodos = [...todos];
      newTodos[index].isCompleted = true;
      setTodos(newTodos);
    };

    /// DELETE ITEM
    const removeTodo = index => {
      const newTodos = [...todos];
      newTodos.splice(index, 1);
      setTodos(newTodos);
    };

    /// READ ITEMS FROM LIST ///
    return (
      <div className="app">
        <div className="todo-list">
          {todos.map((todo, index) => (
            <Todo
            key={index}
            index={index}
            todo={todo}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
            />
          ))}
          <TodoForm addTodo={addTodo} />
          </div>
          </div>
    );
  
}

export default App;
