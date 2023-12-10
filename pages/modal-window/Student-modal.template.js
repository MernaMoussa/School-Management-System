export function studentModalWindow() {
    return `
        <div class="mb-3">
            <input type="text" class="form-control" placeholder="Add Student Id" aria-label="Id" aria-describedby="basic-addon1">
        </div>
        <div class="mb-3">
            <input type="text" class="form-control" placeholder="Add Class Id" aria-label="Username" aria-describedby="basic-addon1">
        </div>
        <div class="mb-3">
            <input type="text" class="form-control" placeholder="Add Student Name" aria-label="Username" aria-describedby="basic-addon1">
        </div>
        <div class="mb-3">
            <input type="text" class="form-control" placeholder="Add Department" aria-label="Username" aria-describedby="basic-addon1">
        </div>
        <div class="mb-3">
            <select class="form-control mt-2" id="subjectSelect" required>
                <option value="subject-1">Web Development</option>
                <option value="subject-2">Programming</option>
                <option value="subject-3">Databases</option>
            </select>
        </div>
        `
};