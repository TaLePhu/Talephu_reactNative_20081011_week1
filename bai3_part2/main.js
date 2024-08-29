//1.  create an object with properties for their full name, mass, and height 
const mark ={
    fullName : 'Mark Miller',
    mass: 78,
    height: 1.69,

    calcBmi: function() {
        this.bmi = this.mass / (this.height**2)
        return this.bmi;
    }
}

const john = {
    fullName : 'John Smith',
    mass: 92,
    height: 1.95,

    calcBmi: function() {
        this.bmi = this.mass / (this.height**2)
        return this.bmi;
    }
}

//2. Create a 'calcBMI' method on each object to calculate the BMI
mark.calcBmi();
john.calcBmi();

//3. Log to the console  Example: "John's BMI (28.3) is higher than Mark's (23.9)!"
if(mark.bmi > john.bmi) {
    console.log(`${mark.fullName}'s BMI ${(mark.bmi.toFixed(1))} higher ${john.fullName}'s BMI ${(john.bmi.toFixed(1))}`);
} else if(john.bmi > mark.bmi) {
    console.log(`${john.fullName}'s BMI ${(john.bmi.toFixed(1))} higher ${mark.fullName}'s BMI ${(mark.bmi.toFixed(1))}`);
} else {
    console.log("bmi both draw");
}