// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("add-issue-button");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  if(document.getElementById("title").value != "" &&
  document.getElementById("state").value != "" &&
  document.getElementById("category").value != "" &&
  document.getElementById("description").value != "") modal.style.display = "block";
  else alert("Plis, fill all the inputs.");
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
  document.getElementById("title").value = "";
  document.getElementById("state").value = "";
  document.getElementById("category").value = "";
  document.getElementById("description").value = "";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  document.getElementById("title").value = "";
  document.getElementById("state").value = "";
  document.getElementById("category").value = "";
  document.getElementById("description").value = "";
  }
} 


