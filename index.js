const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
];

const bodyEl = document.querySelector('body');
const startBtn = document.querySelector('button[data-action="start"]');
const stopBtn = document.querySelector('button[data-action="stop"]');

let changeColorId = null;

const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

function changeColors(colors) {
    const colorId = randomIntegerFromInterval(0, colors.length - 1);
    bodyEl.style.backgroundColor = colors[colorId];
}

startBtn.addEventListener('click', () => {
    changeColorId = setInterval(() => { changeColors(colors) }, 1000);
    startBtn.disabled = true;
});

stopBtn.addEventListener('click', () => {
    clearInterval(changeColorId);
    startBtn.disabled = false;
});