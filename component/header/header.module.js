import headerTemplate from './header.template.js';
import { pages } from '../../pages/pages.js';
export function initializeHeader() {
    const headerSection = document.querySelector('.header-section');
    const headerContent = headerTemplate(pages);
    headerSection.innerHTML = headerContent;
}