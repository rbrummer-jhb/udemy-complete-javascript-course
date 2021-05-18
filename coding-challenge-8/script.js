const calcTip = (bill) => 50 <= bill && bill <= 300 ? bill * 0.15 : bill * 0.20;

const calcAverage = (arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
}

const tips = [];
const totals = [];
const bills = [
    22, 295, 
    176, 440, 
    37, 105, 
    10, 1100, 
    86, 52
];

for (let i = 0; i < bills.length; i++) {
    tips.push( calcTip(bills[i]) );
    totals.push( bills[i] + tips[i] );
}

console.log(calcAverage(totals));