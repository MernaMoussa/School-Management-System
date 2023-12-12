import { handleNavbarClick } from './navbar-event-listener.js'
export function initializeNavbarListener(
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
) {
    const navbarListener = document.getElementById('navbar-items').addEventListener('click',
        handleNavbarClick(
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
        ));
    return navbarListener;
}