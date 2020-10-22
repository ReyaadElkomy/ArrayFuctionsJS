var names = [
    "Reyaad", 
    "Mohamed", 
    "Ali", 
    "Elomy",
    "Tammer", 
    "Hassan" 
]

if(Array.isArray(names)){
    console.log("Good, this is araay");
}else{
    console.log("Sorry, This is not array");
}

// Delete the first element in array 
console.log(names);
var firstElement = names.shift();
console.log(firstElement);

// Get the last element in array 
console.log(names);
var lastElment = names.pop();
console.log(lastElment);

console.log(names);
console.log(names.length); // lenght

// names.splice(2, 2); delete from 
names.pop(); // Delete the last element in array
console.log(names.length);
console.log(names);
names.push("Yassmen"); // Add new value to the last ement in array.
console.log(names.length);
console.log(names);