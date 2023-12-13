import { initializeContent } from "../../content/content.module.js";
import { setupSubjectUpdateListener } from "../../../pages/modal-window/modal-listener-handler.js";
import { handleSaveChanges } from "../../../pages/modal-window/student-modal-window/student-handler.module.js";

function findSelectedPage(pages, pageId) {
    return pages.find(page => `nav-${page.pageName.toLowerCase()}` === pageId);
}

function handleNavbarClick(
    pages,
    storedClasses,
    storedStudents,
    storedTeachers,
    saveClasses,
    saveStudents,
    saveTeachers,
    retrieveClassesData,
    retrieveStudentsData,
    retrieveTeachersData,
) {
    return function (event) {
        const pageId = event.target.id;
        const selectedPage = findSelectedPage(pages, pageId);
        console.log(selectedPage);
        const pageTemplate = selectedPage.pageTemplate(storedClasses, storedStudents, storedTeachers);
        initializeContent(
            pages,
            pageTemplate,
            storedClasses,
            storedStudents,
            storedTeachers,
            saveClasses,
            saveStudents,
            saveTeachers,
            retrieveClassesData,
            retrieveStudentsData,
            retrieveTeachersData
        );
        setupSubjectUpdateListener(storedClasses);
        const submitBtn = document.getElementById('submit');
        const modal = new bootstrap.Modal(document.getElementById('add-btn'));
        if (submitBtn) {
            submitBtn.addEventListener('click', handleSaveChanges(storedClasses, retrieveStudentsData, saveClasses, modal));
        } else {
            console.log(`Page type not valid ${selectedPage ? selectedPage.pageName : 'unknown'}`);
        }
    }
};
export { handleNavbarClick }