function setup() {
  createCanvas(500, 400);
  soundtrack.loop();
}

function draw() {
  background(roadImage);
  showActor();
  showCar();
  movimentCar();
  movimentActor();
  backToCarInitialPosition();
  verifyCollide();
  includePoints();
  countPoint();
}
