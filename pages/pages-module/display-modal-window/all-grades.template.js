function generateSubjectTemplate(subject, grade) {
    return `
        <div class="row">
            <div class="col-sm-6">${subject}</div>
            <div class="col-sm-6">${grade}</div>
        </div>
    `;
}

function generateSubjectsListTemplate(student) {
    const subjectEntries = Object.entries(student.subjects || {});
    const subjectsTemplate = subjectEntries.map(([subject, grade]) => generateSubjectTemplate(subject, grade)).join('');

    return `
        <div class="container">
            <div class="row">
                <div class="col-sm-6">Subject</div>
                <div class="col-sm-6">Grade</div>
            </div>
            ${subjectsTemplate}
        </div>
    `;
}

export function displayStudentSubjects(data) {
    return data.map(student => generateSubjectsListTemplate(student)).join('');
}