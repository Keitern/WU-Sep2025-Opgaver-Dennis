// Opgave 1
function sum(opgave1){
  return opgave1.reduce((addedValue, currentValue) => addedValue + currentValue);
}
console.log(sum([1, 2 , 3, 4, 5]));
console.log(sum([10, 20, 30, 40, 50]));

// Opgave 1.1
const sum2 = (sumArray) => {
  let totalValue = 0;
  for ( let i in sumArray) {
    totalValue += sumArray[i];
  }
  return totalValue;
}; 
console.log(sum2([1, 2, 3, 4, 5, 6]))



// Opgave 2
function max(opgave2){
  return Math.max(...opgave2);
}
console.log(max([1, 2, 3]));
console.log(max([9, 2, 3]));

// Opgave 2.1
const max2 = (maxArray) => {
  let totalValue = 0;

  for ( let i in maxArray) {
    if ( maxArray[i] > totalValue)
      totalValue=maxArray[i];
  }
  return totalValue;
}
console.log(max2([1,2,3]));
console.log(max2([1,20,3,8,6]));




// Opgave 3
function countVowels(sentence){
  const vowels = ('aeiouæøyå')
  let vowelCount = 0;

  for (i = 0; i < sentence.length; i++){
      if (vowels.includes(sentence[i])){
        vowelCount++;
      }
  }
return vowelCount;
};
console.log(countVowels("Hej med dig"))




// Opgave 4
function filterOdd (oddArray){
  const oddNum = []
  for(let i = 0; i < oddArray.length; i++){
    oddArray[i] % 2 === 1 && oddNum.push(oddArray[i]);
  }
  return oddNum;
}
console.log(filterOdd([45,1,2,3,4,5,6,7,8,9]))



// Opgave 5 
function reverseString (someString){
  const reverseResult = [...someString].reverse().join("");
  return reverseResult;
}
console.log(reverseString("Javascript345"))



// Opgave 6 
function flatten (arrayOfArrays){
  const flatArray = arrayOfArrays.flat();
  return flatArray;
}
console.log(flatten([[1, 2], [3, 4], [5]]))



// Opgave 7 
// Linje 16-20


// Opgave 8
// Linje 27-33


// Opgave 9
// Linje 46-52