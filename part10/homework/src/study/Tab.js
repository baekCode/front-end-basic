import './Tab.scss'
import React, {useState} from 'react';

const Tab = () => {
    const tabNav = ['메뉴 1 - 가', '메뉴 2 - 나', '메뉴 3 - 다', '메뉴 4 - 다', '메뉴 5 - 라']
    const tabCon = [
        {
            data: '컨텐츠 1'
        },
        {
            data: '컨텐츠 2'
        },
        {
            data: '컨텐츠 3'
        },
        {
            data: '컨텐츠 4'
        },
        {
            data: '컨텐츠 5'
        }
    ]
    const onClickTavNav = (nav) => {
        return (
            console.log(nav)
        )
    }
    const onChangeCon = () => {
        return (
            console.log()
        )
    }


    return (
        <div className={"tab"}>
            <ul className={"tab-nav"}>
                {tabNav.map((nav, i) => <li
                    className={`tab-nav-${i}`}
                    key={i}
                    onClick={onClickTavNav}
                >{nav}</li>)}
            </ul>
            <div className={"tab-con"}>
                {tabCon.map((con, i) => <div className={`tab-con-${i}`} key={i}>{con.data}</div>)}
            </div>
        </div>
    );
};

export default Tab;