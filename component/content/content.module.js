import { initializeNavbarListener } from '../header/navigation-bar/navbar-initialize.js';
export function initializeContent(
    pages,
    content,
    storedClasses,
    storedStudents,
    storedTeachers,
    saveClasses,
    saveStudents,
    saveTeachers,
    retrieveClassesData,
    retrieveStudentsData,
    retrieveTeachersData
) {
    const contentSection = document.getElementById('content-section');
    contentSection.innerHTML = content;
    initializeNavbarListener(
        pages,
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
}