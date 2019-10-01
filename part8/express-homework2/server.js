const express = require('express');
const app = express();

/** 설정 */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('views', `${__dirname}/views`);
app.set('view engine', 'hbs');
/** 설정 */

const userDB = [
    {
        email : '1234@1234.com',
        name : '홍길동',
        password : '1234'
    },
    {
        email : 'abc@abc.com',
        name : 'BOY',
        password : '1234'
    }
]


app.get('/', (req,res)=>{
    res.render('index', {
        title: '타이틀명',
        subject: '메인페이지'
    })
});

app.get('/login', (req,res)=>{
    res.render('login',{
        title:'',
        subject:''
    })
});

app.get('/register', (req,res)=>{
    res.render('register', {
        title:'',
        subject:''
    })
});

app.post('/login', (req,res)=>{

    const checkUser = userDB.find((user) => user.email === req.body.email);
    if(!checkUser) return res.send('회원이 아닙니다.');
    if(checkUser.password === req.body.pass) return res.send('비밀번호가 다릅니다.');
    res.send(`${checkUser.name}님 환영합니다.`);

});

app.post('/register', (req,res)=>{
   userDB.push(req.body);
});

app.listen(8080);