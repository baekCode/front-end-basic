import React, {useState} from 'react'

const Test = (props) => {
    const [test, setTest] = useState(0);
    const [name, setName] = useState('');
    return (
        <div>
            <ul>
                {props.children.map((list, i)=>{
                    const navClick = (e) => {
                        setTest(i);
                    }
                    return (
                        <li 
                        key={i} 
                        onClick={navClick} 
                        //className={}
                        >{list.props.nav}</li>
                    )
                })}                
            </ul>
            <div>
                {props.children[test].props.children}
            </div>
        </div>
    );
};

export default Test

/*
    첫번째 클릭하면 첫번째 컨텐츠 보여준다.
*/