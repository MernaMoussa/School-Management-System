import { saveClassesToLocalStorage, getClassesFromLocalStorage, saveStudentsToLocalStorage, getStudentsFromLocalStorage, saveTeachersToLocalStorage, getTeachersFromLocalStorage } from './local-storage/data-importer.js'
saveClassesToLocalStorage();
saveStudentsToLocalStorage();
saveTeachersToLocalStorage();
getClassesFromLocalStorage();
getStudentsFromLocalStorage();
getTeachersFromLocalStorage();
console.log(`class data`, getClassesFromLocalStorage())
document.addEventListener('DOMContentLoaded', function () {

});