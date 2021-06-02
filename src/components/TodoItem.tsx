import {useContext} from 'react'
import { TodosContext } from '../store/todo-context'
import styles from './TodoItem.module.css'

const TodoItem: React.FC<{ text: string, id: string} > = (props) => {

    const todosContext = useContext(TodosContext)

    const removeTodoHandler = () => {
        todosContext.removeTodo(props.id)
    }

    return (
        <li className={styles.item} onClick={removeTodoHandler}>{props.text}</li>
    )
}

export default TodoItem