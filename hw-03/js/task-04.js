"use strict"

const countTotalSalary = obj => {
  let totalSalary = 0;
  const salary = Object.values(obj);
  for (const value of salary) {
    totalSalary += salary;
  }
  return totalSalary;
};

console.log(countTotalSalary({})); // 0

console.log(
  countTotalSalary({
    mango: 100,
    poly: 150,
    alfred: 80,
  }),
); // 330

console.log(
  countTotalSalary({
    kiwi: 200,
    lux: 50,
    chelsy: 150,
  }),
); // 400