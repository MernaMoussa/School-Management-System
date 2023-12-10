export function getAvgGrade(data) {
    let averageGrade = 0
    const grades = Object.values(data.subjects);
    averageGrade = (getSumOfGrades(grades) / grades.length).toFixed(1);
    return averageGrade
}

function getSumOfGrades(pGrades) {
    return pGrades.reduce((total, grade) => {
        return total + grade;
    }, 0);
}