// Collect the user's age using prompt
let age = parseInt(prompt("Enter your age:"), 10);
       // convert string to integer

//kDetermine the age category used the conditional statements
let category;

// i used the else if statement 
if (age < 5) {  //lessthan 5
    category = "Toddler";
} else if (age >= 5 && age <= 12) {
    category = "Child";
} else if (age >= 13 && age <= 19) {
    category = "Teenager";
} else if (age >= 20 && age <= 35) {
    category = "Young Adult";
} else if (age >= 36 && age <= 60) {
    category = "Middle-aged";
} else {
    category = "Senior";
}

//Output
console.log(`You belong to the ${category} age group.`);