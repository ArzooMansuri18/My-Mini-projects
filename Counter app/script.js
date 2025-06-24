let num = document.querySelector("#num");
let btnPlus = document.querySelector(".plus");
let btnMinus = document.querySelector(".minus");
let btnReset = document.querySelector(".reset");

let count = 0;

btnPlus.addEventListener("click", () => {
    count++;
    num.innerText = count;
    if(count > 0){
    num.style.color = "green";
    } else if(count < 0){
    num.style.color = "red";
    } else if(count == 0){
    num.style.color = "black";}
})

btnMinus.addEventListener("click", () => {
    count--;
    num.innerText = count;
    if(count > 0){
    num.style.color = "green";
    } else if(count < 0){
    num.style.color = "red";
    } else if(count == 0){
    num.style.color = "black";}
}) 

btnReset.addEventListener("click", () => {
    count = 0;
    num.innerText = count;
    if(count > 0){
    num.style.color = "green";
    } else if(count < 0){
        num.style.color = "red";
    } else if(count == 0){
    num.style.color = "black";}
})

