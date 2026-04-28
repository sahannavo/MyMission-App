const inputbox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");


function addTask() {

    if(inputbox.value === ''){
        alert("You must write your Mission !");
    }
    else{
        let li = document .createElement("li");
        li.innerHTML = inputbox.value;
        listContainer.appendChild(li);
        
    }

}