import React, {useState} from 'react';
import './Test.scss';

const Test = (props) => {
    const [test, setTest] = useState(0);
    const [activeClass, setActiveClass] = useState('');

    return (   
        <div className={'tab'}>
            <ul className={'tab-nav'}>
                {props.children.map((list, i)=>{
                    const navClick = (e) => {
                        setTest(i);
                        setActiveClass(e.currentTarget.id)
                    }
                    return (
                        <li
                            id={`nav-${i}`}
                            key={i}
                            onClick={navClick}
                            className={activeClass === `nav-${i}` ? 'active' : ''}
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




