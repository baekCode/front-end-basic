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

app.listen(4000);





