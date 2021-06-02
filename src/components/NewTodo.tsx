import React, { useRef, useContext } from "react"
import { TodosContext } from "../store/todo-context";
import styles from './NewTodo.module.css'

const NewTodo: React.FC = () => {

    const todosContext = useContext(TodosContext)

    const textInput = useRef<HTMLInputElement>(null);

    const submitHandler = (e: React.FormEvent) => {
        e.preventDefault()

        // const enteredText = textInput.current?.value
        //  if we know that the value will never be null we can use '!' insteadof automatic '?'
        const enteredText = textInput.current!.value;

        if (enteredText.trim().length === 0) {
            return
        }

        todosContext.addTodo(enteredText);
    }

    return (
        <form onSubmit={submitHandler} className={styles.form}>
            <label htmlFor="text">Todo text</label>
            <input type="text" id='text' ref={textInput} />
            <button type="submit">Add todo</button>
        </form>
    )
}

export default NewTodo