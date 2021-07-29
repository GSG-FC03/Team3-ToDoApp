//Get started button function
const btnGetStarted = document.querySelector(".name-btn");
const nameField = document.querySelector("#name-field");

btnGetStarted.addEventListener("click", logIn);
function logIn() {
  if (nameField.value !== "") {
    window.location.href = "./toDo.html";
    localStorage.setItem("0",nameField.value)
  } else {
    alert("Name is required")  }
  }

