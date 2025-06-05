import { ExpensiveCalculation } from "./15/ExpensiveCalculation";
import { useState } from "react";

export default function App() {
    const [list, setList] = useState([1,2,3,4,5]);
    const [toggle, setToggle] = useState(false);

    const addToList = () => {
        //リストにランダムな数値を追加する
        setList([...list, Math.floor(Math.random() * 100)]);
    };


    //UseMemoを確認する
    return (
        <div>
            <ExpensiveCalculation list={list} />
            <button onClick={addToList}>Add random number to list</button>
            <div>
                <button onClick={() => setToggle(!toggle)}>
                    Toggle: {toggle ? "ON" : "OFF"}
                </button>
            </div>
            <p>List: {list.join(", ")}</p>
        </div>
    );
}
