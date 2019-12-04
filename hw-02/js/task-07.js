"use strict"

const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];

const isLoginValid = function(login) {
  return login.length >= 4 && login.length <= 16;
};
const isLoginUnique = function(allLogins, login) {
    for (const value of allLogins) {
      if (value === login) {
        return false;
      }
    }
    return true;
  };
  
  const addLogin = function(allLogins, login) {
    if (isLoginValid(login) === false) {
      const message = "Ошибка! Логин должен быть от 4 до 16 символов";
      return message;
    }
    if (isLoginUnique(allLogins, login) === false) {
      const message = "Такой логин уже используется!";
      return message;
    }
    logins.push(login);
    const message = "Логин успешно добавлен!";
    return message;
  };
  
  console.log(addLogin(logins, "Ajax"));
  console.log(logins);
  console.log(addLogin(logins, "robotGoogles"));
  console.log(addLogin(logins, "Zod"));
  console.log(addLogin(logins, "jqueryisextremelyfast"));
  