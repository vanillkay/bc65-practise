// Розробити міні-додаток по трансформуванню тексту

// За допомогою бібліотеки voca (https://vocajs.pages.dev/), а саме методами для роботи з регістром ( Case )
// створіть перетворення введеного тексут в потрібний кейс

// При кліку на кнопку ви маєте прочитати значення інпуту, перевести його в потрібний кейс 
// за допомогою одного з методів бібліотеки voca (camelCase, kebebCase ...) та записати результат у span,
// який знаходиться поруч з натиснутою кнопкою ( наступний сусід )
// import voca from 'voca';


// const insertInput = document.querySelector('input');
// const divListerner = document.querySelector('.controls');
// divListerner.addEventListener('click', transformText);
// console.log(insertInput)
function transformText(event) { 
    
    if (event.target.tagName != 'BUTTON') { 
        return;
    }
    // console.log(event.target)
    const kenny = event.target;

    const needeMethod = event.target.dataset.case;

    // TOP 1
    // if(!voca.hasOwnProperty(needeMethod)){
    //     alert('Wrong Method!')
    //     return;
    // }

    // TOP 2
    //  if(!(needeMethod in voca)){
    //     alert('Wrong Method!')
    //     return;
    // }

    // TOP 0
    //  if(!voca[needeMethod]){
    //     alert('Wrong Method!')
    //     return;
    // }

    // kenny.nextElementSibling.textContent = voca[needeMethod](insertInput.value);

    // switch(event.target.dataset.case) { 
    //     case 'camelCase':
    //         console.dir(event.target)
    //         event.target.nextElementSibling.textContent = voca.camelCase(insertInput.value);
    //         break;
    //         case 'kebabCase':
    //         console.dir(event.target)
    //         event.target.nextElementSibling.textContent = voca.kebabCase(insertInput.value);
    //         break;
    //         case 'snakeCase':
    //         console.dir(event.target)
    //         event.target.nextElementSibling.textContent = voca.snakeCase(insertInput.value);
    //         break;
    //         case 'swapCase':
    //         console.dir(event.target)
    //         event.target.nextElementSibling.textContent = voca.swapCase(insertInput.value);
    //         break;
    //         case 'lowerCase':
    //         console.dir(event.target)
    //         event.target.nextElementSibling.textContent = voca.lowerCase(insertInput.value);
    //         break;
    //     case 'upperCase':
    //         console.dir(event.target)
    //         event.target.nextElementSibling.textContent = voca.upperCase(insertInput.value);
    //         break;
    //     default: alert("Wrong Case");

    // }

}


const obj = {
    "breeds": [
        {
            "weight": {
                "imperial": "65 - 75",
                "metric": "29 - 34"
            },
            "height": {
                "imperial": "21 - 28",
                "metric": "53 - 71"
            },
            "id": 14,
            "name": "American Foxhound",
            "country_code": "US",
            "bred_for": "Fox hunting, scent hound",
            "breed_group": "Hound",
            "life_span": "8 - 15 years",
            "temperament": "Kind, Sweet-Tempered, Loyal, Independent, Intelligent, Loving",
            "reference_image_id": "S14n1x9NQ"
        }
    ],
    "id": "S14n1x9NQ",
    "url": "https://cdn2.thedogapi.com/images/S14n1x9NQ_1280.jpg",
    "width": 3000,
    "height": 2400
}


const {
    url, 
    breeds: [{
        bred_for,
        temperament
    }]} = obj;


console.log(url,  bred_for,
    temperament)