'use strict';

const calcAverage = (s1, s2, s3) => (s1 + s2 + s3) / 3;

const avgDolphins1 = calcAverage(44, 23, 71);
const avgKoalas1 = calcAverage(65, 54, 49);

const avgDolphins2 = calcAverage(85, 54, 41);
const avgKoalas2 = calcAverage(32, 34, 27);

const checkWinner = (avgScore1, avgScore2) => {
    if (avgScore1 >= (2 * avgScore2)) {
        console.log(`Dolphins win (${avgScore1} vs. ${avgScore2})`);
    }
    else if (avgScore2 >= (2 * avgScore1)) {
        console.log(`Koalas win (${avgScore2} vs. ${avgScore1})`);
    }
    else {
        console.log('No winners');
    }
}
checkWinner(avgDolphins1, avgKoalas1);
checkWinner(avgDolphins2, avgKoalas2);