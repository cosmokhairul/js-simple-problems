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

function findLargest(first, second) {
    if (first > second) {
        return first;
    }
    else {
        return second;
    }
}

const largest = findLargest(354, 241);
console.log('Largest is', largest);
