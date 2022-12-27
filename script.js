// ------------------------ Object Объекты
// Привет, object
// let user = {}
// user.name = "John";     // Добавил значение
// user.surname = "Smith";
// user.name = "Pete";     // Изменил значение
// delete user.name;       // Удалил значение
// console.log(user);      // Вывод "Smith"

// Проверка на пустоту
// let obj = {
//     // name: "Joh",
// };

// function isEmpty(obj) {
//     for(let key in obj){
//         return false;       // Если выполняется значит свойства есть
//     }
//     return true;            // Свойств нет
// }
// console.log(isEmpty(obj));

// // Объекты-константы?
// const user = {
//     name: "John"
//   };  
//   // это будет работать?
//   user.name = "Pete";       // Да, будет т.к. изменяется свойство объекта а не сама переменная

// Сумма свойств объекта

// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130,
// }
// let sum = 0;
// for(let key in salaries) {
//     sum += salaries[key];
// }
// console.log(sum);

// Умножаем все числовые свойства на 2
// Не работает, не пойму почему
// let obj = {
//     num1: 10,
//     num2: 25,
//     num3: 50,
// }
// function multiplyNumeric(obj){
//     for(let key in obj){
//         // if(typeof obj[key] == "number"){
//         obj[key] *= 2;
//         // }      
//     }   
// }
// console.log(obj);

// --------------------------- Функции -- Function ------------------------

// Обязателен ли "else"?
// function checkAge(age) {
//     if (age > 18) {
//       return true;
//     } else {
//       // ...
//       return confirm('Родители разрешили?');
//     }
//   }

//   function checkAge(age) {
//     if (age > 18) {
//       return true;
//     }
//     // ...
//     return confirm('Родители разрешили?');
//   }
  // Они одинаковые, второй вариант короче

//   Перепишите функцию, используя оператор '?' или '||'
// Не совсем понятно как это работает, ибо вывод всегда true или так и дожно быть?

// let age = prompt("You age?");

// function checkAge(age) {
//     if (age >= 18) {
//       return true;
//     } else {
//       return confirm('Родители разрешили?');
//     }
//   }
//   console.log(checkAge());

//   function checkAge(age) {
//     return (age >= 18) ? true : confirm('Родители разрешили?');
//   }

//   console.log(checkAge());

//   function checkAge(age) {
//     return (age >= 18) || confirm('Родители разрешили?');
//   }
//   console.log(checkAge());

// Функция min(a, b)

// let a = prompt("a");
// let b = prompt("b");

// function checkMin(a, b){
//     return a < b ? a : b; // если а менше б то возвращяет а, в противном случае возвращает б
//     // if(a < b){         // Этот вариант мне больше по душе 
//     //     return a;
//     // }
//     // return b;
// }

// console.log(checkMin(a, b));

// Функция pow(x,n)

// let x = prompt("x");
// let n = prompt("n");

// if(x > 0 && n > 0){

// function pow(x, n){
//     let result = x;
//     for(let i = 1; i < n; i++){
//         result *= x;
//     }
//     return result;
// }
// console.log(pow(x, n));

// } else{
//     console.log("ERROR!");
// }



