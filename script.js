let studentName= "Aziel";
let courseName=  "javaScript Fundamentals";
let completedLessons= 0;
let totalLessons= 10;

let lessons = [
    "HTML",
    "CSS",
    "JavaScript",
    "Python"
];
let student = {
name: studentName,
course: courseName,
completed: completedLessons
};
function calculateProgress() {
     let progress = (completedLessons / totalLessons) * 100;

    return progress;
}

let progressButton = document.getElementById("progressButton");

progressButton.addEventListener("click", function() {

    let progress = calculateProgress();
    let isHalfway = progress >=50;
    let progressDisplay = document.getElementById("progressDisplay");
    let progressMessage = document.getElementById("progressMessage");

 progressDisplay.textContent = progress + "%";

if (totalLessons ===0) {
    progressMessage.textContent = "No lessons available.";
}  else if (progress===100) {
    progressMessage.textContent = "Course completed";
}  else if (progress >=50) {
    progressMessage.textContent = "Keep going";
}  else {
    progressMessage.textContent = "You are getting started";
}
});

