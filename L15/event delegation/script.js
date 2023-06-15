const children= document.querySelectorAll('.child');

for(let child of children){
    child.addEventListener('click',(e)=>{
        console.log(e.target.innerText);
    })
}