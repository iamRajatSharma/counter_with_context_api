import React, { useContext } from "react"
import { CounterContext } from "./context/Counter"

function Counter() {
    const contextState = useContext(CounterContext)

    return (
        <div>
            <button style={{ marginRight: 10 }} onClick={() => { contextState.setCount(contextState.count - 1) }}>Decrement</button>
            <button style={{ marginLeft: 10 }} onClick={() => { contextState.setCount(contextState.count + 1) }}>Increment</button>
        </div>
    )
}

export default Counter