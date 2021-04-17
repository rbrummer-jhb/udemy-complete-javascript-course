const marksWeight1 = 78;
const marksHeight1 = 1.69;
const johnsWeight1 = 92;
const johnsHeight1 = 1.95;

const marksBMI1 = marksWeight1 / (marksHeight1 ** 2);
const johnsBMI1 = johnsWeight1 / (johnsHeight1 ** 2);

let markHigherBMI = marksBMI1 >  johnsBMI1;

console.log("TEST DATA 1:")
console.log("Mark's BMI = " + marksBMI1)
console.log("John's BMI = " + johnsBMI1);
console.log("Is Mark's BMI higher than John's : " + markHigherBMI);

const marksWeight2 = 95;
const marksHeight2 = 1.88;
const johnsWeight2 = 85;
const johnsHeight2 = 1.76;

const marksBMI2 = marksWeight2 / (marksHeight2 ** 2);
const johnsBMI2 = johnsWeight2 / (johnsHeight2 ** 2);

let markHigherBMI2 = marksBMI2 > johnsBMI2;

console.log("\n\nTEST DATA 2:");
console.log("Mark's BMI = " + marksBMI2);
console.log("John's BMI = " + johnsBMI2);
console.log("Is Mark's BMI higher than John's : " + markHigherBMI2);