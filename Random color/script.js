let btn = document.querySelector("button");
let body = document.querySelector("body");
let colorCode = document.querySelector("span");

function getRandomHexColor() {
    let color = Math.floor(Math.random() * 16777215).toString(16);
    while (color.length < 6){
        color = "0" + color;
    }
    return "#" + color;
}

function hexToRGB(hex){
    const r = parseInt(hex.slice(1,3),16);
    const g = parseInt(hex.slice(3,5),16);
    const b = parseInt(hex.slice(5,7),16);
    return {r, g, b};
}

function isDark({r, g, b}) {
    const brightness = (r * 299 + g * 587 + b * 114)/1000;
    return brightness < 128;
}

btn.addEventListener("click", () => {
    let randomColor = getRandomHexColor();
    body.style.backgroundColor = randomColor;
    colorCode.textContent = randomColor;
    const rgb = hexToRGB(randomColor);
    body.style.color = isDark(rgb) ? "white" : "black";
});