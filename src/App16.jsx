import React, { useState, useCallback } from "react";
import ChildComponent from "./16/ChildComponent";

export default function App() {
    //useCallbackを確認する
    const [count, setCount] = useState(0);
    const [dependencyValue, setDependencyValue] = useState(0);
  
    const handleClick = useCallback(() => {
        console.log(`Button clicked. Value: ${dependencyValue}`);
    }, [dependencyValue]);

    console.log("Parent rendered");

    return (
        <div>
            <p>Count: {count}</p>
            <p>Dependency: {dependencyValue}</p>
            <button onClick={() => setCount(count + 1)}>Increment Count</button>
            <button onClick={() => setDependencyValue(dependencyValue + 1)}>
                Increment Dependency
            </button>
            <ChildComponent onClick={handleClick} />
        </div>  
    );
}