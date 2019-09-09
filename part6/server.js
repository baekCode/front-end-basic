var http = require('http');

//요청은 했지만 응답을 안함, 브라우저는 계속 돌아가고있음.
// http.createServer(function(req,res){
//     console.log('hi');
// }).listen(8080,function(){
//     console.log('listening');
// })

//요청과 응답
//수정이 되었으면, 노드서버를 껏다가 다시 켜야한다.
http.createServer(function(req,res){
    console.log('hi');
    //한글로 할경우 알아보지못한 언어로 변경됨
    //외국음식점에서 한국말로 말한꼴, 서버와 js 언어를 서로 알아야한다. 언어정의가 필요함
    res.writeHead(200,{
        'content-type':'text/plain; charset=utf-8'
    })
    res.end('안녕하세요');
}).listen(8080,function(){
    console.log('listening');
})