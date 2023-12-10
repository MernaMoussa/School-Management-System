import { getAvgGrade } from "../pages-module/studentes-page/student.module.js";
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
    return data.classId ? `<button class="btn text-primary" data-bs-toggle="modal" data-bs-target="#exampleModal"" id="avg-${data.id}">Average Grade: ${getAvgGrade(data)}</button>` : renderButtons(data);
}
function renderButtons(data) {
    return `
        <button type="button" class="btn btn-info students">Students</button>
        <button type="button" class="btn btn-info ${data.teacherIds ? 'teachers' : 'classes'}">
            ${data.teacherIds ? 'Teachers' : 'Classes'}
        </button>
        `;
}

export { renderAdjustmentButtons, renderDepartment, renderTeacherIds, renderSubject, renderLastPart }