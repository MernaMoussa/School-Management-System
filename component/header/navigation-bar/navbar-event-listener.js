import { initializeContent } from "../../content/content.module.js";
import { setupSubjectUpdateListener } from "../../../pages/modal-window/modal-listener-handler.js";
import { addListeners } from "../../../pages/event-listener/initialize-button-listener.js";
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
        if (pageId !== "nav-home") {
            addListeners(
                storedClasses,
                storedStudents,
                storedTeachers,
                saveClasses,
                saveStudents,
                saveTeachers,
                retrieveClassesData,
                retrieveStudentsData,
                retrieveTeachersData,
                selectedPage,
                pageId)
        }
    }
};
export { handleNavbarClick }