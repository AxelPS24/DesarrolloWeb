const body = document.querySelector("body"),
horMan = document.querySelector(".horas"),
minMan = document.querySelector(".minutos"),
segMan = document.querySelector(".segundos");

const updateTime = () => {
    let date = new Date(),
    giroSec = (date.getSeconds() / 60) * 360;
    giroMin = (date.getMinutes() / 60) * 360;
    giroHor = (date.getHours() / 12) * 360;

    segMan.style.transform = `rotate(${giroSec}deg)`;
    minMan.style.transform = `rotate(${giroMin}deg)`;
    horMan.style.transform = `rotate(${giroHor}deg)`;
};

function actDig(){
    const dig = document.getElementById('dig');
    const horActual = new Date();

    const horas = horActual.getHours().toString().padStart(2, '0');
    const minutos = horActual.getMinutes().toString().padStart(2, '0');
    const segundos = horActual.getSeconds().toString().padStart(2, '0');
    dig.textContent = `${horas}:${minutos}:${segundos}`;
}

actDig()

setInterval(actDig, 1000);
setInterval(updateTime, 1000);

updateTime();
