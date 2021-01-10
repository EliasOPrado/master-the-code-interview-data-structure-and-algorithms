// //Big O
// const {performance} = require('perf_hooks');
// // only one, quickly call
// const nemo = ['nemo'];
// // many but few names
// const everyone = ['dory', 'bruce', 'marlin', 'nemo', 'gil', 'bloat', 'nigel', 'squirt', 'darla', 'hank'];
// // large
// const large = new Array(10000).fill('nemo');
// function findNemo(array){
//   let t0 = performance.now();
//   for(i = 0; i < array.length; i++){
//     if(array[i] === 'nemo'){
//       console.log('Found Nemo!');
//     }
//   }
//   let t1 = performance.now();
//   console.log('Call to find Nemo took ' + (t1-t0) + ' miliseconds');
// }

// findNemo(large);

// What is the Big O of the below function? (Hint, you may want to go line by line)
function funChallenge(input) {
    let a = 10; // O(1)
    a = 50 + 3;//O(1)
  
    for (let i = 0; i < input.length; i++) {//O(n)
      anotherFunction();//O(n)
      let stranger = true;//O(n)
      a++;//O(n)
    }
    return a;//O(1)
  }
  
  // This is the sum of O(1) and O(n).
  // BIG O(3 + 4n)
  
  //===============
  
  // What is the Big O of the below function? (Hint, you may want to go line by line)
  function anotherFunChallenge(input) {
    let a = 5;// O(1)
    let b = 10;// O(1)
    let c = 50;// O(1)
    for (let i = 0; i < input; i++) {//O(n)
      let x = i + 1;//O(n)
      let y = i + 2;//O(n)
      let z = i + 3;//O(n)
  
    }
    for (let j = 0; j < input; j++) {//O(n)
      let p = j * 2;//O(n)
      let q = j * 2;//O(n)
    }
    let whoAmI = "I don't know";//O(1)
  }
  
  // This is the sum of O(1) and O(n).
  // BIG O(4 + 7n)
  
  function printFirstItemThenFirstHalfThenSayHi(items){
  console.log(items[0]);
  
    var middleIndex = Math.floor(items.length / 2);
    var index = 0;
  
    while(index < middleIndex){
      console.log(items[index]);
      index++;
    }
  
    for(var i=0; i<100; i++){
      console.log('hi');
    }
  }
  
  // the constants or the math was removed
  // and only the final o(n) was placed.
  
  // =====================
  // RULE 3 different terms for inputs
  
  function compressBoxesTwice(boxes, boxes2){
    boxes.forEach(function(boxes){
      console.log(boxes);
    });
  
    boxes2.forEach(function(boxes2){
      console.log(boxes2);
    });
  }
  
  /*
  In this case there are two different functions.
  Since the second one is boxes2 not only boxes as
  the preview example of O(n) here the BIG O is O(a + b)
  */ 

  // log all pairs of array
const boxes = [1,2,3,4,5];

function logAllPairsOfArray(array){
  for (let i=0; i < array.length; i++){
    for (let j=0; j < array.length; j++){
      console.log(i, j);
    }
  }
}
logAllPairsOfArray(boxes);

/*
In this situation, there are two for loops
Therefore, one inside another. Which can be seen as a multiplication.

As O(a + b) or O(n^2)
*/ 

function logAllPairsOfBoxes(boxes){
  boxes.forEach(function(firstBox){
    boxes.forEach(function(secondBox){
      console.log(firstBox, secondBox);
    });
  });
}

logAllPairsOfBoxes(boxes);

/*
the same for this situation here:

As O(a + b) or O(n^2) Quadratic time...
*/

// ===============================================

// Rule 4 Drop non dominant

function printAllNumbersThenAllPairSum(numbers){

    console.log('these are the numbers');
    numbers.forEach(function(number){
      console.log(number);
    });
  
    console.log('and these are their sums');
    numbers.forEach(function(firstNumber){
      numbers.forEach(function(secondNumber){
        console.log(firstNumber + secondNumber)
      });
    });
  }
  
  printAllNumbersThenAllPairSum([1,2,3,4,5]);
  
  // O(n + n^2) ===>> O(n^2)
  /*
  Following the rule 4 that tells to
  drop the non dominant. The linear big o notation will be dropped. as n + n will be n anyways. 
  */

