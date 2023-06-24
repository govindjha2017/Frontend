// const URL = 'https://cat-fact.herokuapp.com/facts';
const URL = 'https://dummyjson.com/products';


const btn = document.querySelector('#btn')
const list = document.querySelector('.list')


function getData(URL){
    return new Promise((resolve, reject) => {
        fetch(URL)
            .then((res)=>{
                return res.json();
            })
            .then((data)=>{
                // console.log(data.products);
                resolve(data.products);
            })
            .catch(err=>{
                reject(err);
            })
    })
}

function addDataToList(textData){
    list.innerHTML='';
    for(let data of textData){
        const li = document.createElement('li');
        li.innerText = data;
        list.append(li);
    }
}

function clickHandler(){
    getData(URL)
        .then((data)=>{
            // console.log(data)
            const textData = [];
            data.forEach(element => {
                textData.push(element.description);
            });
            // console.log(textData);
            addDataToList(textData);
        })
        .catch(err => {
            console.log(err);
        })

}

btn.addEventListener('click', clickHandler);
