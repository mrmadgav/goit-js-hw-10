import './styles.css';
import menuArr from '../menu.json';
import menuTemplate from './templates/menu.hbs';
import './menuTheme';

let menu = document.querySelector('.js-menu');

function buildMenu(array) {
  let menuList = array.map(item => menuTemplate(item)).join('');
  menu.insertAdjacentHTML('beforeend', menuList);
}

buildMenu(menuArr);
