"use strict"

const logItems = function(array) {
 let number = 0;
 for (let i = 0; i < array.length; i += 1) {
 number += 1;
 console.log(`${number} - ${array[i]}`);
 }
}; 
logItems(["Mango", "Poly", "Ajax", "Lux", "Jay", "Kong"]);
logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);