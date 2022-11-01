let str = 'Привет, мир!';
let arr = str.split('');

console.log(arr);

let arrReversed = [];
for (let i = arr.length - 1; i >= 0; i--) {
    arrReversed.push(arr[i]);
}
console.log(arrReversed);

// Вариант 2

let str1 = 'Привет, мир!';

let result = str1.split('').reverse().join('');
console.log(result);