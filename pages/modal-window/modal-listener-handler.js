import { updateSubjects } from "./student-modal.module.js";

export function setupSubjectUpdateListener(storedClasses) {
    const departmentSelect = document.getElementById('department-options');
    if (departmentSelect) {
        departmentSelect.addEventListener('change', () => {
            updateSubjects(storedClasses);
        });
    }
}