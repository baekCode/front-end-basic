import React, {useState} from 'react'

const Test = (props) => {
    const [test, setTest] = useState(0);

    //console.log(test);
    const activeClass = () => {

    }

    return (   
        <div>
            <ul>
                {props.children.map((list, i)=>{
                    const navClick = (e) => {
                        setTest(i);
                        e.target.classList.add('active');                    
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
