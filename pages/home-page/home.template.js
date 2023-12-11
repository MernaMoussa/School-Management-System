function homeTemplate(countedClasses, countedStudents, countedTeachers) {
    return `
    <h1 class="mb-4"> Welcome Merna</h1>
        <div class="row row-cols-1 row-cols-md-3 g-4 text-center">
            <div class="col-12">
                <div class="container card h-100 border-dark col-8">
                    <div class="card-body">
                        <h4 class="card-title">${countedStudents}</h4>
                        <p class="card-text">Number of students</p>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="container card h-100 border-dark col-8">
                    <div class="card-body">
                        <h4 class="card-title">${countedTeachers}</h4>
                        <p class="card-text">Number of teachers</p>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="container card h-100 border-dark col-8">
                    <div class="card-body">
                        <h4 class="card-title">${countedClasses}</h4>
                        <p class="card-text">Number of classes</p>
                    </div>
                </div>
            </div>
        </div>
      `;
}

export { homeTemplate };