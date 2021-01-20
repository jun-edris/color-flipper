const colors = ["green", "red", "rgba(133, 122, 200)", "#f15025"];
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById('btn');
const color = document.querySelector(".color");
const coloredText = document.querySelector(".coloredText");


btn.addEventListener('click', () => {
    let hexColor = '#';
    for(let i = 0; i < 6; i++) {
        hexColor += hex[getRandomNumber()];
    }
    color.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;
    btn.style.backgroundColor = hexColor;
    color.style.color = hexColor;
    coloredText.style.color = hexColor;
});

function getRandomNumber() {
    return Math.floor(Math.random() * hex.length);
}