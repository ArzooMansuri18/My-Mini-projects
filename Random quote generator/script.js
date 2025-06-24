const para = document.querySelector("p");
const btn = document.querySelector("button");
const body = document.querySelector("body");

function colorChange() {
    const color = "#" + Math.floor(Math.random() * 16777215).toString(16);
    while (color.length < 6){
        color = "0" + color;
    } 
    return color; 
}

function showQuote() {
    const quotes = ["Success is not final, failure is not fatal; It is the courage to continue that counts. ~ Winston Churchill",
    "The only way to do great work is to love what you do. ~Steve Jobs",
    "Believe you can and you halfway there. ~Theodore Roosevelt",
    "Don't watch the clock do what it does, Keep going. ~Sam Levenson",
    "Everything you've ever wanted is on the other side of fear. ~George Addair",
    "I am so clever that sometimes I don't understand a single word of what I am saying. ~Oscar Wilde",
    "My bed is a magical place where I suddenly remember everything I forgot to do. ~Unknown",
    "People say nothing is impossible, but I do nothing every day. ~A.A. Milne(Winne the Pooh)",
    "I used to think I was indecisive, but now I'm not too sure. ~Unknown",
    "I'm writing a book, I've got the page numbers done. ~Steven Wright"
    ];
    const randIdx = Math.floor(Math.random() * quotes.length);
    return quotes[randIdx];
}

function isDark(hexColor) {
    const r = parseInt(hexColor.substr(1,2), 16);
    const g = parseInt(hexColor.substr(3,2), 16);
    const b = parseInt(hexColor.substr(5,2), 16);
    const brightness = (r * 299 + g * 587 + b * 114)/1000;
    return brightness < 128;
}

btn.addEventListener("click", () => {
    const bgColor = colorChange();
    const textColor = isDark(bgColor) ? "white" : "black";

    para.innerText = showQuote();
    body.style.backgroundColor = bgColor;
    body.style.color = textColor;
});
