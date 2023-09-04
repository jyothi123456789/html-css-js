// Function declaration
function student(name) {
    console.log("Hello, " + name + "!");
  }
  
  // Function invocation
  student("chancy");

  //function
  function add(a, b) {
    return a + b;
  }
  
  const sum = add(5, 4);
  console.log(sum);

  //Arrow Functions

const subtract = (a, b) => 
        a - b;

const difference = subtract(12, 6);
console.log(difference); 

  





// Arrays
  let food = ["puri","dosa", "vada", "idli"];

// Accessing elements
console.log(food[0]); 

// Adding elements
colors.push("dosa");

// Iterating through an array
for (let food of food) {
  console.log(food);
}

//Arrays
let dresses = ['frock', 'saree'];

// Adding an element to the end of the array
fruits.push('geens'); // ['frock', 'saree', 'geens']

// Removing the last element
fruits.pop(); // ['frock', 'saree']

// Adding an element to the beginning of the array
fruits.unshift('frock'); // ['geens', 'frock', 'saree']

// Removing the first element
fruits.shift(); // ['frock', 'saree']

//array

let fruit = ['papaya', 'orange', 'mango', 'cherry'];

let slicedFruit = fruit.slice(1, 3); // ['papaya', 'mango']
console.log(slicedFruit)