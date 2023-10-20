// 1. Реалізувати функцію, яка виконуватиме математичні операції з введеними користувачем числами

// Технічні вимоги:

// Взяти за допомогою модального вікна браузера два числа. ( функцією )
// Взяти за допомогою модального вікна браузера математичну операцію, яку потрібно здійснити. Сюди можна ввести +, -, *, /. ( функцією )
// Створити функцію, в якій провести запит чисел, мат. операції та виконати обчислення )
// Вивести у консоль результат виконання функції.
//
// Необов'язкове завдання додаткової складності:
//
// Після введення даних додати перевірку їхньої коректності.
// Якщо користувач не ввів числа, або при введенні вказав не числа - запитати обидва числа заново
// Якщо користувач вві неправильний символ - запитати ще раз

function isNotValidNumber(number){
    return isNaN(Number(number)) || number === null || number === "";
}

// FYI
// function isValidNumber(number){
//     return !isNaN(Number(number)) && number !== null && number !== "";
// }

function askForNumber(message){
    let number;  
    do {
        number = prompt(message);
    } while (isNotValidNumber(number))

    return Number(number);
}

// function askForNumberV1(message){
//     while(true){
//         const number = prompt(message);

//         if(isNotValidNumber(number)){
//             continue;
//         }

//         return number;
//     }
// }

// askForNumberV1('Введіть перше число');

// function askNumberV3(){
//    for(;;){
//         const number = Number(prompt("Enter the number"))

//         if(!isNaN(number)){
//             return number;
//         }

//         alert("Wrong number")
//     }
// }

// function askNumberV4(){

//     let number;

//     for(
//         number =  Number(prompt("Enter the number"));
//          isNaN(number);  
//          number = Number(prompt("Enter the number"))
//     ){}

//     return number;
// }

// console.log(askNumberV4())


function getNumbers() {
// let firstNumber;  
//     do {
//         firstNumber = prompt('Введіть перше число');

//     } while (isNotValidNumber(firstNumber))

// let secondNumber;  
//     do {
//         secondNumber = prompt('Введіть друге число');
//     } while (isNotValidNumber(secondNumber))

//     return [firstNumber, secondNumber];

    const firstNumber = askForNumber('Введіть перше число')
    const secondNumber = askForNumber('Введіть друге число')

    return [firstNumber, secondNumber];
}


function getMathOperation() {
    const arrOfSigns = ['+', '-', '*', '/'];
    let sign;
    do {
       sign = prompt('Введіть знак математичної операції: +, -, *, / ');
    } while (!arrOfSigns.includes(sign))
    return sign;
}



function calculate() {
    const numbers = getNumbers();
    const operator = getMathOperation();

    switch(operator) {
        case '+':
            console.log(`${numbers[0]} + ${numbers[1]} = ${numbers[0] + numbers[1]}`)
            break;
            case '-':
            console.log(`${numbers[0]} - ${numbers[1]} = ${numbers[0] - numbers[1]}`)
            break;
            case '*':
            console.log(`${numbers[0]} * ${numbers[1]} = ${numbers[0] * numbers[1]}`)
            break;
            case '/':
            console.log(`${numbers[0]} / ${numbers[1]} = ${numbers[0] / numbers[1]}`)
            break;
            default:
                console.log('Невірна операція');
    }
}


// calculate();
// 2. Напишіть функцію getTheTitles, яка поверне масив title з масиву об'єктів books
// ( якщо title не буде в об'єкті - повернутирядок Book {index} without title )


const books = [
    {
        title: 'Book',
        author: 'Joe'
    },
    {
        title: 'Book2',
        author: 'Ann'
    },
    {
        author: 'Peter'
    }
]

function getTheTitle(books) {
    const titleArr = [];
    for (let i = 0; i < books.length; i += 1) {
        const book = books[i];
        if (book.hasOwnProperty("title")) {
            titleArr.push(book.title);
            continue;
        }

        return `Book ${i +1} without title`;
        // throw new Error(`Book ${i +1} without title`);
    }
    return titleArr;
} 

console.log('title', getTheTitle(books));


//  3. Наишіть функцію makePairs, яка приймає безліч аргументі, далі створити два масиви [перший аргумент, останній аргумент]
// та другий масив [другий аргумент, передостанній аргумент] та третій масив [третій агрумент, перед-передостанній аргумент] -> об'єднати їх в один масив та повренути
// [1,2,3,4,5,6,7,8]
// 1,2,3       8,7,6

// [8,7,6,5,4,3,2,1]
// 8,7,6



// function makePairs(...args) {
//     let arr = [];
//     for (let i = 0; i < 3; i += 1) {
//         arr.push(args[i], args[args.length - i -1]);
//     }
//     return arr;
// }

// function makePairs(...args) {
//     const [first, second, third] = args;

//     const [last, preLast, prePreLast] = args.reverse();

//     return [first, last, second, preLast, third, prePreLast]
// }

// console.log(makePairs(1,2,3,4,5,6,7,8)) // [1,8,2,7,3,6]

// 4. Реалізувати функцію createNewUser для створення об'єкта "користувач".

// 1) Написати функцію createNewUser(), яка буде створювати та повертати об'єкт newUser.
// 2) При виклику функція повинна запитати  ім'я та прізвище.
// 3) Використовуючи дані, введені користувачем, створити об'єкт newUser з властивостями firstName та lastName.
// 4) Додати в об'єкт newUser метод getLogin(), який повертатиме першу літеру імені користувача, з'єднану з прізвищем користувача, все в нижньому регістрі
// (наприклад, Ivan Kravchenko → ikravchenko).
// 5) Створити користувача за допомогою функції createNewUser(). Викликати функцію користувача getLogin(). Вивести у консоль результат виконання функції.