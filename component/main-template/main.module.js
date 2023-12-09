import { mainTemplate } from './main.template.js';

export function initialize() {
    const mainContainer = document.querySelector('#main-container');
    mainContainer.innerHTML = mainTemplate();
}