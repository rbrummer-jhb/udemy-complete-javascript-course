# Coding Challenge 4

Steven wants to build a very simple tip calculator for whenever he goes out eating in a restaurant. In his country, it's usual to tip **15% if the bill value is between 50 and 300**. If the value is different the tip is **20%**.

1. Your task is to calculate the tip, depending on the bill value. Create a variable called 'tip' for this.
<br/>It's **not allowed to use an if/else statement**<br/>
*(If it's easier for you, you can start with an if/else statement, and then try to convert it to a ternary operator)*.

2. Print a string to the console containing the bill value, the tip, and the final value (bill + tip).<br/>
**Example**: 'The bill was 275, the tip was 41.25, and the total value was 316.25'

> **TEST DATA**: Test for bill values 275, 40 and 430.<br/>
> **HINT**: To calculate 20% of a value, simply multiply it by 20/100 = 0.2<br/>
> **HINT**: Value X is between 50 and 300, if it's >= 50 && <= 300<br/>