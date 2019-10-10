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
        email : '123@123.com',
        name : '123',
        password : '1234'
    },
    {
        email : 'abc@acb.com',
        name : 'abc',
        password : '1234'
    },
    {
        email : 'sosaer@naver.com',
        name : 'sosaer',
        password : '1234'
    }
]


app.get('/', (req,res)=>{
    res.render('index', {
        title : '',
        subject : ''
    });
});

app.get('/login', (req,res)=>{
    res.render('login', {
        title : '',
        subject : ''
    });
});

app.get('/register', (req,res)=>{
    res.render('register', {
        title : '',
        subject : ''
    });
});

app.get('/users', (req,res)=>{
    res.render('users', {
        userList : userDB
    });
});

app.post('/login', (req,res)=>{
    // 축약 버전
    //const checkUser = userDB.find((user)=> user.email === req.body.email);
    //if(!checkUser) res.send('회원이 아닙니다.');
    //if(checkUser.password !== req.body.password) res.send('비밀번호가 틀립니다.');

    const checkUser = userDB.find((user)=> {return user.email === req.body.email});
    if(!checkUser) {
        return res.send('회원이 아닙니다.')
    }
    if(checkUser.password !== req.body.password) {
        return res.send('비밀번호가 틀립니다.');
    }

    //로그인 성공
    res.send(`${checkUser.name}님 환영합니다.`);

   console.log(checkUser);
});

app.listen(4000);





