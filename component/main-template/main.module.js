import { mainTemplate } from './main.template.js';
import { initializeHeader } from '../header/header.module.js';
import { initializeContent } from '../content/content.module.js';
import { initializeFooter } from '../footer/footer.module.js';
export function initialize(pages) {
    const mainContainer = document.getElementById('main-container');
    mainContainer.innerHTML = mainTemplate();
    initializeHeader(pages);
    initializeContent(pages, pages[0].pageTemplate());
    initializeFooter();
}