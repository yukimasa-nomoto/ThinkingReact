import { useState , useMemo } from 'react';

export function ExpensiveCalculation({ list }) {
    const [count, setCount] = useState(0);
    let expensiveResult = useMemo(() => {
        console.log("Expensive calculation running...");
        return list.reduce((acc, num) => acc + num, 0);
    },[list]);
   
    return(
        <div>
        <p>Sum: {expensiveResult}</p>
        <button onClick={() => setCount(count + 1)}>Clicked {count} times</button>
        </div>        
    )
}