const http = require('http');
const fs = require('fs');

http.createServer((req,res)=>{
    const userAgent = req.headers['user-agent'];
    res.writeHead(200,{
        'content-type':'text/plain; charset=utf-8'
    })
    console.log(userAgent);
    fs.appendFile('log.txt',userAgent + '\n',(err)=>{
        if(err) console.log(err);
    });
    res.end(userAgent);
}).listen(8080,()=>{
    console.log('listening')
})