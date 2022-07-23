// function largestElement(numbers) {
//     const largest = 0;
//     for (let i = 0; i < numbers.length; i++) {
//         console.log(i);
//     }
// }

// const ages = [12, 54, 2, 34, 75, 32, 12];
// const oldest = largestElement(ages);

// function largestElement(numbers) {
//     const largest = 0;
//     for (let i = 0; i < numbers.length; i++) {
//         const element = numbers[i];
//         console.log(element);
//     }
// }

// const ages = [12, 54, 2, 34, 75, 32, 12];
// const oldest = largestElement(ages);


// function largestElement(numbers) {
//     let largest = 0;
//     for (let i = 0; i < numbers.length; i++) {
//         const element = numbers[i];
//         if (element > largest) {
//             largest = element;
//         }
//     }
//     return largest;
// }

// const ages = [12, 54, 2, 34, 75, 32, 12];
// const oldest = largestElement(ages);
// console.log('Oldest', oldest);


function largestElement(numbers) {
    let largest = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        if (element > largest) {
            largest = element;
        }
    }
    return largest;
}

// const ages = [12, 54, 2, 34, 75, 32, 12];
const oldest2 = largestElement([-12, -9, -6, -15]);
console.log('Oldest2', oldest2);
