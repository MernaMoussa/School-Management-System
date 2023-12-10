import { initializeHome } from './home-page/home.module.js'
import { initializeClasses } from './pages-initialize/pages-generator.js';
import { initializeStudents } from './pages-initialize/pages-generator.js';
import { initializeTeachers } from './pages-initialize/pages-generator.js';

export const pages = [
    { pageName: "Home", pageTemplate: initializeHome },
    { pageName: "Classes", pageTemplate: initializeClasses },
    { pageName: "Teachers", pageTemplate: initializeTeachers },
    { pageName: "Students", pageTemplate: initializeStudents }
];