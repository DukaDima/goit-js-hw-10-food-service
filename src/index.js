
//импорт данных----------------------------------------------

import menuCardTmpl from './templates/menu-card.hbs'
import menuCards from './menu.json'

// массив ссылок----------------------------------------------
const refs = {
    menu: document.querySelector('.js-menu'),
    checkBox: document.querySelector('#theme-switch-toggle')
   
}
console.log(refs.checkBox)

//массив тем -------------------------------------------------

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

//создание меню ---------------------------------------------

const menuList = createMenuCards(menuCards)
refs.menu.insertAdjacentHTML('beforeend',menuList)

function createMenuCards(menuCards) {
    return menuCards.map(menuCardTmpl).join('');
};

refs.checkBox.addEventListener('change', ()=>{
  console.log("Состояние чекбокса изменнено")
})