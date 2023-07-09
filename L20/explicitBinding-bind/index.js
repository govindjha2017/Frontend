function updatePerson(){
    this.name = 'abcd';
    this.age = '16';
}

const person1= {
    name :'rahul',
    age : 25
}

const person2= {
    name :'abhishek',
    age : 30
}

const newFun =updatePerson.bind(person2);
newFun();

console.log(person1);
console.log(person2);


let items ={
    noOfItem: 0,
    update_noOfItems: function(){
        this.noOfItem++;
        console.log(this);
    }
}

const btn = document.querySelector('button');

btn.addEventListener('click',items.update_noOfItems.bind(items));