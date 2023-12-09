import { initializeHome } from './pages.module/home.module.js'
// import { initializeClasses } from './pages.module/classes.module.js';
import { initializeMainTemplate } from './pages.main-template.js';
const pages = [
    { pageName: "Home", pageTemplate: initializeHome },
    { pageName: "Classes", pageTemplate: initializeMainTemplate },
    { pageName: "Teachers", pageTemplate: "teachers" },
    { pageName: "Students", pageTemplate: "students" }
];

export { pages };