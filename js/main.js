const search = document.getElementsByClassName("search");
search[0].style.display = "none";

function hideFab() {
  if ((writeTasks[0].style.display = "none")) {
    writeTasks[0].style.display = "block";
    addTaskButton[0].style.display = "none";
  }
}

function setId(){
    return localStorage.length + 1
}

function saveToLocal() {
  const taskContent = document.querySelector("#taskText").value;
  return localStorage.setItem(setId(), taskContent);
}
