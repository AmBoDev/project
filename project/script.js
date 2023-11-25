function predictCollege() {
  var jeeScore = document.getElementById("jee-score").value;

  // Simple logic for demonstration purposes (replace this with real prediction logic)
  var college;
  if (jeeScore >= 150) {
      college = "IIT";
  } else if (jeeScore >= 120) {
      college = "NIT";
  } else {
      college = "Not qualified for top colleges";
  }

  // Display the predicted college
  var outputSection = document.getElementById("output-section");
  var predictedCollege = document.getElementById("predicted-college");
  predictedCollege.innerText = college;
  outputSection.style.display = "block";
}
