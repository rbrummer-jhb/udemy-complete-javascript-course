// TEST DATA

let dolphinsAvgScore = (96 + 108 + 89) / 3;
let koalasAvgScore = (88 + 91 + 110) / 3;
const isMoreThanMinScore = (dolphinsAvgScore > 99) || (koalasAvgScore > 99);
const isDraw = (dolphinsAvgScore === koalasAvgScore);

console.log(dolphinsAvgScore, koalasAvgScore);

if (dolphinsAvgScore > koalasAvgScore && isMoreThanMinScore) {
    console.log('The Dolphins take the trophy.');
} else if (koalasAvgScore > dolphinsAvgScore && isMoreThanMinScore) {
    console.log('The Koalas take the trophy.');
} else if (isDraw && isMoreThanMinScore) {
    console.log("It's a draw.")
} else {
    console.log('The scores are not high enough.')
}

// TEST DATA 1

let dolphinsAvgScore1 = (97 + 112 + 101) / 3;
let koalasAvgScore1 = (109 + 95 + 123) / 3;
const isMoreThanMinScore1 = (dolphinsAvgScore1 > 99) || (koalasAvgScore1 > 99);
const isDraw1 = (dolphinsAvgScore1 === koalasAvgScore1);

console.log(dolphinsAvgScore1, koalasAvgScore1);

if (dolphinsAvgScore1 > koalasAvgScore1 && isMoreThanMinScore1) {
    console.log('The Dolphins take the trophy.');
} else if (koalasAvgScore1 > dolphinsAvgScore1 && isMoreThanMinScore1) {
    console.log('The Koalas take the trophy.');
} else if (isDraw1 && isMoreThanMinScore1) {
    console.log("It's a draw.")
} else {
    console.log('The scores are not high enough.')
}

// TEST DATA 2

let dolphinsAvgScore2 = (97 + 112 + 101) / 3;
let koalasAvgScore2 = (109 + 95 + 106) / 3;
const isMoreThanMinScore2 = (dolphinsAvgScore2 > 99) || (koalasAvgScore2 > 99);
const isDraw2 = (dolphinsAvgScore2 === koalasAvgScore2);

console.log(dolphinsAvgScore2, koalasAvgScore2);

if (dolphinsAvgScore2 > koalasAvgScore2 && isMoreThanMinScore2) {
    console.log('The Dolphins take the trophy.');
} else if (koalasAvgScore2 > dolphinsAvgScore2 && isMoreThanMinScore2) {
    console.log('The Koalas take the trophy.');
} else if (isDraw2 && isMoreThanMinScore2) {
    console.log("It's a draw.")
} else {
    console.log('The scores are not high enough.')
}