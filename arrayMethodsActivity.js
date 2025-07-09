// Concat arrays
let arr1 = ["Cecile", "Lone"];
let arr2 = ["Emil", "Tobias", "Linus"];
let combinedArr = arr1.concat(arr2);
console.log("Concatenated Array:", combinedArr);

// Push
let fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.push("Kiwi");
console.log("After push:", fruits);

// Unshift
let array1 = [1, 2, 3];
array1.unshift(4, 5);
console.log("After unshift:", array1);

// Pop
fruits.pop();
console.log("After pop:", fruits);

// Shift
let array2 = [1, 2, 3];
array2.shift();
console.log("After shift:", array2);

// Sort
fruits.sort();
console.log("Sorted fruits:", fruits);

// Slice
let slicedFruits = fruits.slice(1, 3);
console.log("Sliced fruits:", slicedFruits);

// Splice
let months = ["Jan", "March", "April", "June"];
months.splice(1, 0, "Feb"); // Insert "Feb" at index 1
months.splice(4, 1, "May"); // Replace "June" with "May"
console.log("After splice:", months);
