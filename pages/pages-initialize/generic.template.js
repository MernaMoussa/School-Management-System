export function genericTemplate(data) {
    return `
        <div class="col-md-4 d-inline-block text-center m-2 p-3 border">
            ${renderAdjustmentButtons(data)}
            <h2>${data.name}</h2>
            ${renderTeacherIds(data)}
            ${renderSubject(data)}
            ${renderDepartment(data)}
            ${renderLastPart(data)}
        </div >
        `;
};
function renderAdjustmentButtons(data) {
    return `
        <div class="d-flex justify-content-end">
            <button type="button" class="btn btn-primary m-1 edit" id="edit-${data.id}"><i class="bi bi-pencil"></i></button>
            <button type="button" class="btn btn-danger m-1 remove"><i class="bi bi-dash-circle"></i></button>
        </div>
    `
}
function renderDepartment(data) {
    return data.classId ? `<p>Department: ${data.department}</p>` : '';
}

function renderTeacherIds(data) {
    return data.teacherIds ? `<p>Teacher IDs: ${data.teacherIds.join(', ')}</p>` : '';
}
function renderSubject(data) {
    return data.subject ? `<p>Subject: ${data.subject}</p>` : '';
}

function renderLastPart(data) {
    return data.classId ? '<p>Avg. Grade</p>' : renderButtons(data);
}
function renderButtons(data) {
    return `
        <button type="button" class="btn btn-info students">Students</button>
        <button type="button" class="btn btn-info ${data.teacherIds ? 'teachers' : 'classes'}">
            ${data.teacherIds ? 'Teachers' : 'Classes'}
        </button>
        `;
}