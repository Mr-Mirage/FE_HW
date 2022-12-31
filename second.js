// Задача 1:Дан многомерный массив 
// Выведите с его помощью слово 'голубой'.
// const arr = {
//   'ru':['голубой', 'красный', 'зеленый'],
//   'en':['blue', 'red', 'green'],
// };
// console.log(arr.ru[0]);

// Задача 2: Дан объект obj с ключами Коля, Вася, Петя с элементами '200', '300', '400'. С помощью   цикла выведите на экран строки такого формата: 'Коля - зарплата 200 долларов.'.

// const obj = {
//     Kolya: 200,
//     Vasya: 300,
//     Petya: 400,
// };

// for(let key in obj){
//     console.log(key + " - salary " + obj[key] + "$");
// }

// Задача 3: Дан объект {js:['jQuery', 'Angular'], php: 'hello', css: 'world'}. Выведите с его помощью слово 'jQuery'.

// const obj = {
//     js: ["jQuery", "Angular"],
//     php: "hello",
//     css: "world",
// };
// // console.log(obj.js[0]);
// 
// Вариант через цикл
// for (const key in obj) {
//     if (key === 'js') {
//         console.log(obj[key][0]);        
//     }
// }

// Задача 4: Создайте двухмерный массив. Первые два ключа - это 'ru' и 'en'. Пусть первый ключ содержит элемент, являющийся массивом названий дней недели по-русски, а второй - по-английски. Выведите с помощью этого массива понедельник по-русски и среду по английский (пусть понедельник - это нулевой день).

// const obj = {
//     'ru': ['понедельник', 'вторник', 'среда', 'черверг', 'пятница', 'суббота', 'воскресенье'],
//     'en': ['monday', 'tuesday', 'wednesday', 'thuersday', 'friday', 'saturday', 'sunday'],    
// };
// console.log(obj.ru[0] + " " + obj.en[2]);

// Задача 5:  Создайте объект с днями недели. Ключами в нем должны служить номера дней от начала недели (понедельник - первый и т.д.). Выведите на экран текущий день недели.

// let days = new Date();
// let result = days.getDay();

// const day = {
//     1: 'Monday',
//     2: 'Tuesday',
//     3: 'Wednesday',
//     4: 'Thuersday',
//     5: 'Friday',
//     6: 'Saturday',
//     7: 'Sunday',
// };

// if(result === 1){
//     console.log(day[1]);
// }
// else if(result === 2){
//     console.log(day[2]);
// }
// else if(result === 3){
//     console.log(day[3]);
// }
// else if(result === 4){
//     console.log(day[4]);
// }
// else if(result === 5){
//     console.log(day[5]);
// }
// else if(result === 6){
//     console.log(day[6]);
// }
// else {
//     console.log(day[7]);
// }

// Задача 6: Написать функцию, которая получает в качестве аргумента число и строку, где число обозначает сколько раз должна быть добавлена эта строка в объект. Возвращает массив из этих строк. Например: передаем строку “dog” и цифру 3, в результате мы получаем {"dog0" : "dog0", "dog1": "dog1", "dog2": "dog2"}.

// function whatYouWant(string, number){
//     let result = [];
//     for(let i = 0; i < number; i++){
//         result.push(string, i);
//     }
//     return result;
// }
// console.log(whatYouWant('dog', 3));

// Задача 7: Написать функцию, которая получает в качестве аргумента массив. для расчета суммы четных чисел в массиве. Так же написать  новую функцию для расчета суммы нечетных чисел в массиве. 
// Написать функцию, которая принимает как аргумент две полученные суммы и выводит наибольшее из них.
let number = [1,2,3,4,5,6,7,8,9,10];

getEven(number);

function getEven(number){
    let sumEven = 0;
    for(let i = 0; i < number.length; i++ ){
        if(number[i] % 2 === 0){
            sumEven += number[i];           
        }    
    }
    console.log(sumEven);
    return sumEven;
}

getAdd(number);

function getAdd(number){
    let sumAdd = 0;
    for(let i = 0; i < number.length; i++){
        if(number[i] % 2 !== 0){
            sumAdd += number[i];
        } 
    }
    console.log(sumAdd);
    return sumAdd;
}

function maxNum(sumEven, sumAdd){
    if(sumEven > sumAdd){
        console.log(sumEven);
    } else{
        console.log(sumAdd);
    }
}









// Задача 8: Напишите функцию для преобразования градусов Цельсия в градусы Фаренгейта. (Например: console.log(function(0)) => 32);

// function temperatur(celsius){
//     let fahrenheit = celsius * 1.8 + 32;
//     return fahrenheit;
// }
// alert(temperatur(prompt("Set the temperature in Ceelsius to convert to Fahrenheit")));