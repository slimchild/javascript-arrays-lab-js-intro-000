var kittens = ["Milo", "Otis", "Garfield"]; //define your array here

// Add your functions and code here
function destructivelyAppendKitten (kitten){
kittens.push(kitten);
return kittens;
}

function destructivelyPrependKitten(kitten){
kittens.unshift(kitten);
return kittens;
}
function destructivelyRemoveLastKitten(kitten){
kittens.pop(kitten);
  return kitten;
}
function destructivelyRemoveFirstKitten(kitten){
kittens.shift(kitten);
return kitten;
}
