import {useContext} from 'react'
//styles 
import styles from './Todos.module.css'
//components
import TodoItem from './TodoItem'
// context
import { TodosContext } from '../store/todo-context'

const Todos: React.FC = () => {

    const {items} = useContext(TodosContext)

    return (<ul className={styles.todos}>
        {items.map(item => (
            // <TodoItem item={item} />
            <TodoItem key={item.id} id={item.id} text={item.text} />
        ))}
    </ul>);
}

export default Todos;