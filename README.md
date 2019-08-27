# front-end-basic
Study Front-End, Basic (by,suho Kim)





## Part1,

> 오리엔테이션, 프론트엔드란?



## Part2,

> 값, 식, 그리고 문

```
값,식,문
```

##### 연산자의 분류

- 단항연산자
- 이항연산자
- 삼항연산자

##### 값의종류 (type)

- 숫자 (number)
- 문자 (string)
- 불리언,논리 (참,거짓)
- 배열 (object)
- 객체 (object)
- 함수 (function)
- 기타 (object.. null/undefined)

#### 변수

- 식별자
- 임시적인 상태

#### 함수

- 선언
- 호출(실행)

`방앗간` `자판기` 생각해볼것

방앗간기계라는 함수

function 방앗간기계(){};

##### 함수의특성

- 선언,호출
- 반환
- 익명함수
- 그자체로값
- 스코프

##### 익명함수

값으로 사용될 때의 함수는 이름이 없어도 된다.

##### 콜백함수

인자로 사용되어 호출 제어권을 이전하는 함수

```
on('click', function(e){
	alert('Hello');
});
//on()함수가 클릭이 발생되면 function(e) 인자의 함수가 동작한다.
```

##### 왜 더 복잡해보이는 ? 또는 간단한 함수를 만드는가?

- 식에 이름을 붙일수있다.
- 재사용 가능하다
- 사이드이펙트(부작용,부수적인 무언가가 작용)를 이르킬수있다. (예상치못한부분)



## Part3,

> `문` 에 대해서 이해하고 학습하기

조건문,반복문,과제

#### 문의 형태

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

#### 스코프(유효범위)

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

#### while 문

```javascript
while(조건식){
	//조건식이 참이면 여기 실행
}
//완료후 조건식을 다시 평가
```

#### 구구단 만들기

1. 2단구구단만들기
2. 5,4 입력했을때 5단의 4까지 출력
3. 1,2 조건 합쳐서 리팩토링 하기

#### 비동기 함수

- setTimeout
- setInterval 



## part4,


##### if문은 3중처리 하지말자, 가능하면 2중첩까지만들지말자,

예) 아래와 같은 코드 형식 

```javascript
if(){
	if(){
		if(){}
	}
}
```



#### 배열

```javascript
var arr1 = []; // 배열 리터럴

var arr2 = new Array();
```



배열의 특정 인덱스를 읽기

- 배열은 0부터 시작한다.
- colors[값]

```javascript
var colors = [
	'red',
	'black'
]

colors[0]; // red;
colors[1]; // black;
colors[2]; // undefined;
```




사용자 입장에서 실행함수를 먼저 생각해보고 만들것,

```
순서상으로
1번, function sum(){}
2번, sum();

이거보다는
1번, sum();
2번, function sum(){}
-sum(1,2,4) 또는 여러 인자, 인자값에 따른 함수가 변경이 될수있고, 사용자의 의도를 먼저 알아볼수있도록할것
```



#### 객체

- 

```javascript
var obj = {};

var person = {
	name : 'jueun',
	age : 35
  ///key : value
};

// name 은 key 라고 부르고, 'jueun' 부분을 value 값 이라고 부른다
```

값읽기

person.eat();

