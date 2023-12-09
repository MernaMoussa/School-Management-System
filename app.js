import { saveClassesToLocalStorage, getClassesFromLocalStorage, saveStudentsToLocalStorage, getStudentsFromLocalStorage, saveTeachersToLocalStorage, getTeachersFromLocalStorage } from './local-storage/data-importer.js'
import { initialize } from './component/main-template/main.module.js'
import { navbarListenet } from './component/header/navigation-bar/navbar-event-listener.js';
saveClassesToLocalStorage();
saveStudentsToLocalStorage();
saveTeachersToLocalStorage();
getClassesFromLocalStorage();
getStudentsFromLocalStorage();
getTeachersFromLocalStorage();

document.addEventListener('DOMContentLoaded', function () {
    initialize()
    navbarListenet
});