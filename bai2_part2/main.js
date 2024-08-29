// 1.Write a function 'calcTip' that takes any bill value as an input and returns 
// the corresponding tip
const calcTip = (bill) => (bill >= 50 && bill <= 300) ? bill*0.15 : bill*0.2;
console.log(calcTip(100));

//2.create an array 'bills' containing the test data
const bills = [125, 555, 44];

//3.Create an array 'tips' containing the tip value for each bill
const tips = bills.map(calcTip);
console.log(tips);

//4.: Create an array 'total' 
const total = bills.map((bill, index) => bill + tips[index])
console.log(total);