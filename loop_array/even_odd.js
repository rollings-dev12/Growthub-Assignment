//ITERATE OVER A NUMBER 100

const number = 100
let numb = []
for (const numbers of Array(number).keys()){
    // console.log(numbers);
    numb.push(numbers + 1)
}
console.log(numb);

// using FOR...OF LOOP TO BRING OUT THE ODD NUMBER

const oddnumber = 100
let onlyOddNumber = []
let sumOdd = 0

for (const odd of Array(oddnumber).keys()){
    //console.log(oddnumber);
    if(odd % 2 !== 0){
        onlyOddNumber.push(odd)
        sumOdd += odd
    }
}
console.log(onlyOddNumber);
console.log(sumOdd);

//USING THE REDUCE METHOD ON THE ODD NUMBER

const totalOdd = onlyOddNumber.reduce((initialOdd, onlyOddNumber) =>( initialOdd + onlyOddNumber), 0)
console.log(totalOdd);

// using FOR...OF LOOP TO BRING OUT THE EVEN NUMBER

const evenNumber = 100
let onlyEvenNumber = []
let sumEven = 0

for (const even of Array(evenNumber).keys()){
    //console.log(oddnumber);
    if(even % 2 === 0){
        onlyEvenNumber.push(even)
        sumEven += even
    }
}
console.log(onlyEvenNumber);
console.log(sumEven);

//USING THE REDUCE METHOD ON THE EVEN NUMBER

const totalEven = onlyEvenNumber.reduce((initialOdd, onlyEvenNumber) => (initialOdd + onlyEvenNumber), 0)
console.log(totalEven);

