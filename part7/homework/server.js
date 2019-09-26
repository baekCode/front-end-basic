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
    },
    {
        email: 'sosaer88@gmail.com',
        password: '1234',
        name: '백주은'
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
    res.writeHead(200,{
        'content-type':'text/html; charset=utf-8'
    });
    // email 반환
    const userEmail = (uEmail) => {
        return userDB.find( v => (v.email === uEmail));
    };
    // password 반환
    const userPassword = (uPassword) => {
        return userDB.find( v => (v.password === uPassword));
    };
    // uesrDB index 반환
    const userFindIndex = (uEmail) => {
        return userDB.findIndex( v => (v.email === uEmail));
    };
    const userIndex = userFindIndex(req.body.email);
    // login Check
    if (userEmail(req.body.email)){
        if(userPassword(req.body.password)){
            return res.end(`${userDB[userIndex].name}님 환영합니다.`);
        } else {
            return res.end('비밀번호가 다릅니다.');
        }
    }  else {
        return res.end('회원이 아닙니다.');
    }
});

app.post('/register', (req, res) => {
    // 아래 로직을 구현하라.
    // 1. userDB에 회원정보를 저장한다.
    res.writeHead(200,{
        'content-type':'text/html; charset=utf-8'
    });
    // email 반환
    const userCheck = (uEmail) => {
        return userDB.find( v => (v.email === uEmail));
    };
    if(!userCheck(req.body.email)) {
        userDB.push({
            email : req.body.email,
            password : req.body.password,
            name : req.body.name
        })
        res.redirect('/login');
    } else {
        res.end('이미 가입되어있습니다.');
    }
});

app.listen(4000);