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


const calculator = new UberPrice(2.5, 0.3, 1.5); 
const distance = 10; 
const duration = 20; 

const totalPrice = calculator.getcalculatedPrice(distance, duration);
console.log("Total Price:", totalPrice);




            // output


// Total Price: 23.5
