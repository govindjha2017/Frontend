// const li = document.querySelectorAll('.fav-movies')[1];
// console.log(li);

// const ul = li.parentElement;
// console.log(ul);
// ul.style.border = '2px solid black';


// const nextLi = li.nextElementSibling;
// console.log(nextLi);

// const prevLi = li.previousElementSibling;
// console.log(prevLi);

// console.log(ul.children[4]);

const li = document.createElement('li');
li.innerText='kgf';
const ul= document.querySelector('ul');
ul.appendChild(li);

const newli= document.createElement('li');
newli.innerText='GOT';
ul.appendChild(newli);
//ul.appendChild('GOT 2'); error
ul.append('GOT 2');

const attackOnTiton=document.querySelectorAll('li')[2];
ul.removeChild(attackOnTiton);

document.querySelectorAll('li')[2].remove();