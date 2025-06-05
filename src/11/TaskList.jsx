import { use, useState } from 'react';
import { useTasks , useTasksDispatch } from "./TasksContext";
import { useContext } from 'react';

export default function TaskList({
  onChangeTask,
  onDeleteTask
}) {
    const tasks = useTasks();
    

    const dispTasks = tasks.map(task => (
        <li key={task.id}>
            <Task 
                task={task}
            />
        </li>
    ));

    return(
        <ul>
            {dispTasks}
        </ul>
    )
}

function Task({ task }) {
    const [isEditing, setIsEditing] = useState(false)
    const dispatch = useTasksDispatch();

    let taskContent;

    if (isEditing) {
        taskContent = (
            <>
                <input
                value={task.text}
                onChange={e => {
                    dispatch({
                        type: 'changed',
                        task: {
                        ...task,
                        text: e.target.value
                        }
                    });
                }} />            
                <button onClick={() => setIsEditing(false)}>
                    Save
                </button>
            </>
        )
    }else{
        taskContent = (
            <>
                {task.text}
                <button onClick={() => setIsEditing(true)}>
                    Edit
                </button>
            </>
        )
    }
    

    return(
        <label>
            <input
                type="checkbox"
                checked={task.done}
                onChange={e => {
                    dispatch({
                        type: 'changed',
                        task: {
                        ...task,
                        done: e.target.value
                        }
                    });
                }}
            />
            {taskContent}
            <button onClick={() => {
                dispatch({
                type: 'deleted',
                id: task.id
                });
            }}>                
                Delete
            </button>
        </label>
    )
}