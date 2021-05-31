import { useState } from 'react'
// components
import NewTodo from './components/NewTodo';
import Todos from './components/Todos';
import Todo from './models/todo';

function App() {
  const [todos, setTodos] = useState<Todo[]>([])

  const addTodoHandler = (todoText: string) => {

    const newTodo = new Todo(todoText)
    setTodos([...todos, newTodo])
  };

  const removeTodo = (todoId: string) => {
    // setTodos(todos.filter(todo => todo.id !== todoId)) // <== my way because as I remember here we are returning new array
    setTodos((prevTodos) => {
      return prevTodos.filter(todo => todo.id !== todoId)
    })
  }

  return (
    <div className="App">
      <NewTodo onAddTodo={addTodoHandler} />
      <Todos items={todos} removeTodo={removeTodo} />
    </div>
  );
}

export default App;
