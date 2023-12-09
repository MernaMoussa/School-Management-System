function homeTemplate(pCountedStudents, pCountedTeachers, pCountedClasses) {
    return `
  <div class="row row-cols-1 row-cols-md-3 g-4 text-center">
    <div class="col">
    <div class="card card-body border-dark">
          <h4 class="card-title">${pCountedStudents}</h4>
          <p class="card-text">number of students</p>
    </div>
    </div>
    <div class="col">
    <div class="card card-body border-dark">
    <h4 class="card-title">${pCountedTeachers}</h4>
    <p class="card-text">number of teachers</p>
    </div>
  </div>
  <div class="col">
  <div class="card card-body border-dark">
  <h4 class="card-title">${pCountedClasses}</h4>
  <p class="card-text">number of classes</p>
  </div>
  </div>
  </div>
      `;
}

export default homeTemplate;