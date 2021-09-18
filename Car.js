let car = {
    colour: "black",
    power: function(a){
        console.log (a + " мощьность двигателя");
    }
        
    }

car.colour = "green";
console.log ( car.colour );
car.power(187);

