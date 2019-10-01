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
        console.log(body);
        console.log(req.body);
    });
});


app.listen(8080);