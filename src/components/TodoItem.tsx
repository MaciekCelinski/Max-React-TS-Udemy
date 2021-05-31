// import Todo from "../models/todo"

// const TodoItem: React.FC<{ item: Todo }> = (props) => {
//     return (
//         <li key={props.item.id}>{props.item.text}</li>
//     )
// }

import styles from './TodoItem.module.css'

const TodoItem: React.FC<{ text: string }> = (props) => {
    return (
        <li className={styles.item}>{props.text}</li>
    )
}

export default TodoItem