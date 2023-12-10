import { addNewElement } from '../../pages/event-listener/event-listener.js';
import { contentTemplate } from './content.template.js';
import { pages } from '../../pages/pages.main-module.js';
export function initializeContent(initialContent) {
    const contentContainer = document.getElementById('content-section');
    const content = contentTemplate(initialContent);
    contentContainer.innerHTML = content;
    const pageId = event.target.id;
    const selectedPage = pages.find(page => `nav-${page.pageName.toLowerCase()}` === pageId);
    console.log(selectedPage)
    if (selectedPage !== 'home') {
        addNewElement()
    }
}