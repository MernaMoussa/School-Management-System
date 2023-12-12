import { initializeContent } from "../../content/content.module.js";

export function handleNavbarClick(pages, storedClasses, storedStudents, storedTeachers) {
    console.log(event);
    const pageId = event.target.id;
    const selectedPage = pages.find(page => `nav-${page.pageName.toLowerCase()}` === pageId);
    console.log(selectedPage);

    if (selectedPage) {
        initializeContent(pages, selectedPage.pageTemplate(storedClasses, storedStudents, storedTeachers));
    } else {
        console.error(`Page type not valid: ${selectedPage ? selectedPage.pageName : 'unknown'}`);
    }
}

export function initializeNavbarListener(pages, storedClasses, storedStudents, storedTeachers) {
    const navbarListener = document.getElementById('navbar-items').addEventListener('click', event => handleNavbarClick(pages, storedClasses, storedStudents, storedTeachers));
    return navbarListener;
}