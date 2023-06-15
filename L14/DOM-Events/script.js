const heading =document.querySelector('h1');

// heading.onclick= function(){
//   window.alert("Don't click this");
// }

// heading.onclick= function(){
//   console.log("clicked");
// }

// heading.addEventListener('click',()=>{
//   //window.alert("don't click this");
//   console.log("hello from first event listner")
// })

// heading.addEventListener('click',(e)=>{
//   console.log(e);
//   console.log(e.target);
//   e.target.style.border='2px solid black';
//   e.target.style.color='red';
//   console.log("hello from 2nd event listner");
// })

// console.dir(heading);

// heading.addEventListener('mouseenter',(e)=>{
//   //e.target.style.display='none';
//     window.alert("Cheating karta hai");
//   //e.target.setAttribute('class','one');
//   e.target.classList.add('one');
// })

heading.addEventListener('copy',(e)=>{
  e.target.style.display='none';
  window.alert('Cheating karta hai!!')
})

heading.addEventListener('mouseleave',(e)=>{
  e.target.classList.remove('one') ;
})

heading.addEventListener('dblclick',function(e){
  //e.target.style.display='none';
  this.style.display='none';
  console.log(this);
})

//--------------KEYBOARD EVENT--------------

const inp=document.querySelector('input');
console.log(inp);

// inp.addEventListener('keydown',(e)=>{
//   console.log(e.key);
//   console.log(e.target.value);
// })

// inp.addEventListener('keyup',(e)=>{
//   console.log(e.key);
//   console.log(e.target.value);
// })


//============input EVENT===========

inp.addEventListener('focusin',(e)=>{
  e.target.style.backgroundColor='yellow';
})

inp.addEventListener('focusout',(e)=>{
  e.target.style.backgroundColor='';
})