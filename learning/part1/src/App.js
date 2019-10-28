const bookList = [
    {title : '코어자바스크립트', name : '정재남', date : '2019-09', price : '19800'},
    {title : '나는 LINE 개발자입니다.', name : '라인12', date : '2019-09', price : '14400'},
    {title : '자바스크립트 패턴과 테스트', name : '래리 스펜서', date : '2016-11', price : '34200'},
    {title : '리팩토링 자바스크립트', name : '에반 버차드', date : '2018-10', price : '32400'}
];

const wishList = [
    {title : '목표 정하기', priority : '상', state: '진행전'},
    {title : '수업 내용 정리하기', priority: '중상', state: '진행전'},
    {title : '코드스쿼드, 인프런 준비', priority: '상', state: '진행중'},
    {title : '영문 타자 연습', priority: '중', state: '진행중'},
    {title : 'TIL 만들기', priority: '중', state: '진행전'}
]


const fillterList = bookList.map((item) => item);
const fillterName = bookList.map((item) => item.name);
const fillterAge = bookList.map((item) => item.date);

document.querySelector('#app').innerHTML = `
<div>
    <ul class="book-list">
    ${bookList.map((item) => {
    return (
        `<li><span>${item.title}</span><span>${item.name}</span><span>${item.date}</span></li>`
    );
}).join('')}
    </ul>
    <ul class="wish-list">
        ${wishList.map((item) => {
            return (
              `<li><span>${item.title}</span><span>${item.priority}</span><span>${item.state}</span></li>`  
            );
}).join('')}
    </ul>
</div>
`;