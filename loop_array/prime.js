const totalNumber = 100
const sumArray = []

for(const sum of Array(totalNumber).keys()){
    sumArray.push(sum + 1)
}
 console.log(sumArray);

 const prime = []
  for(let number of sumArray){
    if(number < 2) continue;

     let isPrime = true;

     for (let i = 2; i <= Math.sqrt(number); i++){
        if (number % i === 0){
              isPrime = false;
        }
     }
     if(isPrime){
        prime.push(number)
     }
  }
 console.log(prime);

 // USING THE REDUCE METHOD TO REDUCE THE PRIME NUMBER

 const totalPrime = prime.reduce((initialNumber, currentPrimeNumber) => (initialNumber + currentPrimeNumber), 0)

 console.log(totalPrime);

 //RESCURSIVE

 function fabonacci(n){
     if(n <= 2){
        return 1
     }else{
        return fabonacci (n - 1) + (n - 2)
     }
      
 }

 console.log(fabonacci(100));
 