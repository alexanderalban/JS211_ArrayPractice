// Step 1: .length - Create an array called cars which consists of 4 different types of cas a String
// type. The first car type should be Ford and includes Honda.
// Console.log the length of the array
// Use node main.js to run the program

console.log("Step 1")

let cars = ["Ford", "Honda", "Mercedes", "Tesla"];
console.log(cars.length);

// Step 2: .concat() - Create another array called moreCars with 4 more different types of cars. The
// last car type should be Honda.
// Use the concat method to combine the cars and moreCars arrays into another array called totalCars.
// Run the program
//**** Added a console.log of totalCars because there was no difference when running the program on 
// this step ********

console.log("Step 2")

let moreCars = ["Subaru", "Dodge", "Toyota", "Honda"];
let totalCars = cars.concat(moreCars);
console.log(totalCars);

// Step 3: .indefOf() and .lastIndexOf() - Use the indexOf method to console.log the index of Honda.
// Use the lastIndexOf method to console.log the index of Ford
// Run the program

console.log("Step 3");

let hondaIndex = totalCars.indexOf("Honda");
console.log(hondaIndex);

let fordIndex = totalCars.lastIndexOf("Ford");
console.log(fordIndex);

// Step 4: .join() - Use the join method to convert the array totalCars into a string called
// stringOfCars.
// Run the program
//******* Added console.log to get a result when running the program

console.log("Step 4")

let stringOfCars = totalCars.join(" ");
console.log(stringOfCars);

// Step 5: .split() - Use the split method to convert stringOfCars back into an array called
// totalCars.
// Run the program

console.log("Step 5");

totalCars = stringOfCars.split(' ');
console.log(totalCars);

// Step 6: .reverse() - Use the reverse method to create an array carsInReverse which is the array 
// totalCars in reverse.
// Run the program

console.log("Step 6");

let carsInReverse = totalCars.reverse();
console.log(carsInReverse);

// Step 7: .sort() - Use the sort method to put the array carsInReverse into alphabetical order.
// Based on the types of cars you used, predict which item in the array should be at index 0.
// Use the following code to confirm or reject your prediction:
// alert(carsInReverse.indexOf('yourPrediction'));
// *****Commented out the alert so that the test could pass without a huge message

console.log("Step 7")

// alert(carsInReverse.indexOf('Dodge'));
carsInReverse = carsInReverse.sort();
console.log(carsInReverse);

//Step 8: .slice() - Use the slice method to remove Ford and Honda from the carsInReverse array and
//move them into a new array called removedCars

console.log("Step 8");

let removedCars = carsInReverse.slice(1, 4);
console.log(removedCars);

//Step 9: .splice() - Use the splice method to remove the 2nd and 3rd items in the array carsInReverse
// and add Ford and Honda in their place.

console.log("Step 9");

let carSplice = carsInReverse.splice(1, 2, "Ford", "Honda");
console.log(carsInReverse);

//Step 10: .push() - use the push method to add the types of cars that you removed using the splice
//method to the carsInReverse array

console.log("Step 10");

let sliceString1 = carSplice[0].toString();
let sliceString2 = carSplice[1].toString();
console.log(sliceString1);
console.log(sliceString2);
carsInReverse.push(sliceString1);
carsInReverse.push(sliceString2);
console.log(carsInReverse);

//Step 11: .pop - Use the pop method to remove and console.log the first item in the array
//carsInReverse

console.log("Step 11");

let arrPop = carsInReverse.pop();
console.log(arrPop);
console.log(carsInReverse);

//Step 12: .shift() - Use the shift method to remove and console.log the first item in the array
//carsInReverse

console.log("Step 12");

let arrShift = carsInReverse.shift();
console.log(arrShift);
console.log(carsInReverse);

//Step 13: unshift() - Use the unshift add a new type of car to the array carsInReverse

console.log("Step 13");

carsInReverse.unshift("BMW");
console.log(carsInReverse);

//Step 14: .forEach() - Create an array called numbers with the following items: 23, 45, 0, 2]. Write 
//code that will add 2 to each item in the array numbers.
//.forEach() requires a function to be passed into it as its first argument. Build a function that
//will add 2 then use .forEach() to pass each number into your freshly built function. const numbers
// = [23, 45, 0, 2, 8, 44, 100, 1, 3, 91, 34]

console.log("Step 14");

let numbers = [23, 45, 0, 2];
console.log(numbers);

numbers.forEach(addTwo);

//Come back to this when Keith is back!
function addTwo(item, index, arr) {
    arr[index] = item + 2;
}
console.log(numbers);

const numbers2 = [23, 45, 0, 2, 8, 44, 100, 1, 3, 91, 34];
console.log(numbers2);
numbers2.forEach(addTwo);
console.log(numbers2);
