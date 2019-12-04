"use strict"

const checkForSpam = function(str) {
    const formatedString = str.toLowerCase();
    return formatedString.includes('spam') || formatedString.includes('sale');
  };

console.log(checkForSpam("Latest technology news")); 
console.log(checkForSpam("JavaScript weekly newsletter")); 
console.log(checkForSpam("Get best sale offers now!")); 
console.log(checkForSpam("[SPAM] How to earn fast money?"));