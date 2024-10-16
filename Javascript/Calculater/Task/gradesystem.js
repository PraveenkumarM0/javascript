let scores = { Tamil: 89, English: 0, Maths: 60, Science: 99, SC: 90 };
let total = 0;
let failedSubjects = [];

// Calculate total score and identify failed subjects
for (let subject in scores) {
    let score = scores[subject];
    total += score;
    if (score < 35) {
        failedSubjects.push(subject);
    }
}

// Determine grade
let grade;
if (failedSubjects.length > 0) {
    grade = 'Fail';
} else if (total >= 500) {
    grade = 'A+';
} else if (total >= 450) {
    grade = 'A';
} else if (total >= 400) {
    grade = 'B+';
} else if (total >= 350) {
    grade = 'B';
} else if (total >= 300) {
    grade = 'C+';
} else if (total >= 200) {
    grade = 'C';
} else {
    grade = 'F';
}

// Output the results
console.log(total); // Output the total score
console.log('grade ' + grade); // Output the grade
if (failedSubjects.length > 0) {
    console.log('Failed subjects: ' + failedSubjects.join(', ')); // Output failed subjects
}
