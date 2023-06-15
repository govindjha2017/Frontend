const h1 = document.getElementsByTagName('h1')[0];
console.log(h1);
console.dir(h1);

// to apply style
h1.style.backgroundColor ='teal';
h1.style.border='2px solid black'
console.dir(h1);

const favMovie=document.getElementsByClassName('fav-movies');
for(let movie of favMovie){
    movie.style.backgroundColor='lightgreen';
}

const para=document.getElementById('special');
para.style.border='2px solid green';

const heading = document.querySelector('h1');
heading.style.color='white';

const p = document.querySelector('#special');
p.style.padding= '15px';

const favrtMovies=document.querySelectorAll('.fav-movies');
console.log(favrtMovies);

for(let movie of favrtMovies){
    movie.style.border='2px solid red';

}


//innerText vs innerHtml

console.log(para.innerText);        // as getter
para.innerText='kya haal hai be';   // as setter

console.log(heading.innerHTML);
heading.innerHTML='bhhk'

const image = document.getElementsByTagName('img')[0];
console.log("image",image)
image.setAttribute('class','one');
image.setAttribute('class','two');
image.setAttribute('class','one two');
console.log(image.getAttribute('class'));
image.removeAttribute('class')
image.setAttribute('src','https://images.unsplash.com/photo-1686781483909-a5fb625ca043?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMnx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=60')

//setAttribute() , getAttribute(),  removeAttribute()

heading.setAttribute('class','one');
heading.setAttribute('class','two');
heading.setAttribute('class','one two');
heading.removeAttribute('class');
console.log(heading.getAttribute('class'));

//classList
//classList -> add(), remove(),toggle(),contains()

heading.classList.add('one');
heading.classList.add('two');
heading.classList.remove('two');
console.log(heading.classList.contains('one'));
console.log(heading.classList.contains('two'));
heading.classList.toggle('two');
heading.classList.toggle('two');
heading.classList.toggle('two')