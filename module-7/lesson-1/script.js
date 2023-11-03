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


// const getOnDrawBtnClickListener = (inputEl) = () => {
//     // console.log(inputEl.value);
//     if (inputEl.value <= 0) {
//         alert('Введене невалідне значення радіусу! SOS!');
//         return;
//     }
//     const documentFragment  = document.createDocumentFragment();
    
//     for (let i = 0; i < 100; i += 1){
//         const circleEl = document.createElement('div');
//         circleEl.dataset.type = 'circle';
//         circleEl.style.width = inputEl.value + 'px';
//         circleEl.style.height = inputEl.value + 'px';
//         circleEl.style.borderRadius = '50%';
//         circleEl.style.backgroundColor = getRandomHexColor();
//         documentFragment.append(circleEl);
//     }

//     circleContainerEl.append(documentFragment)
// }

function getOnDrawBtnClickListener(inputEl){
    // console.log(inputEl.value);
    
    return function listener(){
        if (inputEl.value <= 0) {
            alert('Введене невалідне значення радіусу! SOS!');
            return;
        }
        const documentFragment  = document.createDocumentFragment();
        
        for (let i = 0; i < 100; i += 1){
            const circleEl = document.createElement('div');
            circleEl.dataset.type = 'circle';
            circleEl.style.width = inputEl.value + 'px';
            circleEl.style.height = inputEl.value + 'px';
            circleEl.style.borderRadius = '50%';
            circleEl.style.backgroundColor = getRandomHexColor();
            documentFragment.append(circleEl);
        }
    
        circleContainerEl.append(documentFragment)
    }
}


const startBtnEl = document.querySelector('.draw-btn');

anime({
    targets: '.draw-btn',
    translateX: 250,
    rotate: '1turn',
    backgroundColor: '#FFF',
    duration: 800,
    // loop: true
  });

const containerEl = document.querySelector('#circle-task');
const circleContainerEl = document.querySelector('#root');

const onStartBtnClick = () => {
    const inputEl = document.createElement('input');
    const drawBtnEl = document.createElement('button');
    drawBtnEl.textContent = "Намалювати коло";
    startBtnEl.remove();
    containerEl.append(inputEl, drawBtnEl);
    inputEl.type = 'number';

    // drawBtnEl.addEventListener('click', (event) => {
    //     // console.log(inputEl.value);
    //     if (inputEl.value <= 0) {
    //         alert('Введене невалідне значення радіусу! SOS!');
    //         return;
    //     }
    //     const documentFragment  = document.createDocumentFragment();
        
    //     for (let i = 0; i < 100; i += 1){
    //         const circleEl = document.createElement('div');
    //         circleEl.dataset.type = 'circle';
    //         circleEl.style.width = inputEl.value + 'px';
    //         circleEl.style.height = inputEl.value + 'px';
    //         circleEl.style.borderRadius = '50%';
    //         circleEl.style.backgroundColor = getRandomHexColor();
    //         documentFragment.append(circleEl);
    //     }

    //     circleContainerEl.append(documentFragment)
    // })

    // V2
    drawBtnEl.addEventListener('click', getOnDrawBtnClickListener(inputEl))

    circleContainerEl.addEventListener('click', (event) => {
        if (event.target.dataset.type !== 'circle') {
            return;
            
        }
        event.target.remove();
        
    })
}

startBtnEl.addEventListener('click', onStartBtnClick)

