# 초급 프론트엔드 Part10

React, 시작 준비,  웹팩 추가 옵션 설명

### Webpack - 추가 옵션 / plugins

##### webpack.config.js 

- webpack-dev-server
  : liveserver를 사용 하는게 아닌 웹팩 테스트 서버를 사용하는 개념
- path 
  : node.js 에 있는 path를 사용
- plugins - htmlwebpackplugin
  : html 파일도 웹팩으로 관리하기 위한 플러그인



### React 

##### useState : 리액트에서 제공하는 상태값

```javascript
import React, {useState} from 'react';

const [식별자,식별자] = useState(값);
```

클릭 이벤트 할당

**뷰를 먼저 그리지말고, 데이터를 먼저 그리고 뷰를 만들것!**



번외 return에서 왜 괄호가 있는가??

```
function a(){
	return 1 + (1 + 2)
}
function b(){
	// return 에는 한줄에 처리가 되어야 하는데 
	return 
		<div></div>
		<div></div>
	이렇게 되어있는걸 하나의 코드로 묶는 개념으로 이해하면된다.
}
```



숙제 설명

눌렀을때 선택된게 색 변경과 함꼐 컨테이너도 변경 되어야 한다.



웹팩 빌드 공부하기



