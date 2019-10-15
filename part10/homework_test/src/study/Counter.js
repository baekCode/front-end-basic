import React, {useState} from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);
    const plus = () => {return setCount(count + 1)};
    const minus = () => setCount(count - 1);
    // const [count, setCount] = useState(0) 는 아래와 동일하다.
    // const arr = useState(0);
    // const count = arr[0];
    // const setCount = arr[1];
    const colorStyle = () => {
        if (count > 0) return 'red';
        if (count < 0) return 'blue';
        return 'black'
    };

    return (
        <div>
            <div style={{color:colorStyle()}}>{ count }</div>
            <button onClick={plus}>+</button>
            <button onClick={minus}>-</button>
        </div>
    )
};

export default Counter;