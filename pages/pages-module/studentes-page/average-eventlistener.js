/*
import { getStudentsFromLocalStorage } from "../../../app.js"
const storedStudents = getStudentsFromLocalStorage();
export function popup() {
    return document.getElementById('content-section').addEventListener('click', function (event) {
        const eventclass = event.target.id;
        const eventId = Number(eventclass.split('-')[1]);
        console.log(eventId)
        const selectedStudent = storedStudents.find(student => student.id === eventId);
        if (selectedStudent) {
            console.log(selectedStudent)
        }
    });
}
function displayGradeDetails() {
    const modalContainer = document.createElement('div');
    document.body.appendChild(modalContainer);
    modalContainer.innerHTML = `
    <div class="modal-dialog modal-xl">...</div> 
`
}

function getAllGrades(data) {
    const allGrades = data.subjects
    return `${allGrades}`
}
*/



