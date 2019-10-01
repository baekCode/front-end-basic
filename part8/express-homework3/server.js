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
    request.get('http://localhost:4001/users', (err,response,body)=>{
        const user = JSON.parse(body).find((user)=>user.email === req.body.email);
        if(!user) return res.send('회원이 아닙니다.')
        if(user.password !== req.body.password) return res.send('비밀번호가 틀립니다.')
        res.send(`${user.name}님 환영합니다.`)
    });
});


app.listen(8080);