// var,let,const;

var a=10;
var a=20;
a=30;

let b = 10;
// let b = 20; // can't do this
b = 20;

const c = 10;
// const c = 20; nhi kr sakte
// c = 20; ye bhi nhi kr skte
// console.log(c);

// console.log(str);
// let str = "this is string";
// const str = "this is string

function fun(y){
    if(y>5){
       // console.log(x);
        let x="inside if";
        var p="inside if var";
    }
    else{
        let z="inside else";
        console.log(z);
        //console.log(x); error
        console.log(p);
    }
}
fun(3);