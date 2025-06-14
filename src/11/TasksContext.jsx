import { createContext } from 'react';
import { useReducer } from "react";
import { useContext } from 'react';

export const TasksContext = createContext(null);
export const TasksDispatchContext = createContext(null);

export function useTasks() {
  return useContext(TasksContext);
}

export function useTasksDispatch() {
  return useContext(TasksDispatchContext);
}


export function TasksProvider({ children }) {
    const [tasks, dispatch] = useReducer(
        tasksReducer,
        initialTasks
    );


    return (
        <TasksContext.Provider value={tasks}>
            <TasksDispatchContext.Provider value={dispatch}>
                {children}
            </TasksDispatchContext.Provider>
        </TasksContext.Provider>
    );
}

const initialTasks = [
    { id: 0, text: 'Philosopher’s Path', done: true },
    { id: 1, text: 'Visit temple', done: false },
    { id: 2, text: 'Drink matcha', done: false }
];

function tasksReducer(tasks, action) {
    switch(action.type) {
        case 'added':{
            return [...tasks, { 
                id: action.id,
                text: action.text,
                done: false 
            }];
        }
        case 'changed': {
            return tasks.map(t => {
                if (t.id === action.task.id) {
                    return action.task;
                } else {
                    return t;
                }
            });
        }
        case 'deleted': {
            return tasks.filter(t => t.id !== action.id);
        }
        
        default: {
            throw Error('Unknown action: ' + action.type);
        }
    }
}

