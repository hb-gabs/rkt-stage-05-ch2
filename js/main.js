import { setSoundButtonsActions } from "./play-sound.js";
import { formatNumberToString } from "./utils.js";

let play = document.querySelector('.play');
let stop = document.querySelector('.stop');
let add = document.querySelector('.add');
let remove = document.querySelector('.remove');
let coffee = document.querySelector('.coffee');
let rain = document.querySelector('.rain');
let fireplace = document.querySelector('.fireplace');
let forest = document.querySelector('.forest');
let minutes = document.querySelector('.minutes');
let seconds = document.querySelector('.seconds');
let isRunning = true;

setSoundButtonsActions([
    {
        handle: coffee,
        name: 'coffee'
    },
    {
        handle: rain,
        name: 'rain'
    },
    {
        handle: fireplace,
        name: 'fireplace'
    },
    {
        handle: forest,
        name: 'forest'
    },
]);

add.addEventListener('click', () => {
    let v = Number(minutes.innerHTML) + 5;
    minutes.innerHTML = formatNumberToString(v);
});

remove.addEventListener('click', () => {
    let v = Number(minutes.innerHTML) - 5;
    minutes.innerHTML = formatNumberToString(v);
})

play.addEventListener('click', () => {
    isRunning = true;
    setTimeout(runTime, 1000);
})

stop.addEventListener('click', () => isRunning = false);

const countDown = () => {
    let sec = Number(seconds.innerHTML);
    let min = Number(minutes.innerHTML);
    if (min === 0 && sec === 0) {
        isRunning = false;
        return;
    }
    sec-=1;
    if (sec < 0) {
        sec = 59;
        if (min > 0) {
            min-=1;
            minutes.innerHTML = formatNumberToString(min);
        }
    }
    seconds.innerHTML = formatNumberToString(sec);
}

const runTime = () => {
    if (isRunning) {
        countDown();
        setTimeout(runTime, 1000);
    }
}