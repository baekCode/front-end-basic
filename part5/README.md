# 초급 프론트엔드 Part5

> #####  

배열, 배열 다루기

##### 과제리뷰

```javascript
//과제 풀이
function getDayWeek(day, lang) {
  //var weeks = ["일", "월", "화", "수", "목", "금", "토"];

  // weeks2 가 국가 추가 할 경우 편한 코드이다.
  // var weeks2 = {
  //   KR: ["일", "월", "화", "수", "목", "금", "토"],
  //   US: ["Sun", "월", "화", "수", "목", "금", "토"]
  // };
  // var weeks3 = [{
  //   KR:'일요일',
  //   US:'SUN'
  // },{
  //   KR:'월요일',
  //   US:'MON'
  // }]

  //return console.log(weeks2[lang][day]);
  
  return {
    KR: ["일", "월", "화", "수", "목", "금", "토"],
    US: ["Sun", "월", "화", "수", "목", "금", "토"]
  }[lang][day];
}

getDayWeek(0, "US");
getDayWeek(2, "KR");
```



##### evenFilter, oddFilter 함수 작성

```javascript
function evenFilter(numbers) {
  var result = [];
  var i = 0;

  while (i < numbers.length) {
    if (numbers[i] % 2 === 0) {
      result.push(numbers[i]);
    }
    i++;
  }

  return console.log(result);
}
function oddFilter(numbers) {
  var result = [];
  var i = 0;

  while (i < numbers.length) {
    if (numbers[i] % 2 !== 0) {
      result.push(numbers[i]);
    }
    i++;
  }

  return console.log(result);
}
var numbers = [2, 3, 1, 4, 5, 6, 7, 8, 9];
evenFilter(numbers);
oddFilter(numbers);

```

중복을 제거하고 fillter 함수를 만들어볼것

```javascript
function filter(items, cb) {
  var result = [];
  for (var i = 0; i < items.length; i++) {
    var bool = cb(items[i]);
    if (bool) {
      result.push(items[i]);
    }
  }
  return console.log(result);
}
var even = filter(numbers, function(v) {
  return v % 2 === 0;
});

var odd = filter(numbers, function(v) {
  return v % 2 !== 0;
});

var man = filter(["남", "여", "남", "남"], function(v) {
  return v === "남";
});

```

map함수를 만드세요.

```javascript
// map function 
function map(items, cb) {
  var result = [];

  for (var i = 0; i < items.length; i++) {
    result.push(cb(items[i]));
  }

  return console.log(result);
}

map([1, 2, 3, 4, 5], function(v) {
  return v * 2;
});
map(["a", "b", "c", "d"], function(v) {
  return v.toUpperCase();
});

```



### 객체

```javascript
var myUtil = {
	repeat : function(){},
  repeatAsync: function(){}
}

myUtil.repeat(); // === myUtil['reepat']();


var person = {
  name : 'suho',
  work:function(){
    //블라블라
  }
}

person.work()

```

- person.work();    ::  만든거라 출력 정상
- person.eat()  :: 에러 -> 이외객체 전역까지 쭉올라가서 검사한다음에 에러 출력 
- pearson.toString() :: 만들진 않았지만, 자바스크립트 예약어

> toString() 이라는것은 자바스크립트 예약어기 때문에 에러가 나진않는다.
>
> `프로토타입 체인` 

##### .앞은 객체, 객체가 아니면 터진다.

- null,undefined 는 객체가 아니다.

> 배열.push();
>
> 배열.length;
>
> '문자열'.toUpperCase(); 
>
> 이것들은??
>
> => 어떠한 배열을 만들어도 그끝은 오브젝트(객체) 이다. 그래서 toString() 도 가능



##### 자주쓰는 Array 메소드

- filter
- map
- forEach : 반환하지 않고 반복만 한다. (사실상 잘 안쓰게된다.)
- every
- some
- reduce ….

##### 자주쓰는 string 메소드

- toupperCase
- replace
- split
- trim
- indexOf



##### 중간 정리

연산자와 피연산자를 이용해서 식을만듬,

예약어와 식별자를 이용해서 식에 이름 붙이고 문을 만듬

내가만든 식별자와 남이 만든 식별자들을 적절히 활용



### 객체, 역활 관점에 대해 생각해보기

1. 돈을 관리하는 것은 누구인가? 정의되지않음
2. 서류를 관리하는것은 누군가? 정의되지않음
3. 은행에서 돈을 관리하는것은 누구인가? 은행원
4. 은행에서 서류를 관리하는것은 누군가? 은행원
5. 은행에서 고객과 직원이 마주할때 돈을 관리하는것은 누구인가? 
6. 은행에서 고객과 직원이 마주할때 서류를 관리하는것은 누군가? 
7. 은행에서 모든직원이 다퇴근하고 돈을 관리하는것은 누구인가? 
   금고, 돈이 보관되어있는곳 
8. 은행에서 모든직원이 다퇴근하고 서류를 관리하는것은 누군가?
   금고,서류가 보관되어있는곳

`동일한 역활도 관점에 따라 달라진다.`

- 관점은 장소,시간에 따라 달라진다.

**관점을 달리 생각해볼것!**



객체는 속성,기능 

- 속성 (상태)
- 기능 (동작)



> 책장객체의 속성,기능
>
> - 속성 : 책을 보관
> - 기능 : 책을 찾고 추가하고
> - 책장은 책을 관리해주는것



특정관점에 따라 역활과 책임



##### try, catch,finally





```javascript
function 갈아넣는다(worker){
  if(!worker.job){
   throw new Error('직업이 없어요.'); 
  }
  return worker.work();

}

function main(){
  var dev1 = {
    name : 'suho',
    job : 'dev',
    work: function(){
      console.log(dev1.name + 'is working');
      return {name:'어플리케이션'}
    }
  };
  var des1 = {
    name : 'suhoo2',
    job : 'designer',
    work: function(){
      console.log(des1.name + 'is working');
      return {name:'PSD'}
    }
  };
  var resultDev1 = 갈아넣는다(dev1);
  var resultDes1 = 갈아넣는다(des1);
  
  console.log(resultDev1);
  console.log(resultDes1);
}
main();


```

```javascript
//리팩토링

function 갈아넣는다(worker){
  if(!worker.job){
   throw new Error('직업이 없어요.'); 
  }
  return worker.work();

}

function Developer(name){
  this.name = name;
  this.job = 'developer';
  this.work = function(){
    console.log(this.name + ' is working');
     return {name:'어플리케이션'}
  }
}

function main(){
  var dev1 = new Developer('suho');
  var dev2 = new Developer('jueun');
  var des1 = {
    name : 'suhoo2',
    job : 'designer',
    work: function(){
      console.log(des1.name + 'is working');
      return {name:'PSD'}
    }
  };
  var resultDev1 = 갈아넣는다(dev1);
  var resultDev2 = 갈아넣는다(dev2);
  var resultDes1 = 갈아넣는다(des1);
  
  console.log(resultDev1);
  console.log(resultDev2);
  console.log(resultDes1);
}
main();


```

```javascript
//리팩토링 프로토타입으로 속성 추가
function 갈아넣는다(worker){
  if(!worker.job){
   throw new Error('직업이 없어요.'); 
  }
  return worker.work();

}

function Developer(name){
  this.name = name;
  this.job = 'developer';
}
Developer.prototype.work = function(){
  console.log(this.name + ' is working');
     return {name:'어플리케이션'}
}

function main(){
  var dev1 = new Developer('suho');
  var dev2 = new Developer('jueun');
  var des1 = {
    name : 'suhoo2',
    job : 'designer',
    work: function(){
      console.log(des1.name + 'is working');
      return {name:'PSD'}
    }
  };
  var resultDev1 = 갈아넣는다(dev1);
  var resultDev2 = 갈아넣는다(dev2);
  var resultDes1 = 갈아넣는다(des1);
  
  console.log(resultDev1);
  console.log(resultDev2);
  console.log(resultDes1);
}
main();


```



### New Object

new 연산자는 return 이 없어도 객체 자체를 리턴한다.