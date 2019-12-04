"use strict"

const calculateEngravingPrice = function(message, pricePerWord) {
  const info = message.split(" ");
  const totalCost = info.length * pricePerWord;
  return totalCost;
  };

console.log(
  calculateEngravingPrice(
  "Proin sociis natoque et magnis parturient montes mus",
    10
    )
 );

console.log(
   calculateEngravingPrice(
   "Proin sociis natoque et magnis parturient montes mus",
    20
   )
 );

 console.log(calculateEngravingPrice("Donec orci lectus aliquam est", 40));
 console.log(calculateEngravingPrice("Donec orci lectus aliquam est", 20));

 