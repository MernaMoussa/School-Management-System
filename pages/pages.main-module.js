import { initializeHome } from './home-page/home.module.js'
import { initializeClasses } from './pages-generator.js';
import { initializeStudents } from './pages-generator.js';


export const pages = [
    { pageName: "Home", pageTemplate: initializeHome },
    { pageName: "Classes", pageTemplate: initializeClasses },
    { pageName: "Teachers", pageTemplate: "teachers" },
    { pageName: "Students", pageTemplate: initializeStudents }
];