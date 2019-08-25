# 초급 프론트엔드 Part4

> ##### 

##### 배열,객체



##### 이전 과제 풀이,

```javascript
//i를 5번 출력하기
function logRepeat(count, aa) {
  var i = 1;
  while (i <= count) {
    aa(i);
    i++;
  }
}

logRepeat(5, function(i) {
  console.log(i);
});

```

```javascript
//지난주 과제 풀이
function repeat(max, cb) {
  var i = 1;
  while (i <= max) {
    cb(i);
    i++;
  }
}

repeat(5, function(i) {
  console.log(i);
});

```

```javascript
// 비동기적으로 풀이해보기
function repeatAsync(cb, max, delay) {
  var i = 1; // 초기ㅣ 시작 시점
  var intervalId = setInterval(function() {
    //clearInterval(intervalId);
    if (i > max) {
      clearInterval(intervalId);
      return;
    }
    cb(i);
    i++;
  }, delay);
}

repeatAsync(
  function(i) {
    console.log(i);
  },
  5,
  1000
);
```



##### 응용 버전

```javascript
// 늘어나는 숫자를 비교하는 함수를 만들것

// function max(a,b) {
//   return a > b ? a : b;
// }

// console.log(max(1,2));

function maxx(a,b,c){
  if (a > b){
    return a ;
  } else {
    if (b>c) {
      return b;
    }else{
      return c;
    }
  }
}

console.log(maxx(1,5,3));

function max(a,b,c,d){
  var maxCount = a;
  
  /*
  핵심로직이라 공통되는 부분을 로직으로 처리해볼것,
  if(maxCount < b){
    maxCount = b;
  }
  */
  if(maxCount < b){
    maxCount = b;
  }
  if(maxCount < c){
    maxCount = c;
  }
  if(maxCount < d){
    maxCount = d;
  }
  return maxCount;
}

console.log(max(1,2,3,4));


```

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



```javascript
var numbers = [1,2,3,4,5];
var arr = [값,값,함수]; // 함수도 값이다.

var arr1 = [1+2, a(), b===c, function()];
            
```



**타입이 다른것은 같이 담지 않는게 좋다.**

- 에외 : 규칙이 있다면 괜찮을수도 있다. (예, 수강생,수강생,강사,수강생 보다, 강사,수강생 수강생 이좋다.)

```javascript
var arr1 = [1+2, a(), b===c, function()];
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



배열의 특정 위치에 할당

```javascript
colors[0] = 'yellow';
```



사용자 입장에서 실행함수를 먼저 생각해보고 만들것,

예)

TDD

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
	name : 'suho',
	age : 35
  ///key : value
};

// name 은 key 라고 부르고, 'suho' 부분을 value 값 이라고 부른다
```

값읽기

`person.name`

`person['name']`

`person[값]`  `person[abc()]`

```javascript
var person = {
	eat : function(){
	
	}
}

person.eat();

//console 객체 확인해보기
var console = {
  log : function(){
    
  }
}



```

