import { pages } from "../../../pages/pages.js";
import { initializeContent } from "../../content/content.module.js";
function handleNavbarClick(event) {
    const pageId = event.target.id;
    const selectedPage = pages.find(page => `nav-${page.pageName.toLowerCase()}` === pageId);
    console.log(selectedPage)
    if (selectedPage) {
        initializeContent(selectedPage.pageTemplate());
    }
}
export function initializeNavbarListener() {
    const navbarListener = document.getElementById('main-container').addEventListener('click', handleNavbarClick);
    return navbarListener;
}