
// Task 1 
// Прочитайте кількість вкладених  li у список з класом outer, у список з класом inner та загальну клількість li на строінці
// const listOuter = document.querySelector(".outer");
// const listChildOuter = listOuter.children;
// const listInner = document.querySelector(".inner");
// const listChildInner = listInner.children;
// const listAllEl = document.querySelectorAll("li");

// console.log('All li -> ', listAllEl.length);
// console.log('Outer li -> ', listChildOuter.length);
// console.log('Inner li -> ', listChildInner.length);


// const outerLi = document.querySelectorAll(".outer > li");
// const innerLi = document.querySelectorAll(".inner > li");
// const listAllEl = document.querySelectorAll("li");

// console.log('All li -> ', listAllEl.length);
// console.log('Outer li -> ', outerLi.length);
// console.log('Inner li -> ', innerLi.length);

//-----------
// Task 2
// Написати функцію, яка буде приймати один аргумент – рядок з нікнеймом в instagram ) і генерувати інформаційний 
// блок для відкриття акаунту. Блок потрібно ставити в елемент з класом inst-info

/* <p>Visit instagram of <span class="bold">zelenskiy_official</span></p> */
// <a href="https://www.instagram.com/zelenskiy_official/">Open page</a> 
// const instInfo = document.querySelector('.inst-info');
// function generateInstagramBloK(username) {
//     const paragraph = document.createElement('p');
//     paragraph.innerHTML = `Visit instagram of <span class="bold">${username}</span>`;
//     instInfo.append(paragraph);

//     const linkInst = document.createElement('a');
//     linkInst.href = `https://www.instagram.com/${username}/`;
//     linkInst.innerHTML = `Open page`;
//     instInfo.append(linkInst)
// }

// generateInstagramBloK('oleh_opolonets')


// function generateInstagramBloKV2(username) {
//    instInfo.insertAdjacentHTML("beforeend", `
//    <p>Visit instagram of <span class="bold">${username}</span></p> 
//    <a href="https://www.instagram.com/${username}/">Open page</a> 
//    `)
// }
// generateInstagramBloKV2('oleh_opolonets')

// Task 3
// Створити на основі масиву список з назвами міст. Додавати інлайн стиль кольору ( жовтий ) для міст, які
// не є столицею, а для столиці ставити blue. Cписок потрібно вставити у елемент з класом .cities


// 
/* <ul >
<li style="color: yellow">Odessa</li>
<li style="color: yellow">Rivne</li>
<li style="color: blue">Kyiv</li>
<li style="color: yellow">Kharkiv</li>
</ul> */

const cities = [
    {name: 'Lviv', capital: false}, // <li style="color: yellow">Lviv</li>
    {name: 'Kharkiv', capital: false},
    {name: 'Odessa', capital: false},
    {name: 'Kyiv', capital: true},
    {name: 'Rivne', capital: false},
    {name: 'Zhytomyr', capital: true},
]

document.body.style.backgroundColor = 'gray'

const listOfCites = document.querySelector('.cities');
const listOfCitesUl = document.createElement('ul');

// for (let city of cities) {
//     const cityItem = document.createElement('li');
//     cityItem.textContent = city.name;
//     cityItem.style.color = city.capital ? 'blue' : 'yellow';
    
//     listOfCitesUl.append(cityItem);
// }
// listOfCites.append(listOfCitesUl);

// const mappedLi = cities.map(city =>`<li style="color: ${city.capital ? 'blue' : 'yellow'}">${city.name}</li>`)

// listOfCitesUl.insertAdjacentHTML("beforeend", mappedLi.join(''));


// listOfCites.append(listOfCitesUl);
// console.log('mapped li', mappedLi);
// const mappedLiString = cities.map(city =>`<li style="color: ${city.capital ? 'blue' : 'yellow'}">${city.name}</li>`).join('')


// listOfCites.insertAdjacentHTML("beforeend", `<ul>${mappedLiString}</ul>`);
// console.log('mapped li', mappedLiString);

// Task 4
// Провалідувати img, які знаходяться у li, якщо немає src - за замовчуванням ставити https://proofthatblog.com/wp-content/uploads/2013/06/question-mark.jpg
// якщо немає alt – unknown
