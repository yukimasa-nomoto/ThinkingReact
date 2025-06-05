import { useSyncExternalStore } from "react";
import { todosStore } from "./18/ToDosStore";

export default function App() {
    const todos = useSyncExternalStore(todosStore.subscribe, todosStore.getSnapshot);
    return (
        <div>
            <button onClick={() => todosStore.addTodo()}>Add todo</button>
            <hr />
            <ul>
                {todos.map(todo => (
                    <li key={todo.id}>{todo.text}</li>
                ))}
            </ul>
        </div>
    );
}