import { headerTemplate } from './header.template.js';
export function initializeHeader(pages) {
    const headerSection = document.getElementById('header-section');
    const headerContent = headerTemplate(pages);
    headerSection.innerHTML = headerContent;
}