var http = require('http');
var fs = require('fs');

http.createServer(function(req,res){
    var userAgent = req.headers['user-agent'];
    res.writeHead(200,{
        'content-type':'text/plain; charset=utf-8'
    })
    res.end(userAgent);
    console.log(userAgent);
    fs.appendFile('log.txt',userAgent,function(err){
        if(err) console.log(err);
    });
}).listen(8080,function(){
    console.log('listening')
})
