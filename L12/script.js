



let person =(()=>{
    let person = {
        name: 'vishal',
        age: 24,
        marks:80
    }

    function updateName(naam){
        Person.name=naam;
    }

    function updateMarks(m){
        person.marks=m;
    }

    function print(){
        console.log(person);
    }

    updateMarks(99);

    return{
        updateName,
        print
    }
})


personObj.print();
personObj.updateName('xyz');
personObj.print();