# 초급 프론트엔드 Part7

`IntelliJ` IDE 

- intelliJ 한달간 유료
- 맥에대한 설명
- intellj 사용법 및 비교

##### ES6+, const / let / arrow function 

```javascript
const ABC = 1;
// ABC = 2; 변수 재할당 불가능

let efg = 2;
efg = 3; //let은 변수 재할당 가능

function f(){
  const gg =1;
} 
const ff = () => {
  const gg =1;
}

//익명함수 
function(){}
//arrow function
()=>{}


```

> const를 우선으로 먼저 쓰고 이후에 let을 써야하는곳에서만 쓸것

##### 과제풀이

```javascript
const http = require('http');
const fs = require('fs');

http.createServer((req,res)=>{
    const userAgent = req.headers['user-agent'];
    res.writeHead(200,{
        'content-type':'text/plain; charset=utf-8'
    })
    console.log(userAgent);
    fs.appendFile('log.txt',userAgent + '\n',(err)=>{
        if(err) console.log(err);
    });
    res.end(userAgent);
}).listen(8080,()=>{
    console.log('listening')
})
```



### HTTP, Network (Network 도구)

`Request Method`:  요청 방법 get / post / put / delete 알아볼것

- get : 가져오다
- post : 작성
- put : 수정
- delete : 삭제

`Status Code`: http 상태 코드

- 200 / 300 / 400 / 500
- 200 : 성공 관련 메세지
- 300 : 리다이렉션,
- 400 : 권한없거나 요청,인증/잘못요청 에러 (페이지 없음 등)
- 500 : 서버 에러

`content-type`: 문서타입

- text/html
- text/css
- application/javascript



### Node 서버 사용



### Node express 프레임워크 사용

> node js를 좀더 편하게 사용하기 위한 도구



package.json : 설치전에 하고싶은걸로 하면 된다.

npm init :  npm 설치 전에 설정 , 하나하나 추가하기 위해서 하는거

npm install (npm i)

npm prune 



##### 수호님 커리어 및 프론트엔드 착각에 대한 세미나 

- why -> how -> what  의 순서로 생각을 할것,
- 이력서는 공통용 하나와 각 회사마다 별개로 이력서를 참고하여 낼것
- 포트폴리오는 공부하는것을 보여주는게 아니라, 코드를 볼수있는 포트폴리오면 괜찮다.
  참고용, 플러스가 되지않는다.
- 1년을 버틴다는 생각은 하지말것, 시간이 아깝다.
  1년을 버틴단는건 고생은 여기서하고 다른곳에서 기대를 한다?? 이상한 논리
- 성장하지 않는 회사는 가지말것 
- 목표를 잡고, 목표를 생각하고 , 실천하고, 반복하고 , 지속하고!
- 목표,전략,행동,지속,피드백,반복 순서로!
- 시간을 목표를 잡지말것, (예, 책몇페이지를 보겠다. 책을 한시간을 읽겠다(x))