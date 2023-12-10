export function getAvrgGrade(data) {
    let averageGrade = 0
    const grades = Object.values(data.subjects);
    const sumOfGrades = grades.reduce((total, grade) => {
        return total + grade;
    }, 0);
    averageGrade = (sumOfGrades / grades.length).toFixed(2);
    return averageGrade
}


/*
const numbers = [15.5, 2.3, 1.1, 4.7];
document.getElementById("demo").innerHTML = numbers.reduce((total, num) => { total + Math.round(num) }, 0);*/