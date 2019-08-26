// if 사용, 예외, 조건 모르는 경우 
// 의문.. 사용자가 2개의 인자값을 인지하고있는건가..?
function getDayOfWeek1(day,lang){
    var a; 
    if(lang === ('US' && 'us')) {
        a = ['sun','mon','tue','wed','thu','fri','sat']
        return a[day];
    } else if(lang === ('KR' && 'kr')) {
        a = ['일','월','화','수','목','금','토']
        return a[day];
    } else {
        console.error('2개의 값을 정확히 입력해주세요.')
    }    
}

getDayOfWeek1(0,'US');
getDayOfWeek1(0,'us');
getDayOfWeek1(0,'KR');
//예외
getDayOfWeek1(0);
getDayOfWeek1(0,'미국');


// 리팩토링
function getDayOfWeek2(day,lang){
    var a = ['sun','mon','tue','wed','thu','fri','sat']

    return a[day];
}

getDayOfWeek2(0,'US');


