// 1. Напишіть скрипт порівняння двох масивів. Виводь у консоль true якщо вони ідентичні, та false якщо ні ( довжина обох массивів однакова )
// ([1, 2, 3], [1, 2, 3]) => true
// const arr1 = [1,2,3,4];
// const arr2 = [1,2,3,5];

// V1
// let result = true;
// for (let i = 0; i < arr1.length; i +=1) {
//     if (arr1[i] !== arr2[i]) {
//         result = false;
//         break;
//     }
    
// }

// console.log(result);
//-------

// function compareArray(arr1, arr2) {
//     for (let i = 0; i < arr1.length; i +=1) {
//             if (arr1[i] !== arr2[i]) {
//                 return false
//             }
//         }
//         return true;
// }

// V3
// function compareArrayV2(arr1, arr2) {
//     return arr1.join('') === arr2.join('');
// }

// console.log('from func', compareArrayV2(arr1, arr2));
// --------------------

// 2. Написати скрипт який буде видаляти з масиву елемент та виводити масив після видалення в консоль.
// Якщо такого елемента в масиві немає – виводь у консоль помилку

// const arr = [1,2,3,4,5,6,7, ]
// const elementToRemove = 10;

// const index = arr.indexOf(elementToRemove);

// if (index === -1) {
//     console.log(`Елемент ${elementToRemove}  відсутній`);
// } else {
//     arr.splice(index, 1);
//     console.log(`До речі ось наш масив ${arr}`);
// }





//--------------------


// 3. Напишіть скрипт який буде виводити в консоль фрагмент масиву, що містить перші 'n' елементів масиву.

// const arr = [1,2,3,4,5,6,7] // length = 7
// const n = 5;
// const cutArr=[];
// for( let i = 0; i < n && i < arr.length; i++){
//     cutArr.push(arr[i]);
// }
// console.log(cutArr);
// console.log(arr.slice(0, n));
// Приклад
// n = 2 => [1,2]
// n = 4 => [1,2,3,4]

const arr = [1, 2, 3, 4, 5, 6, 7] // length = 7
const n = -3;
let newArr = [];
if (n < 0 && arr.length - Math.abs(n) > 0) {
  for (let i = (arr.length - Math.abs(n)); i < arr.length && i > 0; i++) {
    newArr.push(arr[i]);
  }
} else {
  for (let i = 0; i < arr.length && i < Math.abs(n); i++) {
    newArr.push(arr[i])
  }
}
console.log(newArr);


//--------------------

// 4. Напишіть скрипт, який створює масив елементів, що є сумою відповідних елементів заданих масивів.
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [4, 5, 6];

const newArray = [];
// let maxLength;
// if (arr1.length > arr2.length) {
//     maxLength = arr1.length
// } else { 
//     maxLength = arr2.length
// }
const maxLength = arr1.length > arr2.length ?  arr1.length : arr2.length;
// const maxLengthV1 = Math.max(arr1.length, arr2.length);

for (let i = 0; i < maxLength; i += 1) {
    // if (arr1[i] === undefined) {
    //     newArray.push(0 + arr2[i]);
    // } else if (arr2[i] === undefined) {
    //     newArray.push(arr1[i] + 0);
    // }
    // else { 
    //    newArray.push(arr1[i] + arr2[i]);
    // }     

    // const elementsSum = (arr1[i] || 0) + (arr2[i] || 0);
    newArray.push((arr1[i] || 0) + (arr2[i] || 0));
}

// console.log('check1', newArray)

// Результат має бути таким масивом – [5,7,9,4,5]

//--------------------

// 6. Реалізувати скрипт фільтру масиву за вказаним типом даних.

// Змінна arr - масив, який міститиме будь-які дані, filterType - тип даних.
// Потрібно створити новий масив, який міститиме всі дані, які були в arr, за винятком тих, тип яких був записаний у змінній filterType.
// Тобто якщо arr = ['hello', 'world', 23, '203', null], і filterType = 'string', то нови масив має бути таким [23, null].

// const arr = ['hello', 'world', 23, '203', null, false]
const filterType = 'boolean'
// console.log(typeof null)

const filterArr = [];
for (let arrItem of arr) {
    if (typeof arrItem !== filterType) {
        filterArr.push(arrItem);
    }
}
// console.log(filterArr);