// export const get = (url) => {
//     return new Promise((resolve) => {
//         const xhr = new XMLHttpRequest();
//         xhr.open('GET', url);
//         xhr.onreadystatechange = () => {
//             if (xhr.readyState === 4) {
//                 const data = JSON.parse(xhr.response);
//                 resolve(data);
//             }
//         };
//         xhr.send();
//     });
// };
import axios from 'axios';

// export const get = (url) => {
//     axios.get(url).then((res) => {
//         console.log(res);
//     });
// };
export const get = async (url) => {
    const res = await axios.get(url);
    return res.data;
};

export const post = () => {};
export const put = () => {};
