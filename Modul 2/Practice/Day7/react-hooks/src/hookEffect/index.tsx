import { useEffect, useState } from "react";

function HookEffect() {
    const [count, setCount] = useState<number>(0);
    const [input, setInput] = useState<string>("");

    useEffect(() => {
        document.title = input;
        //console.log(count);
    }, [input])

    function add() {
        setCount(count + 1);
    }

    return (
        <>
            <div className="main">
                <div>
                    {count}
                </div>
                <div>
                    <button onClick={add}>+</button>
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

export default HookEffect;