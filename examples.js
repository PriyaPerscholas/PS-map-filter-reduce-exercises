let myArray = [3, 5, 6, 9, 12]

let transformedArray = myArray.map((number) => {
    return number * 2
})
console.log(transformedArray)

let evens = myArray.filter((number) => {
    return number % 2 == 0
})
// console.log(evens)


let flattenArray = myArray.reduce((acc, cur) => {
    // console.log(acc, cur)
    return acc + cur
})
// console.log(flattenArray)

function reducer(array) {
    //write a function that takes an array of numbers and returns the sum of all numbers 
    let sum = 0
    for (let i = 0; i < array.length; i++) {
        sum += array[i]
    }
    return sum
}

// console.log(reducer(myArray))



let triple = myArray.map(number => number * 3)
console.log(triple)

let filterEvenTriple = triple.filter(number => number % 2 == 0)
console.log(filterEvenTriple)

let reduceTriple = filterEvenTriple.reduce((acc, cur) => acc + cur)
// console.log(reduceTriple)

let chain = myArray.map(number => number * 3)
    .filter(number => number % 2 == 0)
    .reduce((acc, cur) => acc + cur)

console.log(chain)

const transformersMap = () => {
    let transformers = [
        {
            name: 'Optimus Prime',
            form: 'Freightliner Truck',
            team: 'Autobot'
        },
        {
            name: 'Megatron',
            form: 'Gun',
            team: 'Decepticon'
        },
        {
            name: 'Bumblebee',
            form: 'VW Beetle',
            team: 'Autobot'
        },
        {
            name: 'Soundwave',
            form: 'Walkman',
            team: 'Decepticon'
        }
    ];
    const forms = transformers.map((transformer) => transformer.form)
    return forms;
}

const reduceTransformers = transformers.reduce((acc, cur) => {

    if (acc[cur.team]) {
        acc[cur.team] = acc[cur.team] + 1
    }
    else {
        acc[cur.team] = 1
    }
    return acc;

}, {})
console.log(reduceTransformers)

const inputs = [1, -4, 12, 0, -3, 29, -150]
let sum = 0
const positiveNumber = inputs.filter((input) => {
    if (input >= 0) {
        return input;
    }
    else {
        return 0;
    }
})
//console.log(positiveNumber)
const sumofNumbers = positiveNumber.reduce((acc, cur) => {
    return acc + cur
})
//console.log(sumofNumbers)
const nameInitials = () => {
    const input = 'George Raymond Richard Martin';
    inits = input.split(" ").map(word => word[0]).join("")
    console.log(inits)
}
nameInitials()