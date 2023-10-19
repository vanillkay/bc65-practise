// 1. Даний масив. Запишіть перший елемент цього масиву в змінну elem1, другий - в змінну elem2, третій - в змінну elem3,
// а всі інші елементи масиву - змінну arr

const newArr = [1,2,3,4,5,6,7];
const [elem1, elem2, elem3, ...arr] = newArr;

// console.log(elem1);
// console.log(elem2);
// console.log(elem3);

//--------------------------


// 2. Даний об'єкт obj. Запишіть відповідні значення змінні name, surname за допомогою деструктуризації.
// Зробіть так, щоб, якщо якесь значення не задано - воно набирало наступного значення за замовчуванням:
// {name: 'Анонім', surname: 'Анонімович', age: '? років' Ї

// const obj = {
//     name: 'John',
//     surname: 'Smith',
//     age: 20,
// }

// const { name = "Анонім", surname = "Анонімович", age = "? років", } = obj;


// console.log(name, surname, age);

//--------------------------

// 3. Перепишіть приклад використовуючи деструктуризацію

const student = {
    name: 'John Doe',
    age: 16,
    scores: {
        maths: 10,
        english: 11,
        science: 9
    }
};

// displaySummary(student);


function displaySummary({name, scores:{maths = 0, english = 0, science = 0}}) {
    console.log(`Hello, ${name}`);
    console.log(`Your Maths score is ${maths}`);
    console.log(`Your English score is ${english}`);
    console.log(`Your Science score is ${science}`);
}


// Hello, John Doe
// Your Maths score is 74
// Your English score is 63
// Your Science score is 85

//--------------------------



// 4. Проведіть операції з деструктуризації масиву
// 1) Перемістіть значення масиву rgb в окремі змінні red, green, blue та виведіть їх у консоль ( R: red, G: green, B: blue ) // +
// 2) Додайте дефолтне значення 255 для red та blue
// 3) Пропустіть перші два елементи та призначте лише третій елемент змінній blue

const rgb = [245, 255, 34];
// const [red = 255, green, blue = 255] = rgb;
const [,, blue = 255] = rgb;
// console.log(blue);

//--------------------------

// 5. Поміняйте значення двох змінних між собою за допомогою масивів та деструктуризації

// let a = 3;
// let b = 10;
// let c = a;

// [a, b] = [b, a];// [b, a]


// a = b;
// b = c;

// console.log(a, b)
// a = 10
// b = 3


//--------------------------

// 6.Напишіть функцію, яка створює змінні з ім'ям пірата ,
// а також – його статусом серед інших піратів та виводіть їх в консоль. Якщо статусу немає – він за замовчуванням "матрос"

const pirates = "Джон; Джек капітан; Енко кухар; Вася юнга; Інгрід";

function logPirates(pirates) {
    const arrOfPirates = pirates.split('; ')
    for ( const pirate of arrOfPirates) {
      const [name, status = 'матрос']  = pirate.split(' ');
      console.log(`${name} - ${status}`);
    }
}

// logPirates(pirates);

// Приклад виводу у консоль:
// Джон - матрос
// Джек - капітан
// Енко - кухар
// Вася - юнга
// Інгрід - матрос

//--------------------------

// 7. Напишіть функцію, яка створює об'єкт.
// Як аргументи вона приймає в себе ім'я, прізвище, і перелік
// рядків формату "ім'яВластивості: значення". Їх може бути багато.
//
// Приклад роботи:
// const user = createObject("Іван", "Іванів", "wife: Анна", "car: Toyota", );
//  console.log(user);
/*
{
    name: "Іван",
    lastName: "Іванів",
    wife: "Анна",
    car: "Toyota",
}
*/
// Використовуйте оператор rest та деструктуризацію масиву

const createObject = function (name, surname, ...props) {
    const user = {
        name,
        surname
    }

    for (const prop of props) {
        const [key, value] = prop.split(': ');
        user[key] = value;
    }
    return user;
}


const user = createObject("Іван", "Іванів", "wife: Анна", "car: Toyota" );
 console.log(user); 
//--------------------------

// 8. У вас є 2 масиви - об'єднайте їх вміст (через функцію) в один totalCars максимально елегантним способом

// - другий елемент maryCars
// - елементи johnCars без першого елемента
// - Перший елемент johnCars
// - елементи maryCars без другого елемента

// ['другий елемент array2', 'елементи array1 без першого елемента', 'Перший елемент array1', 'елементи array2 без другого елемента']
// ["Bugatti", "Ford", "Alfa Romeo", "Audi", "BMW", "Cadillac", "Lexus", "Chevrolet", "Ferrari"]

const johnCars = ["Cadillac", "Ford", "Alfa Romeo", "Audi", "BMW"]; 
const maryCars = ["Lexus", "Bugatti", "Chevrolet", "Ferrari"]; 
const [carJ, ...restJ] = johnCars;
const [carM, carM2, ...restM] = maryCars;
const totalCars = [carM2, ...restJ, carJ, carM, ...restM];

// console.log(totalCars.join(', '))

// Get the last element from array with destructuring 
// const [item] = totalCars.reverse();

// console.log(item);
//--------------------------

//  9. Напишіть функцію makePairs, яка приймає безліч аргументів, далі створити три масиви [перший аргумент, останній аргумент]
// та другий масив [другий аргумент, передостанній аргумент] та третій масив [третій агрумент, перед-передостанній аргумент] -> об'єднати їх в один масив та повренути
// [1,2,3,4,5,6,7,8]


// console.log(makePairs(1,2,3,4,5,6,7,8)) // [1,8,2,7,3,6]
