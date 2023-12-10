export function classesTemplate(pClass) {
    return `
        <div class="col-md-4 d-inline-block text-center m-2 p-3 border">
            <button type="button"  class="btn btn-primary m-1 edit" id="${pClass.name}"><i class="bi bi-pencil"></i></button>
            <button type="button"  class="btn btn-danger m-1 remove"><i class="bi bi-dash-circle"></i></button>
            <h2>${pClass.name}</h2>
            <p>Teacher IDs: ${pClass.teacherIds.join(', ')}</p>
            <p>Additional text</p>
            <button type="button"  class="btn btn-info students">Students</button>
            <button type="button"  class="btn btn-info teachers">Teachers</button>
        </div>
  `
}
