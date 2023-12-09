import { saveClassesToLocalStorage, getClassesFromLocalStorage, saveStudentsToLocalStorage, getStudentsFromLocalStorage, saveTeachersToLocalStorage, getTeachersFromLocalStorage } from './local-storage/data-importer.js'
import { initialize } from './component/main-template/main.module.js'
saveClassesToLocalStorage();
saveStudentsToLocalStorage();
saveTeachersToLocalStorage();
getClassesFromLocalStorage();
getStudentsFromLocalStorage();
getTeachersFromLocalStorage();

document.addEventListener('DOMContentLoaded', function () {
    initialize()
});