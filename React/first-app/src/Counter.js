import { useState } from "react";
let z = 8; // is increment or decrement but state not change
function Counter() {
    const [x, setX] = useState(0);
    return (
        <>
            <br />
            <br />
            Count Z: {z}
            <button onClick={() => z += 1}>Increment</button>
            <br />
            <br />
            {/* Count X: {x}
        <button onClick={()=> setX(x+1)}>Increment</button>
        <button onClick={()=> setX(x-1)}>Decrement</button> */}

            {/* even odd */}
            Count X: {x} is {(x%2 === 0) ? 'Even' : 'Odd'}
            <button onClick={() => setX(x + 1)}>Increment</button>
            <button onClick={() => setX(x - 1)}>Decrement</button>

        </>
    )
}
export default Counter