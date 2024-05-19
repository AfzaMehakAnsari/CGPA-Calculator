function calculateCGPA() {
    var totalSemesterCredits = 0;
    var totalSemesterGradePoints = 0;

    // Calculate total semester credits and grade points
    for (var i = 1; i <= 8; i++) {
        var credit = parseInt(document.getElementById("credit" + i).value);
        var grade = document.getElementById("grade" + i).value;
        var gradePoints = 0;

        // Calculate grade points based on the grade
        switch (grade) {
            case "A":
                gradePoints = 4.0;
                break;
            case "A-":
                gradePoints = 3.7;
                break;
            case "B+":
                gradePoints = 3.3;
                break;
            case "B":
                gradePoints = 3.0;
                break;
            case "B-":
                gradePoints = 2.7;
                break;
            case "C+":
                gradePoints = 2.3;
                break;
            case "C":
                gradePoints = 2.0;
                break;
            case "C-":
                gradePoints = 1.7;
                break;
            case "D+":
                gradePoints = 1.3;
                break;
            case "D":
                gradePoints = 1.0;
                break;
            case "D-":
                gradePoints = 0.7;
                break;
            case "F":
                gradePoints = 0.0;
                break;
        }

        // Accumulate total semester credits and grade points
        totalSemesterCredits += credit;
        totalSemesterGradePoints += (credit * gradePoints);
    }

    // Calculate GPA for current semester
    var semesterGPA = totalSemesterGradePoints / totalSemesterCredits;

    // Calculate CGPA by including previous semester GPA if provided
    var previousSemesterGPA = parseFloat(document.querySelector('.cgpa input').value);
    var totalCumulativeCredits = totalSemesterCredits;
    var totalCumulativeGradePoints = totalSemesterGradePoints;

    if (!isNaN(previousSemesterGPA)) {
        totalCumulativeCredits += totalSemesterCredits;
        totalCumulativeGradePoints += (previousSemesterGPA * totalSemesterCredits);
    }

    var CGPA = totalCumulativeGradePoints / totalCumulativeCredits;

    // Display semester GPA and CGPA
    alert("Semester GPA: " + semesterGPA.toFixed(2) + "\nCGPA: " + CGPA.toFixed(2));
}
