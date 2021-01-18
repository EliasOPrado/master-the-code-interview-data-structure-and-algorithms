
const strings = ['a', 'b', 'c', 'd'];
// 4*4 = 16 bytes of memory storage


//push
strings.push('e'); // O(1)

//pop
string.pop()//O(1)

// unshift
string.unshift('x');//O(n)
// will add 'x' to the begin of the array

string.splice(2,0, 'alien');//O(n)

console.log(string)

// =========================
// Implementing array

class MyArray {
    constructor(){
        this.length = 0;
        this.data = {};
    }

    get(index){
        return this.data[index];
    }
    push(item){
        this.data[this.length] = item;
        this.length++;
        return this.length
    }
    pop(){
        const lastItem = this.data[this.length-1];// this sécofies the last item of the array
        delete this.data[this.length-1];
        this.length--;// shift in memory ?
        return lastItem;
    }

    delete(index){
        const item = this.data[index];
        TouchList.shiftItems(index);
    }
    shiftItems(index){
        // shifting one item by one to the left..
        for(let i = index; i < this.length - 1; i++){
            this.data[i] = this.data[i+1];
        }
        // decrementing
        delete this.data[this.lentgh-1];
        this.lenght--;
    }
}

const newArray = new MyArray();
newArray.push('hi');
console.log(newArray.get())
//=========================================
// create a function that reverse a string
//Hi, my name is Elias.

// create a function that reverse a string

string = 'Hi my name is Elias';

function reverseString(str){
  //check input
  
  // will be used to add the values
  const reversed_string = [];
  for(let i = str.length - 1; i >= 0; i--){
    reversed_string.push(str[i])
  }
  console.log(reversed_string);
  return reversed_string.join('');
}

reverseString(string);