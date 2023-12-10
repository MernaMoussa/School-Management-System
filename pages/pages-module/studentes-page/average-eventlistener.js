import { getStudentsFromLocalStorage } from "../../../local-storage/data-importer.js"
const storedStudents = getStudentsFromLocalStorage();
export function popup() {
    return document.getElementById('content-section').addEventListener('click', function (event) {
        const eventclass = event.target.id;
        const eventId = Number(eventclass.split('-')[1]);
        console.log(eventId)
        const selectedStudent = storedStudents.find(student => student.id === eventId);
        if (selectedStudent) {
            displayGradeDetails()
        }
    });
}
function displayGradeDetails() {
    return `
        <div class="modal-dialog modal-xl">...</div> 
    `
}

function getAllGrades(data) {
    const allGrades = data.subjects
    return `${allGrades}`
}




