// first lesson of the course
// big O

//Big O
const {performance} = require('perf_hooks');
// only one, quickly call
const nemo = ['nemo'];
// many but few names
const everyone = ['dory', 'bruce', 'marlin', 'nemo', 'gil', 'bloat', 'nigel', 'squirt', 'darla', 'hank'];
// large and slower
const large = new Array(10000).fill('nemo');


function findNemo(array){
    // measure first
  let t0 = performance.now();
  for(i = 0; i < array.length; i++){
    if(array[i] === 'nemo'){
      console.log('Found Nemo!');
    }
  }
  // measure last
  let t1 = performance.now();
  console.log('Call to find Nemo took ' + (t1-t0) + ' miliseconds');
}

findNemo(large); // o(n) linear

