import { mainTemplate } from './main.template.js';
import { initializeHeader } from '../header/header.module.js'
import { initializeContent } from '../content/content.module.js'
import { initializeFooter } from '../footer/footer.module.js'
export function initialize() {
    const mainContainer = document.querySelector('#main-container');
    mainContainer.innerHTML = mainTemplate();
    initializeHeader()
    initializeContent()
    initializeFooter()
}