const express = require('express');
const app = express();

/** 설정(과제 하는데 중요치 않으니 신경 안써도 되는 부분.) */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('views', `${__dirname}/views`);
app.set('view engine', 'hbs');
/** 설정 */


const userDB = [
    {
        email: 'suho.kim2@gmail.com',
        password: '1234',
        name: '김수호'
    }
];
app.get('/', (req, res) => {
    res.render('index', {
        title: '과제',
        subject: 'Hello'
    });
});
app.get('/login', (req, res) => {
    res.render('login', {
        title: '과제',
        subject: 'Hello'
    });
});

app.get('/register', (req, res) => {
    res.render('register', {
        title: '과제',
        subject: 'Hello '
    });
});

app.post('/login', (req, res) => {
    // 아래 로직을 구현하라.
    // 1. 클라이언트에서 전달한 email을 이용하여 userDB에서 찾는다.
    // 2. 없으면 '회원이 아닙니다.' 출력
    // 3. 있고 비밀번호가 맞으면 'xxx님 안녕하세요 출력'
    // 4. 비밀번호가 틀리면 '비밀번호가 틀립니다.' 출력
    const checkDB = [];
    const userEmail = req.body.email;
    const userPassword = req.body.password;

    const filterEmail = (item) => {
        return item.email;
    }
    const checkPassword = (item) => {
        return item.password === userPassword
    }

    const checkEmail = userDB.map(filterEmail);

    console.log(`회원 DB = ${userDB}`);
    console.log(`입력된 Email = ${userEmail}`);
    console.log(`입력된 Password = ${userPassword}`);

    res.writeHead(200,{
        'content-type':'text/html; charset=utf-8'
    })

    if(checkEmail === userEmail) {
        if(userDB[0].password === userPassword){
            return res.end(`${userDB[0].name}님 환영합니다.`);
        } else {
            return res.end('비밀번호가 다릅니다.');
        }
    } else {
        return res.end('회원이 아닙니다.');
    }

});

app.post('/register', (req, res) => {
    // 아래 로직을 구현하라.
    // 1. userDB에 회원정보를 저장한다.
    const userEmail = req.body.email;
    const userPassword = req.body.password;
    const userName = req.body.name;
    userDB.push(req.body);
    console.log(userDB);
    res.redirect('/login');
});

app.listen(4000);