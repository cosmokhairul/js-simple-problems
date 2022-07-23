// const numbers = [44, 23, 34, 32, 54, 5, 78];
// for (let i = 0; i < numbers.length; i++) {
//     const element = numbers[i];
//     console.log(element);
// }

// const numbers = [44, 23, 34, 32, 54, 5, 78];
// let sum = 0;
// for (let i = 0; i < numbers.length; i++) {
//     const element = numbers[i];
//     sum = sum + element;
// }
// console.log(sum);

/* const numbers = [44, 23, 34, 32, 54, 5, 78];
function arrayTotal(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        sum = sum + element;
    }
    return sum;
}
const total = arrayTotal(numbers);
console.log(total);
 */


const numbers = [1, 2, 3, 4];
function sumOfArray(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        sum = sum + element;
    }
    return sum;
}

const output = sumOfArray(numbers);
console.log(output);