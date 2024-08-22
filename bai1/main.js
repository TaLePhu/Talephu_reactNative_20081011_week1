// Task 1: Store Mark's and John's mass and height in variables

// Data 1
let markMass1 = 78; // kg
let markHeight1 = 1.69; // meters
let johnMass1 = 92; // kg
let johnHeight1 = 1.95; // meters

// Data 2
let markMass2 = 95; // kg
let markHeight2 = 1.88; // meters
let johnMass2 = 85; // kg
let johnHeight2 = 1.76; // meters

// Task 2: Calculate both their BMIs using the formula
function calculateBMI(mass, height) {
  return mass / height ** 2;
}

// BMI for Data 1
let markBMI1 = calculateBMI(markMass1, markHeight1);
let johnBMI1 = calculateBMI(johnMass1, johnHeight1);

// BMI for Data 2
let markBMI2 = calculateBMI(markMass2, markHeight2);
let johnBMI2 = calculateBMI(johnMass2, johnHeight2);

// Task 3: Create a Boolean variable 'markHigherBMI' to check if Mark's BMI is higher than John's

// For Data 1
let markHigherBMI1 = markBMI1 > johnBMI1;
console.log(`Data 1: Mark's BMI (${markBMI1.toFixed(2)}) is higher than John's (${johnBMI1.toFixed(2)}): ${markHigherBMI1}`);

// For Data 2
let markHigherBMI2 = markBMI2 > johnBMI2;
console.log(`Data 2: Mark's BMI (${markBMI2.toFixed(2)}) is higher than John's (${johnBMI2.toFixed(2)}): ${markHigherBMI2}`);
