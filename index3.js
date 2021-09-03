function Country(name, population, area) {
    this.name = name;
    this.population = population;
    this.area = area;
    this.density = function() {
        return this.population/this.area ;
    }
}

const newCountry = new Country('Toritya', 5678, 89000);

function Car(name, maxSpeed, speed) {
    this.name = name;
    this.maxSpeed = maxSpeed;
    this.speed = speed; 
    this.accelerate = function() {
        return 
    }
}