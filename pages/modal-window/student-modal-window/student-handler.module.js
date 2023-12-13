// student-handler.js
import { saveDataToLocalStorage } from "../../../local-storage/local-storage-handler.js";
import { validateForm } from "../form-validation.js";
import { clearErrorMessage, displayErrorMessage } from "../error-handler.js";

function addStudent(existingStudents, newStudent) {
    existingStudents.push(newStudent);
}
function handleSuccess(modal) {
    const successMessage = document.getElementById('successMessage');
    if (successMessage) {
        successMessage.style.display = 'block';
    }

    setTimeout(() => {
        modal.hide();
        if (successMessage) {
            successMessage.style.display = 'none';
        }
    }, 2000);
}

export function handleSaveChanges(storedClasses, retrieveStudentsData, saveClasses, modal) {
    return function (event) {
        event.preventDefault();
        if (!validateForm()) {
            return;
        }
        const numericStudentId = Number(document.getElementById('student-id').value);
        const numericClassId = Number(document.getElementById('class-options').value);
        const studentNameValue = document.getElementById('student-name').value;
        const departmentValue = document.getElementById('department-options').value;
        const selectedSubjects = Array.from(document.querySelectorAll('input[id="selected-subjects"]:checked')).map(checkbox => checkbox.value);
        const subjectsObject = Object.fromEntries(selectedSubjects.map(subject => [subject, 0]));
        const newStudent = {
            id: numericStudentId,
            classId: numericClassId,
            name: studentNameValue,
            department: departmentValue,
            subjects: subjectsObject,
        };
        console.log(newStudent)
        const existingStudents = retrieveStudentsData() || [];
        const isStudentExist = existingStudents.some(student => student.id === numericStudentId);
        if (isStudentExist) {
            displayErrorMessage(`Error: Student with ID ${numericStudentId} already exists!`);
            return;
        }
        clearErrorMessage();
        addStudent(existingStudents, newStudent);
        saveDataToLocalStorage('studentsData', existingStudents);
        saveClasses(existingStudents);

        const updatedStudents = retrieveStudentsData();
        const isStudentAdded = updatedStudents.some(student => student.id === numericStudentId);
        console.log(updatedStudents)

        if (isStudentAdded) {
            console.log(`Student with ID ${numericStudentId} added successfully!`);
            handleSuccess(modal);
            const studentForm = document.getElementById('studentForm');
            if (studentForm) {
                studentForm.reset();
            }
        } else {
            console.log(`Failed to add student with ID ${numericStudentId}`);
        }
    };
}