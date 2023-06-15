
var arr=[1,4,8,9,12,15];
console.log(arr.length);

//==============NORMAL FOR LOOP=================

for(var i=0;i<arr.length;i++){
    console.log(arr[i]);
}

//========FOR OF LOOP (ARRAY)====================

for(var item of arr){
    console.log(item);
}

//========FOR IN LOOP (OBJECT)==================

var person={
    'full name':"abc def",
    age:25,
    isAdult:true,
    marks: [98,40,68]
}

for(var key in person){
    console.log(person[key]);
}



console.log(p);
let p=9;