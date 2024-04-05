const hourElement = document.getElementById('hour');
const minuteElement = document.getElementById('minute');
const secondElement = document.getElementById('second');

function updateClock() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    const hourText = hours < 10 ? '0' + hours : hours;
    const minuteText = minutes < 10 ? '0' + minutes : minutes;
    const secondText = seconds < 10 ? '0' + seconds : seconds;

    hourElement.textContent = hourText;
    minuteElement.textContent = minuteText;
    secondElement.textContent = secondText;
}

updateClock();

setInterval(updateClock, 1000);

document.addEventListener('mousemove', function(event) {
    const mouseX = event.clientX / window.innerWidth - 0.5;
    const mouseY = event.clientY / window.innerHeight - 0.5;

    const degX = mouseY * 90;
    const degY = mouseX * 90;

    const cube = document.getElementById('cube');
    cube.style.transform = `rotateX(${degX}deg) rotateY(${degY}deg)`;
});
