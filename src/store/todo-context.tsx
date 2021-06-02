import { createContext, useState } from 'react'

import Todo from '../models/todo'

export const TodosContext = createContext<{
    items: Todo[];
    addTodo: (text: string) => void;
    removeTodo: (id: string) => void;
}>({
    items: [],
    addTodo: () => { },
    removeTodo: (id: string) => { }
})

const TodosContextProvider: React.FC = (props) => {

    const [todos, setTodos] = useState<Todo[]>([])

    const addTodoHandler = (todoText: string) => {
        const newTodo = new Todo(todoText)
        setTodos([...todos, newTodo])
    };

    const removeTodoHandler = (todoId: string) => {
        // setTodos(todos.filter(todo => todo.id !== todoId)) // <== my way because as I remember here we are returning new array
        setTodos((prevTodos) => {
            return prevTodos.filter(todo => todo.id !== todoId)
        })
    }

    return <TodosContext.Provider value={{ items: todos, addTodo: addTodoHandler, removeTodo: removeTodoHandler }}>
        {props.children}
    </TodosContext.Provider>
}

export default TodosContextProvider