//import * as flsFunctions from "./modules/functions.js";
//flsFunctions.thisTest();

const iconMenu = document.querySelector('.control-header__button-burger');
if (iconMenu) {
  const menuBody = document.querySelector('.control-header__buttons');
  iconMenu.addEventListener('click', function (e) {
    document.body.classList.toggle('lock');
    iconMenu.classList.toggle('active');
    menuBody.classList.toggle('active');
  });
}
