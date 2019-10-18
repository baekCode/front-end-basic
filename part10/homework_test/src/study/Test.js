import React, {useState} from 'react';
import './Test.scss';

const Test = (props) => {
    const [test, setTest] = useState(0);

    const nextCon = () => {
        if (test < (props.children.length - 1)) {
            setTest(test + 1)
        }
    };
    const prevCon  = () => {
        if (test > 0) {
            setTest(test - 1);
        }
    }


    return (   
        <div className={'tab'}>
            <div>
                <button onClick={prevCon}>이전</button>
                <button onClick={nextCon}>다음</button>
            </div>
            <ul className={'tab-nav'}>
                {props.children.map((list, i)=>{
                    const navClick = (e) => {
                        setTest(i);
                    }
                    return (
                        <li
                            id={`nav-${i}`}
                            key={i}
                            onClick={navClick}
                            className={test === i ? 'active' : ''}
                        >{list.props.nav}</li>
                    )
                })}                
            </ul>
            <div className={'tab-con'}>
                {props.children[test].props.children}
            </div>
        </div>
    );
};

export default Test




