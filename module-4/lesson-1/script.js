/*
  *
  * 1. Написати функцію-суматор всіх своїх параметрів.
  *
  * Функція приймає довільну кількість параметрів.
  * Однак кожен з них обов'язково має бути числом.
  *
  * Генерувати помилку, якщо:
  *   - Якщо функція була викликана менш ніж з двома аргументами;
  *   - Хоча один із аргументів не є числом (у помилці вказати його порядковий номер).
  *
  * Умови:
  *   - використовувати тип функції arrow function;
  *   - Використовувати об'єкт arguments заборонено.
  *   - Використати forEach
  *
  *
*/
//-------------------------

//  const sumArgs = (...args) => {
//   if (args.length < 2) {
//     return "error: not enough args"
//   }
  
//   let totalSum = 0;

//   args.forEach((element, index) => {
//     totalSum += element;
//     if (typeof element !== 'number') {
//       throw `error: element at position ${index +1} is not number`;
//         // throw new Error(`error: element at position ${index +1} is not number`);
//     }
//   });

//   console.log('resul for each', result)

//     return totalSum;
//  }


//  const sum = sumArgs(1,2, null, 6);

//  console.log('Sum -> ', sum);

// 2. Написати функцію-логгер log, яка виводить у консоль повідомлення вказану кількість разів.
//
//  Функція має два параметри:
//       - Перший - рядковий тип, повідомлення для виведення;
//       - Другий - числовий тип, кількість виведення повідомлення.
//
//  Задати значення за ЗАМОВЧУВАННЯМ для обох параметрів:
//      - Для першого - «Empty message»;
//      - Для другого - 1;
//
//  Умови:
//      - використовувати тип функції arrow function;

//-------------------------

// const log = (message = "Empty message", count = 1) => {
//   for(let i=0; i < count; i +=1) {
//      console.log(message);
//   }
// };


// log("Hello", 3);
// log("World", 2);
// log();


/**
 *
 * 3. Написати функцію, яка повертає найбільше число, з переданих їй як аргументи під час виклику.
 *
 * Генерувати помилку, якщо:
 *  - Якщо функція була викликана менш ніж з двома аргументами;
 *  - Хоча один із аргументів не є допустимим числом (у помилці вказати його порядковий номер).
 *
 * Умови:
 *  - використовувати тип функції arrow function;
 *  - Обов'язково використовувати об'єкт Math.
 */

// const findMaxNumber = (...args) => {
//   if (args.length < 2) {
//     return "Error: not enough args!!!"
//   }
//   args.forEach((el, index) => {
//     if (typeof el !== 'number') {
//       throw new Error(`Error: element at ${index} is not a number!!!`)
//     }
//   })
//   return Math.max(...args)
// }


// console.log('Max ', findMaxNumber(1.3, 1.7, 2.5))


//-------------------------

// 4.Написати функцію applyFn, яка приймає на вхід 2 параметри:
//
// Масив із вхідними даними
// функцію, яку потрібно застосувати до кожного елемента масиву вхідних даних applyFn(dataArr, callback);

// Функція applyFn повинна повертати масив елементів, на яких було запущено callback






//-------------------------
// const applyFn = (dataArr, callback) => {
//   const newArr = [];
//   dataArr.forEach(arrItem => {
//     newArr.push(callback(arrItem));
//   });
//   return newArr;
// }

// const applyFn = (dataArr, callback) => dataArr.map(callback)//

// const toUpperWorld = string => string.toUpperCase()

// const resultArr = applyFn(['hello', 'world'], toUpperWorld) // [2,3,4];

// console.log(resultArr)



// 5. Перепишіть калькулятор використовуючи колбек функції та arrow function



// const askForNumbers = () => {
//     const a = Number(prompt('Enter first number'))
//     const b = Number(prompt('Enter second number'))
//     return [a, b];
// }


// const askForOperation = (message = 'Enter operation') => prompt(message);


// const calculate = (mathOperations) => {

//     const [firstNumber, secondNumbers] = askForNumbers() // [1, 4]

//     const operation = askForOperation(`Enter math operation`)


//   switch(operation){
//       case "+":
//           return sum(firstNumber, secondNumbers);
//       case "-":
//           return minus(firstNumber, secondNumbers);
//       case "*":
//           return mult(firstNumber, secondNumbers);
//       case "/":
//           return div(firstNumber, secondNumbers);
//       default:
//           return "Operation is not valid";
//   }
// }




