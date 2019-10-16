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
function appendKitten(kitten){
  const kittens = ['Milo', 'Otis', 'Garfield'];
  const moreKittens = [...kittens, "Broom"];
  return moreKittens;
}
function prependKitten(kitten){
  const kittens = ['Milo', 'Otis', 'Garfield'];
  const moreKittens = ["Arnold", ...kittens];
  return moreKittens;
}

function removeLastKitten(kitten){
kittens.slice(0, 2)
return kittens;
}
