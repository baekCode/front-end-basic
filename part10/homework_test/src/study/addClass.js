import React, {useState} from 'react';

const AddClass = (props) => {
    const [aaa, setAaa] = useState('')
    const activeClass = (e) => {
        setAaa(e.currentTarget.id)
    };
    return (
        <div>
            {props.children.map((list, i)=>{
                return (
                    <div id={`list-${i}`} className={aaa === `list-${i}` ? 'active' : ''} onClick={activeClass} key={i}>{list.props.children}</div>
                )
            })}

        </div>
    );
};

export default AddClass;