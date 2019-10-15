import React from 'react'

const Tab = () => {
    const tabCon = [
        {
            data : 'con 1'
        },
        {
            data : 'con 2'
        }
    ]
    return (
        <div className="tab">
            <ul>
                <li type={'aa'}>aa</li>
                <li type={'bb'}>bb</li>
            </ul>
            <div>
                {tabCon[0].data}
            </div>
        </div>
    );
};

export default Tab

