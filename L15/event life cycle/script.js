const grandparent=document.querySelector('.grandparent');
const parent=document.querySelector('.parent');
const child=document.querySelector('.child');

grandparent.addEventListener('click',()=>{
    console.log("grandparent div clicked!")
},false)

parent.addEventListener('click',(e)=>{
    e.stopPropagation();
    console.log("parent div clicked!")
},false)

child.addEventListener('click',(e)=>{
    // e.stopPropagation();
    console.log("child div clicked!");
},false)