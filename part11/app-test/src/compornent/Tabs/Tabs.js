import React, {useState} from 'react';

const Tabs = () => {
    const data = [
        {title: '섹션 1', color: 'skyblue', con: '11'},
        {title: '섹션 2', color: 'pink', con: '22'},
        {title: '섹션 3', color: 'green', con: '33'},
        {title: '섹션 4', color: 'purple', con: '44'}
    ];
    const [activeIndex, setActiveIndex] = useState(0);

    const getColor = (item, index) => (activeIndex === index) ? item.color : 'black';
    const clickHandler = (index) => {
        return (e) => {
            e.preventDefault();
            setActiveIndex(index);
        }
    };
    const prev = () => {
        console.log('a');
    };
    const next = ()=>{
        console.log('b');
    };
    const test =()=>{
        return(asdf)
    }
    return (
        <div>
            <ul>
                {data.map((item, i) => {
                    return (
                        <li onClick={clickHandler(i)} key={i} style={{color: getColor(item, i)}}>{item.title}</li>
                    );
                })}
            </ul>
            <button onClick={prev}>이전</button>
            <button onClick={next}>다음</button>
            <div>
                {data[activeIndex].con}
            </div>
        </div>
    );
};

export default Tabs;