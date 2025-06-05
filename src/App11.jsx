import AddTask from "./11/AddTask";
import TaskList from "./11/TaskList";

import { TasksProvider } from "./11/TasksContext";


export default function App() {


    return (
        <TasksProvider>
            <h1>Day off in Kyoto</h1>
            <AddTask/>
            <TaskList/>
        </TasksProvider>
    );
}



