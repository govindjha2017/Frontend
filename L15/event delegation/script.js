const children= document.querySelectorAll('.child');

// for(let child of children){
//     child.addEventListener('click',(e)=>{
//         console.log(e.target.innerText);
//     })
// }

const parent=document.querySelector('.container');

parent.addEventListener('click',(e)=>{
    console.log(e.target.innerText);
})
