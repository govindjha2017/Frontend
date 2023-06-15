console.log('wake up');
console.log('take a bath');
console.log('take class');

setTimeout(()=>{
    console.log("order to zomato");
},3000)

setTimeout(()=>{
    console.log("ordedr to swiggy");
},2000)

console.log("dancing");


let id = setInterval(()=>{
    console.log("hello");
},10000)

console.log("after hello")

setTimeout(()=>{
    clearInterval(id);
},5000)