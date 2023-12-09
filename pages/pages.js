import { initializeHome } from './pages.module/home.module.js'
const pages = [
    { pageName: "Home", pageTemplate: initializeHome },
    { pageName: "Classes", pageTemplate: "classes" },
    { pageName: "Teachers", pageTemplate: "teachers" },
    { pageName: "Students", pageTemplate: "students" }
];

export { pages };