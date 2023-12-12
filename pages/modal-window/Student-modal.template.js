import { generateClassesIdOptions, generateDepartmentOptions } from "./student-modal.module.js"

export function studentModalWindowTemplate(storedClasses, storedStudents, storedTeachers) {
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
              <label for="studentName">Student Name:</label>
              <input type="text" class="form-control" id="student-name" name="studentName" required>
          </div>

          <div class="mb-3">
              <label for="studentId">Student ID:</label>
              <input type="number" class="form-control" id="student-id" name="studentId" required>
          </div>

          <div class="mb-3">
              <label for="department">Department:</label>
              <select class="form-control" id="department-options" name="department" required>
                  <option value="" disabled selected hidden>Select Department</option>
                  ${generateDepartmentOptions(storedClasses)}
              </select>
          </div>
          <div class="mb-3">
              <label for="subject-checkbox">Select Subject:</label>
              <div id="subject-container"></div>
          </div>
      </form>
  `;
}