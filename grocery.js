let createList = prompt("Create a grocery list (y/n)?");

if (createList.toLowerCase() === "yes") {
  let numItems = parseInt(prompt("Enter the number of items:"));

  if (isNaN(numItems) || numItems <= 0) {
    alert("Invalid number of items. Please enter a positive integer.");
  } else {
    let groceryList = [];
    for (let i = 0; i < numItems; i++) {
      let item = prompt(`Enter item #${i + 1}:`);
      if (item) { 
          groceryList.push(item);
      } else {
          alert("User cancelled input. List creation stopped.");
      
      }
    }

//Sort and reverse the list
    let groceryListSorted = groceryList.sort(); 
    let groceryListReversed = groceryList.reverse();

//Print using alert()
    alert("Grocery List:\n" + groceryList.join("\n"));
    alert("Sorted Grocery List:\n" + groceryListSorted.join("\n"));
    alert("Reversed Grocery List:\n" + groceryListReversed.join("\n"));
  }
} else {
  alert("Grocery list creation cancelled.");
}
