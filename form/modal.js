// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myButton");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  if(document.getElementById("name").value != "" &&
  document.getElementById("age").value != "" &&
  document.getElementById("email").value != "" &&
  document.getElementById("birthday").value != "" &&
  document.getElementById("avatar").value != "" &&
  document.getElementById("password").value != "" &&
  document.getElementById("country").value != "" &&
  document.getElementById("agree").value != "") modal.style.display = "block";
  else alert("Plis, fill all the inputs.");
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
  document.getElementById("name").value = "";
  document.getElementById("age").value = "";
  document.getElementById("email").value = "";
  document.getElementById("birthday").value = "";
  document.getElementById("avatar").value = "";
  document.getElementById("password").value = "";
  document.getElementById("country").value = "";
  document.getElementById("agree").value = "";
  
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    document.getElementById("name").value = "";
    document.getElementById("age").value = "";
    document.getElementById("email").value = "";
    document.getElementById("birthday").value = "";
    document.getElementById("avatar").value = "";
    document.getElementById("password").value = "";
    document.getElementById("country").value = "";
    document.getElementById("agree").value = "";

  }
} 


