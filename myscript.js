// Initialize course count
let courseCount = 1;

// Function to add more course input fields dynamically
function addMoreCourses() {
    courseCount++; // Increment the course count
    const courseContainer = document.getElementById('course-container'); // Get the container for courses

    // Create a new row for the course
    const courseRow = document.createElement('div');
    courseRow.classList.add('row');
    
    // Create and configure the course input
    const courseCol = document.createElement('div');
    courseCol.classList.add('col-6');
    const courseInput = document.createElement('input');
    courseInput.type = 'text';
    courseInput.id = `course${courseCount}`;
    courseInput.classList.add('form-control', 'form-control-sm', 'mb-3');
    courseInput.placeholder = `Course`;
    courseCol.appendChild(courseInput);

    // Create and configure the credit select dropdown
    const creditCol = document.createElement('div');
    creditCol.classList.add('col-3');
    const creditSelect = document.createElement('select');
    creditSelect.id = `credit${courseCount}`;
    creditSelect.classList.add('form-select', 'form-select-sm', 'mb-3');
    creditSelect.innerHTML = `
        <option selected>-</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
    `;
    creditCol.appendChild(creditSelect);

    // Create and configure the grade select dropdown
    const gradeCol = document.createElement('div');
    gradeCol.classList.add('col-3');
    const gradeSelect = document.createElement('select');
    gradeSelect.id = `grade${courseCount}`;
    gradeSelect.classList.add('form-select', 'form-select-sm', 'mb-3');
    gradeSelect.innerHTML = `
        <option selected>-</option>
        <option value="A">A</option>
        <option value="A-">A-</option>
        <option value="B+">B+</option>
        <option value="B">B</option>
        <option value="B-">B-</option>
        <option value="C+">C+</option>
        <option value="C">C</option>
        <option value="C-">C-</option>
        <option value="D+">D+</option>
        <option value="D">D</option>
        <option value="F">F</option>
    `;
    gradeCol.appendChild(gradeSelect);

    // Append the columns to the row
    courseRow.appendChild(courseCol);
    courseRow.appendChild(creditCol);
    courseRow.appendChild(gradeCol);

    // Append the new row to the course container
    courseContainer.appendChild(courseRow);
}

// Function to calculate GPA and CGPA
function calculateCGPA() {
    var totalSemesterCredits = 0;
    var totalSemesterGradePoints = 0;
    
    // Calculate total semester credits and grade points
    for (var i = 1; i <= courseCount; i++) {
        var credit = parseInt(document.getElementById("credit" + i).value);
        var grade = document.getElementById("grade" + i).value;
        var gradePoints = 0;

        // Calculate grade points based on the grade
        switch (grade) {
            case "A":
                gradePoints = 4.00;
                break;
            case "A-":
                gradePoints = 3.67;
                break;
            case "B+":
                gradePoints = 3.33;
                break;
            case "B":
                gradePoints = 3.00;
                break;
            case "B-":
                gradePoints = 2.67;
                break;
            case "C+":
                gradePoints = 2.33;
                break;
            case "C":
                gradePoints = 2.00;
                break;
            case "C-":
                gradePoints = 1.67;
                break;
            case "D+":
                gradePoints = 1.33;
                break;
            case "D":
                gradePoints = 1.00;
                break;
            case "F":
                gradePoints = 0.00;
                break;
        }

        // Accumulate total semester credits and grade points
        if (!isNaN(credit)) {
            totalSemesterCredits += credit;
            totalSemesterGradePoints += (credit * gradePoints);
        }
    }

    // Calculate GPA for current semester
    var semesterGPA = totalSemesterGradePoints / totalSemesterCredits;

    // Calculate CGPA by including previous semester CGPA if provided
    var previousSemesterCGPA = parseFloat(document.getElementById('previousCGPA').value);
    var previousSemesterCredits = parseFloat(document.getElementById('previousCredits').getAttribute('data-credits'));
    var totalCumulativeCredits = totalSemesterCredits;
    var totalCumulativeGradePoints = totalSemesterGradePoints;

    if (!isNaN(previousSemesterCGPA) && !isNaN(previousSemesterCredits)) {
        totalCumulativeCredits += previousSemesterCredits;
        totalCumulativeGradePoints += (previousSemesterCGPA * previousSemesterCredits);
    }

    var CGPA = totalCumulativeGradePoints / totalCumulativeCredits;

    // Display the semester GPA and CGPA in the result div
    document.getElementById('currentGPA').textContent = "Semester GPA: " + semesterGPA.toFixed(2);
    document.getElementById('currentCGPA').textContent = "CGPA: " + CGPA.toFixed(2);

    // Hide the course addition section and show GPA results
    document.getElementById('addcourses').style.display = 'none';
    document.getElementById('currentGPA').style.display = 'block';
    document.getElementById('currentCGPA').style.display = 'block';
}
