// 1. Реалізувати клас Employee, в якому будуть наступні властивості - ім'я (name) , вік (age), зарплата (salary).
// Зробіть так, щоб ці властивості заповнювалися при створенні об'єкта.
// Зробіть поле salary приватним та створіть геттери та сеттери для нього

// Зробіть клас Programmer, який буде успадкований від класу Employee, у якому буде властивість langs (список мов)
// Для класса Programmer перезапишите геттер для властивості salary. Хай він повертає властивість salary, помножене на 3.
// Створіть кілька екземплярів об'єкта Programmer, виведіть їх у консоль.
class Employee { 
 #salary
    constructor({ name, age, salary }) { 
        this.name = name;
        this.age = age;
        this.#salary = salary;
    }
    get salary() { 
        return this.#salary;
    }
    set salary(newSalary) { 
        this.#salary = newSalary
    }

}


// new Employee() === super

class Programmer extends Employee { 

    constructor({
            name,
            age,
            salary,
            langs
        }) {

        super({ name,age, salary });
        this.langs = langs;
    }

    get salary() {
        return super.salary*3;
    }

    set salary(newSalary) {
        super.salary = newSalary
    }
}


const nonProgrammer = new Employee({
    name: "Mikolay",
    age: 24,
    salary: 59000.99,
})

nonProgrammer.salary = 100000

// console.log("Mikolay's salary -> ", nonProgrammer.salary);

const programmer = new Programmer({
    name: "Oleh",
    age: 24,
    salary: 59000.99,
    langs: ['delphi','pascal','C#','Js', 'Java', 'C++'],

})


const topProgrammer = new Programmer({
    name: "Irina",
    age: 18,
    salary: 500000,
    langs: ['delphi', 'pascal', 'C#', 'Js','Dart', 'Ruby', 'Rust', "R"],
})

//
programmer.salary = 79000;
//


// console.log(programmer.salary)
//-------------------------7


// 2. Створіть класс товару Product, у якому будуть такі властивості:
//     - коротка назва;
//     - повна назва;
//     - опис
//     - ціна;
// (має також бути приватний унікальний артикул для товару);
//
// А також методи:
//     - розрахунок ціни (приватний, аргумент - кількість товарів, якщо більше 20 - тоді знижка на всю суму - 15 відсотків);
//     - отримання інформації про доставку (метод - приватний, аргументи - адреса, ціна за все замовлення. Ціна за доставку обраховується так –  1% від ціни,
//       якщо ціна більше 2000 - доставка безкоштовно);
//     - друк чеку (приватний, цей метод отримує об'єкт замовлення і виводить в консоль)
//     - замовлення товару ( публічний, розраховую ціну товару,доставки та генерує об'єкт замовлення
//       { адреса, товар, кількість, ціна за доставку, ціна за замовлення})
//

//-------------------------

// 3. Створіть клас Vehicle, у якому буде 4 властивості:
// - maxSpeed ( статична )
// - currentSpeed ( приватна )
// - year,
// - country
// - weight
// - метод info() { порожній }

class Vehicle {
    #currentSpeed;
    static maxSpeed = 100;
    constructor({year, country, weight, currentSpeed}) {
        this.year = year;
        this.country = country;
        this.weight = weight;
        this.#currentSpeed = currentSpeed;
    }

    info() {
        console.log('Vehicle info')
    }

    get currentSpeed(){
        return this.#currentSpeed
    }

    set currentSpeed(newSpeed){
        this.#currentSpeed = newSpeed;
    }
}

// Створіть додаткові класи
// 1) Car (усі поля від Vehicle + type, name, model, wheels) + методами
// -info (описує поведінку авто),
// -travelTime( обраховує кількість часу яка потрібна для подолання відстані за швидкості currentSpeed,
//        відстань приходить параметром в сам метод )
class Car extends Vehicle {
    constructor({
        type,
        name,
        model,
        wheels,
        ...superProps
    }) {
        super(superProps);
        this.type = type;
        this.name = name;
        this.model = model;
        this.wheels = wheels;

    }
    info(){
        return `This is ${this.name}`
}
    travelTime(distance) {
        if (distance >= 0) {
            return distance / this.currentSpeed;
        }
        return 0;
        
    }
}

const frog = new Car({
    currentSpeed: 250,
    name: 'Jabka',
    type: 'Lalala',
    model: 'BBBB',
    wheels: 4,
    year: 2027,
    weight: 100,
    country: 'Ukraine',
    
}) 


// console.log('frog', frog.travelTime(1000))

// 2) AirPlane (усі поля від Vehicle + type, name, engine, private oldEngines) + методи)
// -info (описує поведінку літака),
// -updateEngine ( заміняє поточний двигун літака на той двигун, який прийшов параметром у метод, та додає старий двигун
//                 у приватне поле oldEngines )
// -showAllEngines ( виводить список усіх старих двигунів літака та поточного )


const generateRandomNumber = (min = 0, max = 10) => Math.floor(Math.random() * (max - min + 1)) + min


const getRandomUpperLetter = () => String.fromCharCode(generateRandomNumber(65, 90))


const generateRandomPlaneNumber = () => {
    const firstLetter = getRandomUpperLetter();
    const secondLetter = getRandomUpperLetter();

    const numbers = Array.from({ length: 8 }).fill(null).map(() => generateRandomNumber(0, 9));

    return [firstLetter, secondLetter, ...numbers].join("");
}

class AirPlane extends Vehicle {
    #oldEngines
    constructor({type, name, engine, oldEngines, ...superProps}) {
        super(superProps)
        this.type = type,
        this.name = name,
        this.engine = engine,
        this.#oldEngines = oldEngines
    }

    get oldEngines() {
        return this.#oldEngines
    }

    set oldEngines(engines) {
        this.#oldEngines = engines
    }

    info() {
        return "It flies!!!"
    }

    updateEngine(newEngine) {
        this.oldEngines.push(this.engine)
        this.engine = newEngine
    }

    showAllEngines() {
        console.log(...this.oldEngines, this.engine)
    }
}

const litachok = new AirPlane({currentSpeed: 250,
    name: 'Angry bird',
    type: 'toy sho litaye',
    model: 'AAAA',
    engine: generateRandomPlaneNumber(),
    year: 2000,
    weight: 100000,
    country: 'Ukraine',
    oldEngines: [generateRandomPlaneNumber()]})

    console.log(litachok.info())
    litachok.updateEngine(generateRandomPlaneNumber())
    litachok.showAllEngines()

// 3) Ship (усі поля від Vehicle + type, name, engine, color, passengers: {name, age, ticket} [] ( приватне ) ) + методи)
// -info (описує поведінку корабля),
// -addPassenger ( якщо пасажира ще немає на борту – додати його у список passengers, якщо є вивести помилку )





//-------------------------
