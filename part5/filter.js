function evenFilter(numbers) {
    var result = [];
    var i = 0;

    while (i < numbers.length) {
        if (numbers[i] % 2 === 0) {
            result.push(numbers[i]);
        }
        i++;
    }

    return console.log(result);
}
function oddFilter(numbers) {
    var result = [];
    var i = 0;

    while (i < numbers.length) {
        if (numbers[i] % 2 !== 0) {
            result.push(numbers[i]);
        }
        i++;
    }

    return console.log(result);
}
var numbers = [2, 3, 1, 4, 5, 6, 7, 8, 9];
evenFilter(numbers);
oddFilter(numbers);

function filter(items, cb) {
    var result = [];
    for (var i = 0; i < items.length; i++) {
        var bool = cb(items[i]);
        if (bool) {
            result.push(items[i]);
        }
    }
    return console.log(result);
}
var even = filter(numbers, function (v) {
    return v % 2 === 0;
});

var odd = filter(numbers, function (v) {
    return v % 2 !== 0;
});

var man = filter(["남", "여", "남", "남"], function (v) {
    return v === "남";
});