const printForecast = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    console.log(`...${arr[i]}°C in ${i} days`);
  }
};
printForecast([17, 21, 23]);
printForecast([12, 5, -5, 0, 4]);
