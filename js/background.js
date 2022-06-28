const images = [
    "00.jpg",
    "01.jpg",
    "02.jpg"
];

const choosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement('img');

bgImage.src = `img/${choosenImage}`;

document.body.appendChild(bgImage);