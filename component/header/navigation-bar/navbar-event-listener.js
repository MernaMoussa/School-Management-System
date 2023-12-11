import { initializeContent } from "../../content/content.module.js";
export function handleNavbarClick(pages, storedClasses, storedStudents, storedTeachers) {
    console.log(event);
    const pageId = event.target.id;
    const selectedPage = pages.find(page => `nav-${page.pageName.toLowerCase()}` === pageId);
    console.log(selectedPage);
    switch (selectedPage.pageName) {
        case 'Home':
            initializeContent(pages, selectedPage.pageTemplate(storedClasses, storedStudents, storedTeachers));
            break;
        case 'Classes':
            initializeContent(pages, selectedPage.pageTemplate(storedClasses));
            break;
        case 'Students':
            initializeContent(pages, selectedPage.pageTemplate(storedStudents));
            break;
        case 'Teachers':
            initializeContent(pages, selectedPage.pageTemplate(storedTeachers));
            break;
        default:
            console.error(`Page type not valid: ${selectedPage.pageName}`);
    }
}

export function initializeNavbarListener(pages, storedClasses, storedStudents, storedTeachers) {
    const navbarListener = document.getElementById('navbar-items').addEventListener('click', event => handleNavbarClick(pages, storedClasses, storedStudents, storedTeachers));
    return navbarListener;
}