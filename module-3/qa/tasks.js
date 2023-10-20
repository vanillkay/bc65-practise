// 1. Напишіть функцію moveToTheEnd, яка приймає масив будь-яких елементів і елемент, 
// який повинен спливти в кінець масиву.


// console.log(moveToTheEndV2([1, 2, 0, 1, 0, 4], 0)); //  [1,2,1,4,0,0]
// console.log(moveToTheEndV2([NaN, false, 0, "yay", null], false)); // [false, 0, "yay", null, NaN]

function moveToTheEnd(array, element) {
    const index = array.indexOf(element);
    // if (index === -1){
    //     return array;
    // }
    for (let i = index; i < array.length - 1; i += 1) {
        array[i] = array[i + 1];
    }
    array[array.length - 1] = element;

    console.log(array)
}



function moveToTheEndV2(array, element) {
    let startItems = [];
    let endItems = [];
    for (let arrItem of array) { 
        if (arrItem === element) {
            endItems.push(arrItem);
        } else { 
            startItems.push(arrItem)
        }
    } 

   return [...startItems, ...endItems]
}


//-------------------

// 2. Напишіть функцію spinWords, яка приймає рядок, 
// що складається зі слів і розгортає слова в яких більше 4 символів.

console.log('start')
console.log(spinWords("Welcome")); // emocleW
console.log(spinWords("Hey fellow warriors")); // Hey wollef sroirraw
console.log(spinWords("This is a test")); // This is a test
console.log(spinWords("This is another test")); // This is rehtona test
console.log('end')

function spinWords(string) {
    let words = string.split(" ");
    for (i = 0; i < words.length; i += 1) {
        if (words[i].length > 4) {
            words[i] = words[i].split("").reverse().join("");
        }
    }
    return words.join(" ");
}

//-------------------


// 3. Напишіть функцію addLeadingZero, 
// яка приймає масив чисел і додає провідний нуль туди, де потрібно.


// console.log(addLeadingZeroV3([1, 2, 10, 11])); // ['01', '02', '10', '11']
// console.log(addLeadingZeroV3([-1, -2, 0, 4])); // ['-1', '-2', '00', '04']


//------------------
function addLeadingZero(arr) {
    for (i = 0; i < arr.length; i += 1) {
        if (arr[i] < 10 && arr[i] >= 0) {
            arr[i] = "0" + arr[i];
        }
        if (arr[i] < 0 && arr[i] >= 10) {
            arr[i] = arr[i].toString();
        }
    }
    return arr;
}


function addLeadingZeroV2(array) { 
    for (let i = 0; i < array.length; i += 1) {
        if (array[i] < 10  && array[i]>=0) { 
            array.splice(i,1,`0${array[i]}`)
        } else {
            array[i] = array[i].toString();
        }
    }
    return array;
}


function addLeadingZeroV3(array) { 

    const arrayCopy = [...array];

    for (let i = 0; i < arrayCopy.length; i += 1) {
        arrayCopy[i] = array[i] < 10 && array[i]>=0 
        ? `0${array[i]}` 
        : array[i].toString();
    }

    return arrayCopy;
}

const  addLeadingZeroV4 = (array) => array.reduce((newArray, item) => (
        [...newArray, item < 10 && item >= 0 ? `0${item}` : item.toString()]
    ), [])

    // console.log(addLeadingZeroV4([1, 2, 10, 11])); // ['01', '02', '10', '11']
    // console.log(addLeadingZeroV4([-1, -2, 0, 4])); // ['-1', '-2', '00', '04']





// 4. Напишіть функцію lowercaseCount, яка приймає рядок і повертає кількість букв у нижньому регістрі.


// console.log(lowercaseCount("abc"));
// console.log(lowercaseCount("abcABC123"));
// console.log(lowercaseCount("abcABC123!@€£#$%^&*()_-+=}{[]|':;?/>.<,~"));
// console.log(lowercaseCount(""));
// console.log(lowercaseCount("ABC123!@€£#$%^&*()_-+=}{[]|':;?/>.<,~"));
// console.log(lowercaseCount("abcdefghijklmnopqrstuvwxyz"));


function lowercaseCount(string) { 
let count=0;
for (let letter of string) {
    if (letter === letter.toLowerCase()) { 
        count += 1;
    }
    
    } return count;
}



 function lowercaseCountV2(string) {
    let total = 0;
    for (let i = 0; i < string.length; i += 1) {
      if (string[i].toLowerCase() === string[i]) {
        total += 1;
      }
    }
    return total;
  }
//-------------------

// 5. Напишіть функцію range, аналог range із Python.


console.log(range(0, 6)); // [0, 1, 2, 3, 4, 5]
console.log(range(6, 0, -1)); // [ 6, 5, 4, 3, 2, 1 ]

for (const n of range(0, 0.5, 0.1)) {
    console.log(n); // 0 0.1 0.2 0.3 0.4
}


function range(start, end, step = 1){
    const result = [];

    for(let i = start; i < end || i > end; i += step){
        result.push(i);
    }

    return result;
}

//---------------------