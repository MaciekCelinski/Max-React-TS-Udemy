import React from 'react'
//styles 
import styles from './Todos.module.css'
//models
import Todo from '../models/todo';
//components
import TodoItem from './TodoItem'

const Todos: React.FC<{ items: Todo[] }> = (props) => {
    return (<ul className={styles.todos}>
        {props.items.map(item => (
            // <TodoItem item={item} />
            <TodoItem key={item.id} text={item.text} />
        ))}
    </ul>);
}

export default Todos;