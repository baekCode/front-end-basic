const express = require('express');
const app = express();
const request = require('request');


/** 설정 */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('views', `${__dirname}/views`);
app.set('view engine', 'hbs');
/** 설정 */


app.get('/', (req,res)=>{
   res.render('index',{
       title: '',
       subject: ''
   });
});
app.get('/login', (req,res)=>{
   res.render('login', {
       title: '',
       subject: ''
   });
});
app.get('/register', (req,res)=>{
    res.render('register', {
        title:'',
        subject:''
    });
});

app.post('/login', (req,res)=>{
    request('http://localhost:4001/users', (err,response,body)=>{
        //JSON형태로 변환
        const user = JSON.parse(body).find((user)=>user.email === req.body.email);
        //부정을 먼저 처리, 부정->긍정 순으로 처리
        // 1단계 login 에서 넘긴 정보를 DB에서 email 확인
        if(!user) return res.send('회원이 아닙니다.');
        // 2단게 email이 맞을경우 현단계 실행, 패스워드 체크
        if(user.password !== req.body.password) return res.send('비밀번호가 틀립니다.');
        // 3단계 성공
        res.send(`${user.name}님 환영합니다.`)
    });
});


app.listen(8080);