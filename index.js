const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
  cats.push(name);
  return cats;
}

function destructivelyPrependCat(name) {
  cats.unshift(name);
  return cats;
}

function destructivelyRemoveLastCat() {
  cats.pop();
  return cats;
}

function destructivelyRemoveFirstCat() {
  cats.shift();
  return cats;
}

function appendCat(name) {
  const endCat = [...cats, name];
  return endCat;
}

function prependCat(name) {
  const startCat = [name, ...cats];
  return startCat;
}

function removeLastCat() {
  const byeCat = cats.slice(0, cats.length - 1);
  return byeCat;
}

function removeFirstCat() {
  const byeFirstCat = cats.slice(1);
  return byeFirstCat;
}
