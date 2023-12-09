import { mainTemplate } from './main.template.js';
import { initializeHeader } from '../header/header.module.js'
import { initializeHome } from '../../pages/pages.module/home.module.js'
export function initialize() {
    const mainContainer = document.querySelector('#main-container');
    mainContainer.innerHTML = mainTemplate();
    initializeHeader()
    initializeHome()
}