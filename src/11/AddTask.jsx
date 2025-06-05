import {useState} from 'react';
import { useTasksDispatch } from "./TasksContext";
import { useContext } from 'react';

export default function AddTask() {
    const [text, setText] = useState('')
    const dispatch = useTasksDispatch()

    return(
        <>
            <input placeholder='Add task'
            value={text}
            onChange={(e) => setText(e.target.value)}
            />
            <button onClick={() => {
                setText('') // Clear input field after adding
                dispatch({
                    type: 'added',
                    id: nextId++,
                    text: text
                });
            }}>
                Add
            </button>
        </>
    )
}

let nextId = 3;