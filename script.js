const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");


function addTask() {

    if(inputBox.value === ''){
        alert("You must write your mission!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);

        // Add a "close" button to each list item
        let span = document.createElement("span");
        span.innerHTML = "\u00D7"; // Unicode for "close" (×), commonly used as a delete icon
        span.className = "close";
        li.appendChild(span);


    }
    inputBox.value ='';
    

    
}

listContainer.addEventListener("click",function(e){
     if (e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
     }
     else if(e.target.tagName ==="SPAN"){
        e.target.parentElement.remove();
        saveData();
     }
},false)


function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}
function showMissions(){
    listContainer.innerHTML = localStorage.getItem("data") || "";
}
showMissions();