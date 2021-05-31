import React from 'react'
//styles 
import styles from './Todos.module.css'
//models
import Todo from '../models/todo';
//components
import TodoItem from './TodoItem'

const Todos: React.FC<{ items: Todo[], removeTodo: (todoId: string) => void }> = (props) => {
    return (<ul className={styles.todos}>
        {props.items.map(item => (
            // <TodoItem item={item} />
            <TodoItem key={item.id} id={item.id} text={item.text} removeTodo={props.removeTodo} />
        ))}
    </ul>);
}

export default Todos;