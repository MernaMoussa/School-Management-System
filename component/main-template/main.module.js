import { mainTemplate } from './main.template.js';
import { pages } from '../../pages/pages.main-module.js';
import { initializeHeader } from '../header/header.module.js';
import { initializeContent } from '../content/content.module.js';
import { initializeFooter } from '../footer/footer.module.js';
export function initialize() {
    const mainContainer = document.getElementById('main-container');
    mainContainer.innerHTML = mainTemplate();
    initializeHeader();
    initializeContent(pages[0].pageTemplate());
    initializeFooter();
}