let animElemets4 = document.querySelectorAll('.my-anim-bottom');
if (animElemets4.length > 0) {
    for (let i = 0; i < animElemets4.length; i++) {
        let item = animElemets4[i];
        window.addEventListener('scroll', () => {
            myAnimScroll(item, 'activ-anim-bottom')
        })
        myAnimScroll(item, 'activ-anim-bottom');
    }
}

function myAnimScroll(elem, className) {
    let elemHeight = elem.offsetHeight; //висота об'єкту
    let elemPosition = positionTop(elem); //позиція елементу відносно верху
    let koef = 4; //запускатимемо анімацію на 1/4 блоку
    let startAnim = window.innerHeight - elemHeight / koef; // віднімаємо від висоти вікна 1/4 висоти елементу
    if (elemHeight > window.innerHeight) { //якщо елемент вищий ніж вікно
        startAnim = window.innerHeight - window.innerHeight / koef; // віднімаємо від висоти вікна 1/4 висоти елементу
    }
    // pageYOffset - скільки пікселів прокручено - вбудован змінна в js
    if ((pageYOffset > elemPosition - startAnim) && pageYOffset < (elemPosition + elemHeight)) {
        elem.classList.add(className);
    } else {
        if (!elem.classList.contains('no-anim-again')) {
            elem.classList.remove(className);
        }
    }
}
function positionTop(param) {
    let rect = param.getBoundingClientRect();
    console.log(rect);
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return rect.top + scrollTop

}
// кінець робочих функцій



