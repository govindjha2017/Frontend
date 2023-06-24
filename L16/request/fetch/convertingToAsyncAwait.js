const URL = 'https://dummyjson.com/products';


const btn = document.querySelector('#btn');
const list = document.querySelector('.list');

async function getData(url){
     const res = await fetch(url);
    //  console.log(res);
     const data = await res.json();
     console.log(data);
     return data.products;
}


function addDataToList(textData){
    list.innerHTML='';
    for(let data of textData){
        const li = document.createElement('li');
        li.innerText = data;
        list.append(li);
    }
}



async function eventHandler(){
    const data = await getData(URL);
    const textData = data.map((item)=>{
        return item.title;
    })
    console.log(textData);
    addDataToList(textData);

}

btn.addEventListener('click',eventHandler);