export function studentModalWindow(storedClasses, storedStudents, storedTeachers) {
    return `
    <form id="studentForm">
      <div class="mb-3">
        <label for="classSelect">Class ID:</label>
        <select class="form-control" id="classSelect" name="classId">
        <option value="" disabled selected hidden>Select Class Id</option>
        ${generateClassOptions(storedClasses)}
        </select>
      </div>

      <div class="mb-3">
        <label for="studentName">Student Name:</label>
        <input type="text" class="form-control" id="studentName" name="name" required>
      </div>

      <div class="mb-3">
        <label for="studentId">Student ID:</label>
        <input type="text" class="form-control" id="studentId" name="id" required>
      </div>

      <div class="mb-3">
        <label for="department">Department:</label>
        <select class="form-control" id="department" name="department" required></select>
      </div>

      <div class="mb-3">
        <label for="subjectSelect">Select Subject:</label>
        <select class="form-control mt-2" id="subjectSelect" name="subjects" required></select>
      </div>
    </form>
        `
};

function generateClassOptions(storedClasses) {
    return storedClasses.map((classData) => {
        return `<option value="${classData.id}">${classData.id}</option>`;
    }).join('');
}