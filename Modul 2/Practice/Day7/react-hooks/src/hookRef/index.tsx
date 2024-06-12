import { useEffect, useRef } from "react";

function HookRef() {
    const input1Ref = useRef<HTMLInputElement | null>(null);
    const input2Ref = useRef<HTMLInputElement | null>(null);

    useEffect(() => {
        if (input2Ref.current) input2Ref.current.focus();
    }, [])

    return (
        <>
            <div className="main">
                <div>
                    <input type="text" ref={input1Ref} />
                </div>
                <div>
                    <input type="text" ref={input2Ref} />
                </div>
                <div>
                    <button onClick={
                        () => {
                            if (input1Ref.current) {
                                input1Ref.current.focus();
                                input1Ref.current.value = "Boom!"
                            }
                        }
                    }>Click Me!</button>
                </div>
            </div>
        </>
    )
}

export default HookRef;