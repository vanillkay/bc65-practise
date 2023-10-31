// 1. Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з текстом
// const btnEl = document.querySelector('#hider');
// const textEl = document.querySelector('#hide');
// btnEl.addEventListener('click', () => {
//     textEl.classList.toggle('hidden');
    // btnEl.value = textEl.classList.contains('hidden') ? "Show text" : "Hide text";
    // if (textEl.classList.contains('hidden')){
    //     btnEl.value = "Show text";
    // } else {
    //     btnEl.value = "Hide text"}
    
// })


// -----------------
// 2. Створіть кнопку, при натисканні на неї вона приховуватиме сама себе.

// const divEl = document.querySelector('#root');
// const btnEl = document.createElement("button");
// btnEl.textContent = "Push me!"
// divEl.append(btnEl);

// const onBtnElClick = function(){
//     // btnEl.classList.add('hidden');
//     // btnEl.remove();
//     console.log(this);
//     this.remove();
// }
// btnEl.addEventListener('click', onBtnElClick);



// -----------------

// 3. У змінній button знаходиться кнопка.
// Спочатку обробників на ній немає.
// Що буде виведено під час кліку після виконання коду?

// const button = document.querySelector(".listeners");


// button.addEventListener("click",  function() { alert("1"); });

// button.removeEventListener("click",  function() { alert("1"); });

// button.onclick = function() { alert(2); }

// button.onclick = function() { alert(5); }

// console.log(window.getEventListeners(button))


// -----------------


// 4. Напишіть функцію removeChildren, яка видаляє всіх нащадків елемента.

// const table = document.querySelector('table');
// const list = document.querySelector('ol');


// function removeChildren(element){
//     [...element.children].forEach(elem => elem.remove());
// }

// removeChildren(list);


// -----------------

// 5. Напишіть інтерфейс, щоб створити список.
//
// Для кожного пункту:
//
// Запитуйте вміст у користувача за допомогою prompt. Створюйте пункт ( li ) і додайте його до UL.
// Процес припиняється, коли користувач натискає ESC.
// Усі елементи мають створюватися динамічно.
//
// P.S. prompt повертає null, якщо користувач натиснув на ESC.


{/* <ul class="insert"></ul> */}

const list = document.querySelector("ul");

while (true){
    const input = prompt("Введіть вміст пункту");
    
    if (input === null){
        break;
    }

    const li = document.createElement("li")
    li.textContent = input;
    list.append(li);
} 

