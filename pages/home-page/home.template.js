export function homeTemplate(countedClasses, countedStudents, countedTeachers) {
    return `
        <h1 class="mb-4"> Welcome Merna</h1>
        <div class="row row-cols-1 row-cols-md-3 g-4 text-center">
            ${generateHomeCard(countedStudents, "Number of students")}
            ${generateHomeCard(countedTeachers, "Number of teachers")}
            ${generateHomeCard(countedClasses, "Number of classes")}
        </div>
    `;
}

function generateHomeCard(countedData, description) {
    return `
        <div class="col-12">
            <div class="container card h-100 border-dark col-8">
                <div class="card-body">
                    <h4 class="card-title">${countedData}</h4>
                    <p class="card-text">${description}</p>
                </div>
            </div>
        </div>
    `;
}