var people = [{
  name: 'Kim Suho',
  age: 35,
  job: 'developer'
}, {
  name: 'Hong Gildong',
  age: 40,
  job: 'thief'
}, {
  name: 'Pack Mujin',
  age: 42,
  job: 'president'
}, {
  name: 'Kent Beck',
  age: 62,
  job: 'developer'
}, {
  name: 'Martin Fowler',
  age: 65,
  job: 'developer'
}, {
  name: 'Uncle Bob',
  age: 22,
  job: 'developer'
}, {
  name: 'Lee Ilmin',
  age: 47,
  job: 'developer'
}, {
  name: 'IU',
  age: 27,
  job: 'singer'
}, {
  name: 'Mun Jaein',
  age: 63,
  job: 'president'
}, {
  name: 'Park Hyoshin',
  age: 40,
  job: 'singer'
}];
var numbers = [5, 12, 34, 22, -6, 77, 30, 55, 102, 32, 1155, 324, 1142, 998, 921, 471, 753, 662, 432];

function 홀수필터(num){
  return num % 2 !== 0;
}

function 곱하기(num){
  return num * 2;
}

function 숫자정렬(a,b){
  return a - b;
}

function 나이40이상(item){
  return item.age >= 40;
}

function 나이50이상(item){
  return item.age >= 50;
}

function 이름필터(item){
  return item.name;
}

function 개발자(item){
  return item.job === 'developer';
}

function 나이순(a,b){
  return a.age - b.age;
}

//데이터가 가공되버림,사이드임팩트 발생
function 대문자(item){
  item.job = item.job.toUpperCase();
  return item;
}

var 홀수들 = numbers.filter(홀수필터);
console.log('홀수들: ', 홀수들);

var 곱하기2한애들 = numbers.map(곱하기);
console.log('곱하기2한애들: ', 곱하기2한애들);

var 곱하기2한애들을숫자순서대로정렬 = numbers.map(곱하기).sort(숫자정렬);
console.log('곱하기2한애들을숫자순서대로정렬: ', 곱하기2한애들을숫자순서대로정렬);

var 나이가40이상인사람들 = people.filter(나이40이상);
console.log('나이가40이상인사람들: ', 나이가40이상인사람들);

var 나이가50이상인사람들의이름 = people.filter(나이50이상).map(이름필터);
console.log('나이가50이상인사람들의이름: ', 나이가50이상인사람들의이름);

var 직업이developer인사람을나이순서대로정렬 = people.filter(개발자).sort(나이순);
console.log('직업이developer인사람을나이순서대로정렬: ', 직업이developer인사람을나이순서대로정렬);

var 직업이developer인사람을나이순서대로정렬하고직업은대문자 = people.filter(개발자).sort(나이순).map(function(v){
  return {
    name: v.name,
    age: v.age,
    job: v.job.toUpperCase()
  }
});
console.log('직업이developer인사람을나이순서대로정렬하고직업은대문자: ', 직업이developer인사람을나이순서대로정렬하고직업은대문자);
