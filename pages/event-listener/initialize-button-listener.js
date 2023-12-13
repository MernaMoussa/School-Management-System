import { handleSaveChanges } from '../modal-window/student-modal-window/student-handler.module.js'
import { setupRemoveButtons } from '../control-changes.js/remove-item.module.js';
import { setupAvgButtons } from '../pages-module/studentes-page/avg-grade-listener.js';
export function initializeButtonHandlers(
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
    pageId
) {

    const submitBtn = document.getElementById('submit');
    const modal = new bootstrap.Modal(document.getElementById('add-btn'));
    if (submitBtn) {
        submitBtn.addEventListener('click',
            handleSaveChanges(storedClasses, retrieveStudentsData, saveClasses, modal));
    } else {
        console.log(`Page type not valid ${selectedPage ? selectedPage.pageName : 'unknown'}`);
    }
    switch (pageId) {
        case 'nav-classes':
            setupRemoveButtons(retrieveClassesData, 'classesData')
            break;
        case 'nav-students':
            setupRemoveButtons(retrieveStudentsData, 'studentsData')
            setupAvgButtons()
            break;
        case 'nav-teachers':
            setupRemoveButtons(retrieveTeachersData, 'teachersData')
            break;
        default:
            break;
    }
}