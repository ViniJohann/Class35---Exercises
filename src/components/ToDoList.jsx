import { useState } from "react"

function ToDoList() {
    const [todos, setTodos] = useState([])
    const [inputValue, setInputValue] = useState("")
  
    const addTodo = () => {
        setTodos([...todos, inputValue])
        /* setInputValue("") */
    }
  
    const removeTodo = (index) => {
      const newTodos = todos.filter((_, i) => i !== index)
      setTodos(newTodos)
    }
  
    return (
      <div>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Digite uma tarefa..."
        />
        <button onClick={addTodo}>Adicionar Tarefa</button>
        <ul>
          {todos.map((todo, index) => (
            <li key={index}>
              <span >
                {todo}
              </span>
              <button onClick={() => removeTodo(index)} style={{ marginLeft: '10px' }}>
                Remover
              </button>
            </li>
          ))}
        </ul>
      </div>
    )
  }

export default ToDoList