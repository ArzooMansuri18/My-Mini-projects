const body = document.querySelector("body");
const btn = document.querySelector("button");

btn.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
    btn.classList.toggle("dark-btn");
    if(body.classList.contains("dark-mode")) {
        btn.innerText = "Switch to Light Mode";
    } else {
        btn.innerText = "Switch to Dark Mode";
    }
});