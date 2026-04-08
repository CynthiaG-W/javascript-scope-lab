// Global Scope Variables
const burgers = ['Hamburger', 'Cheeseburger']; // global array of burgers
let featuredDrink = 'Strawberry Milkshake';    // global string for featured drink

// Function to Add a Burger
function addBurger() {
  const newBurger = 'Flatburger'; // function-scoped variable
  burgers.push(newBurger);        // add it to the global array
}

// Block-Scoped Burger Addition
if(true) {
  const anotherNewBurger = 'Maple Bacon Burger'; // block-scoped variable
  burgers.push(anotherNewBurger);               // add it to the global array
}

// Function to Change Featured Drink
function changeFeaturedDrink() {
  featuredDrink = 'The JavaShake'; // updates the global variable
}

// Block-Scoped Burger Addition
function addBlockBurger() {
  if (true) {
    const anotherNewBurger = 'Maple Bacon Burger'; // block-scoped variable
    burgers.push(anotherNewBurger);               // add it to the global array
  }
} 