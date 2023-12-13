import { displayDetailedTemplate } from "../display-modal-window/main-display.template.js";
import { displayStudentSubjects } from "../display-modal-window/all-grades.template.js";
export function setupAvgButtons(storedStudents) {
    const selectedStudentId = 2001; //example
    const selectedStudent = storedStudents.find(student => student.id === selectedStudentId);
    console.log(selectedStudent)
    if (selectedStudent) {
        displayDetailedTemplate(displayStudentSubjects(storedStudents))
        console.log(displayStudentSubjects(storedStudents))

    } else {
        console.error('not found');
    }
}