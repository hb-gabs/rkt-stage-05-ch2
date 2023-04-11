const coffee = new Audio('../assets/audios/Cafeteria.wav');
const rain = new Audio("../assets/audios/Chuva.wav");
const forest = new Audio("../assets/audios/Floresta.wav");
const fireplace = new Audio("../assets/audios/Lareira.wav");

const sounds = {
    coffee,
    rain,
    forest,
    fireplace
}

export const setSoundButtonsActions = (list) => {
    list.map(({
        handle,
        name
    }) => {
        handle.addEventListener('click', () => clickSoundButton(handle, name));
    })
}

const clickSoundButton = (btn, name) => {
    btn.classList.toggle('selected');

    if (isPlaying(btn)) {
        sounds[name].play();
        return;
    }
    sounds[name].pause();
}

const isPlaying = (btn) => {
    return btn.classList.contains('selected');
}