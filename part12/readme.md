# 초급 프론트엔드 Part12

- 지난 수업 이어서 진행, 리팩토링, 설계 구성, 
- get, axios 설치



`npm axios` 

> axios 를 사용하게 되면, XMLHttpRequest 사용을 알아서 한다.

##### 현재 설계 관련 설명

- 왜, 전달 전달 하면서 나누었느냐?
  - 클라이언트내에서의 역활을 분담
  - 레이어를 나눈 개념, 하나만 신경 쓰면되기 때문에 나누어둠
  - 에러에 관한 내용들을 찾을수있음
  - 다른사람이 보더라도 손쉽게 찾아서 수정할수있다.

##### REACT 상태 관리,

- redux
- mobx (좀더 펀하다)

mobx-react

- mobx 를 사용하기 위해 플러그인, 바벨 관련 설정을 해주어야 한다.

- Provider : App.js 최상단에서

  ```
  <Provider 스토어명={new 스토어명에 정의한 함수&클래스명()}>
  	<App/>
  </Provider>
  ```

- 최상단에 Provider를 이용하여 상태값을 저장하는 곳을 설정한다음,
  스토어라는 곳에서 상태값을 설정,
  사용할곳에서 스토어를 부르게됨

- @observable @action



decorators, babel 사용





### 마지막 정리

- 회고
- 초심
- 3달이지만, 공부를 했느냐에 따라 달라진다.
- 관점
- storybook
- 프로그래밍, 본질에 시간을 투자할것



##### 스타트업 + 에이전시와 스타트업 비교 

초기단계 : 유능한 사람들이 모여서 개발,
프로토타입단계 : 개발된 프로토타입으로 정리 및 성장 하는 단계, 이단계에서 신입,1~2년차 투입할 시기, 투자금액, 사람증원수, 사람수 체크하면서 현황 파악하면 그시기를 알수있다.
안정화 단계 : 정리된개발을, 사람들도 정리 대상
:: 클라이언트에게 문제를 받는게 아닌 문제를 찾아서 하는 회사를 찾아서 갈것


프론트엔드 쪽 정리

면접질문 : 어떻게, 그이유, 설명해봐라

초봉 : 3000이상으로 바라볼것,

연봉 인상폭 : 천차 만별

