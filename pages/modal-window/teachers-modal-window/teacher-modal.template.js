import { generateClassesIdOptions, generateDepartmentOptions, generateSubjectOptions } from "../student-modal-window/student-modal.module.js"

export function renderTeacherModalWindow(storedClasses) {
    return `
      <form id="studentForm">
          <div class="mb-3">
                <label for="classId">Class ID:</label>
                <select class="form-control" id="class-options" name="classId" required>
                    <option value="" disabled selected hidden>Select Class Id</option>
                    ${generateClassesIdOptions(storedClasses)}
                </select>
          </div>

          <div class="mb-3">
                <label for="teacher-name">Teacher Name:</label>
                <input type="text" class="form-control" id="teacher-name" name="teacher-name" required>
          </div>

          <div class="mb-3">
                <label for="teacher-id">Teacher ID:</label>
                <input type="number" class="form-control" id="teacher-id" name="teacher-id" required>
          </div>

          <div class="mb-3">
                <label for="department">Department:</label>
                <select class="form-control" id="department-options" name="department" required>
                  <option value="" disabled selected hidden>Select Department</option>
                  ${generateDepartmentOptions(storedClasses)}
              </select>
          </div>
          <div class="mb-3">
                <label for="subject">Department:</label>
                <select class="form-control" id="subject-options" name="subject" required>
                  <option value="" disabled selected hidden>Select subject</option>
                  ${generateSubjectOptions(storedClasses)}
              </select>
          </div>
      </form>
  `;
}