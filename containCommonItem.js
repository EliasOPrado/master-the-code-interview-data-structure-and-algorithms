//Five 2 arrays , create a function that lets a user know (true/faalse) whether these two arrays contain any comming items
//For example
//const array = ['a','b','c','x']
//const array = ['z','y',;i']
//should return false (no same)
//===============
const array1 = ['a','b','c','x']
const array2 = ['z','y','x']
///should return true

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

containCommonItem(array1, array2)

// there are two parameters - no size limit
// return is true or false

/*
In this case I need to know what the interviwer wants:
If the array will be bigger than that and he/she needs to 
create a good performance function.
Or will be the only items within the arrays?
*/ 
