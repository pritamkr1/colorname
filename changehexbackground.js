const colors = ["#312c51", "#350b40", "#1687a7", "#0a043c", "#a98b98", "#f88f01", "#314e52", "#ff9292", "#ff5e78", "#351f39"]

const mainBackgroundColor = document.querySelector('main');

mainBackgroundColor.style.backgroundColor = '#312c51';

const colorHexName = document.querySelector('.color');

const btn = document.getElementById('button');

btn.addEventListener('click', changeBackground)


function changeBackground(){
    const randomNumber = Math.floor(Math.random() * colors.length);
    mainBackgroundColor.style.backgroundColor = colors[randomNumber];

    colorHexName.textContent = colors[randomNumber];
}