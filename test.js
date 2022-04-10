/*
Map Transformers
Using map, return an array of each transformer's value of its 'form' property 
*/
//result: ['Freightliner Truck','Gun', 'VW Beetle','Walkman']

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

//implicit return
const transformerMap = transformers.map(transformer => transformer.form)
// console.log(transformerMap)

// without implicit
const transformerMap1 = transformers.map((transformer) => {
  return (transformer.form)
})
// console.log(transformerMap1)

//within function.
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
  console.log(forms)
}
transformersMap()



/*
Filter Transformers
Using filter, return an array of transformer objects that have the 'team' property of 'Autobot'

result: [ {
          name: 'Optimus Prime',
          form: 'Freightliner Truck',
          team: 'Autobot'
        },
         {
          name: 'Bumblebee',
          form: 'VW Beetle',
          team: 'Autobot'
        }
    ]

*/

const transformersFilter = () => {
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
  ]
  const transfilter = transformers.filter((transformer) => transformer.team === 'Autobot')
  return transfilter
}
console.log(transformersFilter())


/*
Reduce Transformers
Using reduce, return an object that has a count for each team of transformer
result: {
    Autobot: 2,
    Decepticon: 2
}
*/


const reduceTransformers = () => {
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
  ]
  const reducetransf = transformers.reduce((acc, curr) => {
    if (acc[curr.team]) {
      acc[curr.team] = acc[curr.team] + 1
    }
    else {
      acc[curr.team] = 1
    }
    return acc
  }, {})
  console.log(reducetransf)
}
reduceTransformers();


/*

Sum of every positive element
If the given input is an array of numbers, return the sum of all the positives ones. If the array is empty or there aren't any positive numbers, return 0.
Use filter and reduce
*/

//result: 42

const sumPositiveElement = () => {
  const input = [1, -4, 12, 0, -3, 29, -150]

  const positiveNumber = input.filter((number) => {
    return number > 0
  })
  console.log(positiveNumber)
  const sumofNumbers = positiveNumber.reduce((acc, curr) => {
    return acc + curr;
  })
  console.log(sumofNumbers)
}
sumPositiveElement()

/* 
Calculate median 
Calculate the mean value of the number elements from the input array.
Use: reduce, sort, 
*/
//result: 38.5

const mean = () => {
  const input = [12, 46, 32, 64]
  const addinput = input.reduce((acc, curr) => {
    return acc + curr
  })
  console.log(addinput)
  const meanofarray = addinput / input.length;
  console.log(meanofarray)
}
mean()

//BONUS - calculate mean and median and return as object: { mean: 38.5, median: 39 } use Math.abs
const medianMean = () => {
  const input = [12, 46, 32, 64]
  const sortedarray = input.sort()
  console.log(sortedarray)
  let halfway = sortedarray.length / 2
  let oddway = (sortedarray.length + 1) / 2
  if (halfway % 2 === 0) {
    const median = (sortedarray[halfway - 1] + sortedarray[halfway]) / 2
    console.log(median)
  }
  else {
    oddmedian = sortedarray[oddway - 1]
    console.log(oddmedian)
  }

}
medianMean()



/*
Get name initials
The given input is a string of multiple words with a single space between each of them. Abbreviate the name and return the name initials.
Use .map , .split , .join
*/
//result: 'GRRM'
const nameInitials = () => {
  const input = 'George Raymond Richard Martin';
  inits = input.split(" ").map(word => word[0]).join('')
  console.log(inits)
}
nameInitials()

/*
Age difference from the youngest and oldest
Find the difference in age between the oldest and youngest family members, and return their respective ages and the age difference.
Use .map , Math.min , Math.max
*/

//Result: [13, 67, 54]
const ageDifference = () => {
  const input = [
    {
      name: 'John',
      age: 13
    },
    {
      name: 'Mark',
      age: 56,
    },
    {
      name: 'Rachel',
      age: 45,
    },
    {
      name: 'Nate',
      age: 67,
    },
    {
      name: 'Jeniffer',
      age: 65,
    }
  ];
  const ages = input.map((inpu) => inpu.age)
  console.log(ages)
  const oldest = Math.max(...ages)
  // console.log(oldest)
  const youngest = Math.min(...ages)
  return [youngest, oldest, (oldest - youngest)]
}
console.log(ageDifference())



