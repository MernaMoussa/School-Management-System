import { saveClassesToLocalStorage, getClassesFromLocalStorage, saveStudentsToLocalStorage, getStudentsFromLocalStorage, saveTeachersToLocalStorage, getTeachersFromLocalStorage } from './local-storage/data-importer.js'
import { initializeHeader } from './component/header/header-module.js';
saveClassesToLocalStorage();
saveStudentsToLocalStorage();
saveTeachersToLocalStorage();
getClassesFromLocalStorage();
getStudentsFromLocalStorage();
getTeachersFromLocalStorage();
document.addEventListener('DOMContentLoaded', function () {
    initializeHeader();

});