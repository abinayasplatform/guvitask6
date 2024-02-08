// Write a class calculate the uber price.


class UberPrice {
    constructor(basicFare, costPerMinute, costPerkm ) {
        this.basicFare =basicFare;
        this.costPerMinute = costPerMinute;
        this.costPerkm = costPerkm ;
    }

    getcalculatedPrice(distanceofkm, durationMinutes) {
        const price = this.basicFare + (this.costPerkm  * distanceofkm) + (this.costPerMinute * durationMinutes);
        return price;
    }
}


const calculator = new UberPrice(4.6, 1.3, 3.5); 
const distance = 20; 
const duration = 50; 

const totalPrice = calculator.getcalculatedPrice(distance, duration);
console.log("Total Price:", totalPrice);




            // output


// Total Price:  139.6
