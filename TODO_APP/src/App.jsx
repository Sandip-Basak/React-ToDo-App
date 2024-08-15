import { useState } from 'react'
import TodoList from './Components/todoList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <TodoList />
    </>
  )
}

export default App
