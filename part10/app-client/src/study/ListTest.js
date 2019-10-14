import React from 'react';

const ListTest = () => {
    const numbers = [1,2,3,4,5,6,7,8];
    const people = [
        {
            name:'suho',
            age:35
        },
        {
            name:'주은',
            age:20
        },
        {
            name:'홍길동',
            age:30
        }
    ]
    return (
        <div>
            <ul>
                {numbers.map((num, i)=>{
                    return  (
                        <li id={`num-${i}`} key={i}>{num}</li>
                    );
                })}
            </ul>
            <h2>전체 사람</h2>
            <ul>
                {people.map((person, i)=>{
                    return (
                        //<li>{person.name} : {person.age}</li>
                        <li key={i}>{`${person.name} : ${person.age}`}</li>
                    )
                })}
            </ul>
            <h3>30살 이상</h3>
            <ul>
                {people.filter((person) => person.age >= 30).map((person, i)=>{
                    return  (
                        <li key={i}>{`${person.name} : ${person.age}`}</li>
                    );
                })}
            </ul>
        </div>
    );
};

export default ListTest;