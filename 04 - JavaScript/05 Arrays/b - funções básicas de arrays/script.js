let hitchedSpaceships = ["Colossus", "Elemental", "Helmet"];
console.log(hitchedSpaceships);

hitchedSpaceships.push("Supernova");
console.log(hitchedSpaceships);

let removedSpaceship = hitchedSpaceships.pop();
console.log(removedSpaceship);

let removedWithShift = hitchedSpaceships.shift();
console.log(removedWithShift);
console.log(hitchedSpaceships);

let addUnshift = hitchedSpaceships.unshift("Phoenix");
console.log(hitchedSpaceships);

console.log(hitchedSpaceships.length);

let elementalPosition = hitchedSpaceships.indexOf("Elemental");
console.log(elementalPosition);
