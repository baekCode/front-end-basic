// if 사용, 예외, 조건 모르는 경우 
// 의문.. 사용자가 2개의 인자값을 인지하고있는건가..?
function getDayOfWeek1(day,lang){
    var a; 
    if(lang === 'US') {
        a = ['sun','mon','tue','wed','thu','fri','sat']
    } else {
        console.log('US 또는 KR 입력해주세요.')
    }
	if(lang === 'KR') {
        a = ['일','월','화','수','목','금','토']
    } else {
        console.log('US 또는 KR 입력해주세요.')
    }
    return a[day];
}

getDayOfWeek1(0,'US');
getDayOfWeek1(0,'KR');
//예외
getDayOfWeek1(0,'미국');



/*
    리팩토링 해야 할 부분 찾아보기, 
    1번, a 변수 그대로이지만 언어값에 따라 변환되기?
    2번, 사용자가 겪을 오류/버그 찾아볼것
*/
function getDayOfWeek2(day,lang){
    var a = ['sun','mon','tue','wed','thu','fri','sat']

    return a[day];
}

getDayOfWeek2(0,'US');


