let name = "Neeta";
let age = 36;
let futureJob = "Web Developer";

let phrase_one = "My name is " + name + ", I am " + age + " years old and I want to be a " + futureJob + ".";

console.log(phrase_one)

let colours = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
let coloursNew = colours[0] + " " + colours[6];
console.log(coloursNew);
let coloursTest = colours[0] + " " + colours[colours.length-2];
console.log(coloursTest);

let newColour = prompt("What is your favourite colour?");
colours.push(newColour);
console.log(colours);
let badChoice = colours.pop();
console.log(colours);

const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var hilol = alphabet[7] + alphabet[8];
console.log(hilol);
let def = alphabet.slice(3, 6);
console.log(def);
let nope = alphabet[13] + alphabet[14] + alphabet[15] + alphabet[4];
console.log(nope);