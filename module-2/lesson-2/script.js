// 1. Напишіть функцію avg, яка повертає середнє значення переданого масиву (якщо довжина масиву дорівнює нулю, то має повернутися 0).

// const avg = function (array) {
//     // if (array.length === 0) {
//     //   return 0;
//     // }
  
//     if (!array.length) {
//       return 0;
//     }
//     let sum = 0;
//     for (const arrayItem of array) {
//       sum += arrayItem;
//     }
//     return sum / array.length;
//   };
  
//   console.log(avg([0, 1, 2, 3, 4, 5])); // 2.5
//   console.log(avg([22, 34, 62, 99])); // 54.25
//   console.log(avg([])); // 0
//   console.log(avg([1000, 2056, 3444, 1237])); // 1934.25

//------------------------

// 2. Напишіть функцію power для обчислення степені числа

function power(number, pow) {
    let total = number;
    for (let i = 1; i < pow; i += 1 ) {
            total *= number;
             
    }
    return total;
}

// console.log(power(2, 3)); // 8
// console.log(power(4, 2)); // 16
// console.log(power(3, 4)); // 81
// onsole.log(power(10, 3)); // 1000

//------------------------

// 3. Напишіть функцію squareDigits, яка приймає число та зводить у квадрат кожен символ.
// function squareDigits (num){
//     const numString = num.toString();
//     let result = '';
//     for (const char of numString){
//             result += Number(char )**2;
//     }
//     // for (let i = 0; i < numString.length; i+=1){
//     //     const char = numString[i];
//     //     // console.log(char)
//     //     const squareNumber = Number(char )**2;
//     //     // console.log(squareNumber)
//     //     result = result+squareNumber;
//     // }
//     return Number(result);
// }

//------------------------



// 4. Напишіть функцію isPalindrome, яка перевіряє, чи переданий рядок є паліндромом.
// Паліндром - це слово, фраза чи послідовність, які читаються так само як уперед, назад, наприклад, level.

function isPalindrome(word) {
    const  reversedWord = word.split("").reverse().join("").toLowerCase();
  // if (reversedWord === word.toLowerCase()) {
      // return true;
  // } else {
  //  return false;
  // }
  return reversedWord === word.toLowerCase();
  }

// console.log(isPalindrome('level')); // true
// console.log(isPalindrome('topot')); // true
// console.log(isPalindrome('вимив')); // true
// console.log(isPalindrome('анна')); // true
// console.log(isPalindrome('алла')); // true
// console.log(isPalindrome('дід')); // true
// console.log(isPalindrome('ротатор')); // true
// console.log(isPalindrome('радар')); // true
// console.log(isPalindrome('привіт')); // false
// console.log(isPalindrome('що')); // false
// console.log(isPalindrome('that'));  // false


//------------------------



// 5. Написати функцію stringTransformer, яка буде трансформувати рядок за такими правилами:

// 1) Змінити регістр кожного знака, тобто. нижній регістр у верхній регістр, верхній регістр у нижній регістр. (наприклад 'FizzBuzz'-> 'fIZZbUZZ');
// 2) Змінити порядок слів на зворотний (наприклад, 'pen pineapple apple PEN' --> 'pen APPLE PINEAPPLE PEN'). // Done

function stringTransformer(sentence) {
    const reversedSentence = sentence.split(" ").reverse().join(' ');
    // console.log(reversedSentence);
    let finalSentence = '';
    for (const char of reversedSentence) {
      if (char === ' ') {
        finalSentence += ' ';
        continue;
      }
      const isLowerChar = char === char.toLowerCase(); 
      finalSentence += isLowerChar ?  char.toUpperCase() :  char.toLowerCase();
      // if (char === char.toLowerCase()) {
      //   finalSentence += char.toUpperCase();
      // } else {
      //   finalSentence += char.toLowerCase();
      // }
    }
    return finalSentence;
  }


// console.log(stringTransformer('torininGEN THE bEst'));
// BeST the TORININgen

// console.log(stringTransformer('JavaScript IS cool LANGUAGE'));
// language COOL is jAVAsCRIPT


//------------------------

