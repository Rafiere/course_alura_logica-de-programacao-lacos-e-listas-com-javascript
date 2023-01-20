//actor variables:
actorXPosition = 85;
actorYPosition = 366;

let myPoints = 0;

let isColliding = false;

function showActor() {
  image(actorImage, actorXPosition, actorYPosition, 30, 30);
}

function movimentActor() {
  if (keyIsDown(UP_ARROW)) {
    actorYPosition -= 3;
  } else if (keyIsDown(DOWN_ARROW) && canMove()) {
    actorYPosition += 3;
  }
}

function verifyCollide() {
  for (let i = 0; i < carImages.length; i++) {
    isColliding = collideRectCircle(
      carXPositions[i],
      carYPositions[i],
      carWidth,
      carHeight,
      actorXPosition,
      actorYPosition,
      8
    );

    if (isColliding) {
      collides();
      moveActorToInitialPosition();
    }
  }
}

function collides() {
  collideSound.play();
  moveActorToInitialPosition();
  reduceOnePoint();
}

function includePoints() {
  textSize(25);
  textAlign(CENTER);
  fill(color(255, 240, 60));
  text(myPoints, width / 5, 27);
}

function countPoint() {
  if (actorYPosition < 15) {
    pointSound.play();
    myPoints += 1;
    moveActorToInitialPosition();
  }
}

function moveActorToInitialPosition() {
  actorYPosition = 366;
}

function reduceOnePoint() {
  if (myPoints > 0) {
    myPoints -= 1;
  }
}

function canMove() {
  return actorYPosition < 366;
}
