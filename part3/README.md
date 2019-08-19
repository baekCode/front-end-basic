# 초급 프론트엔드 Part3

> ##### 오늘은 `문` 에 대해서 이해하고 학습하기

##### 조건문,반복문



### 조건문

- if
- swich

### 반복문

- while



##### 문의 형태

```javascript
if(값){

}
swich(값){

}
while(값){

}
for(초기값;조건;반복;){
  
}
```

문의 형태는 동일하다.



자바스크립트에서는 함수는 값이다.

```javascript
f = function(){}  // 함수표현식

function f(){} // 함수선언문
```

표현의 차이일뿐 별의미없다. 함수도 `값` 이다.

##### if문을 이용하여 짝수 홀수 조건문 만들어볼것

```javascript
function isEven(a) {
  if (a % 2 === 0) return true;
  return false;
}

console.log(isEven(30));
console.log(isEven(29));
console.log(isEven(28));
console.log(isEven(27));

function isOdd(a) {
  // if (a % 2 === 1) {
  //   return true;
  // } else {
  //   return false;
  // }
  return a % 2 !== 0;
}

console.log(isOdd(30));
console.log(isOdd(29));

```



##### swich 문

```javascript
function getDayOfWeek(num) {
  switch (num) {
    case 0:
      return console.log("Sun");
    case 1:
      return console.log("Mon");
    case 2:
      return console.log("Tue");
    case 3:
      return console.log("Wed");
    case 4:
      return console.log("Thu");
    case 5:
      return console.log("Fri");
    case 6:
      return console.log("Sat");
    default:
      return console.log(null);
  }
}

getDayOfWeek(0);
getDayOfWeek(1);
getDayOfWeek(2);
getDayOfWeek(3);
getDayOfWeek(4);
getDayOfWeek(5);
getDayOfWeek(6);
getDayOfWeek(7);
```



##### 스코프(유효범위)

- 밖에서 안을 건들수가없다. (에러)

함수내에 쓰이는 변수는 외부밖에서 변수를 찾을수없다.

```javascript
function a(){
  var aaaa;
  function b(){
    function c(){
      aaaa = 123 + 3;
    }
    c();
    console.log(aaaa);
  }
  b();
}
a();
console.log(aaaa); // 이위치에서는 a()가 무슨일을 하는지 알수없어서 찾을수없다.
```



##### while 문

```javascript
while(조건식){
	//조건식이 참이면 여기 실행
}
//완료후 조건식을 다시 평가
```

```javascript
//while 반복문 사용해보기
function logRepeat(){
  var i = 1;
  while(i <= 10){
    console.log(i);
    i++;
  }
}
logRepeat();
```

```javascript
function fizzBuzzGame(max) {
  var i = 1;
  while (i <= max) {
    console.log(fizzBuzz(i));
    i++;
  }
}

fizzBuzzGame(50);
```



##### 구구단 만들기

1. 2단구구단만들기
2. 5,4 입력했을때 5단의 4까지 출력
3. 1,2 조건 합쳐서 리팩토링 하기

```javascript
function gugudan(num, maxNum) {
  var i = 1;
  // if(maxNum === undefined){
  //   maxNum = 9;
  // }
  maxNum = maxNum || 9;
  while (i <= maxNum) {
    console.log(`${num} * ${i} = ${num * i}`);
    i++;
  }
  console.log('the end')
}

gugudan(2);
gugudan(5,4);
```



### 비동기 함수

- setTimeout
- setInterval 