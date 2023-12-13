import classesData from '../school-data/classes-data.js';
import studentsData from '../school-data/students-data.js';
import teachersData from '../school-data/teachers-data.js';
import {
    saveClassesToLocalStorage,
    getClassesFromLocalStorage,
    saveStudentsToLocalStorage,
    getStudentsFromLocalStorage,
    saveTeachersToLocalStorage,
    getTeachersFromLocalStorage
} from './local-storage/data-importer.js';
import { initialize } from './component/main-template/main.module.js';
import { pages } from './pages/pages.main-module.js';

document.addEventListener('DOMContentLoaded', function () {
    const keyClasses = 'classesData';
    const keyStudents = 'studentsData';
    const keyTeachers = 'teachersData';
    saveClassesToLocalStorage(keyClasses, classesData);
    saveStudentsToLocalStorage(keyStudents, studentsData);
    saveTeachersToLocalStorage(keyTeachers, teachersData);

    const storedClasses = getClassesFromLocalStorage();
    const storedStudents = getStudentsFromLocalStorage();
    const storedTeachers = getTeachersFromLocalStorage();

    const retrieveClassesData = getClassesFromLocalStorage;
    const retrieveStudentsData = getStudentsFromLocalStorage;
    const retrieveTeachersData = getTeachersFromLocalStorage;

    initialize(
        pages,
        storedClasses,
        storedStudents,
        storedTeachers,
        saveClassesToLocalStorage,
        saveStudentsToLocalStorage,
        saveTeachersToLocalStorage,
        retrieveClassesData,
        retrieveStudentsData,
        retrieveTeachersData
    );
});