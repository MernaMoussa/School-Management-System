import { saveClassesToLocalStorage, getClassesFromLocalStorage, saveStudentsToLocalStorage, getStudentsFromLocalStorage, saveTeachersToLocalStorage, getTeachersFromLocalStorage } from './local-storage/data-importer.js'
import { initialize } from './component/main-template/main.module.js'
import { initializeNavbarListener } from './component/header/navigation-bar/navbar-event-listener.js';
import { pages } from './pages/pages.main-module.js';

document.addEventListener('DOMContentLoaded', function () {
    saveClassesToLocalStorage();
    saveStudentsToLocalStorage();
    saveTeachersToLocalStorage();
    getClassesFromLocalStorage();
    getStudentsFromLocalStorage();
    getTeachersFromLocalStorage();
    initialize(pages, getClassesFromLocalStorage(), getStudentsFromLocalStorage(), getTeachersFromLocalStorage())
    initializeNavbarListener(pages, getClassesFromLocalStorage(), getStudentsFromLocalStorage(), getTeachersFromLocalStorage());
});