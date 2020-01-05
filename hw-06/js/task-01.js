"user strict";

'use strict';

import users from './users.js';
// Задание-1
const getUserNames = users => users.map(({ name }) => name);

console.log(getUserNames(users));

// Задание-2
const getUsersWithEyeColor = (users, color) =>
  users.filter(user => user.eyeColor === color);

  console.log(getUsersWithEyeColor(users, 'blue')); 

// Задание-3
const getUsersWithGender = (users, gender) =>
  users.filter(user => user.gender === gender).map(user => user.name);
console.log(getUsersWithGender(users, 'male'));

// Задание-4
const getInactiveUsers = users => users.filter(user => !user.isActive);

console.log(getInactiveUsers(users)); 

// Задание-5
const getUserWithEmail = (users, email) =>
  users.find(user => user.email === email);

console.log(getUserWithEmail(users, 'shereeanthony@kog.com')); 
console.log(getUserWithEmail(users, 'elmahead@omatom.com'));

// Задание-6
const getUserWithAge = (users, min, max) =>
  users.filter(({ age }) => age > min && age < max);
console.log(getUserWithAge(users, 30, 40));

// Задание-7

const calculateTotalBalance = users =>
  users.reduce((acc, user) => (acc += user.balance), 0);

console.log(calculateTotalBalance(users));

// Задание-8

const getUsersWithFriend = (users, friendName) =>
  users
    .filter(user => user.friends.includes(friendName))
    .map(user => user.name);

console.log(getUsersWithFriend(users, 'Briana Decker')); 
console.log(getUsersWithFriend(users, 'Goldie Gentry'));

// Задание-9
const getNamesSortedByFriendsCount = users =>
  users
    .sort((prev, next) => prev.friends.length - next.friends.length)
    .map(({ name }) => name);
console.log(getNamesSortedByFriendsCount(users));

// Задание-10
const getSortedUniqueSkills = users => {
  let allSkills = users
    .map(({ skills }) => skills)
    .flat(1)
    .sort();

  return [...new Set(allSkills)];
};
console.log(getSortedUniqueSkills(users));