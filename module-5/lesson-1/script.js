// 1. Використайте в методі says ключове слово this
// const callerObject = {
//     caller: "mom",
//     says: function() {
//         console.log('this', this)
//         console.log(`Hey, ${this.caller} just called.`);
//     }
// };

// const name = callerObject.caller;

// const sayHello = callerObject.says;
 

// sayHello.call(callerObject); // ?
// call.says(); //


//-----------------


// 2. Пофіксіть виклик метода says


// const writeHello = function () {
//     console.log(`Hello ${this.caller}`)
//    }

// const writeHello = () => console.log(`Hello ${this.caller}`)

// const callerObject = {
//     caller: "mom",
//     says: writeHello
// }

// callerObject.says()

// writeHello.bind(callerObject)() // ? Hello mom ? //


//-----------------


// 3. Э функція, викличте її в правильному контексті

function showFullName() {
    console.log("Inside", this);
    alert( this.firstName + " " + this.lastName );
}

const person = {
    firstName:"Mango",
    lastName:"Poly",
}


// const upperString = "hello".toUpperCase();

// console.log('upperString', upperString)


// showFullName.bind(person);

// showPersoneName();

// showFullName.call(person)
 // ?

//-----------------

// 4. Виправте функцію, що втрачає "this"

// function askPassword(ok, fail) {
//     let password = prompt("Password?", '');
//     if (password === "1") {
//         ok();
//     }else {
//         fail();
//     }
// }

// const user = {
//     name: 'Вася',

//     loginOk() {
//         alert(`${this.name} logged in`);
//     },

//     loginFail() {
//         alert(`${this.name} failed to log in`);
//     },

// };

// askPassword(user.loginOk.bind(user), user.loginFail.bind(user));
// askPassword(() => user.loginOk(), () => user.loginFail());

//-----------------

// 5. Що потрібно передати у виклик функції askPassword у коді нижче, щоб вона могла викликати
// функцію user.login(true) як ok та функцію user.login(false) як fail?

function askPassword(ok, fail) {
    let password = prompt("Password?", '');
    if (password == "rockstar") {
        ok() // user.login(true)
    } else {
        fail() // user.login(false)
    };
}

let user = {
    name: 'John',

    login(result) {
        alert( this.name + (result ? ' logged in' : ' failed to log in') );
    }
};


// askPassword( () => user.login(true) , () => user.login(false) ); // ?
// askPassword(user.login.bind(user, true), user.login.bind(user, false));
//-----------------

// 6. Є функція sum, яка підсумовує всі елементи масиву:

function sum(arr) {
    return arr.reduce(function(a, b) {
        return a + b;
    }, 0);
}

// console.log( sum([1, 2, 3]) ); // 6 (=1+2+3)

// Створіть аналогічну функцію sumArgs(), яка підсумовуватиме всі свої аргументи:
// Для вирішення застосуйте метод reduce до arguments, використовуючи spread, call, apply або "позичення методу".


// function sumArgs() {
//     // return [...arguments].reduce(function(a, b) {
//     //     return a + b;
//     // }, 0);

//     // return [100, 100].reduce.apply(arguments, [(a, b) => a + b, 0])
//     // return [100, 100].reduce.bind(arguments, (a, b) => a + b, 0)()  
//     return [].reduce.call(arguments, (a, b) => a + b, 0) //  arguments.reduce((a, b) => a + b, 0)

//     // arguments.reduce = Array.prototype.reduce;

//     // return arguments.reduce((a, b) => a + b, 0)
// }

// console.log( sumArgs(1,2,3,4) );




//-----------------
