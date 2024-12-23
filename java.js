// Finding even numbers in an array
function findEvenNumbers(arr) {
    return arr.filter(num => num % 2 === 0);
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("Even Numbers:", findEvenNumbers(numbers));
console.log("Odd Numbers:", findOddNumbers(numbers));

// Finding odd numbers in an array
function findOddNumbers(arr) {
    return arr.filter(num => num % 2 !== 0);

