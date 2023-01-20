let roadImage;
let actorImage;
let car1Image;
let car2Image;
let car3Image;

let soundtrack;
let collideSound;
let pointSound;

function preload() {
  roadImage = loadImage("/assets/estrada.png");
  actorImage = loadImage("/assets/ator-1.png");
  car1Image = loadImage("/assets/carro-1.png");
  car2Image = loadImage("/assets/carro-2.png");
  car3Image = loadImage("/assets/carro-3.png");
  soundtrack = loadSound("/assets/sons/trilha.mp3");
  collideSound = loadSound("/assets/sons/colidiu.mp3");
  pointSound = loadSound("/assets/sons/pontos.wav");
  carImages = [
    car1Image,
    car2Image,
    car3Image,
    car1Image,
    car2Image,
    car3Image,
  ];
}
