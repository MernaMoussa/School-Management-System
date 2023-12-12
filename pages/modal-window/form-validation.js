import { displayErrorMessage } from "./error-handler.js";
export function validateForm() {
    const studentForm = document.getElementById('studentForm');
    if (!studentForm.checkValidity()) {
        const errorMessage = initializeErrorMessage(studentForm);
        displayErrorMessage(errorMessage);
        return false;
    }
    return true;
}

function initializeErrorMessage(formElement) {
    return `Please provide a valid value for ${getFormErrorMessage(formElement)}`;
}

function getFormErrorMessage(formElement) {
    const invalidFields = Array.from(formElement.querySelectorAll(':invalid'));
    if (invalidFields.length > 0) {
        const errorMessages = invalidFields.map(field => {
            return ` ${field.getAttribute('name')}.`;
        });
        return errorMessages.join(' ');
    }
}