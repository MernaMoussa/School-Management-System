import { contentTemplate } from './content.template.js';

export function initializeContent(initialContent) {
    const contentContainer = document.getElementById('content-section');
    const content = contentTemplate(initialContent);
    contentContainer.innerHTML = content;
}