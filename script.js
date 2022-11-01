let n = 2;
let m = 5;

function randomize(m, n) {
    let max = Math.max(m, n);
    let min = Math.min(m, n);
    let difference = Math.abs(m - n);
    let random = Math.floor(Math.random() * difference + min);
    let odd = random + 1;
    return odd;
}

function generateArray(m, n) {
    let count = 50;

    let ArayRandom = [];

    for (let i = 0; i < count; i++) {
        ArayRandom.push(randomize(m, n));
    }
    console.log(ArayRandom);
}

generateArray(m, n);