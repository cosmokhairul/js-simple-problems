// const business = 450;
// const minister = 550;
// if (business > minister) {
//     console.log('Business person er pola is bigger');
// }
// else {
//     console.log('Minister er pola is bigger');
// }

// const business = 450;
// const minister = 550;
// const army = 660;

// if (business > minister && business > army) {
//     console.log('Business is bigger');
// }
// else if (minister > business && minister > army) {
//     console.log('Minister is bigger');
// }
// else {
//     console.log('Army is bigger');
// }

// const business = 450;
// const minister = 550;
// const army = 660;

// var max = Math.max(business, minister, army);
// console.log('Largest is', max);

/* function findLargest(first, second) {
    if (first > second) {
        return first;
    }
    else {
        return second;
    }
}

const largest = findLargest(354, 241);
console.log('Largest is', largest); */


function findLargest(first, second, third) {
    if (first > second && first > third) {
        return first;
    }
    else if (second > first && second > third) {
        return second;
    }
    else {
        return third;
    }
}

const firstNumber = 30;
const secondNumber = 40;
const thirdNumber = 50;

const output = findLargest(firstNumber, secondNumber, thirdNumber);
console.log('Largest is', output);


/* function findLargest(first, second, third) {
    const maxNumber = Math.max(first, second, third);
    return maxNumber;
}

const firstNumber = 30;
const secondNumber = 40;
const thirdNumber = 50;

const output = findLargest(firstNumber, secondNumber, thirdNumber);
console.log('Largest is', output); */
