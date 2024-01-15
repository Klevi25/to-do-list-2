const inputBox = document.getElementById("input-box");
const listContaier = document.getElementById("list-container");

function addTask(){
    if (inputBox.value === ""){
        alert('Please enter a task');
    }
    else{
        let li = document.createElement('li');
        li.innerHTML = inputBox.value;
        listContaier.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span)
    }
    inputBox.value = "";
    saveData()
}
inputBox.addEventListener("keydown",function(event){
    if (event.keyCode === 13){
        event.preventDefault()

        addTask()
    }
});
listContaier.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else  if(e.target.tagName === "SPAN"){
        e.target.parentNode.remove();
        saveData();
    }
},false);


function saveData(){
    localStorage.setItem("data",listContaier.innerHTML)
}
function showList(){
    listContaier.innerHTML =  localStorage.getItem("data")
}
showList();