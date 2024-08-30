var bills = [ 22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

var tips = [];
var total = [];

const calcTip = (bills) => (bills >= 50 && bills <= 300) ? bills*0.15 : bills*0.2;

for(var i = 0; i < bills.length; i++){
    var tip = calcTip(bills[i]);
    tips.push(tip);
    total.push(bills[i] + tip);
}

console.log('tips: ' + tips);
console.log('totals: ' + total);

function calcAverage(arr) {
    var sum = 0;

    for(var i = 0; i < arr.length; i++){
        sum += arr[i];
    }

    return sum / arr.length;
}

console.log('average totals: ' + calcAverage(total));


