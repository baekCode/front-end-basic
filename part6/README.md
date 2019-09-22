# 초급 프론트엔드 Part6

##### 숙제 풀이

```javascript
var 직업이developer인사람을나이순서대로정렬하고직업은대문자 = people.filter(개발자).sort(나이순).map(function(v){
  return {
    name: v.name,
    age: v.age,
    job: v.job.toUpperCase()
  }
});
```

데이터를 회손하지 않고 리턴하는 방법을 사용

```javascript
var p1 = {name:'dd'}
var p2 = {name:'dd'}

p1 === p2; // false
```

**객체비교는 다른 타입으로 보면된다, 안에 내용이 바뀔수도있으니 상태가 변하지않는다.**

숙제 풀이에 return{}로 상대를 변경했을때의 설명 (딥카피 검색해볼것)

지금까지 es3기준으로 문법을 다배웠음, 이후에는 좀더 딥하게 공부진행



### 자바스크립트 컨텍스트

##### 스택 / 큐 기본으로 알아야 하는 개념

```
fuction a(){
	b()
}
fuction b(){
	c()
}
fuction c(){

}
a();
```

0. 글로벌 실해컨텍스
1. 순차적으로 실행 컨택스트가 쌓임
2. a이가 쌓이고 그다음 비 씨 쌓이고
3. 빠져나갈때는 씨가 종료된후 씨가 빠지고
4. 비로 간다음 비가 종료, 비빠지고
5. 에이로 간다음 에이가 종료, 에이 빠지고 끝

**스택 L I F O**

**큐 : First In F Out** FIFO

`콜스택` `스택` `큐`

`스택오버플로우` : 스택이 꽉차서 넘은 현상

`EC` : 실행 컨택스트

##### 실행컨택스트 ec 크게 3가지

- 변수들 / var / 파라미터 / 아규먼트,function =  Variable Object (VO)

```
var d = 55;
fuction a (){
	var b = 11;
	console.log(d)
	var d = 66;
	console.log(d);
}
```

- 스코프체인(SC)
- this // this 는 잘안쓰려고하는 추세다.

##### Node.js 설치 및 설명

- 브라우저엔진에서 랜더링엔진만 빠진 엔진
- node js 는 서버다 뭐다 하는데 자바스크립트 엔진이다 라고 규정되어있다.
- node.js로 서버를 만들수있으니 이렇게 표현을 한다고 생각
  (레고로 집을만들수있듯이 노드.js는 그냥 레고일뿐)



##### Node.js와 브라우저 엔진과 비교

브라우저인경우는 html 에서 읽어드리는 순서에 따라 읽는다.

a.js / b.js 가 있을경우 html 에서 script 파일을 잘불러와야지 b를 부를수있는 개념



```
var http = require('http');

http.createServer(function(req,res){
    console.log('hi');
}).listen(8080,function(){
    console.log('listening');
})

var server = http.createServer(function(req,res){
    console.log('hi');
});
server.listen ... //동일하다
```

와이파이나 같은 인터넷을 쓰고있으면 해당PC의 ip 주소로도 서버를 접속할수있다.

