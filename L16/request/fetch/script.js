const url='https://cat-fact.herokuapp.com/facts';

const btn=document.querySelector('#btn');
const list= document.querySelector('.list');

btn.addEventListener('click',()=>{
    fetch(url)
        .then((res)=>{
            // console.log(res);
            // console.log(res.json());
            return res.json();
        })
        .then((data)=>{
            //  console.log(data);
            list.innerHTML='';
            for(let obj of data){
                console.log(obj.text);
                const li=document.createElement('li');
                li.innerText=obj.text;
                list.append(li);
            }
        })
        .catch(err=>{
            console.log("something went wrong");
        })
})