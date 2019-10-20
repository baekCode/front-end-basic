import React, {useState} from 'react';

const Calculator = () => {
    const [addNum, setAddNum] = useState('');
    const [num, setNum] = useState(0);
    const textRef = React.createRef();
    const onChangeHandler = (e) => {
        //console.log(e.currentTarget.value)
        setAddNum(e.currentTarget.value);
    }
    // const plus = () => setNum(num + Number(addNum));
    // const minus = () => setNum(num - Number(addNum));

    //중복 코드 삭제
    // const plus = () => run(num + Number(addNum));
    // const minus = () => run(num - Number(addNum));
    // const run = (num) => {
    //     setNum(num);
    //     setAddNum('');
    //     textRef.current.focus();
    // }
    //콜백 중복 코드 삭제? 굳이 어디부분이 중복 삭제인건지 리팩토링해볼것! 맘에 들지 않는 코드임
    //뷰를 먼저 그리지말고, 데이터를 먼저 그리고 뷰를 만들것!
    const plus = () => run(() => num + Number(addNum));
    const minus = () => run(() => num - Number(addNum));
    const run = (cb) => {
        setNum(cb);
        setAddNum('');
        textRef.current.focus();
    }

    return (
        <div>
            <input type={'number'} onChange={onChangeHandler} value={addNum} ref={textRef}/>
            <button onClick={plus}>+</button>
            <button onClick={minus}>-</button>
            <div>
                total : {num}
            </div>
        </div>
    );
};

export default Calculator;