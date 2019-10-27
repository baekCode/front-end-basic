import {get} from "../module/http";

// API 서버 주소
const apiUrl = 'https://wow9144.github.io';
//const apiUrl = process.env.url;

export const getInterestList = () => get(`${apiUrl}/tabs.json`);
export const getBooksList = () => get(`${apiUrl}/books.json`);

// async function a() {
//     // b().then(()=>{})
//     const num = await b();
//     console.log(num);
//     return 1;
// }
// // async 를 사용 하면 아래코드와 같다.
// function b() {
//     return new Promise((resolve)=>{
//         resolve(1)
//     })
// }
//
// a.then((num)=>console.log(num));