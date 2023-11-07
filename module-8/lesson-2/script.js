// Створити скрипт для перемикання теми. Якщо чекбокс у стані чекед – ставити клас на body 
// theme-dark ( темна тема ), а якщо чекбокс перевели у "вимкненний" стан - ставити клас theme-light

// Реалузувати збереження обраної теми до локального сховища ( localStorage ).
// При завантаженні сторінки зчитуйте збережену тему ( якщо вона є ) та примініть цю темо до сторінки

import storage from './storage.js';

const checkbox = document.querySelector('#slider');

const THEME_KEY = 'theme';
const LIGHT_THEME = 'theme-light';
const DARK_THEME = 'theme-dark';

// checkbox.addEventListener('change', () => {
//     if(checkbox.checked) {
//        // console.log('натиснув');
//         document.body.classList.replace(LIGHT_THEME, DARK_THEME);
//      //   document.body.classList.remove(LIGHT_THEME);
//         storage.save(THEME_KEY, DARK_THEME)
//     } else {
//         document.body.classList.replace(DARK_THEME, LIGHT_THEME);
//       // document.body.classList.remove(DARK_THEME);
//         storage.save(THEME_KEY, LIGHT_THEME)
//        // console.log('!натиснув');
//     }
// })

checkbox.addEventListener('change', () => {
    const newTheme = checkbox.checked ? DARK_THEME : LIGHT_THEME;
    document.body.className = newTheme;
    storage.save(THEME_KEY, newTheme)
})

const currentTheme = storage.load(THEME_KEY);

if (currentTheme === DARK_THEME) {
    document.body.className = DARK_THEME;
    checkbox.checked = true;
} 







