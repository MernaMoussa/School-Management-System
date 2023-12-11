import { initializeContent } from "../../content/content.module.js";
function handleNavbarClick(pages, event) {
    console.log(event)
    const pageId = event.target.id;
    const selectedPage = pages.find(page => `nav-${page.pageName.toLowerCase()}` === pageId);
    console.log(selectedPage)
    if (selectedPage) {
        initializeContent(pages, selectedPage.pageTemplate());
    }
}
export function initializeNavbarListener(pages) {
    const navbarListener = document.getElementById('navbar-items').addEventListener('click', event => handleNavbarClick(pages, event));
    return navbarListener;
}