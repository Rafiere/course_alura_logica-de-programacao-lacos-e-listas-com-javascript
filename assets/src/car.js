//car variables:
let carXPositions = [600, 600, 600, 600, 600, 600];
let carYPositions = [40, 96, 150, 210, 270, 318];
let carVelocities = [3, 4, 10, 6, 5, 7];
let carWidth = 50;
let carHeight = 40;

function showCar() {
  for (let i = 0; i < carImages.length; i++) {
    image(
      carImages[i],
      carXPositions[i],
      carYPositions[i],
      carWidth,
      carHeight
    );
  }
}

function movimentCar() {
  for (let i = 0; i < carImages.length; i++) {
    carXPositions[i] -= carVelocities[i];
  }
}

function backToCarInitialPosition() {
  for (let i = 0; i < carImages.length; i++) {
    isPassedEntireScreen(i);
  }
}

function isPassedEntireScreen(carIndex) {
  if (carXPositions[carIndex] < -50) {
    return (carXPositions[carIndex] = 600);
  }
}
