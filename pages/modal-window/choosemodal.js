//import { renderClassModalWindow } from "./Classes-modal.template.js";
import { renderStudentModalWindow } from "./student-modal-window/student-modal.template.js";
import { renderTeacherModalWindow } from "./teachers-modal-window/teacher-modal.template.js";
import { renderModalWindow } from "./modal-window.template.js";

export function chooseModal(storedClasses, storedStudents, storedTeachers, pageHeader) {
    let modalTemplate;
    let modalTitle;

    switch (pageHeader.toLowerCase()) {
        case 'classes':
            modalTemplate = renderClassModalWindow(storedClasses, storedStudents, storedTeachers);
            modalTitle = 'Add New Class';
            break;
        case 'students':
            modalTemplate = renderStudentModalWindow(storedClasses, storedStudents, storedTeachers);
            modalTitle = 'Add New Student';
            break;
        case 'teachers':
            modalTemplate = renderTeacherModalWindow(storedClasses, storedStudents, storedTeachers);
            modalTitle = 'Add New Teacher';
            break;
        default:
            break;
    }

    return renderModalWindow(modalTemplate, modalTitle);
}