import { saveClassesToLocalStorage, getClassesFromLocalStorage, saveStudentsToLocalStorage, getStudentsFromLocalStorage, saveTeachersToLocalStorage, getTeachersFromLocalStorage } from './local-storage/data-importer.js'
import headerTemplate from './component/header/header-template.js';
import { pages } from "./pages/pages.js";
saveClassesToLocalStorage();
saveStudentsToLocalStorage();
saveTeachersToLocalStorage();
getClassesFromLocalStorage();
getStudentsFromLocalStorage();
getTeachersFromLocalStorage();
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('main-container').innerHTML = headerTemplate(pages);

});