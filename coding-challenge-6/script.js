const calcTip = (bill) => 50 <= bill && bill <= 300 ? bill * 0.15 : bill * 0.20;

console.log(calcTip(100));

const bills = [125, 555, 44];
const tips = [
    calcTip(bills[0]), 
    calcTip(bills[1]), 
    calcTip(bills[2])
];

console.log(tips);

const total = [
    calcTip(bills[0]) + tips[0],
    calcTip(bills[1]) + tips[1],
    calcTip(bills[2]) + tips[2],
];

console.log(total);