function speedUp(velocity, acceleration) {
  return velocity + acceleration;
}

let spaceshipAcceleration = [60, 10];

let newVelocity = speedUp(...spaceshipAcceleration);
console.log(newVelocity); //70
