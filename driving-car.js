var cadi = {
    make: "GM",
    model: "Cadillac",
    year: 1955,
    color: "tan",
    passengers: 5,
    convertible: false,
    mileage: 12892
};

var chevy = {
    make: "Chevy",
    model: "Bel Air",
    year: 1957,
    color: "red",
    passengers: 2,
    convertible: true,
    mileage: 1021
};

var taxi = {
    make: "Webville Motors",
    model: "Taxi",
    year: 1955,
    color: "yellow",
    passengers: 4,
    convertible: false,
    mileage: 281341
};

var fiat = {
    make: "Fiat",
    model: "500",
    year: 1955,
    color: "blue",
    passengers: 5,
    convertible: false,
    mileage: 2000,
    started: false,
    fuel: 0,
    start: function(){
        if (this.fuel > 0) {
            this.started = true;
        } else {
            alert("Car is on empty. Please fill up first!");
        }
    },
    stop: function() {
        this.started = false;
    },
    drive: function() {
        if (this.started) {
            if (this.fuel > 0) {
                alert(this.make + " " + this.model + " goes zoom zoom!");
                this.fuel = this.fuel - 1;
            } else {
                alert("Out of fuel.");
                this.stop()
            }
        } else {
            alert("You need to start the engine first.");
        }
    },
    addFuel: function(amount) {
        this.fuel = this.fuel + amount;
    }
};

fiat.start()
fiat.drive()
fiat.addFuel(2)
fiat.start()
fiat.drive()
fiat.drive()
fiat.drive()
fiat.stop()