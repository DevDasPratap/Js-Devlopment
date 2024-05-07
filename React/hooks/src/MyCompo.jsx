import React, { useEffect, useState } from 'react'

const MyCompo = () => {
    const [count, setCount] = useState(0)
    const [count1, setCount1] = useState(0)
    useEffect(() => {
        console.log('my comonent is mounting')
    }, [])
    useEffect(() => {
        console.log('Count is updated')
    }, [count, count1])
    return (
        <div>
            <h3>my component</h3>
            <p>count is: {count}</p>
            <p>count is: {count1}</p>
            <button onClick={() => setCount(count + 1)}>Update</button>
            <button onClick={() => setCount1(count1 + 1)}>Update</button>
        </div>
    )
}

export default MyCompo