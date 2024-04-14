// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9)
// myArr.shift()

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join()

// console.log(myArr);
// console.log( newArr);


// slice, splice

console.log("A ", myArr);   //[0,1,2,3,4,5]

const myn1 = myArr.slice(1, 3)

console.log(myn1);          //[1,2]
console.log("B ", myArr);   //[0,1,2,3,4,5]


const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);     //[1,2,3]
console.log(myn2);              //[0,4,5]


// slice =>  The slice() method creates a shallow copy of an array or returns a portion of an array. It does not alter the original array
// splice => The splice() method modifies the original array by adding or removing elements


// shallow copy => A shallow copy of an object is a copy whose properties share the same references (point to the same underlying values) as those of the source object from which the copy was made.
//Shallow Copy reflects changes made to the new/copied object in the original object.
// deep copy =>  Deep copy doesn’t reflect changes made to the new/copied object in the original object.