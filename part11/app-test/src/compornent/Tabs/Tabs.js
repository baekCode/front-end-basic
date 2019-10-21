import React, {useState} from 'react'

const Tabs = () => {
    const tabList = [
        {title : '메뉴 1', color : 'green', con : 'DEVIEW2019'},
        {title : '메뉴 2', color : 'pink', con : 'FEConf2019'},
        {title : '메뉴 3', color : 'red', con : 'if(kakao)dev2019'}
    ];
    const [activeIndex, setActiveIndex] = useState(0);
    const getColor = (index, item) => activeIndex === index ? item.color : 'black';
    const clickHandler = (index) => {
        return (e) => {
            e.preventDefault();
            setActiveIndex(index);
        }
    };
    return (
        <div>
            <ul>
                {tabList.map((item, i)=>{
                    return (
                        <li key={i}>
                            <a href="#"
                               onClick={clickHandler(i)}
                               style={{color:getColor(i,item)}}
                            >{item.title}</a>
                        </li>
                    )
                })}
            </ul>
            <div>
                {tabList[activeIndex].con}
            </div>
        </div>
    )
};

export default Tabs
