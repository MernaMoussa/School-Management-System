import { mainTemplate } from './main.template.js';
//import { initializeHome } from '../../pages/pages.module/home.module.js'
import { pages } from '../../pages/pages.js';
import { initializeHeader } from '../header/header.module.js'
import { initializeContent } from '../content/content.module.js'
import { initializeFooter } from '../footer/footer.module.js'
export function initialize() {
    const mainContainer = document.getElementById('main-container');
    mainContainer.innerHTML = mainTemplate();
    initializeHeader()
    //initializeContent(initializeHome())
    initializeContent(pages[0].pageTemplate())
    initializeFooter()
}