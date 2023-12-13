import { renderAdjustmentButtons, renderDepartment, renderTeacherIds, renderSubject, renderLastPart } from "./template.module.js"
export function genericTemplate(data) {
    return `
        <div class="col-md-4 d-inline-block text-center m-2 p-3 border" id="card-${data.id}">
            ${renderAdjustmentButtons(data)}
            <h2>${data.name}</h2>
            ${renderTeacherIds(data)}
            ${renderSubject(data)}
            ${renderDepartment(data)}
            ${renderLastPart(data)}
        </div >
        `;
};