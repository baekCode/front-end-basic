import React, {useState, useEffect} from 'react';
import Counter from "./study/Counter";
import InputMirror from "./study/InputMirror";
import Calculator from "./study/Calculator";
import ListTest from "./study/ListTest";
import Tabs from "./components/Tabs/Tabs";
import {get} from "./module/http";
import {getBooksList, getInterestList} from "./apis";

function App() {
    useEffect(() => {
        //async 즉시 실행 하는 이유는 리액트 때문에
        (async ()=>{
            // const {data: interestList} = await getInterestList();
            // setInterestList(interestList);
            // const {data: booksList} = await getBooksList();
            // setBookList(booksList);

            const [{data:interestList}, {data:booksList}] =
                await Promise.all([getInterestList(), getBooksList()]);

            setInterestList(interestList);
            setBookList(booksList);
        })();

        // getInterestList().then(data => {
        //     const interestList = data.data
        //     setInterestList(interestList);
        //     setInterestList(interestList);
        // });
        //
        // getBooksList().then(data => {
        //     setBookList(data.data)
        // });
    },[]);
    const [interestList, setInterestList] = useState([])
    const [bookList, setBookList] = useState([])
    // const list = [
    //     {title : '리빙', color : 'green'},
    //     {title : '푸드', color : 'orange'},
    //     {title : '스포츠', color : 'blue'},
    //     {title : '자동차', color : 'darkgreen'},
    //     {title : '패션', color : 'pink'}
    // ];
    // const list2 = [
    //     {title : '111', color : 'green'},
    //     {title : '222', color : 'orange'}
    // ];
    return (
        <div>
            {/*<Counter/>*/}
            {/*<hr/>*/}
            {/*<InputMirror/>*/}
            {/*<hr/>*/}
            {/*<Calculator/>*/}
            {/*<hr/>*/}
            {/*<ListTest/>*/}
            <Tabs list={interestList}>
                <div>111</div>
                <div>222</div>
                <div>333</div>
                <div>444</div>
                <div>555</div>
            </Tabs>
            <Tabs list={bookList}/>
        </div>
    )
}
export default App;




