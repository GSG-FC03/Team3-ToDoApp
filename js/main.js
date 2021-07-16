

 const button=document.getElementById("startButton");
const input=document.getElementById("name");

 button.addEventListener('click', function (e) { 
    e.preventDefault()
    if (input.value != "") {
        window.location.href = '../html/toDoLists.html'

  let name = input.value
alert(`hello ${name}`);
   } 
    else {
        alert("Please enter a name");
    }
});



