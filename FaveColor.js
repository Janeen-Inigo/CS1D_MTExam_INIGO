                   //empty array
let favorite_Colors = [];

// Use a loop to collect three favorite colors from the user
for (let i = 0; i < 3; i++) {
    let color = prompt(`Enter your favorite color #${i + 1}:`);
    
// Push the new color to the array
    favorite_Colors.push(color);
                //add item at the back
// output 
    console.log("Update users favorite colors:", favorite_Colors);
}