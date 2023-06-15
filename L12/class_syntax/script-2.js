class vehicle{
    constructor(np){
        this.np=np;
    }

    getNumberPlate(){
        console.log(np);
    }
}

class car extends vehicle{
    constructor(np,color){
        super(np);
        this.color;
    }

    printCar(){
        console.log('numPlate: &{this.np}, name: &{this.name}');
    }
}

class electricCar extends car{
    constructor(np,color,battery){
        super(np,)
        this.battery=battery;
    }
}

let maruti = new car('ewfkj77','brown');