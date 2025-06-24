let img = document.querySelector("img");
let btnPrev = document.querySelector("#prev");
let btnNext = document.querySelector("#next");

let photos = ["doremon.jpg", "ben10.jpg", "miniforce.jpg", "ninjahattori.jpg", "paw patrol.jpg", "pokemon.jpg", "shinchan.jpg", "spongeBob.jpg", "superwings.jpg", "tobot x & y.jpg", "tom & jerry.jpg", "we_bare_bears.jpg"];

let currentIdx = 0;

function showImg() {
    img.src = photos[currentIdx];
}

showImg();

btnNext.addEventListener("click", () => {
    currentIdx = (currentIdx + 1) % photos.length;
    showImg();
});

btnPrev.addEventListener("click", () => {
    currentIdx = (currentIdx - 1 + photos.length) % photos.length; 
    showImg();
}); 

