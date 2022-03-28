import React, {useState} from 'react'

function HookCounter() {
    const [count, setCount1] = useState(0)
    return (
        <div>
            <button onClick={() => setCount1 (count + 1)}>Count {count} </button>
        </div>
    )
}

export default HookCounter
