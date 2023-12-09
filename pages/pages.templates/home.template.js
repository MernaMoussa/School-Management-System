function homeTemplate(pCountedStudents, pCountedTeachers, pCountedClasses) {
    return `
        <div class="row row-cols-1 row-cols-md-3 g-4 text-center">
            <div class="col">
                <div class="card h-100 border-dark">
                    <div class="card-body">
                        <h4 class="card-title">${pCountedStudents}</h4>
                        <p class="card-text">Number of students</p>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="card h-100 border-dark">
                    <div class="card-body">
                        <h4 class="card-title">${pCountedTeachers}</h4>
                        <p class="card-text">Number of teachers</p>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="card h-100 border-dark">
                    <div class="card-body">
                        <h4 class="card-title">${pCountedClasses}</h4>
                        <p class="card-text">Number of classes</p>
                    </div>
                </div>
            </div>
        </div>
      `;
}

export default homeTemplate;