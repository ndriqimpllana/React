import { useState } from "react"
import './App.css'


function Counter() {
    const[count, setCount] = useState(0); // initial state value is 0

    const handleIncrement = () => {
        setCount(count + 1);
    };

    const handleDecrement = () => {
        setCount(count - 1);
    };

    const handleReset = () => {
        setCount(0);
    }

    return (
        <div className="">
            <p>Count: {count}</p>
            {count < 0 && <p> Negative value!! </p>}
            <button onClick={handleDecrement}>Decrement</button>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleReset}>Reset Count</button>
        </div>
    );
}

export default Counter;