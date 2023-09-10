const cats = ['Milo', 'Otis', 'Garfield'];


function destructivelyAppendCat(name) {
    cats.push(name);
    return cats;
}


function destructivelyPrependCat(name) {
    cats.unshift(name);
    return cats;
}


function destructivelyRemoveLastCat(name) {
    cats.pop(name);
    return cats;
}


function destructivelyRemoveFirstCat(name) {
    cats.shift(name);
    return cats;
    
}

function appendCat(name) {
    const endCat = [...cats, name];
    return endCat
}

function prependCat(name) {
    const startCat = [name, ...cats]
    return startCat
}

// create a function that removes the last cat in the cats array and returns a new array, leaving the cats array unchanged.
//Hint: We should make some copies.
function removeLastCat() {
    const byeCat = cats.slice(0, cats.length - 1);
    return byeCat
}

// create a function that removes the last cat in the cats array and returns a new array, leaving the cats array unchanged.
function removeFirstCat() {
    const helloCat = cats.slice(1)
    return helloCat
}