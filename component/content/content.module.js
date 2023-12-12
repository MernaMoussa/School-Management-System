import { contentTemplate } from './content.template.js';
import { addNewElement } from '../../pages/event-listener/event-listener.js';

export function initializeContent(pages, initialContent) {
    const contentContainer = document.getElementById('content-section');
    const content = contentTemplate(initialContent);
    contentContainer.innerHTML = content;
    const pageId = event.target.id;
    const selectedPage = pages.find(page => `nav-${page.pageName.toLowerCase()}` === pageId);
    if (selectedPage !== 'home') {
        addNewElement()
    }
}