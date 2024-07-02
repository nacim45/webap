let toggleMenu = document.querySelector('.toggleMenu');
        let navigation = document.querySelector('.navigation');
        toggleMenu.onclick = function(){
        navigation.classList.toggle('active');
        }


var courtAreas = document.getElementsByClassName('court-area');
var description = document.getElementById('description');

for (var i = 0; i < courtAreas.length; i++) {
    courtAreas[i].addEventListener('click', function() {
        var areaDescription = this.getAttribute('data-description');
        description.textContent = areaDescription;
    });
}
        
document.addEventListener("DOMContentLoaded", function() {
    var points = document.querySelectorAll('area');

    points.forEach(function(point) {
        point.addEventListener('click', function(event) {
            event.preventDefault();
            var description = document.getElementById("description");
            description.innerHTML = "Description for " + point.alt;
            description.style.display = "block";
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    var baselineButton = document.getElementById("baseline-button");
    var outHallButton = document.getElementById("out-hall-button");
    var netButton = document.getElementById("net-button");
    var serviceLineButton = document.getElementById("service-line-button");

    var baselineInfo = document.getElementById("baseline-info");
    var outHallInfo = document.getElementById("out-hall-info");
    var netInfo = document.getElementById("net-info");
    var serviceLineInfo = document.getElementById("service-line-info");

    baselineButton.addEventListener("click", function() {
        toggleInfoVisibility(baselineInfo);
    });

    outHallButton.addEventListener("click", function() {
        toggleInfoVisibility(outHallInfo);
    });

    netButton.addEventListener("click", function() {
        toggleInfoVisibility(netInfo);
    });

    serviceLineButton.addEventListener("click", function() {
        toggleInfoVisibility(serviceLineInfo);
    });

    function toggleInfoVisibility(info) {
        // Toggle the display of the clicked info container
        if (info.style.display === "block") {
            info.style.display = "none";
        } else {
            info.style.display = "block";
        }
    }
});

// Add click event listeners to all option buttons
document.querySelectorAll('.option').forEach(button => {
    button.addEventListener('click', () => {
      // Remove 'selected' class from all options within the same question
      button.parentElement.querySelectorAll('.option').forEach(option => {
        option.classList.remove('selected');
      });
      // Add 'selected' class to the clicked option
      button.classList.add('selected');
    });
  });
  
  // Add click event listener to the Submit button
  document.getElementById('submit').addEventListener('click', () => {
    var score = 0;
  
    // Iterate over each question
    document.querySelectorAll('.question').forEach(question => {
      // Check if any option within the question is selected and correct
      if (question.querySelector('.option.selected') && question.querySelector('.option.selected').dataset.correct === 'true') {
        score++;
      }
    });
  
    // Show the score in an alert
    alert('Your score is: ' + score + ' out of ' + document.querySelectorAll('.question').length);
  });
  
  // Add click event listener to the Restart button
  document.getElementById('restart').addEventListener('click', () => {
    // Remove 'selected' class from all options
    document.querySelectorAll('.option').forEach(button => {
      button.classList.remove('selected');
    });
  });




