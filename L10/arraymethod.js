let arr=[1,2,3,4,5,6,7,8];
 
let data = [
    {
        name:'iphone',
        price:100
    },
    {
        name:'macBook',
        price:200,
    },
    {
        name:'keyboard',
        price:10
    },
    {
        name:'apple',
        price:1
    }
]



console.log(arr);

//------------map---------------
// let num = arr.map((num,ind)=>{
//     return num*2;
// });
// console.log(num);


// let num = data.map((item,ind)=>{
//     return `<li> ${item.price}</li>`
// })
 
// console.log(num);

//----------filter-------------
// let num=data.filter((item,ind)=>{
//     console.log(ind);
//     //return item.name ==='iphone';
//     return item.price>10;
// })


//-----------reduce------------

let num = arr.reduce((total,num,ind)=>{
    return total+num;
},5)

console.log(num);

//---------sort---------------
let arr2=[1,20,6,-2,5];
let strArr=['b','a','d','aa','c']

let sortedArr = arr2.sort((a,b)=>)