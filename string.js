let stringToreverse = "reverse";

let tempArray = [];
let reverselength = stringToreverse.length;

for (let i = reverselength; i >= 0; i--) {
  tempArray.push(stringToreverse[i]);
}

console.log(tempArray.join(""));
