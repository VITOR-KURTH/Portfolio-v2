document.addEventListener('DOMContentLoaded', function() {
  var aboutMeButton = document.getElementById('about-me-button');
  var aboutMeContent = document.getElementById('about-me-content');
  var welcomeHeading = document.getElementById('welcome-heading');
  var welcomeSubheading = document.getElementById('welcome-subheading');

  aboutMeButton.addEventListener('click', function() {
    if (aboutMeContent.style.display === 'none') {
      aboutMeContent.style.display = 'block';
      welcomeHeading.style.display = 'none';
      welcomeSubheading.style.display = 'none';
    } else {
      aboutMeContent.style.display = 'none';
      welcomeHeading.style.display = 'block';
      welcomeSubheading.style.display = 'block';
    }
  });
});

const scheduleButton = document.getElementById('schedule-button');
const scheduleContent = document.getElementById('schedule-content');

scheduleButton.addEventListener('click', () => {
  if (scheduleContent.style.display === 'none') {
    scheduleContent.style.display = 'block';
  } else {
    scheduleContent.style.display = 'none';
  }
});

document.getElementById("backButton").addEventListener("click", function() {
  window.history.back();
});


const terminalInput = document.getElementById("terminal-input");

function handleTerminalInput(event) {
  if (event.key === "Enter" && document.getElementById("terminal-input").value.toLowerCase() === "music") {
    window.open("https://www.youtube.com/watch?v=kU0SmxKucCw"); 
  }
}