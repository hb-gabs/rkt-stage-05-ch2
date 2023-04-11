import { setSoundButtonsActions } from "./play-sound.js";
import { formatNumberToString, toggleElement } from "./utils.js";

let play = document.querySelector('.play');
let reset = document.querySelector('.stop');
let add = document.querySelector('.add');
let remove = document.querySelector('.remove');
let coffee = document.querySelector('.coffee');
let rain = document.querySelector('.rain');
let fireplace = document.querySelector('.fireplace');
let forest = document.querySelector('.forest');
let minutes = document.querySelector('.minutes');
let seconds = document.querySelector('.seconds');
let pause = document.querySelector('.pause');
let isRunning = false;

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

const toggleButtons = () => {
    toggleElement(pause);
    toggleElement(play);
}

const countDown = () => {
    let sec = Number(seconds.innerHTML);
    let min = Number(minutes.innerHTML);
    if (min === 0 && sec === 0) {
        pauseTimeAction();
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

const playTimeAction = () => {
    if(!isRunning) {
        isRunning = true;
        setTimeout(runTime, 1000);
        toggleButtons();
    }
}

const pauseTimeAction = () => {
    isRunning = false;
    toggleButtons();
}

const resetTimeAction = () => {
    pauseTimeAction();
    minutes.innerHTML = '30';
    seconds.innerHTML = '00';
}

const addTimeAction = () => {
    let v = Number(minutes.innerHTML) + 5;
    minutes.innerHTML = formatNumberToString(v);
}

const removeTimeAction = () => {
    let v = Number(minutes.innerHTML) - 5;
    if(v < 0) v += 5;
    minutes.innerHTML = formatNumberToString(v);
}

play.addEventListener('click', playTimeAction);
pause.addEventListener('click', pauseTimeAction);
reset.addEventListener('click', resetTimeAction);
add.addEventListener('click', addTimeAction);
remove.addEventListener('click', removeTimeAction);