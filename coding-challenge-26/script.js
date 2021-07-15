const checkDogs = function(dogsJulia, dogsKate) {
    let dogsJuliaCopy = dogsJulia.slice();
    dogsJuliaCopy.splice(0,1);
    dogsJuliaCopy.splice(-2);

    let data = [...dogsJuliaCopy, ...dogsKate];

    data.forEach(function(age, i, arr) {
        console.log(`Dog number ${i + 1} is an ${age > 2 ? 'adult' : 'puppy'}, and is ${age} years old.`);
    });
};

console.log(`----- TEST DATA 1 -----`);
checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
console.log(`----- TEST DATA 2 -----`);
checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);