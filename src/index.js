import './styles.css';
import menuArr from '../menu.json';
import menuTemplate from './templates/menu.hbs';
import './menuTheme';

let menu = document.querySelector('.js-menu');

console.log(menuArr);

function buildMenu(array) {
  let menuList = array.map(item => menuTemplate(item)).join('');
  menu.insertAdjacentHTML('beforeend', menuList);
}

buildMenu(menuArr);
