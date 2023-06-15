const inp = document.querySelector('#inp');
const btn = document.querySelector('#btn');
const tasklist=document.querySelector('#task-list');

btn.addEventListener('click',(e)=>{

const str=`<div class="section-A">
<input class="checkbox" type="checkbox">
<p class="text">${inp.value}</p>
</div>
<div class="section-B">
<span class="up-arrow">⬆️</span>
<span class="bin">🗑️</span>
<span class="down-arrow">⬇️</span>
</div>`

const neweitem = document.createElement('div');
 neweitem.classList.add('task');
 neweitem.innerHTML=str;
 console.log(neweitem);
 tasklist.append(neweitem);
})
