import React, {useState, useEffect} from 'react'

function IntervalCounter() {

    const [count, setCount] = useState(0)

    const tick = () => {
        setCount(count + 1)
    }

    useEffect(() => {
        setInterval(tick, 1000)
        
    })

    return (
        <div>
            {count}
        </div>
    )
}

export default IntervalCounter
