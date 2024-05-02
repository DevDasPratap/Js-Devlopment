import React, { useState } from "react";

const Counter = () => {
    // const val = useState(0)
    // console.log(val)
    const [count, setCount] = useState(0)
    console.log('count: ', count)
    return (
        <div>
            <p>Count Coponent: {count}</p>
            <p>Number is {count % 2 === 0 ? 'Even' : 'Odd'} </p>
            <button onClick={()=> setCount(count + 1)}>Increment</button>
            <button onClick={()=> setCount(count - 1)}>Decrement</button>
        </div>
    )
}

export default Counter