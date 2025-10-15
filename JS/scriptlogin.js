//JS DEL LOGIN
const container = document.querySelector(".container");
const btnIn = document.getElementById("btn-in");
const btnUp = document.getElementById("btn-up");

btnIn.addEventListener("click",()=>{
    container.classList.remove("toggle");
});
btnUp.addEventListener("click",()=>{
    container.classList.add("toggle");
});