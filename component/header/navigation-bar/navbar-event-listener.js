import { pages } from "../../../pages/pages.js";
import { initializeContent } from "../../content/content.module.js";
function handleNavbarClick(event) {
    if (event.target.id === 'nav-home') {
        initializeContent(pages[0].pageTemplate())
    } else if (event.target.id === 'nav-classes') {
        initializeContent(pages[1].pageTemplate)
    } else if (event.target.id === 'nav-teachers') {
        initializeContent(pages[2].pageTemplate)
    } else if (event.target.id === 'nav-students') {
        initializeContent(pages[3].pageTemplate)
    }
}
let navbarListenet = document.getElementById('main-container').addEventListener('click', handleNavbarClick);
export { navbarListenet }