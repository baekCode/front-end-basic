// import Button from "./components/Button/Button";
//
// function App() {
//     return `
//     <div>
//     ${Button({
//         class: 'btn--primary',
//         text: '1111'
//     })}
//     ${Button({
//         class: 'btn--warning',
//         text: '222222'
//     })}
// </div>
//     `
// }
//
import React from 'react';
import Button from "./components/Button/Button";

function App() {
    return (
        <div>
            <Button type={'primary'}>111</Button>
            <Button type={'warning'}>22</Button>
            <Button>33</Button>
        </div>
    )
}
export default App;




