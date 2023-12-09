import headerTemplate from './header-template.js';
import { pages } from '../../pages/pages.js';

export function initializeHeader() {
    const mainContainer = document.getElementById('main-container');
    const headerContent = headerTemplate(pages);
    mainContainer.innerHTML = headerContent;
}