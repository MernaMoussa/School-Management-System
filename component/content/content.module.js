import { contentTemplate } from './content.template.js';

export function initializeContent() {
    const contentContainer = document.querySelector('.content-section');
    const content = contentTemplate();
    contentContainer.innerHTML = content;
}