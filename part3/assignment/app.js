function logRepeat(num, aa) {

    var i = 1;
    while (i <= num) {
        aa(i);
        i++;
    }
}

logRepeat(5, function (i) {
    console.log(i);
});