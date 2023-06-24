const url='https://dummyjson.com/products';

const btn=document.querySelector('#btn');
const list=document.querySelector('.list');

//creating an instance of xmlhttprequest
const xhr= new XMLHttpRequest();

//run this function when req is suceesfull
xhr.onload = function(res){
   const data= JSON.parse(res.target.response).products;
   console.log(data);
   const productTitle=data.map((item)=>{
      return item.title;
   })
}