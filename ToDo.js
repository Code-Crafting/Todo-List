// Access
let text = document.querySelector(".type-area");
let btn = document.querySelector(".add-btn");
let taskContainer = document.querySelector(".task-container");
// let i = document.querySelector(".task-div");

// Variables

// Functions
const saveTask = () =>{
    localStorage.setItem("Tasks", taskContainer.innerHTML);
}
const showTask = () =>{
    taskContainer.innerHTML = localStorage.getItem("Tasks");
}
showTask();

const addItems = () =>{

    let inputValue = text.value.trim();;
    if(inputValue != "" && inputValue.length != 0){
        
        let li = document.createElement("li");
        li.classList.add("task-name");
        li.innerText = inputValue;
        taskContainer.append(li);

        let span = document.createElement("span");
        span.innerText = "\u00d7";
        li.append(span);
        
    }
    text.value="";
    saveTask();
}

const delItems = (e) =>{
    let target = e.target;
    if(target.tagName === "LI"){
        target.classList.toggle("checked");
        saveTask();
    }else if(target.tagName === "SPAN"){
        target.parentElement.remove();
        saveTask();
    }
    
}

btn.addEventListener("click", addItems);
taskContainer.addEventListener("click", (e)=>{
    delItems(e);
})
