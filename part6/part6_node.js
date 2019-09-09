var fs = require('fs');
// var sum = require('./sum');
// console.log(sum(1,2));
var i = 10;
while(i--){
    fs.writeFile(`abc${i}.txt`,`hiㅁㄴㅇㄹㄴㅇㄹh${i + 1}`,function(err){
        if(err) console.log(err);
    })
}
console.log(i) // -1이 된다.

