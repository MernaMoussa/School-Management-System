export function genericTemplate(data) {
    return `
        <div class="col-md-4 d-inline-block text-center m-2 p-3 border">
            <div class="d-flex justify-content-end">
                <button type="button" class="btn btn-primary m-1 edit" id="edit-${data.id}"><i class="bi bi-pencil"></i></button>
                <button type="button" class="btn btn-danger m-1 remove"><i class="bi bi-dash-circle"></i></button>
            </div>
            <h2>${data.name}</h2>
            ${data.teacherIds ? `<p>Teacher IDs: ${data.teacherIds.join(', ')}</p>` : ''}
            ${data.subject ? `<p>Subject: ${data.subject}</p>` : ''}
            ${data.classId ? `<p>Department: ${data.department}</p>` : ''}
            ${renderLastPart(data)}
        </div >
        `;
};

function renderLastPart(data) {
    return data.classId ? '<p>Avg. Grade</p>' :
        `<button type="button" class="btn btn-info students">Students</button>
            <button type="button" class="btn btn-info ${data.teacherIds ? 'teachers' : 'classes'}">
                 ${data.teacherIds ? 'Teachers' : 'Classes'}
            </button>`;
}