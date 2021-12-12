const mensaje0 = document.getElementById("mensaje1");
const mensaje1 = document.getElementById("mensaje2");
const mensaje2 = document.getElementById("mensaje3");
const mensaje3 = document.getElementById("mensaje4");
const mensaje4 = document.getElementById("mensaje5");
const mensaje5 = document.getElementById("novia");
const mensaje6 = document.getElementById("congratulation");

const start = document.getElementById("start");

const audio = document.getElementById("audio");

function mueveElBoton() {
    const container = document.getElementById("novia");
    width = container.clientWidth;
    height = container.clientHeight;

    console.log("funciona")
    newWidth = (Math.random() * width);
    newHeight = (Math.random() * height);

    if (newWidth > 780) {
        newWidth = 780;
    }
    if (newHeight > 400) {
        newHeight = 400;
    }
    document.getElementById('btnNo').style.position = "absolute";
    document.getElementById('btnNo').style.left = newWidth + "px";
    document.getElementById('btnNo').style.top = newHeight + "px";
}
start.onclick = function () {
    alert("Conecta tus audifonos BB");
    mensaje0.style.display = "none";
    mensaje1.style.display = "flex";
    setTimeout(() => {
        mensaje1.style.display = "none";
        mensaje2.style.display = "flex";
    }, 7000);
    setTimeout(() => {
        mensaje2.style.display = "none";
        mensaje3.style.display = "flex";
    }, 16000);
    setTimeout(() => {
        mensaje3.style.display = "none";
        mensaje4.style.display = "flex";
    }, 32000);
    setTimeout(() => {
        mensaje4.style.display = "none";
        mensaje5.style.display = "flex";
    }, 42000);
};

function noviaSi() {
    mensaje5.style.display = "none";
    mensaje6.style.display = "flex";
}

function regresar() {
    alert("Disfruta la música, cada vez que quieras ver tu regalo solo vuélvelo a abrir. Te amo <3");
    mensaje6.style.display = "none";
    mensaje0.style.display = "flex";
}

start.addEventListener("click", () => {
    audio.play();
})