// Server side

const Posts = async () => {
  try {
    
    const slowResponse = await fetch('http://procodrr.vercel.app/?sleep=4000')
    const slowData = slowResponse.json()

    const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
    if (!response.ok) {
      throw new Error('Failed to fetch todos')
    }
    const todos = await response.json()

    return (
      <div className="todos-container">
        <h1>Todos</h1>
        <ul className="todos-list">
          {todos.map(todo => (
            <li key={todo.id} className={`todo-item ${todo.completed ? 'completed' : ''}`}>
              <input 
                type="checkbox" 
                checked={todo.completed} 
                readOnly 
              />
              <span>{todo.title}</span>
            </li>
          ))}
        </ul>
      </div>
    )
  } catch (error) {
    console.error('Error fetching todos:', error)
    return (
      <div className="error-message">
        Failed to load todos. Please try again later.
      </div>
    )
  }
}

export default Posts