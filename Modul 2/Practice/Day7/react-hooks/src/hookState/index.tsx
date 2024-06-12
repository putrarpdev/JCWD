import { useState } from "react";

function HookState() {
    const [count, setCount] = useState<number>(0);
    const [input, setInput] = useState<string>("");

    function add() {
        setCount(count + 1);
    }

    function sub() {
        setCount(count - 1);
    }

    return (
        <>
            <div className="main">
                <div>
                    {count}
                </div>
                <div>
                    <button onClick={add}>+</button>
                    <button onClick={sub}>-</button>
                </div>
                <div>
                    {input}
                </div>
                <div>
                    <input type="text" onChange={(e) => setInput(e.target.value)} />
                </div>
            </div>
        </>
    )
}

export default HookState;