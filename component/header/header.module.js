import headerTemplate from './header.template.js';
import { pages } from '../../pages/pages.main-module.js';
export function initializeHeader() {
    const headerSection = document.getElementById('header-section');
    const headerContent = headerTemplate(pages);
    headerSection.innerHTML = headerContent;
}