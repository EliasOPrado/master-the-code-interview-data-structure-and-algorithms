//Five 2 arrays , create a function that lets a user know (true/faalse) whether these two arrays contain any comming items
//For example
//const array = ['a','b','c','x']
//const array = ['z','y',;i']
//should return false (no same)
//===============

///should return true

// Not the best approach
function containCommonItem(array1, array2){
    for(let i=0; i < array1.length; i++){
        for(let j=0; j < array2.length; j++){
            if (array1[i] === array2[j]){
              return true;
            }
        }
    }
    return false;
}
// BIG O(n^2)
containCommonItem(array1, array2)


// there are two parameters - no size limit
// return is true or false

/*
In this case I need to know what the interviwer wants:
If the array will be bigger than that and he/she needs to 
create a good performance function.
Or will be the only items within the arrays?
*/ 

const array1 = ['a','b','c','x']
const array2 = ['z','y','x']

// array1 ==> obj {
//     a:true,
//     b:true,
//     c:true,
//     x:true,
// }

// array2[index] === obj.properties

function containsCommonItem2(arr1, arr2){
    
    // Loop through first array and create object
    // where properties === items in the array.
    let map = {}
    for(let i=0; i< arr1.length; i++){
        if(!map[arr1[i]]){
            const item = array1[i];
            map[item] = true;
        }
    }
    // Loop through second array and check if item
    // in second array exists on created object
    for (let j=0; j < arr2.length; j++){
        if(map[arr2[j]]){
            return true
        }
    }
    return false
}

// O(a + b) Time complexity
// O(a) Space complexity


containsCommonItem2(array1, array2);
