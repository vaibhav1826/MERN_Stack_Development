class Car{
    constructor(brand,model,year){
        this.brand=brand;
        this.model=model;
        this.year=year;
    }

    diplay(){
        console.log(`Car Brand: ${this.brand}, Model: ${this.model}, Year: ${this.year}`);
    }
    start(){
        console.log(`${this.brand} ${this.model} is starting...`);
    }
}

class electricCar extends Car{
    constructor(brand,model,year,batteryCapacity){
        super(brand,model,year);
        this.batteryCapacity=batteryCapacity;
    }
    display(){
        console.log(`Electric Car Brand: ${this.brand}, Model: ${this.model}, Year: ${this.year}, Battery Capacity: ${this.batteryCapacity} kWh`);
    }
}

const obj = new Car("BMW","X5",2020);
const obj2 = new Car("Audi","A6",2021);
const obj3= new Car("Mercedes","C-Class",2019);

// obj.diplay();
// obj2.diplay();
// obj3.diplay();
// obj.start();

const ecar = new electricCar("Tesla","Model S",2022,100);
ecar.display();
ecar.start();