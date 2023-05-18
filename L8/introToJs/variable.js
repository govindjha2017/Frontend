'use strict'
var x=10;
x=20;
console.log(x);
a=10;
str="this is string";
console.log(a);
console.log(str);




arr=[6,9,7,4,[4,5,6]];
/*console.log(arr[4][1])*/

/*for(let i=0;i<arr.length;i++){
    console.log(arr[i])
}

//for of loop
for(let item of arr){
    console.log(item);
}*/

arr.push(6);
console.log(arr);

arr.push(6);
arr.push(16);
arr.pop();
arr.pop();

arr.shift();
arr.unshift(5);

arr1=[1,2,3,4,5]
arr1.splice(2, 0,11);

for(let item of arr1){
    console.log(item);
}