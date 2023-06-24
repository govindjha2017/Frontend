const url='https://dumyjson.com/products';

const btn=document.querySelector('#btn');
const list=document.querySelector('.list');

function getdata(url){
    return new Promise((resolve,reject)=>{
        axios.get(url)
            .then(res=>{
                resolve(res.data.products);
            })
            .catch(err=>{
                reject(err);
            })
    })

}

function addtolist(textData){
    for(let data of textData){
        const li=document.createElement('li');
        li.innerText=data;
        list.append(li);
    }
}

function clickHandler(){
    getdata(url)
        .then((data)=>{
            //console.log(data);
            const textData =[];
            data.foreach(Element=>{
                textData.push(element.title);
            });
            console.log(textData);
            addtolist(textData);
        })
        .catch(err=>{
            console.log(err);
        })
}