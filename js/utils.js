export const formatNumberToString = (number) => {
    if (number < 10) {
        return '0' + String(number);
    }
    return String(number);
}

export const toggleElement = (element) => {
    element.classList.toggle('hide');
}