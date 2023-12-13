function generateClassesIdOptions(storedClasses) {
    return storedClasses.map(classData => {
        return `<option value="${classData.id}">${classData.id}</option>`;
    }).join('');
}

function generateDepartmentOptions(storedClasses) {
    return storedClasses.map(classData => {
        return `<option value="${classData.name}">${classData.name}</option>`;
    }).join('');
}

function generateSubjectOptions(storedClasses) { //for teachers modal "modularization"
    return storedClasses.flatMap(course => {
        return course.subjects.map(subject => `<option value="${subject}">${subject}</option>`);
    }).join('');
}

function generateSubjectCheckboxes(selectedClass) {
    return selectedClass.subjects.map(subject => {
        return `<input type="checkbox" name="subject-checkbox" value="${subject}" id="selected-subjects">
    ${subject}`
    }).join('');
}

function generateSubjectContainer(storedClasses) {
    const departmentValue = document.getElementById('department-options')?.value;
    const selectedClass = storedClasses.find(classData => classData.name === departmentValue);

    return generateSubjectCheckboxes(selectedClass);
}

function updateSubjects(storedClasses) {
    const subjectContainer = document.getElementById('subject-container');
    if (subjectContainer) {
        subjectContainer.innerHTML = generateSubjectContainer(storedClasses);
    }
}

export { generateClassesIdOptions, generateDepartmentOptions, updateSubjects, generateSubjectOptions };