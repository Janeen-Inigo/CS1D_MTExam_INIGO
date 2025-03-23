// Create two arrays for subjects
let DSA = [];
let WebDev = [];

let subjectChoice;
let operation;

// Function to display enrolled students
function displayEnrolledStudents() {
    console.log("Enrolled Students:");
    console.log("DSA:", DSA.length > 0 ? DSA.join(", ") : "No students enrolled");
    console.log("WebDev:", WebDev.length > 0 ? WebDev.join(", ") : "No students enrolled");
}

// Function to handle enrollment
function enrollStudent(subjectArray) {
    let studentName = prompt("Enter the student's name to enroll:");
    if (studentName) {
        subjectArray.push(studentName);
        alert(`${studentName} has been enrolled successfully!`);
    }
}

// Function to handle unenrollment
function unenrollStudent(subjectArray) {
    if (subjectArray.length === 0) {
        alert("No students are enrolled in this subject.");
        return;
    }
    
    console.log("Currently enrolled students:", subjectArray.join(", "));
    let studentName = prompt("Enter the student's name to unenroll:");
    
    let index = subjectArray.indexOf(studentName);
    if (index !== -1) {
        subjectArray.splice(index, 1);
        alert(`${studentName} has been removed from the subject.`);
    } else {
        alert("Student not found.");
    }
}

// Main loop for operations
while (true) {
    subjectChoice = prompt("Select a subject: (A) DSA, (B) WebDev").toUpperCase();
    let selectedSubject = subjectChoice === "A" ? DSA : subjectChoice === "B" ? WebDev : null;

    if (!selectedSubject) {
        alert("Invalid subject choice. Please select A or B.");
        continue;
    }

    while (true) {
        operation = prompt("Select an operation: (A) Enroll, (B) Unenroll, (C) Select Another Subject, (D) Exit").toUpperCase();

        if (operation === "A") {
            enrollStudent(selectedSubject);
        } else if (operation === "B") {
            unenrollStudent(selectedSubject);
        } else if (operation === "C") {
            break; // Go back to subject selection
        } else if (operation === "D") {
            displayEnrolledStudents();
            alert("Exiting the program.");
            console.log("Program exited.");
            process.exit(); // Exit the loop
        } else {
            alert("Invalid operation. Please select A, B, C, or D.");
        }
    }
}
