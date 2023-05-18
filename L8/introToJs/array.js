var arr =[1,2,3,true,"hello",[90,50,60]];
//console.log(arr[5]);

//for(let i=0;i<arr.length;i++){
//    console.log(arr[i]);
//}

//==========for of loop=============
//for(let item of arr){
//  console.log(item);
//}

console.log("before:",arr);

console.log(arr[5][2]);

arr.push(6);
arr.push(16);
//console.log("before:",arr);
arr.pop();
arr.pop();
arr.pop();
//console.log("before:",arr);

arr.shift();
arr.shift();
//console.log("before:",arr);

arr.unshift(5);
//console.log("after:",arr);

arr1=[1,2,3,4,5];

arr1.splice(3,0,78);
console.log(arr1);