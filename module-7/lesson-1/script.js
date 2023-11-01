// 1. Реалізувати перемикання вкладок (таби) на чистому Javascript.
//
// Технічні вимоги:
//
// 1) Потрібно, щоб після натискання на вкладку відображався конкретний текст для потрібної вкладки.
//      При цьому решта тексту має бути прихована. У коментарях зазначено, який текст має відображатися для якоїсь вкладки.

// 2) Розмітку можна змінювати, додавати потрібні класи, ID, атрибути, теги.

// 3) Потрібно передбачити, що текст на вкладках може змінюватися і вкладки можуть додаватися і видалятися.
//      При цьому потрібно, щоб функція, написана в джаваскрипті, через такі виправлення не переставала працювати.


// const allTabsList = document.querySelector('.tabs');
// const allTabsContents = document.querySelectorAll('.tabs-content li');
// let previosTab = document.querySelector(".tabs-title.active");

// let previousTabContent = document.querySelector('.tabs-content li:not(.hidden)')

// allTabsList.addEventListener('click', ({ target: activeTab }) => {
 
//  if(activeTab.tagName === 'UL' || previosTab === activeTab) {
//     return 
//  }

//     activeTab.classList.add('active');

//     previosTab.classList.remove('active');

//     previosTab = activeTab;


//     allTabsContents.forEach(tabContentElement => {
//        if (tabContentElement.dataset.tab === activeTab.textContent) {
//         tabContentElement.classList.remove('hidden');
//         previousTabContent.classList.add('hidden');
//         previousTabContent = tabContentElement;
//        }
//     })
// })

//V2
//-----------------------------------


const allTabsList = document.querySelector('.tabs');
const allTabsContents = document.querySelectorAll('.tabs-content li');
let previosTab = document.querySelector(".tabs-title.active");

let previousTabContent = document.querySelector('.tabs-content li:not(.hidden)')

const TABS_CONFIG = [...allTabsContents].reduce((config, tabContentElement) => {
    const tabName = tabContentElement.dataset.tab;

    return {...config, [tabName]: tabContentElement}
}, {})

console.log('config;, ', TABS_CONFIG);

allTabsList.addEventListener('click', ({ target: activeTab }) => {
 
    if(activeTab.tagName === 'UL' || previosTab === activeTab) {
       return 
    }

    const newTabContent = TABS_CONFIG[activeTab.textContent];

    if(!newTabContent){
        alert("This tab doesn't exist");
        return;
    }
   
     //Show and hide tab titel
    activeTab.classList.add('active');
    previosTab.classList.remove('active');

  
    //Show and hide tab content
    newTabContent.classList.remove('hidden')
    previousTabContent.classList.add('hidden');

   
    // Change new tab and tab content
    previosTab = activeTab;
    previousTabContent = newTabContent;

   })
   






//-------------

// 2. Намалювати на сторінці коло за допомогою параметрів, які введе користувач.
//
// Технічні вимоги:
//
// 1) При завантаженні сторінки – показати на ній кнопку з текстом "Намалювати коло".
//    Дана кнопка повинна бути єдиним контентом у тілі HTML документа, решта контенту повинна бути створений і додана на сторінку за допомогою Javascript.

//  2) При натисканні кнопки "Намалювати коло" показувати одне поле введення - діаметр кола та нова кнпока "Намалювати"
//      При натисканні на кнопку "Намалювати" створити на сторінці 100 кіл випадкового кольору.
//      При натисканні на конкретне коло - це коло повинен зникати, при цьому порожнє місце заповнюватися, тобто всі інші кола зрушуються вліво.

// 3) У вас може виникнути бажання поставити обробник події на кожне коло для його зникнення.
//    Це неефективно, так не треба робити. На всю сторінку має бути лише один обробник подій, який це робитиме.


function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)}`;
}
