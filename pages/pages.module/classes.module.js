import { getClassesFromLocalStorage } from '../../local-storage/data-importer.js';
import { classesTemplate } from '../pages.templates/classes.template.js';

const storedClasses = getClassesFromLocalStorage();
function initializeClasses() {
    return storedClasses.map(classesTemplate).join('');
}

export { initializeClasses };